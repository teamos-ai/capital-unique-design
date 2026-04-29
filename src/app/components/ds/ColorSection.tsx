import React from "react";
import { CopyableToken } from "./CopyableToken";

const neutrals = [
  { name: "Neutral Lightest", hex: "var(--cu-neutral-lightest)", token: "--cu-neutral-lightest", textDark: true },
  { name: "Neutral Lighter",  hex: "var(--cu-neutral-lighter)",  token: "--cu-neutral-lighter",  textDark: true },
  { name: "Neutral Light",    hex: "var(--cu-neutral-light)",    token: "--cu-neutral-light",    textDark: true },
  { name: "Neutral",          hex: "var(--cu-neutral)",          token: "--cu-neutral",          textDark: false },
  { name: "Neutral Dark",     hex: "var(--cu-neutral-dark)",     token: "--cu-neutral-dark",     textDark: false },
  { name: "Neutral Darker",   hex: "var(--cu-neutral-darker)",   token: "--cu-neutral-darker",   textDark: false },
  { name: "Neutral Darkest",  hex: "var(--cu-neutral-darkest)",  token: "--cu-neutral-darkest",  textDark: false },
];

const brandyPunch = [
  { shade: "Lightest", hex: "var(--cu-brandy-lightest)", token: "--cu-brandy-lightest", textDark: true },
  { shade: "Lighter",  hex: "var(--cu-brandy-lighter)",  token: "--cu-brandy-lighter",  textDark: true },
  { shade: "Light",    hex: "var(--cu-brandy-light)",    token: "--cu-brandy-light",    textDark: true },
  { shade: "BASE",     hex: "var(--cu-brandy-punch)",    token: "--cu-brandy-punch",    textDark: false, isBase: true },
  { shade: "Dark",     hex: "var(--cu-brandy-dark)",     token: "--cu-brandy-dark",     textDark: false },
  { shade: "Darker",   hex: "var(--cu-brandy-darker)",   token: "--cu-brandy-darker",   textDark: false },
  { shade: "Darkest",  hex: "var(--cu-brandy-darkest)",  token: "--cu-brandy-darkest",  textDark: false },
];

const inkwell = [
  { shade: "Lightest", hex: "var(--cu-inkwell-lightest)", token: "--cu-inkwell-lightest", textDark: true },
  { shade: "Lighter",  hex: "var(--cu-inkwell-lighter)",  token: "--cu-inkwell-lighter",  textDark: true },
  { shade: "Light",    hex: "var(--cu-inkwell-light)",    token: "--cu-inkwell-light",    textDark: true },
  { shade: "BASE",     hex: "var(--cu-inkwell)",          token: "--cu-inkwell",          textDark: false, isBase: true },
  { shade: "Dark",     hex: "var(--cu-inkwell-dark)",     token: "--cu-inkwell-dark",     textDark: false },
  { shade: "Darker",   hex: "var(--cu-inkwell-darker)",   token: "--cu-inkwell-darker",   textDark: false },
  { shade: "Darkest",  hex: "var(--cu-inkwell-darkest)",  token: "--cu-inkwell-darkest",  textDark: false },
];

const amber = [
  { shade: "Lightest", hex: "var(--cu-amber-lightest)", token: "--cu-amber-lightest", textDark: true },
  { shade: "Lighter",  hex: "var(--cu-amber-lighter)",  token: "--cu-amber-lighter",  textDark: true },
  { shade: "Light",    hex: "var(--cu-amber-light)",    token: "--cu-amber-light",    textDark: true },
  { shade: "BASE",     hex: "var(--cu-amber)",          token: "--cu-amber",          textDark: true,  isBase: true },
  { shade: "Dark",     hex: "var(--cu-amber-dark)",     token: "--cu-amber-dark",     textDark: false },
  { shade: "Darker",   hex: "var(--cu-amber-darker)",   token: "--cu-amber-darker",   textDark: false },
  { shade: "Darkest",  hex: "var(--cu-amber-darkest)",  token: "--cu-amber-darkest",  textDark: false },
];

const surfaces = [
  { name: "Surface 00 — Void",  hex: "var(--cu-surface-void)",  token: "--cu-surface-void",  textDark: false },
  { name: "Surface 01 — Abyss", hex: "var(--cu-surface-abyss)", token: "--cu-surface-abyss", textDark: false },
  { name: "Surface 02 — Vault", hex: "var(--cu-surface-vault)", token: "--cu-surface-vault", textDark: false },
  { name: "Surface 03 — Char",  hex: "var(--cu-surface-char)",  token: "--cu-surface-char",  textDark: false },
  { name: "Surface 04 — Ember", hex: "var(--cu-surface-ember)", token: "--cu-surface-ember", textDark: false },
  { name: "Surface 05 — Smoke", hex: "var(--cu-surface-smoke)", token: "--cu-surface-smoke", textDark: false },
];

/* Contrast pair table — every body-text pairing must clear WCAG AA (4.5:1). */
const contrastPairs = [
  { fg: "var(--cu-neutral-lightest)", fgName: "Neutral Lightest", bg: "var(--cu-surface-void)",  bgName: "Surface 00 Void",  ratio: "16.8 : 1", verdict: "AAA" },
  { fg: "var(--cu-neutral-lightest)", fgName: "Neutral Lightest", bg: "var(--cu-surface-vault)", bgName: "Surface 02 Vault", ratio: "13.4 : 1", verdict: "AAA" },
  { fg: "var(--cu-neutral-light)",    fgName: "Neutral Light",    bg: "var(--cu-surface-vault)", bgName: "Surface 02 Vault", ratio: "8.1 : 1",  verdict: "AAA" },
  { fg: "var(--cu-neutral)",          fgName: "Neutral",          bg: "var(--cu-surface-vault)", bgName: "Surface 02 Vault", ratio: "5.0 : 1",  verdict: "AA"  },
  { fg: "var(--cu-brandy-light)",     fgName: "Brandy Light",     bg: "var(--cu-surface-vault)", bgName: "Surface 02 Vault", ratio: "5.6 : 1",  verdict: "AA"  },
  { fg: "var(--cu-brandy-punch)",     fgName: "Brandy Punch",     bg: "var(--cu-surface-vault)", bgName: "Surface 02 Vault", ratio: "4.4 : 1",  verdict: "AA Large only" },
  { fg: "var(--cu-neutral-dark)",     fgName: "Neutral Dark",     bg: "var(--cu-surface-vault)", bgName: "Surface 02 Vault", ratio: "2.5 : 1",  verdict: "FAIL — decorative use only" },
];

/* ── Simple swatch for neutrals & surfaces (token clicks to copy) ── */
function Swatch({ name, hex, token, sub }: {
  name: string; hex: string; token: string; sub?: string; textDark: boolean;
}) {
  return (
    <div className="rounded-lg overflow-hidden border border-border">
      <div className="h-20" style={{ background: hex }} />
      <div className="p-3 bg-card">
        <p className="text-sm font-semibold text-foreground mb-0.5">{name}</p>
        {sub && <p className="text-xs text-cu-neutral-light mb-0.5">{sub}</p>}
        <CopyableToken token={token} className="text-muted-foreground hover:text-cu-brandy" />
      </div>
    </div>
  );
}

function SwatchGroup({ title, items }: { title: string; items: typeof neutrals }) {
  return (
    <div className="mb-10">
      <h4 className="text-muted-foreground text-xs font-semibold mb-4">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
        {items.map((c) => (
          <Swatch key={c.token} {...c} />
        ))}
      </div>
    </div>
  );
}

function ShadeRow({
  shade, hex, token, isBase, textDark,
}: {
  shade: string; hex: string; token: string; isBase?: boolean; textDark: boolean;
}) {
  const textColor = textDark ? "var(--cu-surface-char)" : "var(--foreground)";
  const subColor  = textDark ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.50)";
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 transition-all duration-150 ${isBase ? "ring-2 ring-white/20 ring-inset" : ""}`}
      style={{ background: hex }}
    >
      <div>
        <p className="text-sm font-semibold" style={{ color: textColor }}>
          {shade}
          {isBase && (
            <span
              className="ml-2 text-xs font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded"
              style={{ background: "rgba(0,0,0,0.22)", color: textColor }}
            >
              BASE
            </span>
          )}
        </p>
        <span style={{ color: subColor }} className="block mt-0.5">
          <CopyableToken token={token} className="hover:opacity-100 opacity-90" />
        </span>
      </div>
      <p className="text-xs font-mono font-semibold" style={{ color: subColor }}>{hex}</p>
    </div>
  );
}

function ColorFamily({
  label, role, base, shades,
}: {
  label: string; role: string; base: string; shades: typeof brandyPunch;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="rounded-t-xl px-4 py-3 mb-0 flex items-center justify-between"
        style={{ background: base }}
      >
        <div>
          <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{label}</p>
          <p className="text-[11px] text-white/70 font-mono">{base}</p>
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded-full bg-cu-neutral-darkest/25 text-white/85">
          {role}
        </span>
      </div>
      <div className="rounded-b-xl overflow-hidden border border-white/8 divide-y divide-white/5">
        {shades.map((s) => (
          <ShadeRow key={s.token} {...s} />
        ))}
      </div>
    </div>
  );
}

export function ColorSection() {
  return (
    <section id="colors" aria-labelledby="colors-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Foundation</p>
        <h2 id="colors-heading" className="text-foreground mb-3">Color System</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed" style={{ lineHeight: 1.65 }}>
          Three families do real work: <strong className="text-cu-brandy-light">Brandy Punch</strong> (warm primary),{" "}
          <strong className="text-cu-inkwell-light">Inkwell</strong> (cool counter-tone for charts, info, and brand cohesion), and{" "}
          <strong className="text-cu-amber-light">Amber</strong> (semantic warning, chroma-restrained). Accent families are declared in OKLCH for perceptual uniformity; neutrals are pure-cool true black on a fixed sRGB ladder (#080808 → #F2F2F2) — the dark surfaces should read as void, not warmed.
          Components reference semantic aliases (<code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--accent</code>,{" "}
          <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--background</code>) — never raw scale tokens.
        </p>
      </div>

      {/* Three accent families */}
      <div className="mb-12">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">
          Accent Families — 7 steps each
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorFamily
            label="Brandy Punch"
            role="Primary"
            base="var(--cu-brandy-punch)"
            shades={brandyPunch}
          />
          <ColorFamily
            label="Inkwell"
            role="Counter-tone"
            base="var(--cu-inkwell)"
            shades={inkwell}
          />
          <ColorFamily
            label="Amber"
            role="Warning"
            base="var(--cu-amber)"
            shades={amber}
          />
        </div>
      </div>

      <SwatchGroup title="Neutrals — 7-step true-cool scale (#080808 → #F2F2F2)" items={neutrals} />

      <SwatchGroup
        title="Dark surface hierarchy"
        items={surfaces.map((s) => ({ ...s, textDark: s.textDark }))}
      />

      {/* Contrast pair table — added per impeccable audit recommendation */}
      <div className="mb-4">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">
          Contrast Pairs — body-text safety table
        </h4>
        <div className="rounded-xl border border-white/8 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cu-surface-char border-b border-white/8">
                <th className="text-left p-3 text-muted-foreground font-medium">Foreground</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Background</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Sample</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Ratio</th>
                <th className="text-left p-3 text-muted-foreground font-medium">WCAG</th>
              </tr>
            </thead>
            <tbody>
              {contrastPairs.map((p, i) => (
                <tr key={i} className={i < contrastPairs.length - 1 ? "border-b border-white/6" : ""}>
                  <td className="p-3 font-mono text-xs text-cu-neutral-light">{p.fgName}</td>
                  <td className="p-3 font-mono text-xs text-cu-neutral-light">{p.bgName}</td>
                  <td className="p-3" style={{ background: p.bg }}>
                    <span style={{ color: p.fg, fontFamily: "'Public Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 500 }}>
                      The quick brown fox
                    </span>
                  </td>
                  <td className="p-3 font-mono text-xs text-foreground">{p.ratio}</td>
                  <td className="p-3 text-xs">
                    <span className={
                      p.verdict.startsWith("AAA") ? "text-emerald-400" :
                      p.verdict.startsWith("AA Large") ? "text-cu-amber-light" :
                      p.verdict.startsWith("AA") ? "text-cu-brandy-light" :
                      "text-red-400"
                    }>{p.verdict}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
