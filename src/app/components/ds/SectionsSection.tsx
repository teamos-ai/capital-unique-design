import React from "react";
import logoRect from "../../../imports/Logo_Retangle_Long.png";

// Trust/logo strip
function TrustStrip() {
  const partners = ["BlackRock", "Vanguard", "Macquarie", "ANZ Private", "CBRE", "JLL"];
  return (
    <div className="bg-cu-neutral-lightest py-10 px-8 rounded-xl border border-black/8">
      <p className="text-center text-sm font-semibold text-muted-foreground mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
        Trusted by Australia's most discerning investors
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {partners.map((p) => (
          <span key={p} className="text-sm font-semibold text-cu-neutral-light tracking-wide">{p}</span>
        ))}
      </div>
    </div>
  );
}

// Hero section — flat surface, type carries the weight (no decorative gradient + glow stack).
function HeroSection() {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-12 min-h-[320px] flex items-center border"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="relative z-10 max-w-xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-4">Hero · Dark variant</p>
        <h1 className="text-foreground mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: "60px", lineHeight: 1.04, letterSpacing: "-0.025em" }}>
          Capital, without the<br />constraints of banks.
        </h1>
        <p className="text-cu-neutral-light mb-8" style={{ fontSize: "18px", lineHeight: 1.65, maxWidth: "44ch" }}>
          Non-bank lending for complex scenarios where traditional finance falls short.
        </p>
        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center px-7 py-3 rounded-md font-medium text-white cursor-pointer bg-cu-brandy hover:bg-cu-brandy-light transition-colors duration-200">
            Borrow
          </button>
          <button className="inline-flex items-center justify-center px-7 py-3 rounded-md font-medium text-foreground cursor-pointer border border-border hover:border-cu-brandy/50 hover:text-cu-brandy-light transition-colors duration-200">
            Fund
          </button>
        </div>
      </div>
    </div>
  );
}

// CTA dark — single Inkwell-tinted surface, no decorative glow.
function CtaDark() {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-12 text-center border"
      style={{ background: "var(--cu-surface-vault)", borderColor: "var(--border)" }}
    >
      <div className="relative z-10">
        <h2 className="text-foreground mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: "48px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Ready to move forward
        </h2>
        <p className="text-cu-neutral-light mb-8 max-w-md mx-auto" style={{ lineHeight: 1.65 }}>
          Tell us about your scenario. A specialist will respond within one business day.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-md font-medium text-white cursor-pointer bg-cu-brandy hover:bg-cu-brandy-light transition-colors duration-200">
            Get in touch
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-md font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-200">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

// How funding works
function ProcessSection() {
  const steps = [
    { n: "01", title: "Understand the deal", body: "We review your scenario thoroughly — not just the numbers, but the full context." },
    { n: "02", title: "Assess options",        body: "Multiple pathways evaluated for structure, risk, and return alignment." },
    { n: "03", title: "Confirm terms",         body: "Clear, transparent term sheets. No hidden conditions or ambiguous language." },
    { n: "04", title: "Deploy funding",        body: "Capital deployed efficiently once conditions are met. No unnecessary delays." },
  ];
  return (
    <div className="bg-background rounded-xl p-8 border border-white/6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-xs font-medium text-cu-brandy mb-3">Process</p>
          <h2 className="text-foreground mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 800, fontSize: "36px", lineHeight: 1.15 }}>
            How funding works
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our process is designed to respect your time and your intelligence. No unnecessary back-and-forth, no ambiguity.
          </p>
          <div className="flex gap-3">
            <button
              className="px-5 py-2.5 rounded-md bg-cu-brandy text-white text-sm font-medium cursor-pointer hover:bg-cu-brandy-light transition-colors" >
              Get in touch
            </button>
            <button className="px-5 py-2.5 rounded-md border border-white/10 text-muted-foreground text-sm font-medium cursor-pointer hover:text-foreground transition-colors">
              Compare
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex items-baseline gap-4">
              <span
                className="text-cu-brandy/70 shrink-0"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "20px", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
              >
                {s.n}
              </span>
              <div>
                <p className="text-foreground text-sm font-semibold mb-1" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{s.title}</p>
                <p className="text-muted-foreground text-xs" style={{ lineHeight: 1.65 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionsSection() {
  return (
    <section id="sections" aria-labelledby="sections-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Patterns</p>
        <h2 id="sections-heading" className="text-foreground mb-3">Page Sections</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Assembled section patterns. Heroes and CTAs are flat surfaces — no decorative gradient + glow stacks; type and a single accent carry the weight. The Trust strip lives on the light surface as a deliberate scene change before the dark CTA closes the page.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-mono text-xs text-cu-neutral mb-2">Hero — dark variant</p>
          <HeroSection />
        </div>
        <div>
          <p className="font-mono text-xs text-cu-neutral mb-2">Trust strip — light variant</p>
          <TrustStrip />
        </div>
        <div>
          <p className="font-mono text-xs text-cu-neutral mb-2">How funding works — process section</p>
          <ProcessSection />
        </div>
        <div>
          <p className="font-mono text-xs text-cu-neutral mb-2">CTA — Vault surface, no decorative glow</p>
          <CtaDark />
        </div>
      </div>
    </section>
  );
}
