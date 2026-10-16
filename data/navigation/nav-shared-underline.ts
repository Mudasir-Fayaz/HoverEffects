import type { HoverEffect } from "../types";

const css = `.he-nav-shared-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-shared-underline, .he-nav-shared-underline *, .he-nav-shared-underline *::before, .he-nav-shared-underline *::after { box-sizing: border-box; }
.he-nav-shared-underline h2, .he-nav-shared-underline h3, .he-nav-shared-underline p, .he-nav-shared-underline figure, .he-nav-shared-underline ol, .he-nav-shared-underline ul { margin: 0; }
.he-nav-shared-underline h2, .he-nav-shared-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-shared-underline img, .he-nav-shared-underline svg { display: block; max-width: 100%; }
.he-nav-shared-underline a { color: inherit; }
.he-nav-shared-underline :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav31-track { position: relative; }
.nav31-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.nav31-link {
  display: inline-flex;
  padding: 10px 14px 13px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav31-link[aria-current="page"] { color: var(--text); }
.nav31-link:hover { color: var(--text); }
.nav31-link:focus-visible { color: var(--text); }
.nav31-indicator {
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 0;
  height: 2.5px;
  border-radius: 2.5px;
  background: var(--accent);
  transition: transform .26s var(--ease), width .26s var(--ease);
  pointer-events: none;
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-shared-underline, .he-nav-shared-underline *, .he-nav-shared-underline *::before, .he-nav-shared-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navSharedUnderline: HoverEffect = {
  id: "nav-shared-underline",
  title: "Shared Underline",
  category: "navigation",
  description: "One underline indicator slides and resizes beneath the hovered or focused link; aria-current is untouched.",
  tags: ["navigation","shared","underline","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function NavSharedUnderline() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const list = nav.querySelector(".nav31-track") as HTMLElement | null;
    const indicator = nav.querySelector(".nav31-indicator") as HTMLElement | null;
    const links = Array.from(nav.querySelectorAll(".nav31-link")) as HTMLElement[];
    if (!list || !indicator || links.length === 0) return;
    let current = nav.querySelector('.nav31-link[aria-current="page"]') as HTMLElement | null;
    if (!current) current = links[0];

    const moveTo = (link: HTMLElement) => {
      const listRect = list.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      indicator.style.width = linkRect.width + "px";
      indicator.style.transform = "translateX(" + (linkRect.left - listRect.left) + "px)";
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
      <nav ref={rootRef} className="he-nav-shared-underline" aria-label="Example section">
        <div className="nav31-track">
          <ul className="nav31-list">
            <li><a className="nav31-link" href="https://example.com" aria-current="page">Overview</a></li>
            <li><a className="nav31-link" href="https://example.com">Guide</a></li>
            <li><a className="nav31-link" href="https://example.com">Details</a></li>
          </ul>
          <i className="nav31-indicator" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-shared-underline" aria-label="Example section">
        <div class="nav31-track">
          <ul class="nav31-list">
            <li><a class="nav31-link" href="https://example.com" aria-current="page">Overview</a></li>
            <li><a class="nav31-link" href="https://example.com">Guide</a></li>
            <li><a class="nav31-link" href="https://example.com">Details</a></li>
          </ul>
          <i class="nav31-indicator" aria-hidden="true"></i>
        </div>
      </nav>
<script>(function(){var nav=document.querySelector('.he-nav-shared-underline');if(!nav)return;var list=nav.querySelector('.nav31-track'),indicator=nav.querySelector('.nav31-indicator'),links=Array.prototype.slice.call(nav.querySelectorAll('.nav31-link'));if(!list||!indicator||!links.length)return;var current=nav.querySelector('.nav31-link[aria-current="page"]')||links[0];function moveTo(link){if(!link)return;var listRect=list.getBoundingClientRect(),linkRect=link.getBoundingClientRect();indicator.style.width=linkRect.width+'px';indicator.style.transform='translateX('+(linkRect.left-listRect.left)+'px)'}function reset(){moveTo(current)}links.forEach(function(link){link.addEventListener('pointerenter',function(){moveTo(link)});link.addEventListener('focus',function(){moveTo(link)})});nav.addEventListener('pointerleave',reset);nav.addEventListener('focusout',function(event){if(!nav.contains(event.relatedTarget))reset()});window.addEventListener('resize',reset);reset()})();</script>`,
};
