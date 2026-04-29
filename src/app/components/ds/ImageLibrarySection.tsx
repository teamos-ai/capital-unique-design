import React, { useEffect, useMemo, useState } from "react";
import { libraryImages, LibraryCategory, LibraryImage } from "../../../imports/library/_meta";

/* Vite eager-globs all images in the library folders.
   Each key is e.g. "../../../imports/library/people/owner.jpg",
   each value is the resolved asset URL. */
const fileMap = import.meta.glob<string>(
  "../../../imports/library/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

/* Convert a glob key like "../../../imports/library/people/foo.jpg"
   into the metadata-relative path "people/foo.jpg". */
function relPath(globKey: string): string {
  const marker = "/library/";
  const idx = globKey.indexOf(marker);
  return idx === -1 ? globKey : globKey.slice(idx + marker.length);
}

const categories: { id: "all" | LibraryCategory; label: string }[] = [
  { id: "all",         label: "All" },
  { id: "people",      label: "People" },
  { id: "office",      label: "Office" },
  { id: "books",       label: "Books" },
  { id: "footer",      label: "Footer" },
  { id: "editorial",   label: "Editorial" },
  { id: "hero",        label: "Hero" },
  { id: "bank-cards",  label: "Bank Cards" },
  { id: "money",       label: "Money" },
  { id: "abstract",    label: "Abstract" },
];

const ratioToTailwind: Record<LibraryImage["ratio"], string> = {
  "16:9":  "aspect-video",
  "4:5":   "aspect-[4/5]",
  "1:1":   "aspect-square",
  "3:2":   "aspect-[3/2]",
  "21:9":  "aspect-[21/9]",
  "9:16":  "aspect-[9/16]",
};

const licenseStyle: Record<LibraryImage["license"], string> = {
  "Brand-owned":     "bg-cu-brandy/15  text-cu-brandy-light    border-cu-brandy/40",
  "Stock-licensed":  "bg-cu-inkwell/15 text-cu-inkwell-light   border-cu-inkwell/40",
  "Editorial-use":   "bg-cu-amber/15   text-cu-amber-light     border-cu-amber/35",
  "Internal-only":   "bg-destructive/15 text-destructive-foreground border-destructive/40",
};

function emit(detail: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cu-toast", { detail }));
  }
}
function copyToClipboard(text: string, label: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(text);
    emit(`Copied ${label}`);
  }
}

/* Resolve metadata + URL into a renderable list, plus warnings. */
function buildIndex() {
  const filesByPath: Record<string, string> = {};
  for (const [key, url] of Object.entries(fileMap)) {
    filesByPath[relPath(key)] = url;
  }

  const known = new Set(libraryImages.map(i => i.src));
  const orphanFiles = Object.keys(filesByPath).filter(p => !known.has(p));
  const missingFiles = libraryImages.filter(i => !filesByPath[i.src]);

  const items = libraryImages
    .filter(i => filesByPath[i.src])
    .map(i => ({ ...i, url: filesByPath[i.src] }));

  return { items, orphanFiles, missingFiles };
}

export function ImageLibrarySection() {
  const [activeCat, setActiveCat] = useState<"all" | LibraryCategory>("all");
  const [lightbox, setLightbox] = useState<(LibraryImage & { url: string }) | null>(null);

  const { items, orphanFiles, missingFiles } = useMemo(buildIndex, []);

  const filtered = useMemo(() => {
    if (activeCat === "all") return items;
    return items.filter(i => i.src.startsWith(activeCat + "/"));
  }, [items, activeCat]);

  const totalCount = items.length;
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: items.length };
    for (const i of items) {
      const cat = i.src.split("/")[0];
      map[cat] = (map[cat] ?? 0) + 1;
    }
    return map;
  }, [items]);

  // Esc closes lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="library" aria-labelledby="library-heading">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Resources</p>
        <h2 id="library-heading" className="text-foreground mb-3">Image Library</h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Brand photography and reference imagery, organized by use. Click a thumbnail to view full-size; click the alt text or filename below it to copy. License badges document where each image can ship.
        </p>
      </div>

      {/* Authoring guidance card */}
      <div className="rounded-xl border border-border bg-card p-5 md:p-6 mb-8 max-w-3xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-cu-brandy mb-2">Adding new images</p>
        <ol className="text-sm text-cu-neutral-light space-y-1.5 list-decimal pl-4" style={{ lineHeight: 1.65 }}>
          <li>Drop the file into <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">src/imports/library/&lt;category&gt;/</code> — kebab-case filename, max ~1600px on the long edge, JPG 80% (or WebP), keep under 500 KB.</li>
          <li>Add an entry to <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">src/imports/library/_meta.ts</code> with <strong>alt</strong>, <strong>ratio</strong>, and <strong>license</strong>.</li>
          <li>Save — Vite hot-reloads, the new image appears here, and any orphans (files without metadata) are listed below as a warning.</li>
        </ol>
        <p className="text-xs text-cu-neutral mt-3" style={{ lineHeight: 1.6 }}>
          <strong className="text-cu-neutral-light">Using these in Figma:</strong> after you push to GitHub, each image has a stable raw URL like{" "}
          <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">raw.githubusercontent.com/&lt;org&gt;/&lt;repo&gt;/main/src/imports/library/&lt;category&gt;/&lt;file&gt;</code>. In Figma, right-click → <em>Place Image</em> → paste the URL.
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(({ id, label }) => {
          const c = counts[id] ?? 0;
          const isActive = activeCat === id;
          return (
            <button
              key={id}
              onClick={() => setActiveCat(id)}
              aria-pressed={isActive}
              className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors duration-200 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light
                ${isActive
                  ? "bg-cu-brandy/15 text-cu-brandy-light border-cu-brandy/40"
                  : "bg-cu-surface-char text-muted-foreground border-border hover:text-foreground hover:border-cu-brandy/30"
                }`}
            >
              {label}
              <span className="ml-1.5 text-cu-neutral font-mono">{c}</span>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {totalCount === 0 && (
        <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-foreground font-semibold mb-2" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "20px" }}>
            No images added yet.
          </p>
          <p className="text-cu-neutral-light text-sm max-w-md mx-auto" style={{ lineHeight: 1.65 }}>
            Drop images into <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">src/imports/library/&lt;category&gt;/</code> and add an entry to <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">_meta.ts</code> to populate this gallery.
          </p>
        </div>
      )}

      {/* Filtered-but-empty state */}
      {totalCount > 0 && filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-cu-neutral-light text-sm">No images in this category yet.</p>
        </div>
      )}

      {/* Image grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {filtered.map(img => (
            <figure
              key={img.src}
              className="group flex flex-col rounded-xl overflow-hidden border border-border bg-card hover:border-cu-brandy/30 transition-colors duration-200"
            >
              <button
                type="button"
                onClick={() => setLightbox(img)}
                className={`block w-full ${ratioToTailwind[img.ratio]} bg-cu-surface-char overflow-hidden cursor-zoom-in
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light`}
                aria-label={`View ${img.alt} full size`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="p-4 flex flex-col gap-2 flex-1">
                <p
                  className="text-cu-neutral-light text-sm cursor-pointer hover:text-foreground transition-colors"
                  title="Click to copy alt text"
                  onClick={() => copyToClipboard(img.alt, "alt text")}
                  style={{ lineHeight: 1.5 }}
                >
                  {img.alt}
                </p>
                <p
                  className="font-mono text-xs text-cu-neutral cursor-pointer hover:text-cu-brandy transition-colors break-all"
                  title="Click to copy filename"
                  onClick={() => copyToClipboard(img.src, "filename")}
                >
                  {img.src}
                </p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-cu-surface-char text-cu-neutral-light border border-border">
                    {img.ratio}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${licenseStyle[img.license]}`}>
                    {img.license}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Authoring warnings: orphans (file without metadata) and missing (metadata without file) */}
      {(orphanFiles.length > 0 || missingFiles.length > 0) && (
        <div className="rounded-xl border border-cu-amber/40 bg-cu-amber/10 p-5 mb-4">
          <p className="text-cu-amber-light text-xs font-semibold tracking-widest uppercase mb-3">Library warnings</p>
          {orphanFiles.length > 0 && (
            <div className="mb-3">
              <p className="text-foreground text-sm mb-2">
                <strong>{orphanFiles.length}</strong> {orphanFiles.length === 1 ? "file is" : "files are"} in the library folder but missing from <code className="text-cu-brandy text-xs px-1 py-0.5 bg-cu-surface-char rounded">_meta.ts</code> — they won't render until you add metadata:
              </p>
              <ul className="text-xs font-mono text-cu-neutral-light space-y-1 pl-4">
                {orphanFiles.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          )}
          {missingFiles.length > 0 && (
            <div>
              <p className="text-foreground text-sm mb-2">
                <strong>{missingFiles.length}</strong> metadata {missingFiles.length === 1 ? "entry points" : "entries point"} at {missingFiles.length === 1 ? "a file" : "files"} that {missingFiles.length === 1 ? "doesn't" : "don't"} exist on disk:
              </p>
              <ul className="text-xs font-mono text-cu-neutral-light space-y-1 pl-4">
                {missingFiles.map(f => <li key={f.src}>{f.src}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <>
          <div
            className="fixed inset-0 z-[70] bg-cu-neutral-darkest/85"
            onClick={() => setLightbox(null)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            className="fixed inset-0 z-[71] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <div className="relative max-w-[90vw] max-h-[90vh] pointer-events-auto">
              <img
                src={lightbox.url}
                alt={lightbox.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
              />
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="text-cu-neutral-light text-sm" style={{ maxWidth: "60ch", lineHeight: 1.5 }}>{lightbox.alt}</p>
                <button
                  onClick={() => setLightbox(null)}
                  className="shrink-0 w-9 h-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light bg-card"
                  aria-label="Close image preview"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
