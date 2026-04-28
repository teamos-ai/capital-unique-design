import React, { useState } from "react";

// Brandy Punch 3D button – primary
function BtnPrimary({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" | "lg" }) {
  const pad = size === "sm" ? "px-4 py-2 text-sm" : size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  return (
    <button
      className={`relative inline-flex items-center justify-center ${pad} rounded-md font-medium text-white cursor-pointer
        bg-[#CD722D] hover:bg-[#DC9C6C] active:translate-y-0.5 transition-all duration-150`}
      style={{ boxShadow: "0 4px 0 0 #A45B24, 0 1px 0 1.5px #A45B24" }}
    >
      {children}
    </button>
  );
}

// Outline button – secondary
function BtnSecondary({ children, dark = false, size = "md" }: { children: React.ReactNode; dark?: boolean; size?: "sm" | "md" | "lg" }) {
  const pad = size === "sm" ? "px-4 py-2 text-sm" : size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  return (
    <button
      className={`relative inline-flex items-center justify-center ${pad} rounded-md font-medium cursor-pointer
        border transition-all duration-150 hover:border-[#CD722D]/50 active:translate-y-0.5
        ${dark ? "border-white/20 text-[#F2F2F2] hover:text-[#DC9C6C]" : "border-black/20 text-[#1A1A1A] hover:border-[#CD722D]/50"}`}
      style={{ boxShadow: dark ? "0 4px 0 0 rgba(255,255,255,0.06)" : "0 4px 0 0 rgba(2,2,5,0.12)" }}
    >
      {children}
    </button>
  );
}

// Ghost / link button
function BtnLink({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <button
      className={`inline-flex items-center gap-2 font-medium cursor-pointer transition-colors duration-150
        ${dark ? "text-[#CD722D] hover:text-[#DC9C6C]" : "text-[#878787] hover:text-[#CD722D]"}`}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// Destructive
function BtnDestructive({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="relative inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-white cursor-pointer
        bg-red-700 hover:bg-red-600 active:translate-y-0.5 transition-all duration-150"
      style={{ boxShadow: "0 4px 0 0 #7f1d1d" }}
    >
      {children}
    </button>
  );
}

// Icon button
function BtnIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-[#878787]
      hover:border-[#CD722D]/50 hover:text-[#CD722D] transition-colors cursor-pointer bg-[#111111]">
      {icon}
    </button>
  );
}

function Section({ dark = false, label, children }: { dark?: boolean; label: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-xl p-6 mb-4 border ${dark ? "border-white/8 bg-[#0D0D0D]" : "border-black/8 bg-[#F2F2F2]"}`}
    >
      <p className={`font-mono text-xs mb-5 ${dark ? "text-[#525252]" : "text-[#878787]"}`}>{label}</p>
      <div className="flex flex-wrap gap-4 items-center">
        {children}
      </div>
    </div>
  );
}

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="bg-[#080808] border border-white/6 rounded-lg p-4 text-xs font-mono text-[#878787] overflow-x-auto">
      {code}
    </pre>
  );
}

export function ButtonsSection() {
  const [active, setActive] = useState<string>("all");
  return (
    <section id="buttons">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Components</p>
        <h2 className="text-[#F2F2F2] mb-3">Buttons</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Three primitives: <strong className="text-[#DC9C6C]">Primary</strong> (Brandy Punch fill + 3D shadow edge),{" "}
          <strong className="text-[#DC9C6C]">Secondary</strong> (outline with depth), and{" "}
          <strong className="text-[#DC9C6C]">Link</strong> (text + arrow). Minimum height 44px for accessibility.
        </p>
      </div>

      {/* On dark */}
      <Section dark label="On dark surface — primary usage context">
        <BtnPrimary>Borrow</BtnPrimary>
        <BtnSecondary dark>Fund</BtnSecondary>
        <BtnLink dark>Learn more</BtnLink>
        <BtnDestructive>Decline</BtnDestructive>
        <BtnIcon icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>} />
      </Section>

      {/* On light */}
      <Section dark={false} label="On light surface">
        <BtnPrimary>Borrow</BtnPrimary>
        <BtnSecondary>Fund</BtnSecondary>
        <BtnLink>Learn more</BtnLink>
      </Section>

      {/* Sizes */}
      <Section dark label="Size variants — sm · md · lg">
        <BtnPrimary size="sm">Small</BtnPrimary>
        <BtnPrimary size="md">Medium</BtnPrimary>
        <BtnPrimary size="lg">Large</BtnPrimary>
      </Section>

      <Section dark label="Secondary size variants">
        <BtnSecondary dark size="sm">Small</BtnSecondary>
        <BtnSecondary dark size="md">Medium</BtnSecondary>
        <BtnSecondary dark size="lg">Large</BtnSecondary>
      </Section>

      {/* States */}
      <div className="mb-4">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">States</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Default",  bg: "bg-[#CD722D]",  shadow: "0 4px 0 0 #A45B24" },
            { label: "Hover",    bg: "bg-[#DC9C6C]",  shadow: "0 4px 0 0 #A45B24" },
            { label: "Disabled", bg: "bg-[#CD722D]",  shadow: "0 4px 0 0 #A45B24" },
          ].map(({ label, bg, shadow }) => (
            <div key={label} className="bg-[#111111] border border-white/8 rounded-xl p-5 flex flex-col gap-3">
              <span className="text-xs font-mono text-[#525252]">{label}</span>
              <button
                className={`relative inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-white
                  ${bg} ${label === "Disabled" ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                style={{ boxShadow: shadow }}
                disabled={label === "Disabled"}
              >
                Primary Button
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Code */}
      <div className="mt-6">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-3">Implementation Reference</h4>
        <CodeSnippet code={`/* Brandy Punch 3D primary — CSS custom properties */
.btn-primary {
  background: var(--cu-brandy-punch);          /* #CD722D */
  color: #ffffff;
  border-radius: 6px;
  padding: 10px 24px;
  box-shadow: 0 4px 0 0 var(--cu-brandy-dark), 0 1px 0 1.5px var(--cu-brandy-dark);
  transition: all 150ms ease;
}
.btn-primary:hover  { background: var(--cu-brandy-light); /* #DC9C6C */ }
.btn-primary:active { transform: translateY(2px); box-shadow: none; }`} />
      </div>
    </section>
  );
}
