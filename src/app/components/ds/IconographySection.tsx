import React from "react";

// Glyph spec: Untitled-UI-inspired — 24px grid, 2px stroke,
// round caps/joins. Engine on the site is lucide-react resolved
// by string name; these inline SVGs mirror that visual spec.
const icons = [
  { name: "Arrow right",   svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
  { name: "Building",      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { name: "Document",      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { name: "Shield",        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: "Target",        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
  { name: "Lightning",     svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { name: "Calendar",      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { name: "Chart line",    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg> },
  { name: "Lock",          svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
  { name: "Compass",       svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/></svg> },
  { name: "Check",         svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg> },
  { name: "Download",      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> },
];

const tileSizes = [
  { label: "sm · 40px",  tile: 40, glyph: 18 },
  { label: "md · 48px",  tile: 48, glyph: 22 },
  { label: "lg · 56px",  tile: 56, glyph: 26 },
  { label: "xl · 64px",  tile: 64, glyph: 30 },
];

const tokens = [
  { name: "--cu-icon-fg",      note: "Glyph colour. Inkwell in light, Brandy in dark." },
  { name: "--cu-icon-surface", note: "Tile fill. Soft white (light) / elevated dark (dark)." },
  { name: "--cu-icon-border",  note: "Hairline edge of the tile." },
  { name: "--cu-icon-shadow",  note: "Soft drop shadow giving the tile lift." },
  { name: "--cu-icon-radius",  note: "Squircle corner radius (30%)." },
];

const ARROW = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function IconographySection() {
  return (
    <section id="iconography" aria-labelledby="iconography-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Foundation</p>
        <h2 id="iconography-heading" className="text-foreground mb-3">Iconography</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          One sanctioned treatment: the <strong className="text-foreground">squircle tile</strong>.
          Engine is Lucide React, resolved by string name. Glyph spec follows
          Untitled UI — 24px grid, <strong className="text-foreground">2px stroke</strong>, round
          caps/joins. Colour is adaptive and driven by tokens:
          <strong className="text-foreground"> Brandy-orange on an elevated dark chip in dark mode</strong>,
          <strong className="text-foreground"> Inkwell-blue on a soft white chip in light mode</strong>.
          No new colours — the tile reuses the locked accent/surface scales.
        </p>
      </div>

      {/* The canonical squircle tile */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">The Squircle Tile — canonical treatment</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4">
            {icons.map((icon) => (
              <div key={icon.name} className="group flex flex-col items-center gap-2 cursor-default">
                <span className="cu-icon-tile" style={{ width: 48, height: 48 }}>
                  <span className="[&_svg]:w-[22px] [&_svg]:h-[22px]">
                    {React.cloneElement(icon.svg, { width: 22, height: 22 })}
                  </span>
                </span>
                <span className="text-xs text-cu-neutral text-center leading-tight">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Tile Sizes</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="flex items-end gap-8 flex-wrap">
            {tileSizes.map(({ label, tile, glyph }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <span className="cu-icon-tile" style={{ width: tile, height: tile }}>
                  <svg width={glyph} height={glyph} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="font-mono text-xs text-cu-neutral">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-6 leading-relaxed">
            Default is <span className="font-mono">md</span>. Glyph stays ~46% of the
            tile; stroke is a constant 2px at every size.
          </p>
        </div>
      </div>

      {/* Tokens */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Design Tokens</h4>
        <div className="bg-card border border-white/8 rounded-xl divide-y divide-white/8">
          {tokens.map((t) => (
            <div key={t.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-3">
              <code className="font-mono text-xs text-cu-brandy shrink-0 w-48">{t.name}</code>
              <span className="text-sm text-muted-foreground">{t.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Do / Don't */}
      <div>
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Usage</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-white/8 rounded-xl p-5">
            <p className="font-mono text-xs text-cu-neutral mb-4">Decorative / feature icons — use the tile</p>
            <div className="flex items-center gap-3">
              {icons.slice(1, 5).map((icon) => (
                <span key={icon.name} className="cu-icon-tile" style={{ width: 48, height: 48 }}>
                  {React.cloneElement(icon.svg, { width: 22, height: 22 })}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-card border border-white/8 rounded-xl p-5">
            <p className="font-mono text-xs text-cu-neutral mb-4">Inline / functional icons — bare glyph, no tile</p>
            <div className="flex flex-col gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-cu-brandy text-white text-sm font-medium w-fit cursor-default">
                Download guide
                <span className="[&_svg]:w-4 [&_svg]:h-4">{ARROW}</span>
              </button>
              <p className="inline-flex items-center gap-1.5 text-sm text-cu-brandy">
                Read more
                <span className="[&_svg]:w-3.5 [&_svg]:h-3.5">{ARROW}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
