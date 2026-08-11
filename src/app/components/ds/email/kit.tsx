import React from "react";
import { LOGO_SRC, LOGO_URL } from "../BrandLogo";

/* ─────────────────────────────────────────────────────────────────────
   EMAIL KIT — the shared substrate for every Capital Unique email.

   One palette, one type stack, one set of primitives. The Newsletter
   pattern and the 8-week campaign both build on this so the two cannot
   drift apart on colour or spacing.

   Email constraints, restated: hex only (no OKLCH), tables only (no
   flex/grid), inline styles only (no CSS variables), 600px body.
───────────────────────────────────────────────────────────────────── */

export type { Scheme, Colors } from "./tokens";
export { SERIF, SANS, BUILD_LABEL, LINKS, LOGO_ABS, MERGE, COLORS } from "./tokens";

import { COLORS, type Colors, type Scheme } from "./tokens";
import { SERIF, SANS, LINKS } from "./tokens";

/* The React previews need bundled image paths on top of the pure colours;
   the generated HTML needs the absolute ones. Both come off the same
   COLORS table so they cannot diverge. */
export interface Palette extends Colors {
  logoSrc: string;  /* bundled — preview only */
  logoUrl: string;  /* absolute — what the export ships */
}

export const EMAIL: Record<Scheme, Palette> = {
  dark:  { ...COLORS.dark,  logoSrc: LOGO_SRC.square.bronze, logoUrl: LOGO_URL.square.bronze },
  light: { ...COLORS.light, logoSrc: LOGO_SRC.square.silver, logoUrl: LOGO_URL.square.silver },
};

/* ── Primitives ───────────────────────────────────────────────────── */

export function Spacer({ h }: { h: number }) {
  return <div style={{ height: `${h}px`, lineHeight: `${h}px`, fontSize: 0 }}>&nbsp;</div>;
}

export function BrandRule({ p, width = 28, align = "center" }: { p: Palette; width?: number; align?: "left" | "center" }) {
  return (
    <div style={{ width: `${width}px`, height: "2px", background: p.accent, margin: align === "center" ? "0 auto" : "0" }} />
  );
}

export function Eyebrow({ p, children, align = "left" }: { p: Palette; children: React.ReactNode; align?: "left" | "center" }) {
  return (
    <div
      style={{
        fontFamily: SANS,
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: p.accent,
        textAlign: align,
      }}
    >
      {children}
    </div>
  );
}

/* Bulletproof button — fill lives on the table cell, not the anchor. */
export function Button({ p, label, href = LINKS.contact, pad = "4px 32px 30px" }: { p: Palette; label: string; href?: string; pad?: string }) {
  return (
    <tr>
      <td style={{ padding: pad, textAlign: "center" }}>
        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ margin: "0 auto", borderCollapse: "separate" }}>
          <tbody>
            <tr>
              <td style={{ background: p.btnBg, borderRadius: "6px", padding: "14px 30px", textAlign: "center" }}>
                <a href={href} style={{ fontFamily: SANS, fontSize: "15px", fontWeight: 600, color: p.btnText, textDecoration: "none", display: "inline-block", letterSpacing: "0.01em" }}>
                  {label}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export function Hairline({ p, pad = "0 32px" }: { p: Palette; pad?: string }) {
  return (
    <tr>
      <td style={{ padding: pad }}>
        <div style={{ height: "1px", lineHeight: "1px", fontSize: 0, background: p.rule }}>&nbsp;</div>
      </td>
    </tr>
  );
}

export function Gap({ h }: { h: number }) {
  return <tr><td style={{ height: `${h}px`, lineHeight: `${h}px`, fontSize: 0 }}>&nbsp;</td></tr>;
}

/* Body copy paragraph — the workhorse. */
export function Para({ p, children, size = 15 }: { p: Palette; children: React.ReactNode; size?: number }) {
  return (
    <div style={{ fontFamily: SANS, fontSize: `${size}px`, lineHeight: 1.68, color: p.textSoft }}>
      {children}
    </div>
  );
}

/* ── Preview chrome (design-system only, never shipped) ───────────── */

export function EmailFrame({
  id,
  caption,
  builds,
  render,
}: {
  id: string;
  caption: string;
  builds: Scheme[];
  render: (p: Palette) => React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border overflow-hidden mb-6">
      <div className="px-3 py-1.5 bg-background border-b border-border font-mono text-xs text-muted-foreground flex items-center gap-2">
        <span className="text-cu-brandy font-semibold">{id}</span>
        <span className="opacity-40">·</span>
        <span>{caption}</span>
      </div>
      {builds.map((s) => {
        const p = EMAIL[s];
        return (
          <div key={s}>
            {builds.length > 1 && (
              <div className="px-3 py-1 bg-muted border-b border-border font-mono text-xs text-muted-foreground">
                {BUILD_LABEL[s]}
              </div>
            )}
            <div style={{ background: p.outer, padding: "28px 20px" }}>
              <table
                role="presentation"
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{ width: "600px", maxWidth: "100%", margin: "0 auto", background: p.body, borderCollapse: "collapse" }}
              >
                <tbody>{render(p)}</tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
