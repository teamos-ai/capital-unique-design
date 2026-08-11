/* ─────────────────────────────────────────────────────────────────────
   EMAIL TOKENS — pure values, no React, no bundler asset imports.

   Split out from kit.tsx so the HTML generator can import the same
   palette. The generator runs under plain Node (via esbuild) to write
   email-templates/html/, and also runs in the browser behind the
   "Copy HTML" buttons — neither can pull in JSX or a PNG import.

   kit.tsx composes these into the Palette the React previews use.
───────────────────────────────────────────────────────────────────── */

export type Scheme = "dark" | "light";

export interface Colors {
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

export const COLORS: Record<Scheme, Colors> = {
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

export const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";
export const SANS  = "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export const BUILD_LABEL: Record<Scheme, string> = {
  dark: "Dark — The Vault",
  light: "Light — Inkwell",
};

/* Every outbound destination, in one place. Changing a URL here changes
   it in the previews and in the generated HTML at the same time.

   SITE_BASE is separated out because the paths below are correct and the
   host is the open question. As at the last check, www.capitalunique.com
   returns a GoHighLevel 404 on every path including "/" — the domain is
   still pointed at GHL rather than at the Vercel deployment of the site,
   where all four of these pages return 200. Swapping the one line below
   to the vercel.app host and re-running the build repoints all eight
   emails; do that only as a stopgap, because a staging URL sent to a
   list lives in those inboxes permanently. The real fix is DNS. */
export const SITE_BASE = "https://www.capitalunique.com";

export const LINKS = {
  contact:     `${SITE_BASE}/contact`,
  guides:      `${SITE_BASE}/guides`,
  freeTools:   `${SITE_BASE}/free-tools`,
  calculators: `${SITE_BASE}/calculators`,
};

/* Absolute logo URLs — email cannot resolve a bundler path. */
const RAW_BASE = "https://raw.githubusercontent.com/teamos-ai/capital-unique-design/main/src/imports";
export const LOGO_ABS: Record<Scheme, string> = {
  dark:  `${RAW_BASE}/Logo_Square.png`,
  light: `${RAW_BASE}/Logo_Square_Silver.png`,
};

/* GoHighLevel merge fields. Confirm against the field picker in the
   sub-account before the first send — GHL's tags vary by version. */
export const MERGE = {
  unsubscribe: "{{unsubscribe_link}}",
  preferences: "{{unsubscribe_link}}",
  browser:     "{{message.web_view_url}}",
};
