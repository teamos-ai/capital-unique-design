import React from "react";
import logoSquareBronze from "../../../imports/Logo_Square.png";
import logoSquareSilver from "../../../imports/Logo_Square_Silver.png";
import logoRectBronze   from "../../../imports/Logo_Retangle_Long.png";
import logoRectSilver   from "../../../imports/Logo_Rectangle_Long_Silver.png";

/* ─────────────────────────────────────────────────────────────────────
   BRAND LOGO — theme-adaptive.

     dark ground  → bronze coin  + white wordmark
     light ground → silver/navy coin + black wordmark

   This swap is required, not cosmetic. The wordmark colour is baked into
   each PNG: the bronze lockup's wordmark is white, so on a light surface
   it disappears entirely. The logo-color-specimen sheet in the brand deck
   approves all four coin/ground pairings — the constraint is the wordmark,
   which must contrast with whatever it sits on.

   Swapped in CSS rather than JS so no component needs the theme in state.
   The `dark:` variant resolves to `&:is(.dark *)`, which outranks the
   base display utility on specificity, so exactly one image is displayed
   and the other is `display:none` (and therefore out of the a11y tree —
   both may safely carry the same alt text).
───────────────────────────────────────────────────────────────────── */

export type LogoVariant = "square" | "rect";
export type LogoFinish = "bronze" | "silver";

export const LOGO_SRC: Record<LogoVariant, Record<LogoFinish, string>> = {
  square: { bronze: logoSquareBronze, silver: logoSquareSilver },
  rect:   { bronze: logoRectBronze,   silver: logoRectSilver },
};

/* Absolute URLs for anywhere a bundler path won't resolve (email, Figma). */
const RAW_BASE = "https://raw.githubusercontent.com/teamos-ai/capital-unique-design/main/src/imports";
export const LOGO_URL: Record<LogoVariant, Record<LogoFinish, string>> = {
  square: {
    bronze: `${RAW_BASE}/Logo_Square.png`,
    silver: `${RAW_BASE}/Logo_Square_Silver.png`,
  },
  rect: {
    bronze: `${RAW_BASE}/Logo_Retangle_Long.png`,
    silver: `${RAW_BASE}/Logo_Rectangle_Long_Silver.png`,
  },
};

export function BrandLogo({
  variant = "square",
  className = "",
  style,
  alt = "Capital Unique",
}: {
  variant?: LogoVariant;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}) {
  const src = LOGO_SRC[variant];
  return (
    <>
      <span className="inline-flex dark:hidden">
        <img src={src.silver} alt={alt} className={className} style={style} />
      </span>
      <span className="hidden dark:inline-flex">
        <img src={src.bronze} alt={alt} className={className} style={style} />
      </span>
    </>
  );
}
