import React, { useState } from "react";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-[#B5B5B5] mb-1.5">{children}</label>;
}

function Input({ placeholder, type = "text", error }: { placeholder?: string; type?: string; error?: string }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border text-[#F2F2F2] text-sm
          placeholder-[#525252] outline-none transition-all duration-150
          focus:border-[#CD722D] focus:ring-2 focus:ring-[#CD722D]/15
          ${error ? "border-red-700" : "border-white/10"}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function Textarea({ placeholder, rows = 4 }: { placeholder?: string; rows?: number }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-white/10 text-[#F2F2F2] text-sm
        placeholder-[#525252] outline-none resize-none transition-all duration-150
        focus:border-[#CD722D] focus:ring-2 focus:ring-[#CD722D]/15"
    />
  );
}

function Select({ options }: { options: string[] }) {
  return (
    <select
      className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-white/10 text-[#F2F2F2] text-sm
        outline-none transition-all duration-150 cursor-pointer
        focus:border-[#CD722D] focus:ring-2 focus:ring-[#CD722D]/15"
    >
      {options.map((o) => (
        <option key={o} className="bg-[#1A1A1A]">{o}</option>
      ))}
    </select>
  );
}

function Checkbox({ label, checked = false }: { label: string; checked?: boolean }) {
  const [on, setOn] = useState(checked);
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={() => setOn(!on)}
        className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-150 shrink-0
          ${on ? "bg-[#CD722D] border-[#CD722D]" : "bg-transparent border-white/20 group-hover:border-[#CD722D]/50"}`}
      >
        {on && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className="text-sm text-[#B5B5B5]">{label}</span>
    </label>
  );
}

function Radio({ label, name, checked = false }: { label: string; name: string; checked?: boolean }) {
  const [on, setOn] = useState(checked);
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={() => setOn(!on)}
        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-150 shrink-0
          ${on ? "border-[#CD722D]" : "border-white/20 group-hover:border-[#CD722D]/50"}`}
      >
        {on && <div className="w-2.5 h-2.5 rounded-full bg-[#CD722D]" />}
      </div>
      <span className="text-sm text-[#B5B5B5]">{label}</span>
    </label>
  );
}

function Toggle({ label, on: defaultOn = false }: { label: string; on?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        onClick={() => setOn(!on)}
        className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 shrink-0
          ${on ? "bg-[#CD722D]" : "bg-[#222222] border border-white/10"}`}
        style={{ height: "22px" }}
      >
        <div
          className="absolute top-0.5 w-4.5 h-4.5 rounded-full shadow transition-transform duration-200"
          style={{
            width: "18px",
            height: "18px",
            transform: on ? "translateX(20px)" : "translateX(2px)",
            background: on ? "#ffffff" : "#ffffff",
          }}
        />
      </div>
      <span className="text-sm text-[#B5B5B5]">{label}</span>
    </label>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-[#080808] border border-white/6 rounded-lg p-4 text-xs font-mono text-[#878787] overflow-x-auto mt-4">
      {code}
    </pre>
  );
}

export function FormsSection() {
  return (
    <section id="forms">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Components</p>
        <h2 className="text-[#F2F2F2] mb-3">Form Elements</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          All inputs use the pure dark surface palette with a Brandy Punch focus ring. Minimum touch target 44px. Error states use destructive red.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Text inputs */}
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6 space-y-5">
          <h4 className="text-[#F2F2F2] font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>Text Inputs</h4>

          <div>
            <Label>Default</Label>
            <Input placeholder="e.g. $2,500,000" />
          </div>
          <div>
            <Label>With error</Label>
            <Input placeholder="Enter your email" type="email" error="Please enter a valid email address" />
          </div>
          <div>
            <Label>Textarea</Label>
            <Textarea placeholder="Describe your scenario — the more detail, the better we can assess." />
          </div>
          <div>
            <Label>Select</Label>
            <Select options={["Select loan type", "Development Finance", "Bridging Loan", "Equity Release", "Other"]} />
          </div>
        </div>

        {/* Controls */}
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <h4 className="text-[#F2F2F2] font-semibold mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>Controls</h4>

          <div className="space-y-3 mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#525252] mb-3">Checkboxes</p>
            <Checkbox label="I agree to the Terms and Conditions" checked />
            <Checkbox label="Subscribe to market updates" />
            <Checkbox label="I am an accredited investor" />
          </div>

          <div className="space-y-3 mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#525252] mb-3">Radio Buttons</p>
            <Radio label="Borrower" name="role" checked />
            <Radio label="Investor" name="role" />
            <Radio label="Advisor / Broker" name="role" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#525252] mb-3">Toggles</p>
            <Toggle label="Email notifications" on={true} />
            <Toggle label="Two-factor authentication" />
            <Toggle label="Public profile visible" on={true} />
          </div>
        </div>
      </div>

      {/* Complete form example */}
      <div className="bg-[#0D0D0D] border border-white/8 rounded-xl p-8">
        <h4 className="text-[#F2F2F2] font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px" }}>Example — Enquiry Form</h4>
        <p className="text-[#878787] text-sm mb-6">As seen in context: borrower enquiry form pattern</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label>Full name</Label>
            <Input placeholder="John Carver" />
          </div>
          <div>
            <Label>Email address</Label>
            <Input placeholder="john@example.com" type="email" />
          </div>
          <div>
            <Label>Loan amount sought</Label>
            <Input placeholder="$1,000,000 – $5,000,000" />
          </div>
          <div>
            <Label>Loan type</Label>
            <Select options={["Select type", "Development Finance", "Bridging Loan", "Equity Release", "Other"]} />
          </div>
        </div>
        <div className="mb-4">
          <Label>Tell us about your scenario</Label>
          <Textarea placeholder="Property type, location, use of funds, timeline, and any context that helps us understand your needs..." rows={4} />
        </div>
        <div className="flex items-start gap-3 mb-6">
          <Checkbox label="I confirm I am an accredited investor or seeking finance for business purposes." />
        </div>
        <button
          className="relative inline-flex items-center justify-center px-8 py-3 rounded-md font-medium text-white cursor-pointer
            bg-[#CD722D] hover:bg-[#DC9C6C] active:translate-y-0.5 transition-all duration-150"
          style={{ boxShadow: "0 4px 0 0 #A45B24" }}
        >
          Submit enquiry
        </button>
      </div>
    </section>
  );
}
