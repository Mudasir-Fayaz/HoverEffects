import type { HoverEffect } from "../types";

const css = `.he-card-icon-crossfade{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-icon-crossfade, .he-card-icon-crossfade *, .he-card-icon-crossfade *::before, .he-card-icon-crossfade *::after { box-sizing: border-box; }
.he-card-icon-crossfade h2, .he-card-icon-crossfade h3, .he-card-icon-crossfade p, .he-card-icon-crossfade figure, .he-card-icon-crossfade ol, .he-card-icon-crossfade ul { margin: 0; }
.he-card-icon-crossfade h2, .he-card-icon-crossfade h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-icon-crossfade img, .he-card-icon-crossfade svg { display: block; max-width: 100%; }
.he-card-icon-crossfade a { color: inherit; }
.he-card-icon-crossfade :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-icon-crossfade .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-icon-crossfade .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Icon Crossfade
   ========================================================= */.he-card-icon-crossfade{
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-icon-crossfade .card-icon{
  position: relative;
  width: 46px; height: 46px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-icon-crossfade .icon{
  position: absolute;
  top: 50%; left: 50%;
  translate: -50% -50%;
  transition: opacity .3s var(--ease);
}.he-card-icon-crossfade .icon-a{ opacity: 1; }.he-card-icon-crossfade .icon-b{ opacity: 0; }.he-card-icon-crossfade h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-icon-crossfade .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-icon-crossfade .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-icon-crossfade:hover .icon-a{ opacity: 0; }.he-card-icon-crossfade:hover .icon-b{ opacity: 1; }
}.he-card-icon-crossfade:focus-within .icon-a{ opacity: 0; }.he-card-icon-crossfade:focus-within .icon-b{ opacity: 1; }
@media (prefers-reduced-motion: reduce){.he-card-icon-crossfade .icon{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-icon-crossfade { width: min(320px, 100%); height: 250px; }
.he-card-icon-crossfade { overflow: hidden; }
.he-card-icon-crossfade { display: flex; flex-direction: column; }
.he-card-icon-crossfade .card-footer { margin-top: auto; }
.he-card-icon-crossfade h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-icon-crossfade .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-icon-crossfade .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-icon-crossfade .meta { font-size: .75rem; margin-top: 7px; }
.he-card-icon-crossfade .price { font-size: .98rem; margin-top: 9px; }
.he-card-icon-crossfade .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-icon-crossfade .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-icon-crossfade .card-icon svg { width: 17px; height: 17px; }
.he-card-icon-crossfade .card-body { padding: 13px 16px 14px; }
.he-card-icon-crossfade .chips { gap: 6px; margin-top: 12px; }
.he-card-icon-crossfade .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-icon-crossfade .specs { gap: 5px; margin-top: 9px; }
.he-card-icon-crossfade .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-icon-crossfade .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-icon-crossfade .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-icon-crossfade .trail { margin: 14px 6px 0; }
.he-card-icon-crossfade .trail::before { top: 13px; }
.he-card-icon-crossfade .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-icon-crossfade .chart { height: 52px; margin-top: 12px; }
.he-card-icon-crossfade .value { font-size: 1.45rem; }`;

export const cardIconCrossfade: HoverEffect = {
  id: "card-icon-crossfade",
  title: "Icon Crossfade",
  category: "cards",
  description: "Two aligned inline icons crossfade inside a fixed icon box on hover.",
  tags: ["card","icon","crossfade","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function IconCrossfadeCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-icon-crossfade" aria-labelledby="card-icon-crossfade-title">
      <span className="card-icon" aria-hidden="true">
        <svg className="icon icon-a" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2.5" /><path d="M4 10h16M10 4v16" />
        </svg>
        <svg className="icon icon-b" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 3 10.5 13.5" /><path d="M21 3 14 21l-3.5-7.5L3 10z" />
        </svg>
      </span>
      <h2 id="card-icon-crossfade-title">From wireframe to launch</h2>
      <p className="body-copy">One continuous track from first sketch to production release, with review gates you control.</p>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">See the delivery track
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-icon-crossfade" aria-labelledby="card-icon-crossfade-title">
      <span class="card-icon" aria-hidden="true">
        <svg class="icon icon-a" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2.5"/><path d="M4 10h16M10 4v16"/>
        </svg>
        <svg class="icon icon-b" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 3 10.5 13.5"/><path d="M21 3 14 21l-3.5-7.5L3 10z"/>
        </svg>
      </span>
      <h2 id="card-icon-crossfade-title">From wireframe to launch</h2>
      <p class="body-copy">One continuous track from first sketch to production release, with review gates you control.</p>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">See the delivery track
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
