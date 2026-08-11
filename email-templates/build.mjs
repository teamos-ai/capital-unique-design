/* ─────────────────────────────────────────────────────────────────────
   Write the eight campaign emails to email-templates/html/.

     node email-templates/build.mjs

   This script is only orchestration. The markup itself comes from
   src/app/components/ds/campaign/emailHtml.ts — the same module the
   design system's "Copy HTML" buttons call — so the file on disk and the
   string on the clipboard are always the same document.

   esbuild (already a dev dependency) transpiles the TypeScript so plain
   Node can import it.
───────────────────────────────────────────────────────────────────── */

import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");
const OUT = resolve(HERE, "html");
const tmp = resolve(HERE, ".campaign.tmp.mjs");

/* Bundle the generator with its imports (issues.ts, email/tokens.ts). */
await build({
  entryPoints: [resolve(ROOT, "src/app/components/ds/campaign/emailHtml.ts")],
  outfile: tmp,
  format: "esm",
  bundle: true,
  platform: "node",
  logLevel: "silent",
  footer: { js: "export { ISSUES } from '../src/app/components/ds/campaign/issues.ts';" },
});

const { renderIssueHtml, issueFilename } = await import(pathToFileURL(tmp).href);

/* ISSUES comes from a second, separate transpile — simpler than trying to
   re-export it through the bundle. */
const tmp2 = resolve(HERE, ".issues.tmp.mjs");
await build({
  entryPoints: [resolve(ROOT, "src/app/components/ds/campaign/issues.ts")],
  outfile: tmp2,
  format: "esm",
  bundle: false,
  logLevel: "silent",
});
const { ISSUES } = await import(pathToFileURL(tmp2).href);

rmSync(tmp, { force: true });
rmSync(tmp2, { force: true });

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const rows = [];
for (const issue of ISSUES) {
  const name = issueFilename(issue);
  writeFileSync(resolve(OUT, name), renderIssueHtml(issue, ISSUES.length));
  rows.push({ name, issue });
  console.log(`  ${name}`);
}

/* A local contact sheet for reviewing all eight without GHL. */
const C = { outer: "#E4EDF2", surface: "#F2F7FA", accent: "#2C628D", text: "#091C2C", soft: "#46616F", quiet: "#5C7484" };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

writeFileSync(
  resolve(OUT, "index.html"),
  `<!DOCTYPE html><html lang="en-AU"><head><meta charset="utf-8" />
<title>Capital Unique — eight-week campaign</title>
<style>
 body{margin:0;background:${C.outer};font-family:'Public Sans',-apple-system,Helvetica,Arial,sans-serif;color:${C.text};}
 h1{font-family:'Source Serif 4',Georgia,serif;font-weight:600;font-size:28px;margin:0 0 6px;}
 .wrap{max-width:1000px;margin:0 auto;padding:40px 20px;}
 p.lede{color:${C.soft};margin:0 0 28px;line-height:1.6;}
 ol{padding-left:20px;margin:0;}
 li{margin-bottom:14px;line-height:1.5;}
 a{color:${C.accent};}
 code{background:${C.surface};padding:2px 6px;border-radius:3px;font-size:12px;}
 .sub{color:${C.quiet};font-size:13px;}
</style></head><body><div class="wrap">
<h1>Eight-week campaign</h1>
<p class="lede">One self-contained HTML file per issue. Open to preview, or paste the file's
full contents into GoHighLevel's HTML editor.</p>
<ol>
${rows
  .map(
    ({ name, issue }) =>
      `<li><a href="${name}">${esc(issue.subject)}</a><br /><span class="sub">${esc(issue.preheader)}</span><br /><code>${name}</code></li>`
  )
  .join("\n")}
</ol>
</div></body></html>
`
);

console.log(`\n  ${ISSUES.length} templates + index.html → email-templates/html/`);
