import React from "react";

/* Display scale: perfect-fourth (1.333×) cadence rounded to clean values.
   80 → 60 → 45 → 34 → 25 → 19. Labels show the actual rendered px. */
const displayScale = [
  { label: "5xl · 80px", style: { fontSize: "80px", lineHeight: 1.02 }, sample: "Capital Intelligently Applied." },
  { label: "4xl · 60px", style: { fontSize: "60px", lineHeight: 1.05 }, sample: "Section Heading" },
  { label: "3xl · 45px", style: { fontSize: "45px", lineHeight: 1.1  }, sample: "Built for those who think differently" },
  { label: "2xl · 34px", style: { fontSize: "34px", lineHeight: 1.15 }, sample: "For borrowers seeking finance" },
  { label: "xl · 25px",  style: { fontSize: "25px", lineHeight: 1.2  }, sample: "For investors seeking returns" },
  { label: "lg · 19px",  style: { fontSize: "19px", lineHeight: 1.3  }, sample: "Step heading / card title" },
];

/* Body scale: major-second (1.125×) cadence. 14px is the floor (used for meta only). */
const bodyScale = [
  { label: "md · 20px",   style: { fontSize: "20px", lineHeight: 1.65 }, sample: "We provide non-bank lending for complex scenarios where traditional finance falls short." },
  { label: "base · 18px", style: { fontSize: "18px", lineHeight: 1.65 }, sample: "Capital Unique exists where traditional banking ends. We understand complex commercial deals, unconventional scenarios, and the investors who fund them." },
  { label: "sm · 16px",   style: { fontSize: "16px", lineHeight: 1.65 }, sample: "Fast decisions on deals banks decline, with transparent terms and no unnecessary friction." },
  { label: "xs · 14px",   style: { fontSize: "14px", lineHeight: 1.55 }, sample: "Meta and footnotes. Floor for legible body text. © 2026 Capital Unique. All rights reserved." },
];

const eyebrowScale = [
  { label: "eyebrow-lg · 14px", style: { fontSize: "14px", letterSpacing: "0.12em" }, sample: "THE PROCESS" },
  { label: "eyebrow · 12px",    style: { fontSize: "12px", letterSpacing: "0.14em" }, sample: "APPROACH · BORROWERS · INVESTORS" },
];

export function TypographySection() {
  return (
    <section id="typography" aria-labelledby="typography-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Foundation</p>
        <h2 id="typography-heading" className="text-foreground mb-3">Typography</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          <strong className="text-cu-brandy-light">Display:</strong> Source Serif 4 (opsz 8–60) 600 / 700 &nbsp;·&nbsp;
          <strong className="text-cu-brandy-light">Body:</strong> Public Sans 400 / 500 / 600 &nbsp;·&nbsp;
          <strong className="text-cu-brandy-light">Eyebrow:</strong> Public Sans 600 uppercase + wide tracking, reserved for section headers.
          Display follows a perfect-fourth (1.333×) cadence; body steps a major-second (1.125×). Body floor is 14px (for meta/footnotes); 16px is the comfortable reading default.
        </p>
      </div>

      {/* Display */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Display — Source Serif 4 SemiBold / Bold</h4>
        <div className="space-y-0 border-t border-white/6">
          {displayScale.map((row) => (
            <div key={row.label} className="flex items-baseline gap-6 py-4 border-b border-white/6">
              <span className="font-mono text-xs text-cu-neutral w-28 shrink-0">{row.label}</span>
              <span
                className="text-foreground overflow-hidden"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, ...row.style }}
              >
                {row.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Body — Public Sans Regular / Medium</h4>
        <div className="space-y-0 border-t border-white/6">
          {bodyScale.map((row) => (
            <div key={row.label} className="flex items-baseline gap-6 py-4 border-b border-white/6">
              <span className="font-mono text-xs text-cu-neutral w-28 shrink-0">{row.label}</span>
              <span className="text-cu-neutral-light" style={{ fontFamily: "'Public Sans', system-ui, sans-serif", fontWeight: 400, ...row.style }}>
                {row.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Eyebrow */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Eyebrow — Public Sans SemiBold + Uppercase</h4>
        <div className="space-y-0 border-t border-white/6">
          {eyebrowScale.map((row) => (
            <div key={row.label} className="flex items-baseline gap-6 py-4 border-b border-white/6">
              <span className="font-mono text-xs text-cu-neutral w-28 shrink-0">{row.label}</span>
              <span
                className="text-cu-brandy"
                style={{ fontFamily: "'Public Sans', system-ui, sans-serif", fontWeight: 600, textTransform: "uppercase", ...row.style }}
              >
                {row.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pairings */}
      <div className="mb-6">
        <h4 className="text-muted-foreground text-xs font-semibold mb-5">Live Pairings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-white/8 rounded-xl p-8">
            <p className="text-xs font-medium text-cu-brandy mb-3">Borrowers</p>
            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "32px", lineHeight: 1.15 }} className="text-foreground mb-4">
              For borrowers seeking finance
            </h3>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "18px" }}>
              Fast decisions on deals banks decline, with transparent terms and no unnecessary friction.
            </p>
          </div>
          <div className="bg-cu-surface-char border border-white/8 rounded-xl p-8">
            <p className="text-xs font-medium text-cu-brandy mb-3">Investors</p>
            <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "32px", lineHeight: 1.15 }} className="text-foreground mb-4">
              Deploy capital with structure and control
            </h3>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "18px" }}>
              Structured opportunities with clear governance, managed risk, and meaningful partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}