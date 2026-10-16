import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-diagonal-sheen{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-diagonal-sheen, .he-card-diagonal-sheen *, .he-card-diagonal-sheen *::before, .he-card-diagonal-sheen *::after { box-sizing: border-box; }
.he-card-diagonal-sheen h2, .he-card-diagonal-sheen h3, .he-card-diagonal-sheen p, .he-card-diagonal-sheen figure, .he-card-diagonal-sheen ol, .he-card-diagonal-sheen ul { margin: 0; }
.he-card-diagonal-sheen h2, .he-card-diagonal-sheen h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-diagonal-sheen img, .he-card-diagonal-sheen svg { display: block; max-width: 100%; }
.he-card-diagonal-sheen a { color: inherit; }
.he-card-diagonal-sheen :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-diagonal-sheen .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-diagonal-sheen .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Diagonal Sheen
   ========================================================= */.he-card-diagonal-sheen{
  width: min(360px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-diagonal-sheen .media{
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-diagonal-sheen .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-diagonal-sheen .sheen{
  position: absolute;
  inset: -40% -80%;
  background: linear-gradient(105deg, transparent 44%, rgb(255 255 255 / .48) 50%, transparent 56%);
  opacity: 0;
  transform: translateX(-34%);
  pointer-events: none;
}.he-card-diagonal-sheen .card-body{ padding: 18px 20px 20px; }.he-card-diagonal-sheen h2{ font-size: 1.1rem; margin-bottom: 7px; }.he-card-diagonal-sheen .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-diagonal-sheen .card-footer{ margin-top: 15px; }
@keyframes he-card-diagonal-sheen-sheen{
  0%   { opacity: 0; transform: translateX(-34%); }
  14%  { opacity: .95; }
  72%  { opacity: .5; }
  100% { opacity: 0; transform: translateX(34%); }
}
@media (hover: hover) and (pointer: fine){.he-card-diagonal-sheen:hover .sheen{ animation: he-card-diagonal-sheen-sheen .85s var(--ease) 1; }
}.he-card-diagonal-sheen:focus-within .sheen{ animation: he-card-diagonal-sheen-sheen .85s var(--ease) 1; }
@media (prefers-reduced-motion: reduce){.he-card-diagonal-sheen:hover .sheen, .he-card-diagonal-sheen:focus-within .sheen{ animation: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-diagonal-sheen { width: min(320px, 100%); height: 250px; }
.he-card-diagonal-sheen { overflow: hidden; }
.he-card-diagonal-sheen { display: flex; flex-direction: column; }
.he-card-diagonal-sheen .media, .he-card-diagonal-sheen .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-diagonal-sheen .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-diagonal-sheen .card-footer { margin-top: auto; }
.he-card-diagonal-sheen h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-diagonal-sheen .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-diagonal-sheen .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-diagonal-sheen .meta { font-size: .75rem; margin-top: 7px; }
.he-card-diagonal-sheen .price { font-size: .98rem; margin-top: 9px; }
.he-card-diagonal-sheen .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-diagonal-sheen .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-diagonal-sheen .card-icon svg { width: 17px; height: 17px; }
.he-card-diagonal-sheen .card-body { padding: 13px 16px 14px; }
.he-card-diagonal-sheen .chips { gap: 6px; margin-top: 12px; }
.he-card-diagonal-sheen .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-diagonal-sheen .specs { gap: 5px; margin-top: 9px; }
.he-card-diagonal-sheen .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-diagonal-sheen .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-diagonal-sheen .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-diagonal-sheen .trail { margin: 14px 6px 0; }
.he-card-diagonal-sheen .trail::before { top: 13px; }
.he-card-diagonal-sheen .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-diagonal-sheen .chart { height: 52px; margin-top: 12px; }
.he-card-diagonal-sheen .value { font-size: 1.45rem; }`;

const IMG_PORTFOLIO_ATRIUM = cardImage("portfolio-atrium");

export const cardDiagonalSheen: HoverEffect = {
  id: "card-diagonal-sheen",
  title: "Diagonal Sheen",
  category: "cards",
  description: "A single diagonal light sweep crosses the media once per hover, then fades out.",
  tags: ["card","diagonal","sheen","hover"],
  animationType: "animation",
  complexity: "simple",
  css,
  react: `export default function DiagonalSheenCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-diagonal-sheen" aria-labelledby="card-diagonal-sheen-title">
      <figure className="media">
        <img src="${IMG_PORTFOLIO_ATRIUM}" alt="Illustration of an atrium building with layered concrete slabs and columns" width="1200" height="750" />
        <span className="sheen" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-diagonal-sheen-title">Atrium House courtyard</h2>
        <p className="body-copy">A residential courtyard project in warm concrete and shaded glass, completed in 2025.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Open the project notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-diagonal-sheen" aria-labelledby="card-diagonal-sheen-title">
      <figure class="media">
        <img src="${IMG_PORTFOLIO_ATRIUM}" alt="Illustration of an atrium building with layered concrete slabs and columns" width="1200" height="750">
        <span class="sheen" aria-hidden="true"></span>
      </figure>
      <div class="card-body">
        <h2 id="card-diagonal-sheen-title">Atrium House courtyard</h2>
        <p class="body-copy">A residential courtyard project in warm concrete and shaded glass, completed in 2025.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Open the project notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
