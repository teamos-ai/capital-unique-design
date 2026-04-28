import React from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

// Vault card – photo variant
function VaultCardPhoto({ eyebrow, title, body, imageSrc }: {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
}) {
  return (
    <article className="group relative rounded-xl overflow-hidden border border-white/8 bg-[#111111]
      hover:border-[#CD722D]/30 transition-all duration-300 cursor-pointer"
    >
      {/* Brandy Punch top glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD722D] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] block mb-2">{eyebrow}</span>
        <h3 className="text-[#F2F2F2] mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.25 }}>
          {title}
        </h3>
        <p className="text-[#878787] text-sm leading-relaxed mb-5">{body}</p>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-[#CD722D] hover:text-[#DC9C6C] transition-colors">
          Explore
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}

// Vault card – icon variant
function VaultCardIcon({ eyebrow, title, body, icon }: {
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="group relative rounded-xl p-6 border border-white/8 bg-[#111111]
      hover:border-[#CD722D]/30 transition-all duration-300 cursor-pointer">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD722D] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 rounded-lg bg-[#CD722D]/10 border border-[#CD722D]/25 flex items-center justify-center text-[#CD722D] mb-5">
        {icon}
      </div>
      <span className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] block mb-2">{eyebrow}</span>
      <h3 className="text-[#F2F2F2] mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.25 }}>
        {title}
      </h3>
      <p className="text-[#878787] text-sm leading-relaxed mb-5">{body}</p>
      <button className="inline-flex items-center gap-2 text-sm font-medium text-[#CD722D] hover:text-[#DC9C6C] transition-colors">
        Explore
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </article>
  );
}

// Horizontal card
function VaultCardHorizontal({ eyebrow, title, body, imageSrc }: {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
}) {
  return (
    <article className="group relative rounded-xl overflow-hidden border border-white/8 bg-[#111111]
      hover:border-[#CD722D]/30 transition-all duration-300 flex cursor-pointer">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD722D] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="w-2/5 relative overflow-hidden shrink-0">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]" />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] block mb-2">{eyebrow}</span>
        <h3 className="text-[#F2F2F2] mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.25 }}>
          {title}
        </h3>
        <p className="text-[#878787] text-sm leading-relaxed mb-4">{body}</p>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-[#CD722D] hover:text-[#DC9C6C] transition-colors">
          Explore <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </article>
  );
}

// Testimonial card
function TestimonialCard({ quote, name, role, rating }: { quote: string; name: string; role: string; rating: number }) {
  return (
    <article className="rounded-xl p-6 border border-white/8 bg-[#111111]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "#CD722D" : "#222222"}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <p className="text-[#B5B5B5] text-sm leading-relaxed mb-5 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#CD722D]/15 border border-[#CD722D]/30 flex items-center justify-center text-[#CD722D] font-semibold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-[#F2F2F2] text-sm font-semibold">{name}</p>
          <p className="text-[#525252] text-xs">{role}</p>
        </div>
      </div>
    </article>
  );
}

// Process step card
function StepCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <article className="relative rounded-xl p-6 border border-white/8 bg-[#111111]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#CD722D] to-transparent" />
      <span className="font-mono text-xs text-[#CD722D] font-semibold mb-3 block">{num}</span>
      <h4 className="text-[#F2F2F2] font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>{title}</h4>
      <p className="text-[#878787] text-sm leading-relaxed">{body}</p>
    </article>
  );
}

// Stat card
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-xl p-6 border border-white/8 bg-[#111111] text-center">
      <p className="text-[#CD722D] mb-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "48px", lineHeight: 1 }}>{value}</p>
      <p className="text-[#878787] text-sm">{label}</p>
    </article>
  );
}

export function CardsSection() {
  return (
    <section id="cards">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Components</p>
        <h2 className="text-[#F2F2F2] mb-3">Cards — Vault Variant</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          All cards use pure dark surfaces, 1px cool-white border, and Brandy Punch top-edge glow on hover. Photo cards include a cinematic vignette. Hover states reveal the warm accent line at the card crown.
        </p>
      </div>

      {/* Photo cards */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Photo Card — Vertical</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <VaultCardPhoto
            eyebrow="Borrowers"
            title="For borrowers seeking finance"
            body="Fast decisions on deals banks decline, with transparent terms and no unnecessary friction."
            imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
          />
          <VaultCardPhoto
            eyebrow="Investors"
            title="Deploy capital with structure and control"
            body="Structured opportunities with clear governance, managed risk, and meaningful partnerships."
            imageSrc="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
          />
          <VaultCardPhoto
            eyebrow="Strategy"
            title="Capital designed around your decisions"
            body="We don't fit you into existing boxes. We build around your structure, timeline, and goals."
            imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
          />
        </div>
      </div>

      {/* Icon cards */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Icon Card — Feature</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <VaultCardIcon
            eyebrow="Clarity"
            title="Intelligent, discreet, reliable"
            body="We move quietly, think carefully, and deliver with precision on every engagement."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>}
          />
          <VaultCardIcon
            eyebrow="Speed"
            title="Capital when banks say no"
            body="Fast assessment on deals others decline. We move with conviction, not committees."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
          />
          <VaultCardIcon
            eyebrow="Structure"
            title="Governance without bureaucracy"
            body="Clear terms, structured returns, and a partnership approach to every transaction."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>}
          />
        </div>
      </div>

      {/* Horizontal cards */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Horizontal Card</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VaultCardHorizontal
            eyebrow="For borrowers"
            title="Strategic capital for complex decisions"
            body="Non-bank lending for commercial, development, and bridging scenarios."
            imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
          />
          <VaultCardHorizontal
            eyebrow="For investors"
            title="Structured opportunities for serious investors"
            body="Disciplined returns with institutional-grade deal management and reporting."
            imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
          />
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Testimonial Card</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TestimonialCard
            quote="Capital Unique moved faster than any lender I've worked with. Complex deal — resolved in 72 hours."
            name="Michael Chen"
            role="Property Developer · Sydney"
            rating={5}
          />
          <TestimonialCard
            quote="Finally a lender that understands nuance. They read the deal, not just the spreadsheet."
            name="Sarah Williams"
            role="Private Investor · Melbourne"
            rating={5}
          />
          <TestimonialCard
            quote="Structured, transparent, and genuinely smart. Exactly what the market was missing."
            name="James Thornton"
            role="Fund Manager · Brisbane"
            rating={5}
          />
        </div>
      </div>

      {/* Process step cards */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Process Step Card</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StepCard num="01" title="Understand the deal" body="We review your scenario thoroughly, asking the right questions from the start." />
          <StepCard num="02" title="Assess options" body="Multiple pathways evaluated for structure, risk, and return alignment." />
          <StepCard num="03" title="Confirm terms" body="Clear, transparent term sheets with no hidden conditions or ambiguous language." />
          <StepCard num="04" title="Deploy funding" body="Capital deployed efficiently once conditions are met. No unnecessary delays." />
        </div>
      </div>

      {/* Stat cards */}
      <div className="mb-4">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Stat / KPI Card</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="$2.4B+" label="Capital deployed" />
          <StatCard value="72h" label="Average decision time" />
          <StatCard value="98%" label="Client satisfaction rate" />
          <StatCard value="340+" label="Deals completed" />
        </div>
      </div>
    </section>
  );
}
