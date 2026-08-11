/* ─────────────────────────────────────────────────────────────────────
   Build the Capital Unique brand guidelines PDF.

     node brand-guidelines/build.mjs

   Produces `capital-unique-brand-guidelines.pdf` next to this script.

   The source (`brand-guidelines.html`) is a template with {{TOKEN}}
   placeholders. This script inlines the two brand webfonts and the four
   logo PNGs as base64 so the rendered PDF is fully self-contained — no
   network, no font fallbacks, and no broken images if it is opened on a
   machine that has never seen the brand fonts.

   Rendering is Chrome's own print engine, which is what makes the OKLCH
   accents resolve to the same sRGB values the website ships.
───────────────────────────────────────────────────────────────────── */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const IMPORTS = path.join(HERE, "..", "src", "imports");
const OUT_PDF = path.join(HERE, "capital-unique-brand-guidelines.pdf");

/* Chrome is the renderer. Override with CHROME=/path/to/chrome. */
const CHROME =
  process.env.CHROME ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const GOOGLE_FONTS_CSS =
  "https://fonts.googleapis.com/css2" +
  "?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700" +
  "&family=Public+Sans:wght@400;500;600;700&display=swap";

/* Google serves woff2 only to browser-ish UAs; Node's default UA gets ttf. */
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/* Fetch the font CSS, keep only the basic-latin subsets, and swap each
   remote URL for an inline base64 payload. Dropping the other subsets
   keeps the PDF ~600KB of font rather than several megabytes. */
async function inlineFonts() {
  const css = await (await fetch(GOOGLE_FONTS_CSS, { headers: { "User-Agent": UA } })).text();

  const blocks = css
    .split("@font-face")
    .slice(1)
    .map((b) => "@font-face" + b.slice(0, b.indexOf("}") + 1))
    .filter((b) => /U\+0000-00FF/.test(b));

  if (!blocks.length) throw new Error("No latin @font-face blocks found — did the CSS format change?");

  let out = "";
  for (const block of blocks) {
    const url = block.match(/https:\/\/fonts\.gstatic\.com[^)]*/)[0];
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    const family = block.match(/font-family:\s*'([^']+)'/)[1];
    const weight = (block.match(/font-weight:\s*([^;]+)/) || [, "400"])[1].trim();
    console.log(`  font  ${family} ${weight}  ${(buf.length / 1024).toFixed(0)}kb`);
    out +=
      block
        .replace(/src:\s*url\([^)]*\)/, `src: url(data:font/woff2;base64,${buf.toString("base64")})`)
        /* unicode-range would keep the browser lazily subsetting; we want
           the face used unconditionally. */
        .replace(/unicode-range:[^;]*;/, "") + "\n";
  }
  return out;
}

const png = (file) =>
  "data:image/png;base64," + fs.readFileSync(path.join(IMPORTS, file)).toString("base64");

console.log("Inlining fonts…");
const substitutions = {
  FONTS: await inlineFonts(),
  LOGO_RECT_BRONZE: png("Logo_Retangle_Long.png"),
  LOGO_RECT_SILVER: png("Logo_Rectangle_Long_Silver.png"),
  LOGO_SQ_BRONZE: png("Logo_Square.png"),
  LOGO_SQ_SILVER: png("Logo_Square_Silver.png"),
};

let html = fs.readFileSync(path.join(HERE, "brand-guidelines.html"), "utf8");
for (const [token, value] of Object.entries(substitutions)) {
  html = html.split(`{{${token}}}`).join(value);
}

const leftover = html.match(/\{\{[A-Z_]+\}\}/g);
if (leftover) throw new Error("Unsubstituted tokens: " + [...new Set(leftover)].join(", "));

/* Chrome will only read a local file, so stage the resolved HTML on disk. */
const staged = path.join(HERE, ".build.html");
fs.writeFileSync(staged, html);
console.log(`Staged ${(html.length / 1024 / 1024).toFixed(2)}MB of HTML`);

try {
  console.log("Rendering with Chrome…");
  execFileSync(
    CHROME,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      /* Fonts decode and images rasterise before the snapshot is taken. */
      "--virtual-time-budget=25000",
      `--print-to-pdf=${OUT_PDF}`,
      `file://${staged}`,
    ],
    { stdio: "ignore" }
  );
} finally {
  fs.unlinkSync(staged);
}

const pdf = fs.readFileSync(OUT_PDF);
const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`\nWrote ${path.basename(OUT_PDF)} — ${pages} pages, ${(pdf.length / 1024 / 1024).toFixed(2)}MB`);

/* A silent fallback to Georgia/Helvetica is the one failure that still
   produces a plausible-looking PDF, so assert against it. */
for (const bad of ["Georgia", "Helvetica", "TimesNewRoman"]) {
  if (pdf.includes(bad)) throw new Error(`Fallback font "${bad}" embedded — the brand fonts did not load.`);
}
if (!pdf.includes("PublicSans") || !pdf.includes("SourceSerif")) {
  throw new Error("Brand fonts missing from the PDF.");
}
console.log("Fonts verified: Public Sans + Source Serif 4 embedded, no fallbacks.");
