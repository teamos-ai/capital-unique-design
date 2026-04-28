import React from "react";

const displayScale = [
  { label: "5xl · 96px",  style: { fontSize: "96px", lineHeight: 1.0 },   sample: "Capital Intelligently Applied." },
  { label: "4xl · 72px",  style: { fontSize: "72px", lineHeight: 1.05 },  sample: "Section Heading" },
  { label: "3xl · 60px",  style: { fontSize: "60px", lineHeight: 1.1 },   sample: "Built for those who think differently" },
  { label: "2xl · 48px",  style: { fontSize: "48px", lineHeight: 1.15 },  sample: "For borrowers seeking finance" },
  { label: "xl · 32px",   style: { fontSize: "32px", lineHeight: 1.2 },   sample: "For investors seeking returns" },
  { label: "lg · 24px",   style: { fontSize: "24px", lineHeight: 1.25 },  sample: "Step heading / card title" },
];

const bodyScale = [
  { label: "md · 20px",   style: { fontSize: "20px", lineHeight: 1.6 },   sample: "We provide non-bank lending for complex scenarios where traditional finance falls short." },
  { label: "base · 18px", style: { fontSize: "18px", lineHeight: 1.6 },   sample: "Capital Unique exists where traditional banking ends. We understand complex commercial deals, unconventional scenarios, and the investors who fund them." },
  { label: "sm · 16px",   style: { fontSize: "16px", lineHeight: 1.6 },   sample: "Fast decisions on deals banks decline, with transparent terms and no unnecessary friction." },
  { label: "xs · 14px",   style: { fontSize: "14px", lineHeight: 1.5 },   sample: "Caption and secondary information. © 2026 Capital Unique. All rights reserved." },
  { label: "2xs · 12px",  style: { fontSize: "12px", lineHeight: 1.5 },   sample: "Fine print · metadata · timestamps · legal notices" },
];

const eyebrowScale = [
  { label: "eyebrow-lg · 14px", style: { fontSize: "14px", letterSpacing: "0.12em" }, sample: "THE PROCESS" },
  { label: "eyebrow · 12px",    style: { fontSize: "12px", letterSpacing: "0.14em" }, sample: "APPROACH · BORROWERS · INVESTORS" },
];

export function TypographySection() {
  return (
    <section id="typography">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Foundation</p>
        <h2 className="text-[#F2F2F2] mb-3">Typography</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          <strong className="text-[#DC9C6C]">Display:</strong> Montserrat 700 / 800 &nbsp;·&nbsp;
          <strong className="text-[#DC9C6C]">Body:</strong> Inter 400 / 500 / 600 &nbsp;·&nbsp;
          <strong className="text-[#DC9C6C]">Eyebrow:</strong> Montserrat 600 uppercase + wide tracking.
          Scale is Major Third (1.25×). Minimum body size 14px.
        </p>
      </div>

      {/* Display */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Display — Montserrat Bold / ExtraBold</h4>
        <div className="space-y-0 border-t border-white/6">
          {displayScale.map((row) => (
            <div key={row.label} className="flex items-baseline gap-6 py-4 border-b border-white/6">
              <span className="font-mono text-xs text-[#525252] w-28 shrink-0">{row.label}</span>
              <span
                className="text-[#F2F2F2] overflow-hidden"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, ...row.style }}
              >
                {row.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Body — Inter Regular / Medium</h4>
        <div className="space-y-0 border-t border-white/6">
          {bodyScale.map((row) => (
            <div key={row.label} className="flex items-baseline gap-6 py-4 border-b border-white/6">
              <span className="font-mono text-xs text-[#525252] w-28 shrink-0">{row.label}</span>
              <span className="text-[#B5B5B5]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, ...row.style }}>
                {row.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Eyebrow */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Eyebrow — Montserrat SemiBold + Uppercase</h4>
        <div className="space-y-0 border-t border-white/6">
          {eyebrowScale.map((row) => (
            <div key={row.label} className="flex items-baseline gap-6 py-4 border-b border-white/6">
              <span className="font-mono text-xs text-[#525252] w-28 shrink-0">{row.label}</span>
              <span
                className="text-[#CD722D]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, textTransform: "uppercase", ...row.style }}
              >
                {row.sample}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pairings */}
      <div className="mb-6">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Live Pairings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#111111] border border-white/8 rounded-xl p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-3">Borrowers</p>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: 1.15 }} className="text-[#F2F2F2] mb-4">
              For borrowers seeking finance
            </h3>
            <p className="text-[#878787] leading-relaxed" style={{ fontSize: "18px" }}>
              Fast decisions on deals banks decline, with transparent terms and no unnecessary friction.
            </p>
          </div>
          <div className="bg-[#1A1A1A] border border-white/8 rounded-xl p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-3">Investors</p>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: 1.15 }} className="text-[#F2F2F2] mb-4">
              Deploy capital with structure and control
            </h3>
            <p className="text-[#878787] leading-relaxed" style={{ fontSize: "18px" }}>
              Structured opportunities with clear governance, managed risk, and meaningful partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}