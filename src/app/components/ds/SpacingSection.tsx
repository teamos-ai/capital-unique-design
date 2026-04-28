import React from "react";

const spacingScale = [
  { token: "--space-1",  px: 4 },
  { token: "--space-2",  px: 8 },
  { token: "--space-3",  px: 12 },
  { token: "--space-4",  px: 16 },
  { token: "--space-5",  px: 20 },
  { token: "--space-6",  px: 24 },
  { token: "--space-8",  px: 32 },
  { token: "--space-10", px: 40 },
  { token: "--space-12", px: 48 },
  { token: "--space-16", px: 64 },
  { token: "--space-20", px: 80 },
  { token: "--space-24", px: 96 },
  { token: "--space-32", px: 128 },
];

const radiusScale = [
  { name: "None",   px: 0,    token: "0px" },
  { name: "XS",     px: 4,    token: "4px" },
  { name: "SM",     px: 6,    token: "6px" },
  { name: "MD",     px: 8,    token: "8px" },
  { name: "LG",     px: 12,   token: "12px" },
  { name: "XL",     px: 16,   token: "16px" },
  { name: "2XL",    px: 24,   token: "24px" },
  { name: "Full",   px: 9999, token: "9999px" },
];

const gridSpec = [
  { breakpoint: "Mobile",  width: "< 640px",    columns: 4,  gutter: "16px", margin: "24px" },
  { breakpoint: "Tablet",  width: "640–1024px", columns: 8,  gutter: "24px", margin: "40px" },
  { breakpoint: "Desktop", width: "> 1024px",   columns: 12, gutter: "32px", margin: "64px" },
  { breakpoint: "Max",     width: "1280px",     columns: 12, gutter: "32px", margin: "auto" },
];

export function SpacingSection() {
  return (
    <section id="spacing">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Foundation</p>
        <h2 className="text-[#F2F2F2] mb-3">Spacing & Layout</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          4-base scale. Section vertical padding: 96px desktop / 64px tablet / 48px mobile. Hero sections: 128px. Max content width: 1280px.
        </p>
      </div>

      {/* Spacing scale */}
      <div className="mb-12">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Spacing Scale</h4>
        <div className="space-y-2">
          {spacingScale.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#525252] w-28 shrink-0">{s.token}</span>
              <span className="font-mono text-xs text-[#878787] w-10 shrink-0">{s.px}px</span>
              <div className="flex items-center">
                <div
                  className="h-3 rounded-sm bg-[#CD722D]"
                  style={{ width: Math.min(s.px * 2, 400) + "px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border radius */}
      <div className="mb-12">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Border Radius</h4>
        <div className="flex flex-wrap gap-4">
          {radiusScale.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 bg-white/8 border border-white/20"
                style={{ borderRadius: r.px + "px" }}
              />
              <span className="text-xs text-[#878787]">{r.name}</span>
              <span className="text-xs font-mono text-[#525252]">{r.token}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">Grid Specification</h4>
        <div className="border border-white/8 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1A1A1A] border-b border-white/8">
                <th className="text-left p-4 text-[#878787] font-medium">Breakpoint</th>
                <th className="text-left p-4 text-[#878787] font-medium">Width</th>
                <th className="text-left p-4 text-[#878787] font-medium">Columns</th>
                <th className="text-left p-4 text-[#878787] font-medium">Gutter</th>
                <th className="text-left p-4 text-[#878787] font-medium">Margin</th>
              </tr>
            </thead>
            <tbody>
              {gridSpec.map((row, i) => (
                <tr key={row.breakpoint} className={i < gridSpec.length - 1 ? "border-b border-white/6" : ""}>
                  <td className="p-4 text-[#F2F2F2] font-medium">{row.breakpoint}</td>
                  <td className="p-4 text-[#878787] font-mono text-xs">{row.width}</td>
                  <td className="p-4 text-[#CD722D] font-mono text-xs">{row.columns}</td>
                  <td className="p-4 text-[#878787] font-mono text-xs">{row.gutter}</td>
                  <td className="p-4 text-[#878787] font-mono text-xs">{row.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}