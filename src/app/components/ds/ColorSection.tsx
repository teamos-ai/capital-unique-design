import React from "react";

const neutrals = [
  { name: "Neutral Lightest", hex: "#F2F2F2", token: "--cu-neutral-lightest", textDark: true },
  { name: "Neutral Lighter",  hex: "#D9D9D9", token: "--cu-neutral-lighter",  textDark: true },
  { name: "Neutral Light",    hex: "#B5B5B5", token: "--cu-neutral-light",    textDark: true },
  { name: "Neutral",          hex: "#878787", token: "--cu-neutral",          textDark: false },
  { name: "Neutral Dark",     hex: "#525252", token: "--cu-neutral-dark",     textDark: false },
  { name: "Neutral Darker",   hex: "#1A1A1A", token: "--cu-neutral-darker",   textDark: false },
  { name: "Neutral Darkest",  hex: "#080808", token: "--cu-neutral-darkest",  textDark: false },
];

const brandyPunch = [
  { shade: "Lightest", hex: "#FAF0EA", token: "--cu-brandy-lightest", textDark: true },
  { shade: "Lighter",  hex: "#F5E2D5", token: "--cu-brandy-lighter",  textDark: true },
  { shade: "Light",    hex: "#DC9C6C", token: "--cu-brandy-light",    textDark: true },
  { shade: "BASE",     hex: "#CD722D", token: "--cu-brandy-punch",    textDark: false, isBase: true },
  { shade: "Dark",     hex: "#A45B24", token: "--cu-brandy-dark",     textDark: false },
  { shade: "Darker",   hex: "#522D12", token: "--cu-brandy-darker",   textDark: false },
  { shade: "Darkest",  hex: "#3D220D", token: "--cu-brandy-darkest",  textDark: false },
];

const amber = [
  { shade: "Lightest", hex: "#FFF9E5", token: "--cu-amber-lightest", textDark: true },
  { shade: "Lighter",  hex: "#FFF3CC", token: "--cu-amber-lighter",  textDark: true },
  { shade: "Light",    hex: "#FFD54C", token: "--cu-amber-light",    textDark: true },
  { shade: "BASE",     hex: "#FFC400", token: "--cu-amber",          textDark: true,  isBase: true },
  { shade: "Dark",     hex: "#CC9C00", token: "--cu-amber-dark",     textDark: false },
  { shade: "Darker",   hex: "#664E00", token: "--cu-amber-darker",   textDark: false },
  { shade: "Darkest",  hex: "#4C3A00", token: "--cu-amber-darkest",  textDark: false },
];

const marigold = [
  { shade: "Lightest", hex: "#F8F2E9", token: "--cu-marigold-lightest", textDark: true },
  { shade: "Lighter",  hex: "#F2E6D4", token: "--cu-marigold-lighter",  textDark: true },
  { shade: "Light",    hex: "#D2AA69", token: "--cu-marigold-light",    textDark: true },
  { shade: "BASE",     hex: "#BF862A", token: "--cu-marigold",          textDark: false, isBase: true },
  { shade: "Dark",     hex: "#986B21", token: "--cu-marigold-dark",     textDark: false },
  { shade: "Darker",   hex: "#4C3510", token: "--cu-marigold-darker",   textDark: false },
  { shade: "Darkest",  hex: "#39280C", token: "--cu-marigold-darkest",  textDark: false },
];

const surfaces = [
  { name: "Surface 00 – Void",  hex: "#080808", token: "--cu-neutral-darkest", textDark: false },
  { name: "Surface 01 – Abyss", hex: "#0D0D0D", token: "sidebar dark",         textDark: false },
  { name: "Surface 02 – Vault", hex: "#111111", token: "--card (dark)",         textDark: false },
  { name: "Surface 03 – Char",  hex: "#1A1A1A", token: "--cu-neutral-darker",   textDark: false },
  { name: "Surface 04 – Ember", hex: "#222222", token: "--muted (dark)",        textDark: false },
  { name: "Surface 05 – Smoke", hex: "#525252", token: "--cu-neutral-dark",     textDark: false },
];

/* ── Simple swatch for neutrals & surfaces ── */
function Swatch({ name, hex, token, sub, textDark }: {
  name: string; hex: string; token: string; sub?: string; textDark: boolean;
}) {
  return (
    <div className="rounded-lg overflow-hidden border border-white/8">
      <div className="h-20" style={{ background: hex }} />
      <div className="p-3 bg-[#111111]">
        <p className="text-sm font-semibold text-[#F2F2F2] mb-0.5">{name}</p>
        {sub && <p className="text-xs text-[#B4B4B4] mb-0.5">{sub}</p>}
        <p className="text-xs font-mono text-[#878787]">{token}</p>
        <p className="text-xs font-mono text-[#525252]">{hex}</p>
      </div>
    </div>
  );
}

function SwatchGroup({ title, items }: { title: string; items: typeof neutrals }) {
  return (
    <div className="mb-10">
      <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-4">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
        {items.map((c) => (
          <Swatch key={c.hex} {...c} />
        ))}
      </div>
    </div>
  );
}

/* ── Shade row for a single shade within a color family ── */
function ShadeRow({
  shade, hex, token, isBase, textDark,
}: {
  shade: string; hex: string; token: string; isBase?: boolean; textDark: boolean;
}) {
  const textColor = textDark ? "#1A1A1A" : "#F2F2F2";
  const subColor  = textDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.45)";
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 transition-all duration-150 ${isBase ? "ring-2 ring-white/20 ring-inset" : ""}`}
      style={{ background: hex }}
    >
      <div>
        <p className="text-sm font-semibold" style={{ color: textColor }}>
          {shade}
          {isBase && (
            <span
              className="ml-2 text-[10px] font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded"
              style={{ background: "rgba(0,0,0,0.18)", color: textColor }}
            >
              BASE
            </span>
          )}
        </p>
        <p className="text-[11px] font-mono mt-0.5" style={{ color: subColor }}>{token}</p>
      </div>
      <p className="text-xs font-mono font-semibold" style={{ color: subColor }}>{hex}</p>
    </div>
  );
}

/* ── Full color family column ── */
function ColorFamily({
  label,
  role,
  base,
  shades,
}: {
  label: string;
  role: string;
  base: string;
  shades: typeof brandyPunch;
}) {
  return (
    <div className="flex flex-col">
      {/* Column header */}
      <div
        className="rounded-t-xl px-4 py-3 mb-0 flex items-center justify-between"
        style={{ background: base }}
      >
        <div>
          <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
          <p className="text-[11px] text-white/60 font-mono">{base}</p>
        </div>
        <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full bg-black/20 text-white/80">
          {role}
        </span>
      </div>
      {/* Shade rows */}
      <div className="rounded-b-xl overflow-hidden border border-white/8 divide-y divide-white/5">
        {shades.map((s) => (
          <ShadeRow key={s.hex} {...s} />
        ))}
      </div>
    </div>
  );
}

export function ColorSection() {
  return (
    <section id="colors">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#B4B4B4] mb-2">Foundation</p>
        <h2 className="text-[#F2F2F2] mb-3">Color System</h2>
        <p className="text-[#878787] max-w-xl leading-relaxed">
          Three warm accent families — Brandy Punch (primary), Amber (secondary), Marigold (tertiary) — each with a 7-step shade scale. Components reference semantic aliases
          (<code className="text-[#CD722D] text-xs px-1 py-0.5 bg-[#1A1A1A] rounded">--accent</code>,{" "}
          <code className="text-[#CD722D] text-xs px-1 py-0.5 bg-[#1A1A1A] rounded">--background</code> etc.),
          not raw tokens directly.
        </p>
      </div>

      {/* ── Three accent families ── */}
      <div className="mb-12">
        <h4 className="text-[#878787] text-xs font-semibold tracking-widest uppercase mb-5">
          Warm Accent Families — 7-step scale each
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorFamily
            label="Brandy Punch"
            role="Primary"
            base="#CD722D"
            shades={brandyPunch}
          />
          <ColorFamily
            label="Amber"
            role="Secondary"
            base="#FFC400"
            shades={amber}
          />
          <ColorFamily
            label="Marigold"
            role="Tertiary"
            base="#BF862A"
            shades={marigold}
          />
        </div>
      </div>

      {/* ── Neutrals ── */}
      <SwatchGroup title="Neutrals — 7-step pure cool scale" items={neutrals} />

      {/* ── Surface hierarchy ── */}
      <SwatchGroup
        title="Dark surface hierarchy"
        items={surfaces.map((s) => ({ ...s, textDark: s.textDark }))}
      />
    </section>
  );
}
