import type { HoverEffect } from "../types";

const css = `.he-card-texture-reveal{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-texture-reveal, .he-card-texture-reveal *, .he-card-texture-reveal *::before, .he-card-texture-reveal *::after { box-sizing: border-box; }
.he-card-texture-reveal h2, .he-card-texture-reveal h3, .he-card-texture-reveal p, .he-card-texture-reveal figure, .he-card-texture-reveal ol, .he-card-texture-reveal ul { margin: 0; }
.he-card-texture-reveal h2, .he-card-texture-reveal h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-texture-reveal img, .he-card-texture-reveal svg { display: block; max-width: 100%; }
.he-card-texture-reveal a { color: inherit; }
.he-card-texture-reveal :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-texture-reveal .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-texture-reveal .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Texture Reveal
   ========================================================= */.he-card-texture-reveal{
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-texture-reveal .texture{
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--line-strong) 1px, transparent 1.3px);
  background-size: 15px 15px;
  opacity: 0;
  transition: opacity .42s var(--ease);
  pointer-events: none;
}.he-card-texture-reveal .card-content, .he-card-texture-reveal .card-footer{ position: relative; }.he-card-texture-reveal .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-texture-reveal h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-texture-reveal .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-texture-reveal .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-texture-reveal:hover .texture{ opacity: .55; }
}.he-card-texture-reveal:focus-within .texture{ opacity: .55; }
@media (prefers-reduced-motion: reduce){.he-card-texture-reveal .texture{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-texture-reveal { width: min(320px, 100%); height: 250px; }
.he-card-texture-reveal { overflow: hidden; }
.he-card-texture-reveal { display: flex; flex-direction: column; }
.he-card-texture-reveal .card-footer { margin-top: auto; }
.he-card-texture-reveal h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-texture-reveal .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-texture-reveal .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-texture-reveal .meta { font-size: .75rem; margin-top: 7px; }
.he-card-texture-reveal .price { font-size: .98rem; margin-top: 9px; }
.he-card-texture-reveal .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-texture-reveal .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-texture-reveal .card-icon svg { width: 17px; height: 17px; }
.he-card-texture-reveal .card-body { padding: 13px 16px 14px; }
.he-card-texture-reveal .chips { gap: 6px; margin-top: 12px; }
.he-card-texture-reveal .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-texture-reveal .specs { gap: 5px; margin-top: 9px; }
.he-card-texture-reveal .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-texture-reveal .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-texture-reveal .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-texture-reveal .trail { margin: 14px 6px 0; }
.he-card-texture-reveal .trail::before { top: 13px; }
.he-card-texture-reveal .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-texture-reveal .chart { height: 52px; margin-top: 12px; }
.he-card-texture-reveal .value { font-size: 1.45rem; }`;

export const cardTextureReveal: HoverEffect = {
  id: "card-texture-reveal",
  title: "Texture Reveal",
  category: "cards",
  description: "A faint dot-grid texture fades in beneath the copy on hover.",
  tags: ["card","texture","reveal","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function TextureRevealCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-texture-reveal" aria-labelledby="card-texture-reveal-title">
      <span className="texture" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6M9 12h6M9 15h3" />
          </svg>
        </span>
        <h2 id="card-texture-reveal-title">Documentation engine</h2>
        <p className="body-copy">Markdown-first docs that build to a static site, version alongside your code and deploy straight to the edge.</p>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">Read the technical notes
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-texture-reveal" aria-labelledby="card-texture-reveal-title">
      <span class="texture" aria-hidden="true"></span>
      <div class="card-content">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6M9 12h6M9 15h3"/>
          </svg>
        </span>
        <h2 id="card-texture-reveal-title">Documentation engine</h2>
        <p class="body-copy">Markdown-first docs that build to a static site, version alongside your code and deploy straight to the edge.</p>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">Read the technical notes
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
