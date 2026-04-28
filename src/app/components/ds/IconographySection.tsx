import React from "react";

const icons = [
  { name: "Arrow right",     svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
  { name: "Chevron down",    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg> },
  { name: "Chevron right",   svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg> },
  { name: "Menu",            svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg> },
  { name: "Close",           svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg> },
  { name: "Download",        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> },
  { name: "External link",   svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> },
  { name: "Star",            svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg> },
  { name: "Check",           svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg> },
  { name: "Info",            svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> },
  { name: "Lightning",       svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { name: "Shield",          svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: "Target",          svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
  { name: "Calendar",        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { name: "Document",        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg> },
  { name: "Chart line",      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg> },
  { name: "Building",        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { name: "Lock",            svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
];

const iconSizes = [
  { label: "16px",  size: 16 },
  { label: "20px",  size: 20 },
  { label: "24px",  size: 24 },
  { label: "32px",  size: 32 },
  { label: "48px",  size: 48 },
];

export function IconographySection() {
  return (
    <section id="iconography">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Foundation</p>
        <h2 className="text-[#F2F2F2] mb-3">Iconography</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Icon library: Lucide React (1.5px stroke, rounded caps/joins). Size scale: 16 / 20 / 24 / 32 / 48px. Always use 24px in UI contexts unless specified. Color: inherit from text context.
        </p>
      </div>

      {/* Icon grid */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Core Icons — 24px</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-4">
            {icons.map((icon) => (
              <div key={icon.name} className="group flex flex-col items-center gap-2 cursor-default">
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/8 flex items-center justify-center text-[#878787]
                  group-hover:border-[#CD722D]/40 group-hover:text-[#CD722D] transition-all duration-150">
                  <div className="w-5 h-5 [&_svg]:w-5 [&_svg]:h-5">
                    {React.cloneElement(icon.svg, { width: 20, height: 20, className: "text-inherit" })}
                  </div>
                </div>
                <span className="text-[10px] text-[#525252] text-center leading-tight">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-10">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Icon Sizes</h4>
        <div className="bg-[#111111] border border-white/8 rounded-xl p-6">
          <div className="flex items-end gap-8 flex-wrap">
            {iconSizes.map(({ label, size }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center text-[#CD722D]" style={{ width: size, height: size }}>
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="font-mono text-xs text-[#525252]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* In context */}
      <div>
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Icons In Context</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "With button", content: (
              <div className="flex flex-col gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#CD722D] text-white text-sm font-medium cursor-pointer hover:bg-[#DC9C6C] transition-colors" style={{ boxShadow: "0 3px 0 0 #A45B24" }}>
                  Download guide
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/15 text-[#878787] text-sm font-medium cursor-pointer hover:text-[#F2F2F2] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                  Save for later
                </button>
              </div>
            )},
            { label: "In list items", content: (
              <ul className="space-y-2">
                {["Fast 72-hour decisions", "Transparent terms", "No unnecessary friction", "Direct lender access"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#B5B5B5]">
                    <div className="w-5 h-5 rounded-full bg-[#CD722D]/15 border border-[#CD722D]/30 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#CD722D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            )},
            { label: "Icon-only actions", content: (
              <div className="flex items-center gap-3">
                {[
                  { title: "Share", path: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" },
                  { title: "Download", path: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" },
                  { title: "Settings", path: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" },
                  { title: "Close", path: "M18 6L6 18M6 6l12 12" },
                ].map(({ title, path }) => (
                  <button
                    key={title}
                    title={title}
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#878787]
                      hover:border-white/25 hover:text-[#D0D0D0] transition-all duration-150 cursor-pointer bg-[#1A1A1A]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={path}/>
                    </svg>
                  </button>
                ))}
              </div>
            )},
          ].map(({ label, content }) => (
            <div key={label} className="bg-[#111111] border border-white/8 rounded-xl p-5">
              <p className="font-mono text-xs text-[#525252] mb-4">{label}</p>
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}