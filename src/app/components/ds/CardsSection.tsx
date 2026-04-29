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
    <article className="group relative rounded-xl overflow-hidden border border-border bg-card
      transition-colors duration-300 cursor-pointer hover:bg-cu-surface-vault"
    >
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        {/* Photo card hover: vignette deepens (its differentiated treatment) */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-cu-brandy block mb-2">{eyebrow}</span>
        <h3 className="text-foreground mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.25 }}>
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{body}</p>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-cu-brandy hover:text-cu-brandy-light transition-colors">
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
    <article className="group relative rounded-xl p-6 border border-border bg-card
      transition-colors duration-300 cursor-pointer hover:bg-cu-surface-vault">
      {/* Icon card hover: icon plate fills with brandy (its differentiated treatment) */}
      <div className="w-12 h-12 rounded-lg bg-cu-brandy/10 border border-cu-brandy/25 flex items-center justify-center text-cu-brandy mb-5
        transition-colors duration-300 group-hover:bg-cu-brandy group-hover:text-cu-neutral-darkest group-hover:border-cu-brandy">
        {icon}
      </div>
      <span className="text-xs font-medium text-cu-brandy block mb-2">{eyebrow}</span>
      <h3 className="text-foreground mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.25 }}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{body}</p>
      <button className="inline-flex items-center gap-2 text-sm font-medium text-cu-brandy hover:text-cu-brandy-light transition-colors">
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
    <article className="group relative rounded-xl overflow-hidden border border-border bg-card
      transition-colors duration-300 flex cursor-pointer hover:bg-cu-surface-vault">
      <div className="w-2/5 relative overflow-hidden shrink-0">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] absolute inset-0"
        />
        {/* Horizontal card hover: gradient sharpens (its differentiated treatment) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card transition-opacity duration-500 opacity-95 group-hover:opacity-100" />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <span className="text-xs font-medium text-cu-brandy block mb-2">{eyebrow}</span>
        <h3 className="text-foreground mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.25 }}>
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{body}</p>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-cu-brandy hover:text-cu-brandy-light transition-colors">
          Explore <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </article>
  );
}

// Testimonial card
function TestimonialCard({ quote, name, role, rating }: { quote: string; name: string; role: string; rating: number }) {
  return (
    <article className="rounded-xl p-6 border border-white/8 bg-card">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "var(--cu-brandy-punch)" : "var(--muted)"}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <p className="text-cu-neutral-light text-sm leading-relaxed mb-5 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cu-brandy/15 border border-cu-brandy/30 flex items-center justify-center text-cu-brandy font-semibold text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-foreground text-sm font-semibold">{name}</p>
          <p className="text-cu-neutral text-xs">{role}</p>
        </div>
      </div>
    </article>
  );
}

// Process step card — number leads, no decorative stripe.
function StepCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <article className="group relative rounded-xl p-6 border border-border bg-card hover:bg-cu-surface-vault transition-colors duration-300">
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="text-cu-brandy/60 group-hover:text-cu-brandy transition-colors duration-300"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "32px", lineHeight: 1 }}
        >
          {num}
        </span>
        <h4 className="text-foreground font-semibold" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "17px", lineHeight: 1.3 }}>
          {title}
        </h4>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed pl-[3.4rem]">{body}</p>
    </article>
  );
}

// Headline stat — single, with context. Replaces the banned hero-metric 4-up grid.
function HeadlineStat({ value, label, context }: { value: string; label: string; context: string }) {
  return (
    <article className="rounded-xl p-8 border border-border bg-card flex flex-col gap-4 max-w-2xl">
      <div className="flex items-baseline gap-4 flex-wrap">
        <p
          className="text-foreground"
          style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: "64px", lineHeight: 0.95, letterSpacing: "-0.02em" }}
        >
          {value}
        </p>
        <p className="text-cu-brandy text-xs font-semibold tracking-widest uppercase">{label}</p>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-md" style={{ lineHeight: 1.65 }}>
        {context}
      </p>
    </article>
  );
}

export function CardsSection() {
  return (
    <section id="cards" aria-labelledby="cards-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Components</p>
        <h2 id="cards-heading" className="text-foreground mb-3">Cards</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Cards live one step above the page on the Vault surface. Each variant has its own hover treatment so the kind of card matters: photos deepen their vignette, icon plates fill with Brandy, horizontals sharpen their image mask, step numbers brighten. Cards never share one trick.
        </p>
      </div>

      {/* Photo cards */}
      <div className="mb-10">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Photo Card — Vertical</h4>
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
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Icon Card — Feature</h4>
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
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Horizontal Card</h4>
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
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Testimonial Card</h4>
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
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Process Step Card</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StepCard num="01" title="Understand the deal" body="We review your scenario thoroughly, asking the right questions from the start." />
          <StepCard num="02" title="Assess options" body="Multiple pathways evaluated for structure, risk, and return alignment." />
          <StepCard num="03" title="Confirm terms" body="Clear, transparent term sheets with no hidden conditions or ambiguous language." />
          <StepCard num="04" title="Deploy funding" body="Capital deployed efficiently once conditions are met. No unnecessary delays." />
        </div>
      </div>

      {/* Headline stat — replaces 4-up hero-metric template (impeccable anti-pattern). */}
      <div className="mb-4">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Headline Stat</h4>
        <HeadlineStat
          value="$2.4B+"
          label="Capital deployed"
          context="Across 340+ structured deals since 2019. Average decision time 72 hours, with a 98% client satisfaction rate measured at deal close."
        />
      </div>

    </section>
  );
}
