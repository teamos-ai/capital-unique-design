import React, { useState } from "react";

function AnimDemo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
      <p className="font-mono text-xs text-[#525252] mb-4">{label}</p>
      {children}
    </div>
  );
}

function FadeInDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setVisible(!visible)}
        className="self-start px-4 py-2 rounded-md bg-white/6 text-[#CD722D] text-xs font-medium border border-[#CD722D]/20 cursor-pointer"
      >
        {visible ? "Reset" : "Trigger fade-in"}
      </button>
      <div
        className="h-16 rounded-lg bg-white/6 border border-white/12 flex items-center justify-center text-[#CD722D] text-sm font-medium transition-all duration-500"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
      >
        Content revealed
      </div>
    </div>
  );
}

function HoverDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      {["Silver glow", "Scale up", "Border reveal", "Underline"].map((type) => (
        <div
          key={type}
          className={`px-5 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200
            ${type === "Silver glow"   ? "bg-[#111111] border border-white/8 text-[#878787] hover:border-[#CD722D]/30 hover:text-[#CD722D] hover:shadow-[0_0_20px_rgba(205,114,45,0.08)]" : ""}
            ${type === "Scale up"      ? "bg-white/6 border border-white/12 text-[#B4B4B4] hover:scale-105 hover:bg-white/10" : ""}
            ${type === "Border reveal" ? "bg-transparent border border-transparent text-[#878787] hover:border-white/25 hover:text-[#F2F2F2]" : ""}
            ${type === "Underline"     ? "bg-transparent border-b border-transparent text-[#878787] hover:border-white/40 hover:text-[#F2F2F2] rounded-none" : ""}
          `}
        >
          {type}
        </div>
      ))}
    </div>
  );
}

function SkeletonDemo() {
  return (
    <div className="space-y-3">
      <div className="h-4 rounded bg-[#1A1A1A] w-3/4 animate-pulse" />
      <div className="h-4 rounded bg-[#1A1A1A] w-full animate-pulse" />
      <div className="h-4 rounded bg-[#1A1A1A] w-5/6 animate-pulse" />
      <div className="h-20 rounded-lg bg-[#1A1A1A] animate-pulse mt-4" />
    </div>
  );
}

function ProgressDemo() {
  return (
    <div className="space-y-3">
      {[25, 50, 75, 100].map((p) => (
        <div key={p} className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#525252] w-8">{p}%</span>
          <div className="flex-1 h-2 rounded-full bg-[#1A1A1A] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#878787] to-[#D0D0D0] transition-all duration-700"
              style={{ width: `${p}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const timingTokens = [
  { name: "instant",   ms: 75,   use: "Micro-interactions, icon flips" },
  { name: "fast",      ms: 150,  use: "Button hover, border color" },
  { name: "base",      ms: 250,  use: "Card hover, opacity changes" },
  { name: "slow",      ms: 400,  use: "Panel transitions, modals" },
  { name: "slower",    ms: 600,  use: "Page transitions, hero reveals" },
  { name: "crawl",     ms: 1000, use: "Loading states, skeleton" },
];

const easingTokens = [
  { name: "ease-out",    value: "cubic-bezier(0, 0, 0.2, 1)",       use: "Entering elements" },
  { name: "ease-in",     value: "cubic-bezier(0.4, 0, 1, 1)",       use: "Exiting elements" },
  { name: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)",     use: "Position changes" },
  { name: "spring",      value: "cubic-bezier(0.34, 1.56, 0.64, 1)", use: "Playful bounces" },
];

export function MotionSection() {
  return (
    <section id="motion">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Foundation</p>
        <h2 className="text-[#F2F2F2] mb-3">Motion & Animation</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Purposeful, restrained motion. Dark luxury interfaces should feel weighty and precise — never frantic. Prefer ease-out for entries, ease-in for exits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <AnimDemo label="Fade + slide in (250ms ease-out)">
          <FadeInDemo />
        </AnimDemo>
        <AnimDemo label="Hover interaction tokens">
          <HoverDemo />
        </AnimDemo>
        <AnimDemo label="Skeleton loading (pulse)">
          <SkeletonDemo />
        </AnimDemo>
        <AnimDemo label="Progress / loading bar">
          <ProgressDemo />
        </AnimDemo>
      </div>

      {/* Timing tokens */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Duration Tokens</h4>
        <div className="border border-white/8 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A1A1A] border-b border-white/8">
                <th className="text-left p-4 text-[#878787] font-medium">Token</th>
                <th className="text-left p-4 text-[#878787] font-medium">Duration</th>
                <th className="text-left p-4 text-[#878787] font-medium">Visual</th>
                <th className="text-left p-4 text-[#878787] font-medium">Use case</th>
              </tr>
            </thead>
            <tbody>
              {timingTokens.map((t, i) => (
                <tr key={t.name} className={i < timingTokens.length - 1 ? "border-b border-white/6" : ""}>
                  <td className="p-4 font-mono text-xs text-[#CD722D]">--duration-{t.name}</td>
                  <td className="p-4 text-[#F2F2F2] font-mono text-xs">{t.ms}ms</td>
                  <td className="p-4">
                    <div className="h-1.5 rounded-full bg-[#1A1A1A] overflow-hidden w-32">
                      <div
                        className="h-full bg-[#CD722D] rounded-full"
                        style={{ width: `${(t.ms / 1000) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="p-4 text-[#878787] text-xs">{t.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Easing tokens */}
      <div>
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Easing Tokens</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {easingTokens.map((e) => (
            <div key={e.name} className="bg-[#111111] border border-white/8 rounded-xl p-4">
              <p className="text-sm font-semibold text-[#F2F2F2] mb-1">--ease-{e.name}</p>
              <p className="font-mono text-xs text-[#B4B4B4] mb-2">{e.value}</p>
              <p className="text-xs text-[#525252]">{e.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}