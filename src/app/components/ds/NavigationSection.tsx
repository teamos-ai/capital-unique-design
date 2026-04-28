import React, { useState } from "react";
import logoSquare from "../../../imports/Logo_Square.png";
import logoRect from "../../../imports/Logo_Retangle_Long.png";

export function NavigationSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="navigation">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#CD722D] mb-2">Components</p>
        <h2 className="text-[#F2F2F2] mb-3">Navigation</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Sticky pure-black frosted-glass navbar. Logo, muted nav links, Brandy Punch Login CTA. Mobile collapses to hamburger.
        </p>
      </div>

      {/* Desktop navbar preview */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Desktop Navbar — Dark Frosted Glass</h4>
        <div className="rounded-xl border border-white/8 overflow-hidden">
          <div className="px-2 py-1.5 bg-[#080808] border-b border-white/6 font-mono text-[10px] text-[#525252]">
            partials/navbar.html · sticky on scroll · backdrop-blur
          </div>
          <header
            className="bg-[#080808]/95 px-8 py-0 border-b border-white/6"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <div className="flex items-center gap-8 h-[72px]">
              {/* Brand */}
              <a href="#" className="flex items-center gap-3 shrink-0">
                <img src={logoSquare} alt="Capital Unique" className="w-8 h-8" />
                <span className="text-[#F2F2F2] text-sm font-semibold tracking-wide hidden sm:block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  capital unique
                </span>
              </a>

              {/* Nav */}
              <nav className="hidden md:flex items-center gap-7 flex-1">
                {["Capital ▾", "Waitlist", "Insights & Resources ▾", "Charles A.I", "About"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-[#878787] hover:text-[#F2F2F2] transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link}
                  </a>
                ))}
              </nav>

              {/* CTA */}
              <div className="ml-auto shrink-0">
                <button
                  className="relative inline-flex items-center justify-center px-5 py-2 rounded-md font-medium text-white text-sm cursor-pointer
                    bg-[#CD722D] hover:bg-[#DC9C6C] transition-all duration-150"
                  style={{ boxShadow: "0 3px 0 0 #A45B24" }}
                >
                  Login
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Scrolled state */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Navbar — Scrolled / Elevated State</h4>
        <div className="rounded-xl border border-white/8 overflow-hidden">
          <div className="px-2 py-1.5 bg-[#080808] border-b border-white/6 font-mono text-[10px] text-[#525252]">
            .navbar--scrolled · adds shadow + border-b Brandy Punch glow
          </div>
          <header
            className="px-8 py-0 border-b"
            style={{
              background: "rgba(8,8,8,0.98)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(205,114,45,0.15)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.8), 0 1px 0 rgba(205,114,45,0.08)"
            }}
          >
            <div className="flex items-center gap-8 h-[72px]">
              <a href="#" className="flex items-center gap-3 shrink-0">
                <img src={logoSquare} alt="Capital Unique" className="w-8 h-8" />
                <span className="text-[#F2F2F2] text-sm font-semibold tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  capital unique
                </span>
              </a>
              <nav className="hidden md:flex items-center gap-7 flex-1">
                {["Capital ▾", "Waitlist", "Insights ▾", "Charles A.I", "About"].map((link) => (
                  <a key={link} href="#" className="text-sm text-[#878787] hover:text-[#F2F2F2] transition-colors whitespace-nowrap">
                    {link}
                  </a>
                ))}
              </nav>
              <div className="ml-auto shrink-0">
                <button
                  className="relative inline-flex items-center justify-center px-5 py-2 rounded-md font-medium text-white text-sm cursor-pointer
                    bg-[#CD722D] hover:bg-[#DC9C6C] transition-all duration-150"
                  style={{ boxShadow: "0 3px 0 0 #A45B24" }}
                >
                  Login
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mb-8">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Mobile Hamburger Menu</h4>
        <div className="rounded-xl border border-white/8 overflow-hidden max-w-sm">
          <div className="px-2 py-1.5 bg-[#080808] border-b border-white/6 font-mono text-[10px] text-[#525252]">
            {"mobile · hamburger pattern · < 768px"}
          </div>
          <div className="bg-[#080808]">
            <div className="flex items-center justify-between p-4 border-b border-white/6">
              <img src={logoSquare} alt="" className="w-8 h-8" />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 text-[#878787] hover:text-[#CD722D] hover:border-[#CD722D]/30 cursor-pointer transition-colors"
              >
                {menuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                )}
              </button>
            </div>
            {menuOpen && (
              <nav className="p-4 space-y-1 border-b border-white/6">
                {["Capital", "Waitlist", "Insights & Resources", "Charles A.I", "About"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center py-3 px-2 text-sm text-[#878787] hover:text-[#CD722D] border-b border-white/4 last:border-0 transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <div className="pt-3">
                  <button
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-white text-sm cursor-pointer bg-[#CD722D]"
                    style={{ boxShadow: "0 3px 0 0 #A45B24" }}
                  >
                    Login
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>

      {/* Footer preview */}
      <div>
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">Footer Pattern</h4>
        <div className="rounded-xl border border-white/8 overflow-hidden">
          <div className="px-2 py-1.5 bg-[#080808] border-b border-white/6 font-mono text-[10px] text-[#525252]">
            partials/footer.html · 4-column · pure dark surface
          </div>
          <footer className="bg-[#080808] border-t border-white/6 px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div>
                <img src={logoRect} alt="Capital Unique" className="h-5 mb-4 opacity-90" />
                <p className="text-xs text-[#525252] leading-relaxed">
                  Non-bank lending for complex scenarios where traditional finance falls short.
                </p>
              </div>
              {[
                { heading: "Capital", links: ["For Borrowers", "Fund Capital", "Calculator", "Account Login", "Waitlist"] },
                { heading: "Insights & Resources", links: ["Guides", "Articles", "Calculators", "Charles A.I"] },
                { heading: "Connect", links: ["About us", "Contact us", "Join newsletter"] },
              ].map((col) => (
                <div key={col.heading}>
                  <h5 className="text-[#F2F2F2] text-xs font-semibold mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>{col.heading}</h5>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-xs text-[#525252] hover:text-[#CD722D] transition-colors">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row gap-3 items-center justify-between">
              <p className="text-[10px] text-[#333333]">© 2026 Capital Unique. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {["Privacy policy", "Terms and conditions", "Cookie settings"].map((l) => (
                  <a key={l} href="#" className="text-[10px] text-[#333333] hover:text-[#CD722D] transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
