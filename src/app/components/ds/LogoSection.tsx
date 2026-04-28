import React from "react";
import logoSquare from "../../../imports/Logo_Square.png";
import logoRect from "../../../imports/Logo_Retangle_Long.png";

const clearspaceRules = [
  "Minimum clearspace = cap-height of the 'C' glyph on all sides",
  "Never place the logo on a busy photographic background without a scrim",
  "Platinum / silver finish: use on Void / Abyss / hero / footer / dark CTA sections",
  "Dark / charcoal finish: use on Neutral Lightest / Lighter / light drapery gradients",
  "Minimum logo width: 120px (rectangle) / 32px (square coin)",
  "Never tint, recolor, rotate, stretch, or redraw the logo",
  "Never add shadows or effects directly to the logo mark",
];

const lockups = [
  { label: "Square Coin — void surface",    bg: "#080808", border: "border-[#1A1A1A]", textColor: "text-[#878787]" },
  { label: "Rectangle Long — void surface", bg: "#080808", border: "border-[#1A1A1A]", textColor: "text-[#878787]", wide: true },
  { label: "Square Coin — vault surface",   bg: "#111111", border: "border-white/8",   textColor: "text-[#878787]" },
  { label: "Rectangle Long — vault surface",bg: "#111111", border: "border-white/8",   textColor: "text-[#878787]", wide: true },
];

export function LogoSection() {
  return (
    <section id="logo">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Brand Identity</p>
        <h2 className="text-[#F2F2F2] mb-3">Logo</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Two lockups — Square Coin (icon) and Rectangle Long (horizontal wordmark). Platinum on pure black, silver/chrome on dark surface. Locked pairing rules apply.
        </p>
      </div>

      {/* Logo lockups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {lockups.map((l) => (
          <div
            key={l.label}
            className={`rounded-xl border ${l.border} flex flex-col items-center justify-center py-12 px-8 gap-6`}
            style={{ background: l.bg }}
          >
            <img
              src={l.wide ? logoRect : logoSquare}
              alt="Capital Unique logo"
              style={{ maxWidth: l.wide ? "240px" : "80px", height: "auto" }}
            />
            <span className={`text-xs font-mono ${l.textColor}`}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Usage rules */}
      <div className="bg-[#111111] border border-white/8 rounded-xl p-6 mb-10">
        <h4 className="text-[#F2F2F2] font-semibold mb-4">Usage Rules</h4>
        <ul className="space-y-2">
          {clearspaceRules.map((r, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#878787]">
              <span className="text-[#CD722D] mt-0.5 shrink-0">·</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Don'ts */}
      <div>
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Logo Don'ts</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {["Recolor", "Add shadow", "Stretch", "Rotate", "On busy BG", "Too small"].map((dont) => (
            <div key={dont} className="bg-[#111111] border border-white/6 rounded-lg p-4 flex flex-col items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img src={logoSquare} alt="" className="w-8 h-8 opacity-30" style={
                  dont === "Recolor" ? { filter: "hue-rotate(180deg)" } :
                  dont === "Stretch" ? { transform: "scaleX(1.6)" } :
                  dont === "Rotate" ? { transform: "rotate(45deg)" } : {}
                } />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-0.5 bg-red-500 rotate-45 rounded-full opacity-70" />
                </div>
              </div>
              <span className="text-xs text-[#525252] text-center">{dont}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}