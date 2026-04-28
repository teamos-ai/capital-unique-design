import React from "react";
import logoRect from "../../../imports/Logo_Retangle_Long.png";

// Trust/logo strip
function TrustStrip() {
  const partners = ["BlackRock", "Vanguard", "Macquarie", "ANZ Private", "CBRE", "JLL"];
  return (
    <div className="bg-[#F2F2F2] py-10 px-8 rounded-xl border border-black/8">
      <p className="text-center text-sm font-semibold text-[#878787] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Trusted by Australia's most discerning investors
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {partners.map((p) => (
          <span key={p} className="text-sm font-semibold text-[#B5B5B5] tracking-wide">{p}</span>
        ))}
      </div>
    </div>
  );
}

// Hero section
function HeroSection() {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-12 min-h-[320px] flex items-center"
      style={{ background: "linear-gradient(135deg, #080808 0%, #1A1A1A 60%, #111111 100%)" }}
    >
      {/* Brandy Punch ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(205,114,45,0.06) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-4">Hero · Dark variant</p>
        <h1 className="text-[#F2F2F2] mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "60px", lineHeight: 1.05 }}>
          Capital, without the constraints of banks.
        </h1>
        <p className="text-[#878787] mb-8 leading-relaxed" style={{ fontSize: "18px" }}>
          We provide non-bank lending for complex scenarios where traditional finance falls short.
        </p>
        <div className="flex gap-4">
          <button
            className="inline-flex items-center justify-center px-7 py-3 rounded-md font-medium text-white cursor-pointer bg-[#CD722D] hover:bg-[#DC9C6C] transition-all duration-150"
            style={{ boxShadow: "0 4px 0 0 #A45B24", fontFamily: "'Inter', sans-serif" }}
          >
            Borrow
          </button>
          <button
            className="inline-flex items-center justify-center px-7 py-3 rounded-md font-medium text-[#F2F2F2] cursor-pointer border border-white/15 hover:border-white/35 transition-all duration-150"
            style={{ boxShadow: "0 4px 0 0 rgba(255,255,255,0.04)", fontFamily: "'Inter', sans-serif" }}
          >
            Fund
          </button>
        </div>
      </div>
    </div>
  );
}

// CTA dark
function CtaDark() {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-12 text-center"
      style={{ background: "linear-gradient(180deg, #080808 0%, #111111 100%)" }}
    >
      {/* Brandy Punch ambient glow from bottom */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(205,114,45,0.08) 0%, transparent 60%)" }} />
      <div className="relative z-10">
        <h2 className="text-[#F2F2F2] mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: 1.1 }}>
          Ready to move forward
        </h2>
        <p className="text-[#878787] mb-8 max-w-sm mx-auto leading-relaxed">
          Tell us about your scenario and a specialist will respond within one business day.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="inline-flex items-center justify-center px-8 py-3 rounded-md font-medium text-white cursor-pointer bg-[#CD722D] hover:bg-[#DC9C6C] transition-all"
            style={{ boxShadow: "0 4px 0 0 #A45B24", fontFamily: "'Inter', sans-serif" }}
          >
            Get in touch
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-md font-medium text-[#878787] cursor-pointer hover:text-[#F2F2F2] transition-colors">
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
    <div className="bg-[#080808] rounded-xl p-8 border border-white/6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-3">Process</p>
          <h2 className="text-[#F2F2F2] mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: 1.15 }}>
            How funding works
          </h2>
          <p className="text-[#878787] leading-relaxed mb-6">
            Our process is designed to respect your time and your intelligence. No unnecessary back-and-forth, no ambiguity.
          </p>
          <div className="flex gap-3">
            <button
              className="px-5 py-2.5 rounded-md bg-[#CD722D] text-white text-sm font-medium cursor-pointer hover:bg-[#DC9C6C] transition-colors"
              style={{ boxShadow: "0 3px 0 0 #A45B24" }}
            >
              Get in touch
            </button>
            <button className="px-5 py-2.5 rounded-md border border-white/10 text-[#878787] text-sm font-medium cursor-pointer hover:text-[#F2F2F2] transition-colors">
              Compare
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="relative pl-6 border-l border-white/8">
              <div className="absolute left-0 top-0 w-px h-full" style={{ background: "linear-gradient(180deg, #CD722D 0%, transparent 100%)" }} />
              <span className="font-mono text-xs text-[#CD722D] font-semibold block mb-1">{s.n}</span>
              <p className="text-[#F2F2F2] text-sm font-semibold mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{s.title}</p>
              <p className="text-[#878787] text-xs leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionsSection() {
  return (
    <section id="sections">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Patterns</p>
        <h2 className="text-[#F2F2F2] mb-3">Page Sections</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Assembled section patterns used across the site. Each section uses the established token system. Scene alternation: dark → light → dark maintains rhythm and contrast.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-mono text-xs text-[#525252] mb-2">Hero — dark variant</p>
          <HeroSection />
        </div>
        <div>
          <p className="font-mono text-xs text-[#525252] mb-2">Trust strip — light variant</p>
          <TrustStrip />
        </div>
        <div>
          <p className="font-mono text-xs text-[#525252] mb-2">How funding works — process section</p>
          <ProcessSection />
        </div>
        <div>
          <p className="font-mono text-xs text-[#525252] mb-2">CTA — dark with ambient Brandy Punch glow</p>
          <CtaDark />
        </div>
      </div>
    </section>
  );
}
