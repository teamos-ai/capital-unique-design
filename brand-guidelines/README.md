# Brand Guidelines PDF

The public-facing brand book — the document journalists, partners, and
marketing agencies get when they need to represent Capital Unique. It is served
from the website's press page as **Brand guidelines (PDF)**.

- **Source:** `brand-guidelines.html`
- **Built:** `capital-unique-brand-guidelines.pdf` (13pp, A4 portrait)
- **Published at:** `https://www.capitalunique.com/brand/capital-unique-brand-guidelines.pdf`

## Rebuilding

```bash
node brand-guidelines/build.mjs
```

Needs Chrome (set `CHROME=` to override the default macOS path) and network
access on first run to fetch the two webfonts. The script inlines the fonts and
the four logo PNGs as base64, renders with Chrome's print engine, then asserts
that no fallback font was substituted.

Publishing is a separate step — copy the built PDF into the website repo at
`public/brand/capital-unique-brand-guidelines.pdf` and commit it there.

## Where the content comes from

Everything in the document is derived from what actually ships, not written
from memory. If you change any of these, rebuild the PDF:

| Section | Source of truth |
|---|---|
| Colour palette, surfaces, neutrals | `src/styles/theme.css` |
| Logo lockups, finishes, usage rules | `src/app/components/ds/LogoSection.tsx` |
| Type pairing and both scales | `src/app/components/ds/TypographySection.tsx` |
| Icon tile spec and sizes | `src/app/components/ds/IconographySection.tsx` |
| Contrast pairings | `src/app/components/ds/ColorSection.tsx` |
| Company facts, contact | Website `lib/company-info.js` |
| Compliance and disclaimer wording | Website `app/disclaimer/page.js`, `components/shared/Footer.jsx` |

### OKLCH → hex

`theme.css` defines the three accent families in OKLCH. Print and third-party
tooling need hex, so the PDF documents the resolved sRGB values:

| Token | Hex |
|---|---|
| `--cu-brandy-punch` | `#C56A31` |
| `--cu-inkwell` | `#2C628D` |
| `--cu-amber` | `#D8B349` |

These were resolved by rasterising each colour through Chrome's own engine, so
they match what the site renders exactly.

> **Note:** the comment beside `--cu-brandy-punch` in `theme.css` describes it as
> "#CD722D-equiv". That is not the value it resolves to — `oklch(0.62 0.135 50)`
> renders as `#C56A31`. The PDF documents the value that actually ships. Worth
> correcting the comment, or the token, depending on which was intended.

## Known gap carried into the document

The brand deck approves four logo colour pairings, but only two rectangle
lockups exist as artwork — a silver lockup with a white wordmark, and a bronze
lockup with a black wordmark, are missing. The PDF names this openly rather than
implying the full set is available. Once the artwork exists, update page 4 and
the ground-dependency rule that follows from it.
