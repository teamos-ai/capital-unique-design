import React from "react";

const badgeVariants = [
  { label: "Primary",     bg: "bg-cu-brandy/20",        text: "text-cu-brandy-light",   border: "border-cu-brandy/40" },
  { label: "Inkwell",     bg: "bg-cu-inkwell/20",       text: "text-cu-inkwell-light",  border: "border-cu-inkwell/40" },
  { label: "Warning",     bg: "bg-cu-amber/15",         text: "text-cu-amber-light",    border: "border-cu-amber/35" },
  { label: "Muted",       bg: "bg-cu-surface-char",     text: "text-muted-foreground",  border: "border-white/8" },
  { label: "Outline",     bg: "bg-white/5",             text: "text-foreground",        border: "border-white/15" },
  { label: "Success",     bg: "bg-emerald-900/25",      text: "text-emerald-300",       border: "border-emerald-800/40" },
  { label: "Destructive", bg: "bg-destructive/20",      text: "text-destructive-foreground", border: "border-destructive/40" },
];

const tagExamples = [
  "Development Finance", "Bridging Loan", "Commercial", "Residential",
  "High Net Worth", "Institutional", "Private Credit", "1st Mortgage",
];

function Badge({ variant }: { variant: typeof badgeVariants[0] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variant.bg} ${variant.text} ${variant.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        variant.label === "Success" ? "bg-emerald-400" :
        variant.label === "Destructive" ? "bg-destructive" :
        "bg-current"
      }`} />
      {variant.label}
    </span>
  );
}

export function BadgesSection() {
  return (
    <section id="badges" aria-labelledby="badges-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Components</p>
        <h2 id="badges-heading" className="text-foreground mb-3">Badges, Tags & Pills</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Categorical and status labels. Brand badges draw from Brandy Punch (primary), Inkwell (cool counter-tone), and Amber (warning). Success and destructive states map to their semantic tokens — there's no separate "warning" variant; Amber handles it.
        </p>
      </div>

      {/* Status badges */}
      <div className="mb-8">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Status Badges</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="flex flex-wrap gap-3">
            {badgeVariants.map((v) => (
              <Badge key={v.label} variant={v} />
            ))}
          </div>
        </div>
      </div>

      {/* Size variants */}
      <div className="mb-8">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Badge Sizes</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-cu-brandy/20 text-cu-brandy-light border border-cu-brandy/40">XS Badge</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-cu-brandy/20 text-cu-brandy-light border border-cu-brandy/40">SM Badge</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-cu-brandy/20 text-cu-brandy-light border border-cu-brandy/40">MD Badge</span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-semibold bg-cu-brandy/20 text-cu-brandy-light border border-cu-brandy/40">LG Badge</span>
          </div>
        </div>
      </div>

      {/* Eyebrow tags */}
      <div className="mb-8">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Content Tags — Filterable</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="flex flex-wrap gap-2">
            {tagExamples.map((t) => (
              <button
                key={t}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-white/10 text-muted-foreground
                  hover:border-cu-brandy/40 hover:text-cu-brandy transition-colors cursor-pointer bg-cu-surface-char"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pills for tab-like navigation */}
      <div className="mb-8">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Pill Navigation</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="inline-flex gap-1 p-1 bg-background rounded-lg border border-white/6">
            {["All", "Borrowers", "Investors", "Guides"].map((p, i) => (
              <button
                key={p}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer
                  ${i === 0 ? "bg-cu-brandy text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article meta pattern */}
      <div className="mb-4">
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">Article / Guide Meta Pattern</h4>
        <div className="bg-card border border-white/8 rounded-xl p-6">
          <div className="flex flex-col gap-4">
            {[
              { type: "Borrower", readTime: "5 min read", tag: "Guides" },
              { type: "Investor", readTime: "8 min read", tag: "Essential Reading" },
              { type: "Borrower", readTime: "3 min read", tag: "Calculators" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-medium text-cu-brandy">{item.type}</span>
                <span className="w-1 h-1 rounded-full bg-cu-neutral-dark" />
                <span className="text-xs text-muted-foreground font-mono">{item.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-cu-neutral-dark" />
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cu-surface-char text-muted-foreground border border-white/8">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
