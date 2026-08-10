import React, { useState } from "react";
import logoSquare from "../../../imports/Logo_Square.png";
import { CopyableToken } from "./CopyableToken";

/* ─────────────────────────────────────────────────────────────────────
   NEWSLETTER (EMAIL) — Capital Unique

   Email is not the web. The rest of this design system runs on OKLCH
   tokens, CSS custom properties, flexbox and hover states — none of
   which survive Outlook, and only some of which survive Gmail. So this
   section restates the brand in the subset email can actually render:

     • hex colours only (OKLCH → hex conversions locked in EMAIL below)
     • tables for layout, never flex/grid
     • inline styles, never CSS variables
     • 600px body, fluid below
     • web-safe fallbacks doing the real typographic work

   Everything previewed here is written as literal table markup with
   inline styles, so the HTML/CSS export is a direct transcription of
   what you see rather than a re-interpretation of it.
───────────────────────────────────────────────────────────────────── */

type Scheme = "dark" | "light";

interface Palette {
  outer: string;
  body: string;
  surface: string;
  rule: string;
  ruleStrong: string;
  text: string;
  textSoft: string;
  textQuiet: string;
  accent: string;   /* eyebrows, rules, button fill */
  link: string;     /* inline + footer links — AA on `body` */
  btnBg: string;
  btnText: string;
}

const EMAIL: Record<Scheme, Palette> = {
  dark: {
    outer:      "#000000",
    body:       "#080808",  /* Void        — --cu-surface-void  */
    surface:    "#111111",  /* Vault       — --cu-surface-vault */
    rule:       "#1F1F1F",
    ruleStrong: "#2E2E2E",
    text:       "#F2F2F2",  /* --cu-neutral-lightest */
    textSoft:   "#B5B5B5",  /* --cu-neutral-light    */
    textQuiet:  "#878787",  /* --cu-neutral          */
    accent:     "#C56A31",  /* Brandy Punch */
    link:       "#D79B7A",  /* Brandy Light — 8.45:1 on Void */
    btnBg:      "#C56A31",
    btnText:    "#080808",  /* matches --primary-foreground in .dark */
  },
  /* Blue on white. Inkwell rather than Brandy, matching the system's own
     light-mode icon treatment (--cu-icon-fg is Inkwell in light, Brandy in
     dark). Every value clears AA on white, including the button. */
  light: {
    outer:      "#E4EDF2",  /* --cu-inkwell-lightest — pale blue gutter */
    body:       "#FFFFFF",
    surface:    "#F2F7FA",  /* email-only step between white and Inkwell Lightest */
    rule:       "#DAE5EC",
    ruleStrong: "#C3D5E0",
    text:       "#091C2C",  /* --cu-inkwell-darker — near-black with a blue cast */
    textSoft:   "#46616F",  /* email-only slate — 6.6:1 */
    textQuiet:  "#5C7484",  /* email-only slate — 4.9:1 */
    accent:     "#2C628D",  /* --cu-inkwell — 6.5:1 on white */
    link:       "#2C628D",
    btnBg:      "#2C628D",
    btnText:    "#FFFFFF",  /* 6.5:1 — AA at any size */
  },
};

const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";
const SANS  = "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/* Absolute URL the email will actually reference. Local import is only
   for this preview — email clients cannot resolve bundler paths. */
const LOGO_URL =
  "https://raw.githubusercontent.com/teamos-ai/capital-unique-design/main/src/imports/Logo_Square.png";

/* ── Preview chrome ───────────────────────────────────────────────── */

const BUILD_LABEL: Record<Scheme, string> = {
  dark: "Dark — The Vault",
  light: "Light — Inkwell",
};

/* Renders the same markup once per selected build, so nothing is hidden
   behind toggle state when "Both" is active. */
function Frame({
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

/* ── Shared email primitives ──────────────────────────────────────── */

function Eyebrow({ p, children, align = "left" }: { p: Palette; children: React.ReactNode; align?: "left" | "center" }) {
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

function Spacer({ h }: { h: number }) {
  return <div style={{ height: `${h}px`, lineHeight: `${h}px`, fontSize: 0 }}>&nbsp;</div>;
}

function BrandRule({ p, width = 28, align = "center" }: { p: Palette; width?: number; align?: "left" | "center" }) {
  return (
    <div style={{ width: `${width}px`, height: "2px", background: p.accent, margin: align === "center" ? "0 auto" : "0" }} />
  );
}

/* ── HEADERS ──────────────────────────────────────────────────────── */

function HeaderMasthead({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "36px 32px 30px", textAlign: "center", borderBottom: `1px solid ${p.rule}` }}>
        <img src={logoSquare} width={44} height={44} alt="Capital Unique" style={{ display: "inline-block", border: 0 }} />
        <Spacer h={16} />
        <div style={{ fontFamily: SERIF, fontSize: "23px", fontWeight: 600, letterSpacing: "0.005em", color: p.text, lineHeight: 1.1 }}>
          capital unique
        </div>
        <Spacer h={16} />
        <BrandRule p={p} />
        <Spacer h={16} />
        <div style={{ fontFamily: SANS, fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: p.textQuiet }}>
          Insights&nbsp; ·&nbsp; Issue 014&nbsp; ·&nbsp; 10 August 2026
        </div>
      </td>
    </tr>
  );
}

function HeaderCompact({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "18px 28px", borderBottom: `1px solid ${p.rule}` }}>
        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "middle" }}>
                <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse" }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle", paddingRight: "12px" }}>
                        <img src={logoSquare} width={30} height={30} alt="Capital Unique" style={{ display: "block", border: 0 }} />
                      </td>
                      <td style={{ verticalAlign: "middle", fontFamily: SERIF, fontSize: "17px", fontWeight: 600, color: p.text, whiteSpace: "nowrap" }}>
                        capital unique
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ verticalAlign: "middle", textAlign: "right", fontFamily: SANS, fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: p.textQuiet, whiteSpace: "nowrap" }}>
                Issue 014
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

function HeaderNameplate({ p }: { p: Palette }) {
  return (
    <>
      <tr>
        <td style={{ height: "3px", lineHeight: "3px", fontSize: 0, background: p.accent }}>&nbsp;</td>
      </tr>
      <tr>
        <td style={{ padding: "26px 32px 22px", borderBottom: `1px solid ${p.rule}` }}>
          <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ verticalAlign: "bottom", fontFamily: SERIF, fontSize: "27px", fontWeight: 600, letterSpacing: "-0.01em", color: p.text, lineHeight: 1 }}>
                  capital unique
                </td>
                <td style={{ verticalAlign: "bottom", textAlign: "right", fontFamily: SANS, fontSize: "10px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: p.textQuiet, lineHeight: 1.6, whiteSpace: "nowrap" }}>
                  Issue 014<br />10 Aug 2026
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

/* ── BODY BLOCKS ──────────────────────────────────────────────────── */

function BlockIntro({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "30px 32px 4px" }}>
        <div style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.65, color: p.textSoft }}>
          Good morning —
        </div>
        <Spacer h={12} />
        <div style={{ fontFamily: SERIF, fontSize: "19px", lineHeight: 1.5, color: p.text }}>
          Three things moved in private credit this fortnight, and one of them
          changes how we price second-mortgage positions.
        </div>
      </td>
    </tr>
  );
}

function BlockArticle({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "26px 32px" }}>
        <Eyebrow p={p}>Market note</Eyebrow>
        <Spacer h={10} />
        <div style={{ fontFamily: SERIF, fontSize: "24px", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.01em", color: p.text }}>
          Why settlement timelines are the real constraint
        </div>
        <Spacer h={12} />
        <div style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.68, color: p.textSoft }}>
          Rate is the number borrowers quote back to us, but it is almost never
          the binding constraint. When a deal fails it fails on the calendar —
          a bank that needs six weeks for a scenario that has eleven days left
          in it.
        </div>
        <Spacer h={14} />
        <a
          href="#"
          style={{ fontFamily: SANS, fontSize: "14px", fontWeight: 600, color: p.link, textDecoration: "underline" }}
        >
          Read the full piece →
        </a>
      </td>
    </tr>
  );
}

function BlockCallout({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "8px 32px 26px" }}>
        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", background: p.surface, borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "24px 26px" }}>
                <BrandRule p={p} align="left" />
                <Spacer h={14} />
                <div style={{ fontFamily: SERIF, fontSize: "18px", fontStyle: "italic", lineHeight: 1.55, color: p.text }}>
                  “We were three days from losing the site. Capital Unique
                  settled in nine.”
                </div>
                <Spacer h={10} />
                <div style={{ fontFamily: SANS, fontSize: "12px", letterSpacing: "0.04em", color: p.textQuiet }}>
                  Developer · Inner-west Melbourne · $4.2M bridge
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

function BlockFigures({ p }: { p: Palette }) {
  const figures = [
    { value: "9 days", label: "Median settlement" },
    { value: "$4.2M", label: "Median facility" },
    { value: "68%", label: "Repeat borrowers" },
  ];
  return (
    <tr>
      <td style={{ padding: "4px 32px 26px" }}>
        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              {figures.map((f, i) => (
                <td
                  key={f.label}
                  style={{
                    width: "33.33%",
                    verticalAlign: "top",
                    paddingRight: i < figures.length - 1 ? "14px" : 0,
                    borderTop: `2px solid ${p.accent}`,
                    paddingTop: "12px",
                  }}
                >
                  <div style={{ fontFamily: SERIF, fontSize: "26px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.015em", color: p.text }}>
                    {f.value}
                  </div>
                  <Spacer h={6} />
                  <div style={{ fontFamily: SANS, fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: p.textQuiet, lineHeight: 1.4 }}>
                    {f.label}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

function BlockButton({ p, label = "Talk to a specialist" }: { p: Palette; label?: string }) {
  return (
    <tr>
      <td style={{ padding: "4px 32px 30px", textAlign: "center" }}>
        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} style={{ margin: "0 auto", borderCollapse: "separate" }}>
          <tbody>
            <tr>
              <td style={{ background: p.btnBg, borderRadius: "6px", padding: "14px 30px", textAlign: "center" }}>
                <a
                  href="#"
                  style={{ fontFamily: SANS, fontSize: "15px", fontWeight: 600, color: p.btnText, textDecoration: "none", display: "inline-block", letterSpacing: "0.01em" }}
                >
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

function BlockSignature({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "4px 32px 32px" }}>
        <div style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.65, color: p.textSoft }}>
          Until next fortnight,
        </div>
        <Spacer h={10} />
        <div style={{ fontFamily: SERIF, fontSize: "17px", fontWeight: 600, color: p.text }}>
          The Capital Unique team
        </div>
        <Spacer h={4} />
        <div style={{ fontFamily: SANS, fontSize: "12px", letterSpacing: "0.03em", color: p.textQuiet }}>
          Insights · Published fortnightly
        </div>
      </td>
    </tr>
  );
}

function RuleHairline({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "0 32px" }}>
        <div style={{ height: "1px", lineHeight: "1px", fontSize: 0, background: p.rule }}>&nbsp;</div>
      </td>
    </tr>
  );
}

function RuleBrand({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "22px 32px", textAlign: "center" }}>
        <BrandRule p={p} width={28} />
      </td>
    </tr>
  );
}

/* ── FOOTERS ──────────────────────────────────────────────────────── */

function FooterStandard({ p }: { p: Palette }) {
  const links = ["Insights", "Calculator", "Contact"];
  return (
    <tr>
      <td style={{ padding: "32px", textAlign: "center", borderTop: `1px solid ${p.rule}` }}>
        <img src={logoSquare} width={32} height={32} alt="Capital Unique" style={{ display: "inline-block", border: 0 }} />
        <Spacer h={14} />
        <div style={{ fontFamily: SANS, fontSize: "13px", lineHeight: 1.6, color: p.textSoft, maxWidth: "380px", margin: "0 auto" }}>
          Non-bank lending for complex scenarios where traditional finance falls short.
        </div>
        <Spacer h={18} />
        <div style={{ fontFamily: SANS, fontSize: "12px", fontWeight: 600, color: p.link }}>
          {links.map((l, i) => (
            <React.Fragment key={l}>
              {i > 0 && <span style={{ color: p.ruleStrong, padding: "0 8px" }}>·</span>}
              <a href="#" style={{ color: p.link, textDecoration: "none" }}>{l}</a>
            </React.Fragment>
          ))}
        </div>
        <Spacer h={22} />
        <div style={{ height: "1px", lineHeight: "1px", fontSize: 0, background: p.rule }}>&nbsp;</div>
        <Spacer h={20} />
        <div style={{ fontFamily: SANS, fontSize: "11px", lineHeight: 1.7, color: p.textQuiet }}>
          Capital Unique Pty Ltd · ACN [000 000 000] · Australian Credit Licence [000000]<br />
          [Street address], [Suburb] [STATE] [Postcode], Australia
        </div>
        <Spacer h={14} />
        <div style={{ fontFamily: SANS, fontSize: "11px", lineHeight: 1.7, color: p.textQuiet }}>
          You’re receiving this because you subscribed to Capital Unique Insights.<br />
          <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>Unsubscribe</a>
          <span style={{ padding: "0 6px" }}>·</span>
          <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>Update preferences</a>
          <span style={{ padding: "0 6px" }}>·</span>
          <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>View in browser</a>
        </div>
        <Spacer h={14} />
        <div style={{ fontFamily: SANS, fontSize: "10px", lineHeight: 1.7, color: p.textQuiet }}>
          General information only — it does not take account of your objectives,
          financial situation or needs. [Confirm final wording with compliance.]
        </div>
        <Spacer h={12} />
        <div style={{ fontFamily: SANS, fontSize: "11px", color: p.textQuiet }}>
          © 2026 Capital Unique. All rights reserved.
        </div>
      </td>
    </tr>
  );
}

function FooterMinimal({ p }: { p: Palette }) {
  return (
    <tr>
      <td style={{ padding: "24px 32px", textAlign: "center", borderTop: `1px solid ${p.rule}` }}>
        <div style={{ fontFamily: SANS, fontSize: "11px", lineHeight: 1.8, color: p.textQuiet }}>
          Capital Unique Pty Ltd · [Street address], [Suburb] [STATE] [Postcode]<br />
          <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>Unsubscribe</a>
          <span style={{ padding: "0 6px" }}>·</span>
          <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>Preferences</a>
          <span style={{ padding: "0 6px" }}>·</span>
          <a href="#" style={{ color: p.textQuiet, textDecoration: "underline" }}>View in browser</a><br />
          © 2026 Capital Unique
        </div>
      </td>
    </tr>
  );
}

/* ── Palette swatch row ───────────────────────────────────────────── */

function SwatchRow({ p, scheme }: { p: Palette; scheme: Scheme }) {
  const rows: { key: keyof Palette; role: string; from: string }[] = [
    { key: "outer",      role: "Outer canvas",        from: scheme === "dark" ? "pure black gutter" : "--cu-inkwell-lightest" },
    { key: "body",       role: "Email body",          from: scheme === "dark" ? "--cu-surface-void" : "--card" },
    { key: "surface",    role: "Callout surface",     from: scheme === "dark" ? "--cu-surface-vault" : "email-only step" },
    { key: "rule",       role: "Hairline rule",       from: scheme === "dark" ? "white 8% flattened" : "Inkwell-tinted hairline" },
    { key: "text",       role: "Primary text",        from: scheme === "dark" ? "--cu-neutral-lightest" : "--cu-inkwell-darker" },
    { key: "textSoft",   role: "Body / secondary",    from: scheme === "dark" ? "--cu-neutral-light" : "email-only slate" },
    { key: "textQuiet",  role: "Legal / meta",        from: scheme === "dark" ? "--cu-neutral" : "email-only slate" },
    { key: "accent",     role: "Eyebrows & rules",    from: scheme === "dark" ? "--cu-brandy-punch" : "--cu-inkwell" },
    { key: "link",       role: "Links",               from: scheme === "dark" ? "--cu-brandy-light" : "--cu-inkwell" },
    { key: "btnBg",      role: "Button fill",         from: scheme === "dark" ? "--cu-brandy-punch" : "--cu-inkwell" },
    { key: "btnText",    role: "Button label",        from: scheme === "dark" ? "--cu-neutral-darkest" : "#FFFFFF" },
  ];

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-2.5 text-xs font-semibold text-foreground w-16">Hex</th>
            <th className="px-4 py-2.5 text-xs font-semibold text-foreground">Value</th>
            <th className="px-4 py-2.5 text-xs font-semibold text-foreground">Role in the email</th>
            <th className="px-4 py-2.5 text-xs font-semibold text-foreground hidden md:table-cell">Derived from</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ key, role, from }) => (
            <tr key={key} className="border-t border-border">
              <td className="px-4 py-2">
                <div className="w-7 h-7 rounded border border-border" style={{ background: p[key] }} />
              </td>
              <td className="px-4 py-2">
                <CopyableToken token={p[key]} className="text-muted-foreground hover:text-cu-brandy" />
              </td>
              <td className="px-4 py-2 text-xs text-muted-foreground">{role}</td>
              <td className="px-4 py-2 text-xs font-mono text-muted-foreground hidden md:table-cell">{from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────────── */

/* Every header × footer pairing, so the frame decision can be made by
   looking rather than by imagining. */
const HEADERS = [
  { id: "A", label: "Masthead",  Cmp: HeaderMasthead },
  { id: "B", label: "Compact",   Cmp: HeaderCompact },
  { id: "C", label: "Nameplate", Cmp: HeaderNameplate },
];

const FOOTERS = [
  { id: "A", label: "Standard", Cmp: FooterStandard },
  { id: "B", label: "Minimal",  Cmp: FooterMinimal },
];

type View = Scheme | "both";

export function NewsletterSection() {
  const [view, setView] = useState<View>("both");
  const builds: Scheme[] = view === "both" ? ["dark", "light"] : [view];

  return (
    <section id="newsletter" aria-labelledby="newsletter-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Patterns</p>
        <h2 id="newsletter-heading" className="text-foreground mb-3">Newsletter (Email)</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          The brand restated in the subset email can actually render: hex only, tables
          only, inline styles only, 600px wide. Three headers, two footers, every body
          block a simple issue needs, and all six header/footer pairings — each one built
          in both a dark and a light build. Every preview below is real table markup, so
          the export is a transcription rather than a re-interpretation.
        </p>
      </div>

      {/* Constraints */}
      <div className="rounded-xl border border-border bg-card p-5 md:p-6 mb-8 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-3">Email is not the web</p>
        <ul className="text-sm text-muted-foreground space-y-2" style={{ lineHeight: 1.6 }}>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">No OKLCH.</strong> Every brand colour is converted to hex below. Ship those values, not the tokens.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">No CSS variables, no flex, no grid.</strong> Outlook renders through Word. Layout is tables and inline styles.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">Webfonts mostly fail.</strong> Source Serif 4 and Public Sans load in Apple Mail and little else — Georgia and Helvetica are what most subscribers actually see, so the design is tuned to survive the fallback.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">Outlook drops <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">letter-spacing</code> and <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">border-radius</code>.</strong> Tracked eyebrows read untracked and buttons render square. Both degrade acceptably — nothing breaks.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">Clients force their own dark mode.</strong> Gmail app and Outlook.com re-colour mail regardless of your design. The export declares <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">color-scheme: light dark</code> so supporting clients leave it alone — but assume some subscribers see an inverted version of whichever build you pick.</span></li>
          <li className="flex gap-3"><span className="text-cu-brandy shrink-0">·</span><span><strong className="text-foreground">Images get blocked.</strong> The logo is the only image in these layouts, and every header still reads as Capital Unique with images off.</span></li>
        </ul>
      </div>

      {/* Build filter — "Both" is the default so nothing is hidden behind state. */}
      <div className="flex items-center gap-3 mb-8 sticky top-[68px] z-20 py-2" style={{ background: "color-mix(in oklch, var(--background) 92%, transparent)", backdropFilter: "blur(8px)" }}>
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Build</span>
        <div className="inline-flex rounded-lg border border-border overflow-hidden">
          {([
            { v: "both",  label: "Both" },
            { v: "dark",  label: "Dark — The Vault" },
            { v: "light", label: "Light — Inkwell" },
          ] as { v: View; label: string }[]).map(({ v, label }) => (
            <button
              key={v}
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={`px-4 py-1.5 text-xs font-medium cursor-pointer transition-colors duration-150 border-r border-border last:border-r-0
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light
                ${view === v ? "bg-cu-brandy/15 text-cu-brandy" : "text-muted-foreground hover:text-foreground"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-xs font-mono text-muted-foreground hidden sm:inline">600px</span>
      </div>

      {/* ── Palette ─────────────────────────────────────────────── */}
      <div className="mb-12">
        <h3 className="text-foreground mb-2">Email palette</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          OKLCH resolved to sRGB hex. The two builds run different accent families —
          Brandy Punch in the dark build, Inkwell in the light one — which mirrors how
          the system already handles iconography (<code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">--cu-icon-fg</code>{" "}
          is Inkwell in light, Brandy in dark). Contrast was re-checked against the email
          surfaces rather than the web ones: links are 8.5:1 on Void and 6.5:1 on white,
          and every value below clears AA.
        </p>
        <div className="space-y-6">
          {builds.map((s) => (
            <div key={s}>
              {builds.length > 1 && (
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">{BUILD_LABEL[s]}</p>
              )}
              <SwatchRow p={EMAIL[s]} scheme={s} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Headers ─────────────────────────────────────────────── */}
      <div className="mb-12">
        <h3 className="text-foreground mb-2">Headers</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          Three postures. Masthead is the recommended default for a fortnightly issue;
          Compact is the workhorse when the content should start above the fold;
          Nameplate is the most editorial and the only one that survives image blocking
          with its brand device intact.
        </p>

        <Frame id="HEADER-A" builds={builds}
          caption="Masthead — centred, ceremonial. Coin + wordmark + brand rule + issue line."
          render={(p) => <HeaderMasthead p={p} />} />

        <Frame id="HEADER-B" builds={builds}
          caption="Compact bar — single row, minimum height. Content starts sooner."
          render={(p) => <HeaderCompact p={p} />} />

        <Frame id="HEADER-C" builds={builds}
          caption="Nameplate — editorial. 3px accent bar renders even with images off."
          render={(p) => <HeaderNameplate p={p} />} />
      </div>

      {/* ── Body blocks ─────────────────────────────────────────── */}
      <div className="mb-12">
        <h3 className="text-foreground mb-2">Body blocks</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          Enough to assemble a simple issue. Serif for anything that carries a voice —
          headlines, the lede, pull quotes, figures. Sans for anything that carries
          information — body copy, labels, legal.
        </p>

        <Frame id="BLOCK-INTRO" builds={builds}
          caption="Greeting + lede. Serif lede sets the issue's argument in one sentence."
          render={(p) => <BlockIntro p={p} />} />

        <Frame id="BLOCK-ARTICLE" builds={builds}
          caption="Article — eyebrow, serif headline, body, underlined link."
          render={(p) => <BlockArticle p={p} />} />

        <Frame id="BLOCK-CALLOUT" builds={builds}
          caption="Pull quote — tinted surface, led by the same short accent rule as the masthead."
          render={(p) => <BlockCallout p={p} />} />

        <Frame id="BLOCK-FIGURES" builds={builds}
          caption="Three-figure row — serif numerals under a single accent rule."
          render={(p) => <BlockFigures p={p} />} />

        <Frame id="BLOCK-CTA" builds={builds}
          caption="Bulletproof button — table cell fill, not a styled anchor."
          render={(p) => <BlockButton p={p} />} />

        <Frame id="BLOCK-SIGNATURE" builds={builds}
          caption="Sign-off — serif name, quiet cadence line."
          render={(p) => <BlockSignature p={p} />} />

        <Frame id="RULE-A / RULE-B" builds={builds}
          caption="Dividers — full-width hairline, and centred 28px accent rule for section breaks."
          render={(p) => (
            <>
              <tr><td style={{ height: "24px", fontSize: 0, lineHeight: "24px" }}>&nbsp;</td></tr>
              <RuleHairline p={p} />
              <RuleBrand p={p} />
              <RuleHairline p={p} />
              <tr><td style={{ height: "24px", fontSize: 0, lineHeight: "24px" }}>&nbsp;</td></tr>
            </>
          )} />

        {/* Preheader — not a table block, so it renders outside Frame. */}
        <div className="rounded-xl border border-border overflow-hidden mb-6">
          <div className="px-3 py-1.5 bg-background border-b border-border font-mono text-xs text-muted-foreground flex items-center gap-2">
            <span className="text-cu-brandy font-semibold">PREHEADER</span>
            <span className="opacity-40">·</span>
            <span>hidden in the email — this is the inbox preview line</span>
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
                <div className="p-5" style={{ background: p.outer }}>
                  <div className="rounded-lg p-4" style={{ background: p.body, border: `1px dashed ${p.ruleStrong}` }}>
                    <div style={{ fontFamily: SANS, fontSize: "13px", color: p.textSoft, lineHeight: 1.6 }}>
                      Settlement timelines, not rate, are what kill complex deals.
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="px-5 py-4 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
              Sits immediately after <code className="text-cu-brandy">&lt;body&gt;</code> in a{" "}
              <code className="text-cu-brandy">display:none;max-height:0;overflow:hidden;mso-hide:all</code> div,
              padded with zero-width non-joiners so the client does not pull the masthead
              alt-text into the preview instead. 40–90 characters.
            </p>
          </div>
        </div>
      </div>

      {/* ── Footers ─────────────────────────────────────────────── */}
      <div className="mb-12">
        <h3 className="text-foreground mb-2">Footers</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          Bracketed values are placeholders — ACN, credit licence, postal address and the
          general-advice wording all need real content before send. A physical address and
          a working unsubscribe are legal requirements under the Spam Act, not design choices.
        </p>

        <Frame id="FOOTER-A" builds={builds}
          caption="Standard — coin, positioning line, nav, legal block, compliance line."
          render={(p) => <FooterStandard p={p} />} />

        <Frame id="FOOTER-B" builds={builds}
          caption="Minimal — the legal floor and nothing else. Pairs with HEADER-B."
          render={(p) => <FooterMinimal p={p} />} />
      </div>

      {/* ── All header × footer combinations ────────────────────── */}
      <div className="mb-12">
        <h3 className="text-foreground mb-2">Every combination</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          All six header/footer pairings, in both builds. The body is deliberately short
          here — these are for judging the frame the newsletter sits in, not the content.
          The full-length rhythm test is the reference send below.
        </p>

        {HEADERS.flatMap((h) =>
          FOOTERS.map((f) => (
            <Frame
              key={`${h.id}${f.id}`}
              id={`HEADER-${h.id} + FOOTER-${f.id}`}
              caption={`${h.label} over ${f.label.toLowerCase()} — short body`}
              builds={builds}
              render={(p) => (
                <>
                  <h.Cmp p={p} />
                  <BlockIntro p={p} />
                  <BlockArticle p={p} />
                  <BlockButton p={p} />
                  <f.Cmp p={p} />
                </>
              )}
            />
          ))
        )}
      </div>

      {/* ── Full-length reference send ──────────────────────────── */}
      <div className="mb-8">
        <h3 className="text-foreground mb-2">Reference send</h3>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-5">
          HEADER-A + FOOTER-A with every body block in play, at true 600px. Individual
          blocks always look fine in isolation; the rhythm between them is what either
          holds or does not.
        </p>

        <Frame id="ISSUE-014" builds={builds}
          caption="Full send — masthead, lede, article, pull quote, figures, CTA, sign-off, standard footer"
          render={(p) => (
            <>
              <HeaderMasthead p={p} />
              <BlockIntro p={p} />
              <BlockArticle p={p} />
              <BlockCallout p={p} />
              <BlockFigures p={p} />
              <BlockButton p={p} />
              <RuleHairline p={p} />
              <tr><td style={{ height: "26px", fontSize: 0, lineHeight: "26px" }}>&nbsp;</td></tr>
              <BlockSignature p={p} />
              <FooterStandard p={p} />
            </>
          )} />
      </div>

      {/* ── Next step ───────────────────────────────────────────── */}
      <div className="rounded-xl border border-cu-brandy/25 bg-cu-brandy/6 p-5 md:p-6 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-3">Choosing a build for GoHighLevel</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Every variant is labelled — <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">HEADER-A</code>,{" "}
          <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded">FOOTER-B</code>, and so on. Name a header,
          a footer, and a build (dark or light) and the paste-ready HTML + CSS gets added
          to this section, sized for a GoHighLevel custom-code block.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          One thing to settle at the same time: the logo needs a permanent public URL. These
          previews use{" "}
          <code className="text-cu-brandy text-xs px-1 py-0.5 bg-muted rounded break-all">{LOGO_URL}</code>{" "}
          which works, but hosting it in GoHighLevel's own media library is the more durable
          choice for mail that stays in circulation.
        </p>
      </div>
    </section>
  );
}
