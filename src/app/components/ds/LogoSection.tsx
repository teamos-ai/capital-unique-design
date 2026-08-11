import React from "react";
import { BrandLogo, LOGO_SRC } from "./BrandLogo";

/* The wordmark colour is baked into each lockup PNG, so ground dictates
   finish. Everything else about logo usage follows from that. */
const usageRules = [
  "Light surfaces take the silver-on-navy finish; dark surfaces take the bronze finish — the lockup's wordmark is baked in and must contrast with its ground",
  "Minimum clearspace = cap-height of the 'C' glyph on all sides",
  "Never place the logo on a busy photographic background without a scrim",
  "Minimum logo width: 120px (rectangle) / 32px (square coin)",
  "Never tint, recolor, rotate, stretch, or redraw the logo",
  "Never add shadows or effects directly to the logo mark",
  "Both square coins carry their own tile, so they read on either ground — only the rectangle lockup is ground-dependent",
];

type Cell = {
  finish: "silver" | "bronze";
  ground: "light" | "dark";
  bg: string;
  border: string;
  label: string;
  note?: string;
};

const LIGHT_GROUND = { bg: "#FFFFFF", border: "rgba(8,8,8,0.12)" };
const DARK_GROUND  = { bg: "#080808", border: "rgba(255,255,255,0.10)" };

/* Rendered on fixed grounds rather than theme tokens — the point is to
   document the pairing regardless of which theme you're reading in. */

/* Only two rectangle lockups exist as artwork. The wordmark colour is
   baked in, so each one has exactly one ground it can sit on. */
const lockupCells: Cell[] = [
  { finish: "silver", ground: "light", ...LIGHT_GROUND, label: "Silver on light", note: "Light-mode default" },
  { finish: "bronze", ground: "dark",  ...DARK_GROUND,  label: "Bronze on dark",  note: "Dark-mode default" },
];

/* The coin carries its own tile, so all four pairings are real here. */
const coinCells: Cell[] = [
  { finish: "silver", ground: "light", ...LIGHT_GROUND, label: "Silver on light", note: "Light-mode default" },
  { finish: "silver", ground: "dark",  ...DARK_GROUND,  label: "Silver on dark" },
  { finish: "bronze", ground: "dark",  ...DARK_GROUND,  label: "Bronze on dark", note: "Dark-mode default" },
  { finish: "bronze", ground: "light", ...LIGHT_GROUND, label: "Bronze on light" },
];

export function LogoSection() {
  return (
    <section id="logo" aria-labelledby="logo-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Brand Identity</p>
        <h2 id="logo-heading" className="text-foreground mb-3">Logo</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Two lockups — Square Coin and Rectangle Long — each in a bronze and a
          silver-on-navy finish. The finish follows the ground it sits on, because
          the wordmark colour is baked into the artwork. Everything on this page
          swaps automatically with the theme.
        </p>
      </div>

      {/* ── Live, theme-adaptive ─────────────────────────────────── */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">
          In use — follows the current theme
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card flex flex-col items-center justify-center py-12 px-8 gap-6">
            <BrandLogo variant="square" style={{ width: "80px", height: "auto" }} />
            <span className="text-xs font-mono text-muted-foreground">Square Coin</span>
          </div>
          <div className="rounded-xl border border-border bg-card flex flex-col items-center justify-center py-12 px-8 gap-6">
            <BrandLogo variant="rect" style={{ maxWidth: "240px", height: "auto" }} />
            <span className="text-xs font-mono text-muted-foreground">Rectangle Long</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-2xl">
          Toggle the theme (<kbd className="font-mono text-xs px-1.5 py-0.5 bg-muted border border-border rounded">t</kbd>)
          and both marks change finish. Use{" "}
          <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">&lt;BrandLogo /&gt;</code>{" "}
          rather than importing a PNG directly, or the mark will be wrong in one of the two themes.
        </p>
      </div>

      {/* ── Rectangle lockup — ground-dependent ──────────────────── */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-1">Rectangle Long — the ground-dependent lockup</h4>
        <p className="text-xs text-muted-foreground mb-4 max-w-2xl leading-relaxed">
          Two artwork files exist, and each has exactly one ground it can sit on: the
          silver lockup's wordmark is black, the bronze lockup's is white. These are
          what <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">&lt;BrandLogo variant="rect" /&gt;</code>{" "}
          resolves to.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {lockupCells.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: s.border }}
            >
              <div
                className="flex items-center justify-center py-12 px-6"
                style={{ background: s.bg }}
              >
                <img
                  src={LOGO_SRC.rect[s.finish]}
                  alt={`Capital Unique rectangle lockup, ${s.finish} finish on a ${s.ground} ground`}
                  style={{ maxWidth: "190px", height: "auto" }}
                />
              </div>
              <div className="px-3 py-2.5 bg-card border-t border-border">
                <p className="text-xs text-foreground font-medium">{s.label}</p>
                {s.note && <p className="text-xs text-cu-brandy mt-0.5">{s.note}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Real asset gap, worth naming rather than faking. */}
        <div className="mt-4 rounded-xl border border-cu-amber-dark/40 dark:border-cu-amber/30 bg-cu-amber/10 p-4 max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-cu-amber-dark dark:text-cu-amber-light mb-2">
            Two lockups are missing
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The brand deck's colour specimen approves four pairings — silver and bronze,
            each on light and on dark. Only two are in this repo. A{" "}
            <strong className="text-foreground">silver lockup with a white wordmark</strong>{" "}
            (for silver on dark) and a{" "}
            <strong className="text-foreground">bronze lockup with a black wordmark</strong>{" "}
            (for bronze on light) would complete the set. Until they exist, the finish
            cannot be chosen independently of the ground — which is why the theme swap
            drives it.
          </p>
        </div>
      </div>

      {/* ── Square coin on both grounds ──────────────────────────── */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-1">Square Coin — both finishes</h4>
        <p className="text-xs text-muted-foreground mb-4 max-w-2xl leading-relaxed">
          The coin carries its own tile, so unlike the rectangle it stays legible on
          either ground. Finish is still matched to the theme for cohesion.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {coinCells.map((s) => (
            <div
              key={`coin-${s.label}`}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: s.border }}
            >
              <div
                className="flex items-center justify-center py-8"
                style={{ background: s.bg }}
              >
                <img
                  src={LOGO_SRC.square[s.finish]}
                  alt={`Capital Unique square coin, ${s.finish} finish on a ${s.ground} ground`}
                  style={{ width: "64px", height: "auto" }}
                />
              </div>
              <div className="px-3 py-2.5 bg-card border-t border-border">
                <p className="text-xs text-foreground font-medium">{s.label}</p>
                {s.note && <p className="text-xs text-cu-brandy mt-0.5">{s.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Usage rules ──────────────────────────────────────────── */}
      <div className="bg-card border border-border rounded-xl p-6 mb-10">
        <h4 className="text-foreground font-semibold mb-4">Usage Rules</h4>
        <ul className="space-y-2">
          {usageRules.map((r, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="text-cu-brandy mt-0.5 shrink-0">·</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Don'ts ───────────────────────────────────────────────── */}
      <div>
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Logo Don'ts</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {["Recolor", "Add shadow", "Stretch", "Rotate", "On busy BG", "Wrong ground"].map((dont) => (
            <div key={dont} className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <BrandLogo
                  alt=""
                  className="w-8 h-8 opacity-30"
                  style={
                    dont === "Recolor" ? { filter: "hue-rotate(180deg)" } :
                    dont === "Stretch" ? { transform: "scaleX(1.6)" } :
                    dont === "Rotate"  ? { transform: "rotate(45deg)" } : {}
                  }
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-0.5 bg-destructive rotate-45 rounded-full opacity-70" />
                </div>
              </div>
              <span className="text-xs text-muted-foreground text-center">{dont}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
