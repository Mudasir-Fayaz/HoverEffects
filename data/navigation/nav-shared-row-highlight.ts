import type { HoverEffect } from "../types";

const css = `.he-nav-shared-row-highlight{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-shared-row-highlight, .he-nav-shared-row-highlight *, .he-nav-shared-row-highlight *::before, .he-nav-shared-row-highlight *::after { box-sizing: border-box; }
.he-nav-shared-row-highlight h2, .he-nav-shared-row-highlight h3, .he-nav-shared-row-highlight p, .he-nav-shared-row-highlight figure, .he-nav-shared-row-highlight ol, .he-nav-shared-row-highlight ul { margin: 0; }
.he-nav-shared-row-highlight h2, .he-nav-shared-row-highlight h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-shared-row-highlight img, .he-nav-shared-row-highlight svg { display: block; max-width: 100%; }
.he-nav-shared-row-highlight a { color: inherit; }
.he-nav-shared-row-highlight :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav32-track { position: relative; }
.nav32-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: min(250px, 100%);
}
.nav32-link {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav32-link[aria-current="page"] { color: var(--text); }
.nav32-link:hover, .nav32-link:focus-visible { color: var(--text); }
.nav32-meta { color: var(--text-2); font-size: .72rem; font-weight: 600; opacity: .8; }
.nav32-highlight {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  border-radius: 8px;
  background: var(--surface-2);
  transform: translateY(0);
  transition: transform .26s var(--ease), height .26s var(--ease);
  pointer-events: none;
  z-index: 0;
}
.nav32-link { z-index: 1; }
.nav32-list > li { position: relative; z-index: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-shared-row-highlight, .he-nav-shared-row-highlight *, .he-nav-shared-row-highlight *::before, .he-nav-shared-row-highlight *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navSharedRowHighlight: HoverEffect = {
  id: "nav-shared-row-highlight",
  title: "Shared Row Highlight",
  category: "navigation",
  description: "A single highlight layer travels to the hovered or focused row, supporting variable row heights.",
  tags: ["navigation","shared","row","highlight","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function NavSharedRowHighlight() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const list = nav.querySelector(".nav32-track") as HTMLElement | null;
    const highlight = nav.querySelector(".nav32-highlight") as HTMLElement | null;
    const links = Array.from(nav.querySelectorAll(".nav32-link")) as HTMLElement[];
    if (!list || !highlight || links.length === 0) return;
    let current = nav.querySelector('.nav32-link[aria-current="page"]') as HTMLElement | null;
    if (!current) current = links[0];

    const moveTo = (link: HTMLElement) => {
      const row = link.parentElement as HTMLElement | null;
      if (!row) return;
      highlight.style.height = row.offsetHeight + "px";
      highlight.style.transform = "translateY(" + row.offsetTop + "px)";
    };
    const reset = () => moveTo(current);
    const handleFocusOut = (event: FocusEvent) => {
      if (!nav.contains(event.relatedTarget as Node | null)) reset();
    };
    const linkEntries = links.map((link) => ({
      link,
      enter: () => moveTo(link),
      focus: () => moveTo(link),
    }));
    linkEntries.forEach((entry) => {
      entry.link.addEventListener("pointerenter", entry.enter);
      entry.link.addEventListener("focus", entry.focus);
    });
    nav.addEventListener("pointerleave", reset);
    nav.addEventListener("focusout", handleFocusOut);
    window.addEventListener("resize", reset);
    reset();
    return () => {
      linkEntries.forEach((entry) => {
        entry.link.removeEventListener("pointerenter", entry.enter);
        entry.link.removeEventListener("focus", entry.focus);
      });
      nav.removeEventListener("pointerleave", reset);
      nav.removeEventListener("focusout", handleFocusOut);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <nav ref={rootRef} className="he-nav-shared-row-highlight" aria-label="Example section">
        <div className="nav32-track">
          <ul className="nav32-list">
            <li><a className="nav32-link" href="https://example.com" aria-current="page">Overview<span className="nav32-meta">Start here</span></a></li>
            <li><a className="nav32-link" href="https://example.com">Guide<span className="nav32-meta">8 chapters</span></a></li>
            <li><a className="nav32-link" href="https://example.com">Details</a></li>
          </ul>
          <i className="nav32-highlight" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-shared-row-highlight" aria-label="Example section">
        <div class="nav32-track">
          <ul class="nav32-list">
            <li><a class="nav32-link" href="https://example.com" aria-current="page">Overview<span class="nav32-meta">Start here</span></a></li>
            <li><a class="nav32-link" href="https://example.com">Guide<span class="nav32-meta">8 chapters</span></a></li>
            <li><a class="nav32-link" href="https://example.com">Details</a></li>
          </ul>
          <i class="nav32-highlight" aria-hidden="true"></i>
        </div>
      </nav>
<script>(function(){var nav=document.querySelector('.he-nav-shared-row-highlight');if(!nav)return;var list=nav.querySelector('.nav32-track'),highlight=nav.querySelector('.nav32-highlight'),links=Array.prototype.slice.call(nav.querySelectorAll('.nav32-link'));if(!list||!highlight||!links.length)return;var current=nav.querySelector('.nav32-link[aria-current="page"]')||links[0];function moveTo(link){if(!link)return;var row=link.parentElement;highlight.style.height=row.offsetHeight+'px';highlight.style.transform='translateY('+row.offsetTop+'px)'}function reset(){moveTo(current)}links.forEach(function(link){link.addEventListener('pointerenter',function(){moveTo(link)});link.addEventListener('focus',function(){moveTo(link)})});nav.addEventListener('pointerleave',reset);nav.addEventListener('focusout',function(event){if(!nav.contains(event.relatedTarget))reset()});window.addEventListener('resize',reset);reset()})();</script>`,
};
