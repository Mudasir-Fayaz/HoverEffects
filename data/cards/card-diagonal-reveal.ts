import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-diagonal-reveal{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-diagonal-reveal, .he-card-diagonal-reveal *, .he-card-diagonal-reveal *::before, .he-card-diagonal-reveal *::after { box-sizing: border-box; }
.he-card-diagonal-reveal h2, .he-card-diagonal-reveal h3, .he-card-diagonal-reveal p, .he-card-diagonal-reveal figure, .he-card-diagonal-reveal ol, .he-card-diagonal-reveal ul { margin: 0; }
.he-card-diagonal-reveal h2, .he-card-diagonal-reveal h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-diagonal-reveal img, .he-card-diagonal-reveal svg { display: block; max-width: 100%; }
.he-card-diagonal-reveal a { color: inherit; }
.he-card-diagonal-reveal :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-diagonal-reveal .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-diagonal-reveal .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Diagonal Reveal
   ========================================================= */.he-card-diagonal-reveal{
  width: min(380px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-diagonal-reveal .media{
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-diagonal-reveal .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-diagonal-reveal .alt{
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: clip-path .6s var(--ease);
}.he-card-diagonal-reveal .card-body{ padding: 18px 20px 20px; }.he-card-diagonal-reveal .cat{
  font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}.he-card-diagonal-reveal h2{ font-size: 1.12rem; }.he-card-diagonal-reveal .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-diagonal-reveal:hover .alt{ clip-path: polygon(0 0, 100% 0, 112% 100%, 0 100%); }
}.he-card-diagonal-reveal:focus-within .alt{ clip-path: polygon(0 0, 100% 0, 112% 100%, 0 100%); }

/* Fallback: browsers without polygon clip-path get a simple crossfade. */
@supports not (clip-path: polygon(0 0)){.he-card-diagonal-reveal .alt{ clip-path: none; opacity: 0; transition: opacity .5s var(--ease); }.he-card-diagonal-reveal:hover .alt, .he-card-diagonal-reveal:focus-within .alt{ opacity: 1; }
}
@media (prefers-reduced-motion: reduce){.he-card-diagonal-reveal .alt{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-diagonal-reveal { width: min(320px, 100%); height: 250px; }
.he-card-diagonal-reveal { overflow: hidden; }
.he-card-diagonal-reveal { display: flex; flex-direction: column; }
.he-card-diagonal-reveal .media, .he-card-diagonal-reveal .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-diagonal-reveal .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-diagonal-reveal .card-footer { margin-top: auto; }
.he-card-diagonal-reveal h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-diagonal-reveal .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-diagonal-reveal .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-diagonal-reveal .meta { font-size: .75rem; margin-top: 7px; }
.he-card-diagonal-reveal .price { font-size: .98rem; margin-top: 9px; }
.he-card-diagonal-reveal .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-diagonal-reveal .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-diagonal-reveal .card-icon svg { width: 17px; height: 17px; }
.he-card-diagonal-reveal .card-body { padding: 13px 16px 14px; }
.he-card-diagonal-reveal .chips { gap: 6px; margin-top: 12px; }
.he-card-diagonal-reveal .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-diagonal-reveal .specs { gap: 5px; margin-top: 9px; }
.he-card-diagonal-reveal .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-diagonal-reveal .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-diagonal-reveal .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-diagonal-reveal .trail { margin: 14px 6px 0; }
.he-card-diagonal-reveal .trail::before { top: 13px; }
.he-card-diagonal-reveal .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-diagonal-reveal .chart { height: 52px; margin-top: 12px; }
.he-card-diagonal-reveal .value { font-size: 1.45rem; }`;

const IMG_PORTFOLIO_ATRIUM = cardImage("portfolio-atrium");
const IMG_PORTFOLIO_ATRIUM_ALT = cardImage("portfolio-atrium-alt");

export const cardDiagonalReveal: HoverEffect = {
  id: "card-diagonal-reveal",
  title: "Diagonal Reveal",
  category: "cards",
  description: "An alternate image reveals through a polygon clip-path, with a crossfade fallback.",
  tags: ["card","diagonal","reveal","hover"],
  animationType: "clip-path",
  complexity: "medium",
  css,
  react: `export default function DiagonalRevealCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-diagonal-reveal" aria-labelledby="card-diagonal-reveal-title">
      <figure className="media">
        <img className="base" src="${IMG_PORTFOLIO_ATRIUM}" alt="Daylight view: atrium building with layered concrete slabs and warm sky" width="1200" height="750" />
        <img className="alt" src="${IMG_PORTFOLIO_ATRIUM_ALT}" alt="" aria-hidden="true" />
      </figure>
      <div className="card-body">
        <p className="cat">Architecture · 2025</p>
        <h2 id="card-diagonal-reveal-title">Atrium House at dusk</h2>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">See the dusk renders
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-diagonal-reveal" aria-labelledby="card-diagonal-reveal-title">
      <figure class="media">
        <img class="base" src="${IMG_PORTFOLIO_ATRIUM}" alt="Daylight view: atrium building with layered concrete slabs and warm sky" width="1200" height="750">
        <img class="alt" src="${IMG_PORTFOLIO_ATRIUM_ALT}" alt="" aria-hidden="true">
      </figure>
      <div class="card-body">
        <p class="cat">Architecture · 2025</p>
        <h2 id="card-diagonal-reveal-title">Atrium House at dusk</h2>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">See the dusk renders
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
