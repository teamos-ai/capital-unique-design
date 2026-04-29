import React from "react";
import { CopyableToken } from "./CopyableToken";

const spacingScale = [
  { token: "--spacing-cu-3xs",     px: 4   },
  { token: "--spacing-cu-2xs",     px: 8   },
  { token: "--spacing-cu-xs",      px: 12  },
  { token: "--spacing-cu-sm",      px: 16  },
  { token: "--spacing-cu-md",      px: 24  },
  { token: "--spacing-cu-lg",      px: 32  },
  { token: "--spacing-cu-xl",      px: 48  },
  { token: "--spacing-cu-2xl",     px: 64  },
  { token: "--spacing-cu-section", px: 96  },
  { token: "--spacing-cu-hero",    px: 128 },
];

const radiusScale = [
  { name: "None",  px: 0,    token: "0" },
  { name: "XS",    px: 4,    token: "--radius-cu-xs" },
  { name: "SM",    px: 6,    token: "--radius-cu-sm" },
  { name: "MD",    px: 8,    token: "--radius-cu-md" },
  { name: "LG",    px: 12,   token: "--radius-cu-lg" },
  { name: "XL",    px: 16,   token: "--radius-cu-xl" },
  { name: "2XL",   px: 24,   token: "--radius-cu-2xl" },
  { name: "Pill",  px: 9999, token: "--radius-cu-pill" },
];

const gridSpec = [
  { breakpoint: "Mobile",  width: "< 640px",    columns: 4,  gutter: "16px", margin: "24px" },
  { breakpoint: "Tablet",  width: "640–1024px", columns: 8,  gutter: "24px", margin: "40px" },
  { breakpoint: "Desktop", width: "> 1024px",   columns: 12, gutter: "32px", margin: "64px" },
  { breakpoint: "Max",     width: "1280px",     columns: 12, gutter: "32px", margin: "auto" },
];

export function SpacingSection() {
  return (
    <section id="spacing" aria-labelledby="spacing-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Foundation</p>
        <h2 id="spacing-heading" className="text-foreground mb-3">Spacing & Layout</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          4pt base, semantic names. <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--spacing-cu-section</code> = 96px desktop, with smaller fallbacks at narrower viewports. <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--spacing-cu-hero</code> = 128px. Max content width 1280px. Use <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">gap</code> over margin for sibling spacing.
        </p>
      </div>

      {/* Spacing scale */}
      <div className="mb-12">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Spacing Scale</h4>
        <div className="space-y-2">
          {spacingScale.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <span className="text-cu-neutral w-40 shrink-0"><CopyableToken token={s.token} className="hover:text-cu-brandy" /></span>
              <span className="font-mono text-xs text-muted-foreground w-10 shrink-0">{s.px}px</span>
              <div className="flex items-center">
                <div
                  className="h-3 rounded-sm bg-cu-brandy"
                  style={{ width: Math.min(s.px * 2, 400) + "px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border radius */}
      <div className="mb-12">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Border Radius</h4>
        <div className="flex flex-wrap gap-4">
          {radiusScale.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 bg-white/8 border border-white/20"
                style={{ borderRadius: r.px + "px" }}
              />
              <span className="text-xs text-muted-foreground">{r.name}</span>
              <span className="text-cu-neutral"><CopyableToken token={r.token} className="hover:text-cu-brandy" /></span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mb-8">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Grid Specification</h4>
        <div className="border border-white/8 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cu-surface-char border-b border-white/8">
                <th className="text-left p-4 text-muted-foreground font-medium">Breakpoint</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Width</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Columns</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Gutter</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Margin</th>
              </tr>
            </thead>
            <tbody>
              {gridSpec.map((row, i) => (
                <tr key={row.breakpoint} className={i < gridSpec.length - 1 ? "border-b border-white/6" : ""}>
                  <td className="p-4 text-foreground font-medium">{row.breakpoint}</td>
                  <td className="p-4 text-muted-foreground font-mono text-xs">{row.width}</td>
                  <td className="p-4 text-cu-brandy font-mono text-xs">{row.columns}</td>
                  <td className="p-4 text-muted-foreground font-mono text-xs">{row.gutter}</td>
                  <td className="p-4 text-muted-foreground font-mono text-xs">{row.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}