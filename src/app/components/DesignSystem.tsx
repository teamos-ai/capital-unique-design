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

/* Initial theme: prefer localStorage, then system preference, then default to dark. */
function readInitialTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = window.localStorage.getItem("cu-theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch { /* localStorage may be blocked */ }
  if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

export function DesignSystem() {
  const [active, setActive] = useState("colors");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(readInitialTheme);
  const [toast, setToast] = useState<string | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const helpCloseRef = useRef<HTMLButtonElement>(null);

  // Theme: persist to localStorage; sync `.dark` on <html>.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try { window.localStorage.setItem("cu-theme", theme); } catch { /* ignore */ }
    return () => { root.classList.remove("dark"); };
  }, [theme]);

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

  // Esc closes mobile drawer + help dialog
  useEffect(() => {
    if (!sidebarOpen && !helpOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (helpOpen) setHelpOpen(false);
        else if (sidebarOpen) setSidebarOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sidebarOpen, helpOpen]);

  // Global keyboard shortcuts (j/k for nav, t for theme, ? for help).
  useEffect(() => {
    const isTypingTarget = (el: EventTarget | null) => {
      if (!(el instanceof HTMLElement)) return false;
      const tag = el.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;

      const ids = allItems.map(i => i.id);
      const idx = ids.indexOf(active);

      if (e.key === "j" || e.key === "ArrowDown") {
        if (idx > -1 && idx < ids.length - 1) { e.preventDefault(); scrollTo(ids[idx + 1]); }
      } else if (e.key === "k" || e.key === "ArrowUp") {
        if (idx > 0) { e.preventDefault(); scrollTo(ids[idx - 1]); }
      } else if (e.key === "t") {
        e.preventDefault();
        setTheme(prev => prev === "dark" ? "light" : "dark");
      } else if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setHelpOpen(o => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  // When help opens, move focus to its close button.
  useEffect(() => { if (helpOpen) helpCloseRef.current?.focus(); }, [helpOpen]);

  // Toast: listens for global `cu-toast` events from CopyableToken; auto-dismiss.
  useEffect(() => {
    const onToast = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") setToast(detail);
    };
    window.addEventListener("cu-toast", onToast);
    return () => window.removeEventListener("cu-toast", onToast);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* ─── Top header bar ───────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b px-4 sm:px-6 flex items-center justify-between"
        style={{
          background: "color-mix(in oklch, var(--background) 96%, transparent)",
          backdropFilter: "blur(16px)",
          borderColor: "var(--border)",
          height: "60px",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Mobile sidebar toggle */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border text-muted-foreground cursor-pointer hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Open navigation"
            aria-expanded={sidebarOpen}
            aria-controls="ds-sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
          <img src={logoSquare} alt="Capital Unique" className="w-7 h-7" />
          <div className="h-5 w-px bg-border mx-1" />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Design System</span>
          <span className="hidden sm:inline px-2 py-0.5 rounded-full text-xs font-semibold bg-white/6 text-cu-brandy border border-cu-brandy/30">
            v2.1 · The Vault
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:block text-xs text-cu-neutral font-mono">Direction B · {theme} mode</span>

          {/* Help / shortcuts */}
          <button
            type="button"
            onClick={() => setHelpOpen(true)}
            className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-cu-brandy hover:border-cu-brandy/40 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light"
            aria-label="Keyboard shortcuts"
            title="Keyboard shortcuts (?)"
          >
            <span className="font-mono text-sm font-semibold">?</span>
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-cu-brandy hover:border-cu-brandy/40 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme (t)`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme (t)`}
          >
            {theme === "dark" ? (
              /* sun for "switch to light" */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              /* moon for "switch to dark" */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className="flex relative">
        {/* ─── Mobile overlay ───────────────────────────────────── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-cu-neutral-darkest/70 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ─── Sidebar ──────────────────────────────────────────── */}
        <aside
          id="ds-sidebar"
          role={sidebarOpen ? "dialog" : undefined}
          aria-modal={sidebarOpen ? "true" : undefined}
          aria-label="Design system navigation"
          aria-hidden={!sidebarOpen ? undefined : "false"}
          className={`fixed lg:sticky top-[60px] z-40 lg:z-auto h-[calc(100vh-60px)] w-64 shrink-0 border-r overflow-y-auto
            transition-transform duration-300 lg:transform-none
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          style={{
            background: "var(--sidebar)",
            borderColor: "var(--sidebar-border)",
            scrollbarWidth: "none",
          }}
        >
          <div className="p-5">
            {/* Intro */}
            <div className="mb-6 pb-5 border-b border-white/6">
              <img src={logoRect} alt="Capital Unique" className="h-4 opacity-60 mb-2" />
              <p className="text-xs text-cu-neutral leading-relaxed">
                All tokens, components & patterns for the Capital Unique product suite.
              </p>
            </div>

            {/* Nav groups */}
            <nav aria-label="Sections">
              {navGroups.map((group) => (
                <div key={group.group} className="mb-6">
                  <p className="text-xs font-medium text-cu-neutral mb-2 px-1">
                    {group.group}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map(({ id, label }) => {
                      const isActive = active === id;
                      return (
                        <li key={id}>
                          <button
                            onClick={() => scrollTo(id)}
                            aria-current={isActive ? "location" : undefined}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors duration-150 cursor-pointer
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light
                              ${isActive
                                ? "bg-white/8 text-cu-brandy border border-cu-brandy/30 font-medium"
                                : "text-cu-neutral hover:text-muted-foreground hover:bg-white/3 border border-transparent"
                              }`}
                          >
                            {label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Token badges */}
            <div className="mt-6 pt-5 border-t border-white/6 space-y-2">
              {[
                { label: "var(--cu-brandy-punch)", name: "Brandy Punch" },
                { label: "var(--background)", name: "Void" },
                { label: "var(--foreground)", name: "Neutral Lightest" },
              ].map(({ label, name }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-sm shrink-0 border border-white/8" style={{ background: label }} />
                  <div>
                    <p className="text-xs text-cu-neutral">{name}</p>
                    <p className="font-mono text-xs text-cu-neutral">{label}</p>
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
          style={{ background: "var(--background)" }}
        >
          {/* Hero banner — flat surface, no decorative stack. Type carries the weight. */}
          <div
            className="relative px-8 md:px-12 py-20 border-b"
            style={{
              background: "var(--background)",
              borderColor: "var(--border)",
            }}
          >
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-semibold tracking-widest uppercase text-cu-brandy">
                  v2.1 · The Vault
                </span>
                <span className="w-px h-3 bg-border" />
                <span className="text-cu-neutral text-xs font-mono">April 2026</span>
              </div>
              <h1
                className="text-foreground mb-6"
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                }}
              >
                Capital Unique<br />
                <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--cu-brandy-punch)" }}>
                  Design System
                </em>
              </h1>
              <p className="text-cu-neutral-light leading-relaxed mb-10" style={{ fontSize: "19px", maxWidth: "560px", lineHeight: 1.65 }}>
                Tokens, components, and patterns for the Capital Unique product suite.
                Discreet by construction, intentional in every detail.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-cu-neutral">
                <span><span className="text-foreground font-semibold">Source Serif 4</span> · Display</span>
                <span><span className="text-foreground font-semibold">Public Sans</span> · Body</span>
                <span><span className="text-cu-brandy font-semibold">Brandy Punch</span> · Primary</span>
                <span><span className="text-cu-inkwell-light font-semibold">Inkwell</span> · Counter-tone</span>
              </div>
            </div>
          </div>

          {/* "What is a token" intro — first-time-reader orientation */}
          <div className="px-8 md:px-12 pt-12">
            <div className="rounded-xl border border-border bg-card p-6 md:p-7 max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-3">Read me first</p>
              <h2
                className="text-foreground mb-3"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: "26px", lineHeight: 1.2, letterSpacing: "-0.01em" }}
              >
                A token is a name for a value.
              </h2>
              <p className="text-cu-neutral-light mb-3" style={{ lineHeight: 1.65 }}>
                Every color, spacing step, radius, and motion curve in this system has a name (e.g.{" "}
                <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--cu-brandy-punch</code>,{" "}
                <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--spacing-md</code>).
                Components reference the names, not the values. Change the value once and every component updates.
              </p>
              <p className="text-cu-neutral-light mb-3" style={{ lineHeight: 1.65 }}>
                Click any token in the swatches below to copy it. Press{" "}
                <kbd className="font-mono text-xs px-1.5 py-0.5 bg-cu-surface-char border border-border rounded">?</kbd>{" "}
                anywhere on this page for the full keyboard-shortcut list.
              </p>
              <p className="text-cu-neutral text-xs">
                Prefer <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--accent</code> /{" "}
                <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--background</code> /{" "}
                <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--card</code>{" "}
                (semantic) over raw scale tokens like <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">--cu-brandy-punch</code> in components — semantic tokens survive re-skins.
              </p>
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
            <p className="text-xs font-mono text-cu-neutral">
              Capital Unique Design System · Direction B "The Vault" · v2.1 · April 2026
            </p>
          </footer>
        </main>
      </div>

      {/* ── Keyboard-shortcuts help dialog ──────────────────────── */}
      {helpOpen && (
        <>
          <div
            className="fixed inset-0 z-[70] bg-cu-neutral-darkest/60"
            onClick={() => setHelpOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="help-title"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[71] w-[min(440px,calc(100vw-2rem))]
              rounded-xl border border-border bg-card shadow-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h2
                id="help-title"
                className="text-foreground"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: "20px", lineHeight: 1.2 }}
              >
                Keyboard shortcuts
              </h2>
              <button
                ref={helpCloseRef}
                onClick={() => setHelpOpen(false)}
                className="w-8 h-8 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light"
                aria-label="Close shortcuts dialog"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <dl className="space-y-2.5">
              {[
                { keys: ["j", "↓"],  label: "Next section" },
                { keys: ["k", "↑"],  label: "Previous section" },
                { keys: ["t"],       label: "Toggle dark / light theme" },
                { keys: ["?"],       label: "Show this dialog" },
                { keys: ["Esc"],     label: "Close dialog or mobile drawer" },
              ].map(({ keys, label }) => (
                <div key={label} className="flex items-center justify-between gap-4">
                  <dd className="text-sm text-cu-neutral-light">{label}</dd>
                  <dt className="flex items-center gap-1.5">
                    {keys.map((k, i) => (
                      <React.Fragment key={k}>
                        {i > 0 && <span className="text-xs text-cu-neutral">or</span>}
                        <kbd className="font-mono text-xs px-2 py-1 min-w-[1.75rem] text-center bg-cu-surface-char border border-border rounded text-foreground">
                          {k}
                        </kbd>
                      </React.Fragment>
                    ))}
                  </dt>
                </div>
              ))}
            </dl>
            <p className="text-xs text-cu-neutral mt-5">
              Click any token in the page to copy it.
            </p>
          </div>
        </>
      )}

      {/* ── Page-level toast (click-to-copy feedback) ──────────── */}
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] pointer-events-none transition-opacity duration-200"
        style={{ opacity: toast ? 1 : 0 }}
      >
        {toast && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cu-brandy">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-xs font-medium text-foreground">{toast}</span>
          </div>
        )}
      </div>
    </div>
  );
}