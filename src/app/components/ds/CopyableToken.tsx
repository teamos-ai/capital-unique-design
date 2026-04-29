import React, { useState } from "react";

/* Inline click-to-copy for token names. Local check-mark feedback (1.5s) plus
   a global custom event (`cu-toast`) the page-level toast can subscribe to. */
export function CopyableToken({ token, className = "" }: { token: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cu-toast", { detail: `Copied  ${token}` }));
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      title={copied ? "Copied" : `Copy ${token}`}
      className={`inline-flex items-center gap-1.5 font-mono text-xs cursor-pointer transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-brandy-light focus-visible:ring-offset-2 focus-visible:ring-offset-background
        rounded px-1 -mx-1 ${className}`}
    >
      <span>{token}</span>
      <span className="opacity-60" aria-hidden="true">
        {copied ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
    </button>
  );
}
