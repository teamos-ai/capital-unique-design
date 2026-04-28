import React, { useState, useEffect, useRef } from "react";
import logoSquare from "../../imports/Logo_Square.png";
import logoRect from "../../imports/Logo_Retangle_Long.png";
import { ColorSection }        from "./ds/ColorSection";
import { TypographySection }   from "./ds/TypographySection";
import { SpacingSection }      from "./ds/SpacingSection";
import { LogoSection }         from "./ds/LogoSection";
import { ButtonsSection }      from "./ds/ButtonsSection";
import { CardsSection }        from "./ds/CardsSection";
import { FormsSection }        from "./ds/FormsSection";
import { BadgesSection }       from "./ds/BadgesSection";
import { NavigationSection }   from "./ds/NavigationSection";
import { IconographySection }  from "./ds/IconographySection";
import { MotionSection }       from "./ds/MotionSection";
import { SectionsSection }     from "./ds/SectionsSection";

const navGroups = [
  {
    group: "Foundation",
    items: [
      { id: "colors",       label: "Colors" },
      { id: "typography",   label: "Typography" },
      { id: "spacing",      label: "Spacing & Layout" },
      { id: "logo",         label: "Logo" },
      { id: "iconography",  label: "Iconography" },
      { id: "motion",       label: "Motion" },
    ],
  },
  {
    group: "Components",
    items: [
      { id: "buttons",   label: "Buttons" },
      { id: "cards",     label: "Cards" },
      { id: "forms",     label: "Forms" },
      { id: "badges",    label: "Badges & Tags" },
      { id: "navigation",label: "Navigation & Footer" },
    ],
  },
  {
    group: "Patterns",
    items: [
      { id: "sections",  label: "Page Sections" },
    ],
  },
];

const allItems = navGroups.flatMap((g) => g.items);

export function DesignSystem() {
  const [active, setActive] = useState("colors");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    allItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#080808", color: "#F2F2F2" }}>
      {/* ─── Top header bar ───────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b px-4 sm:px-6 flex items-center justify-between"
        style={{
          background: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
          height: "60px",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Mobile sidebar toggle */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md border border-white/10 text-[#878787] cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
          <img src={logoSquare} alt="Capital Unique" className="w-7 h-7" />
          <div className="h-5 w-px bg-white/10 mx-1" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#878787]">Design System</span>
          <span className="hidden sm:inline px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/6 text-[#CD722D] border border-white/12">
            v2.0 · The Vault
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:block text-xs text-[#525252] font-mono">Dark luxury · Direction B</span>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ background: "#CD722D" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#1A1A1A" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.1)" }} />
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* ─── Mobile overlay ───────────────────────────────────── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ─── Sidebar ──────────────────────────────────────────── */}
        <aside
          className={`fixed lg:sticky top-[60px] z-40 lg:z-auto h-[calc(100vh-60px)] w-64 shrink-0 border-r overflow-y-auto
            transition-transform duration-300 lg:transform-none
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          style={{
            background: "#0D0D0D",
            borderColor: "rgba(255,255,255,0.06)",
            scrollbarWidth: "none",
          }}
        >
          <div className="p-5">
            {/* Intro */}
            <div className="mb-6 pb-5 border-b border-white/6">
              <img src={logoRect} alt="Capital Unique" className="h-4 opacity-60 mb-2" />
              <p className="text-[10px] text-[#333333] leading-relaxed">
                All tokens, components & patterns for the Capital Unique product suite.
              </p>
            </div>

            {/* Nav groups */}
            {navGroups.map((group) => (
              <div key={group.group} className="mb-6">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#333333] mb-2 px-1">
                  {group.group}
                </p>
                <ul className="space-y-0.5">
                  {group.items.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollTo(id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-150 cursor-pointer
                          ${active === id
                            ? "bg-white/8 text-[#CD722D] border border-[#CD722D]/30 font-medium"
                            : "text-[#525252] hover:text-[#878787] hover:bg-white/3"
                          }`}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Token badges */}
            <div className="mt-6 pt-5 border-t border-white/6 space-y-2">
              {[
                { label: "#CD722D", name: "Brandy Punch" },
                { label: "#080808", name: "Void" },
                { label: "#F2F2F2", name: "Neutral Lightest" },
              ].map(({ label, name }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-sm shrink-0 border border-white/8" style={{ background: label }} />
                  <div>
                    <p className="text-[10px] text-[#525252]">{name}</p>
                    <p className="font-mono text-[10px] text-[#333333]">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ─── Main content ─────────────────────────────────────── */}
        <main
          ref={contentRef}
          className="flex-1 min-w-0 overflow-x-hidden"
          style={{ background: "#080808" }}
        >
          {/* Hero banner */}
          <div
            className="relative px-8 md:px-12 py-16 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #080808 0%, #111111 50%, #080808 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
              }}
            />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/6 text-[#CD722D] border border-white/12">
                  Direction B · The Vault
                </span>
                <span className="text-[#333333] text-xs font-mono">v2.0 · April 2026</span>
              </div>
              <h1
                className="text-[#F2F2F2] mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Capital Unique<br />
                <span style={{ color: "#CD722D" }}>Design System</span>
              </h1>
              <p className="text-[#878787] leading-relaxed mb-8" style={{ fontSize: "18px", maxWidth: "520px" }}>
                All tokens, components, and patterns for the Capital Unique product suite.
                Dark luxury aesthetic — purposeful, precise, restrained.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Montserrat", sub: "Display" },
                  { label: "Inter",      sub: "Body" },
                  { label: "#CD722D",    sub: "Brandy Punch" },
                  { label: "#080808",    sub: "Void" },
                ].map(({ label, sub }) => (
                  <div
                    key={label}
                    className="px-3 py-2 rounded-lg border border-white/8 bg-white/3 flex flex-col"
                  >
                    <span className="text-xs font-semibold text-[#F2F2F2]">{label}</span>
                    <span className="text-[10px] text-[#525252]">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="px-8 md:px-12 py-12 space-y-24">
            <ColorSection />
            <TypographySection />
            <SpacingSection />
            <LogoSection />
            <IconographySection />
            <MotionSection />
            <ButtonsSection />
            <CardsSection />
            <FormsSection />
            <BadgesSection />
            <NavigationSection />
            <SectionsSection />
          </div>

          {/* Footer */}
          <footer
            className="px-8 md:px-12 py-8 border-t text-center"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs font-mono text-[#333333]">
              Capital Unique Design System · Direction B "The Vault" · v2.0 · April 2026
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}