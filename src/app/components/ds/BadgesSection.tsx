import React from "react";

const badgeVariants = [
  { label: "Primary",     bg: "bg-[#CD722D]/20",     text: "text-[#DC9C6C]",  border: "border-[#CD722D]/40" },
  { label: "Amber",       bg: "bg-[#FFC400]/15",     text: "text-[#FFC400]",  border: "border-[#FFC400]/30" },
  { label: "Marigold",    bg: "bg-[#BF862A]/20",     text: "text-[#D2AA69]",  border: "border-[#BF862A]/40" },
  { label: "Muted",       bg: "bg-[#1A1A1A]",        text: "text-[#878787]",  border: "border-white/8" },
  { label: "White",       bg: "bg-white/5",           text: "text-[#F2F2F2]",  border: "border-white/15" },
  { label: "Success",     bg: "bg-green-900/30",      text: "text-green-400",  border: "border-green-800/40" },
  { label: "Warning",     bg: "bg-yellow-900/30",     text: "text-yellow-400", border: "border-yellow-800/40" },
  { label: "Destructive", bg: "bg-red-900/30",        text: "text-red-400",    border: "border-red-800/40" },
];

const tagExamples = [
  "Development Finance", "Bridging Loan", "Commercial", "Residential",
  "High Net Worth", "Institutional", "Private Credit", "1st Mortgage",
];

function Badge({ variant }: { variant: typeof badgeVariants[0] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variant.bg} ${variant.text} ${variant.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        variant.label === "Success" ? "bg-green-400" :
        variant.label === "Warning" ? "bg-yellow-400" :
        variant.label === "Destructive" ? "bg-red-400" :
        "bg-current"
      }`} />
      {variant.label}
    </span>
  );
}

export function BadgesSection() {
  return (
    <section id="badges">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Components</p>
        <h2 className="text-[#F2F2F2] mb-3">Badges, Tags & Pills</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Status indicators and categorical labels. Brand accent badges use the Brandy Punch, Amber, and Marigold families. Semantic states map to success/warning/destructive.
        </p>
      </div>

      {/* Status badges */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Status Badges</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="flex flex-wrap gap-3">
            {badgeVariants.map((v) => (
              <Badge key={v.label} variant={v} />
            ))}
          </div>
        </div>
      </div>

      {/* Size variants */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Badge Sizes</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#CD722D]/20 text-[#DC9C6C] border border-[#CD722D]/40">XS Badge</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#CD722D]/20 text-[#DC9C6C] border border-[#CD722D]/40">SM Badge</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-[#CD722D]/20 text-[#DC9C6C] border border-[#CD722D]/40">MD Badge</span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-semibold bg-[#CD722D]/20 text-[#DC9C6C] border border-[#CD722D]/40">LG Badge</span>
          </div>
        </div>
      </div>

      {/* Eyebrow tags */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Content Tags — Filterable</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="flex flex-wrap gap-2">
            {tagExamples.map((t) => (
              <button
                key={t}
                className="px-3 py-1.5 rounded-md text-xs font-medium border border-white/10 text-[#878787]
                  hover:border-[#CD722D]/40 hover:text-[#CD722D] transition-colors cursor-pointer bg-[#1A1A1A]"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pills for tab-like navigation */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Pill Navigation</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="inline-flex gap-1 p-1 bg-[#080808] rounded-lg border border-white/6">
            {["All", "Borrowers", "Investors", "Guides"].map((p, i) => (
              <button
                key={p}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer
                  ${i === 0 ? "bg-[#CD722D] text-white shadow-sm" : "text-[#878787] hover:text-[#F2F2F2]"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article meta pattern */}
      <div className="mb-4">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Article / Guide Meta Pattern</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="flex flex-col gap-4">
            {[
              { type: "Borrower", readTime: "5 min read", tag: "Guides" },
              { type: "Investor", readTime: "8 min read", tag: "Essential Reading" },
              { type: "Borrower", readTime: "3 min read", tag: "Calculators" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#CD722D]">{item.type}</span>
                <span className="w-1 h-1 rounded-full bg-[#525252]" />
                <span className="text-xs text-[#878787] font-mono">{item.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-[#525252]" />
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A1A1A] text-[#878787] border border-white/8">
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
