import React, { useState } from "react";

// Primary — flat fill, focus-visible ring, min 44px touch target.
function BtnPrimary({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" | "lg" }) {
  const pad =
    size === "sm" ? "px-4 py-2.5 text-sm min-h-[40px]" :
    size === "lg" ? "px-8 py-3.5 text-lg min-h-[52px]" :
                    "px-6 py-3 text-base min-h-[44px]";
  return (
    <button
      className={`inline-flex items-center justify-center ${pad} rounded-md font-medium text-white cursor-pointer
        bg-cu-brandy hover:bg-cu-brandy-light active:bg-cu-brandy-dark
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light focus-visible:ring-offset-2 focus-visible:ring-offset-background
        transition-colors duration-200`}
    >
      {children}
    </button>
  );
}

// Secondary — outline, no decorative shadow.
function BtnSecondary({ children, dark = false, size = "md" }: { children: React.ReactNode; dark?: boolean; size?: "sm" | "md" | "lg" }) {
  const pad =
    size === "sm" ? "px-4 py-2.5 text-sm min-h-[40px]" :
    size === "lg" ? "px-8 py-3.5 text-lg min-h-[52px]" :
                    "px-6 py-3 text-base min-h-[44px]";
  return (
    <button
      className={`inline-flex items-center justify-center ${pad} rounded-md font-medium cursor-pointer
        border transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${dark
          ? "border-border text-foreground hover:border-cu-brandy/50 hover:text-cu-brandy-light"
          : "border-black/20 text-cu-neutral-darkest hover:border-cu-brandy/50 hover:text-cu-brandy"}`}
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
        ${dark ? "text-cu-brandy hover:text-cu-brandy-light" : "text-muted-foreground hover:text-cu-brandy"}`}
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
        bg-destructive hover:bg-destructive/90 active:translate-y-0.5 transition-all duration-150" >
      {children}
    </button>
  );
}

// Icon button
function BtnIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-muted-foreground
      hover:border-cu-brandy/50 hover:text-cu-brandy transition-colors cursor-pointer bg-card">
      {icon}
    </button>
  );
}

function Section({ dark = false, label, children }: { dark?: boolean; label: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-xl p-6 mb-4 border ${dark ? "border-white/8 bg-sidebar" : "border-black/8 bg-cu-neutral-lightest"}`}
    >
      <p className={`font-mono text-xs mb-5 ${dark ? "text-cu-neutral" : "text-muted-foreground"}`}>{label}</p>
      <div className="flex flex-wrap gap-4 items-center">
        {children}
      </div>
    </div>
  );
}

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="bg-background border border-white/6 rounded-lg p-4 text-xs font-mono text-muted-foreground overflow-x-auto">
      {code}
    </pre>
  );
}

export function ButtonsSection() {
  const [active, setActive] = useState<string>("all");
  return (
    <section id="buttons" aria-labelledby="buttons-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Components</p>
        <h2 id="buttons-heading" className="text-foreground mb-3">Buttons</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Three primitives: <strong className="text-cu-brandy-light">Primary</strong> (Brandy Punch flat fill),{" "}
          <strong className="text-cu-brandy-light">Secondary</strong> (outline), and{" "}
          <strong className="text-cu-brandy-light">Link</strong> (text + arrow). All sizes meet a 40-52px height range; default and large meet WCAG 2.5.5 (44px target).
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
        <h4 className="text-muted-foreground text-xs font-semibold mb-4">States</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Default",  cls: "bg-cu-brandy text-white" },
            { label: "Hover",    cls: "bg-cu-brandy-light text-white" },
            { label: "Active",   cls: "bg-cu-brandy-dark text-white" },
            { label: "Disabled", cls: "bg-cu-brandy text-white opacity-30 cursor-not-allowed" },
          ].map(({ label, cls }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3">
              <span className="text-xs font-mono text-cu-neutral">{label}</span>
              <button
                className={`inline-flex items-center justify-center px-6 py-3 rounded-md font-medium min-h-[44px] ${cls}`}
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
        <h4 className="text-muted-foreground text-xs font-semibold mb-3">Implementation Reference</h4>
        <CodeSnippet code={`/* Brandy Punch flat primary — CSS custom properties */
.btn-primary {
  background: var(--cu-brandy-punch);
  color: var(--primary-foreground);
  border-radius: var(--radius-md);
  padding: 12px 24px;
  min-height: 44px;
  font-weight: 500;
  transition: background-color 200ms ease;
}
.btn-primary:hover  { background: var(--cu-brandy-light); }
.btn-primary:active { background: var(--cu-brandy-dark); }
.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--cu-brandy-light);
}
.btn-primary:disabled { opacity: 0.3; cursor: not-allowed; }`} />
      </div>
    </section>
  );
}
