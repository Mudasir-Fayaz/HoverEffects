import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-split-shutter-reveal{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-split-shutter-reveal, .he-card-split-shutter-reveal *, .he-card-split-shutter-reveal *::before, .he-card-split-shutter-reveal *::after { box-sizing: border-box; }
.he-card-split-shutter-reveal h2, .he-card-split-shutter-reveal h3, .he-card-split-shutter-reveal p, .he-card-split-shutter-reveal figure, .he-card-split-shutter-reveal ol, .he-card-split-shutter-reveal ul { margin: 0; }
.he-card-split-shutter-reveal h2, .he-card-split-shutter-reveal h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-split-shutter-reveal img, .he-card-split-shutter-reveal svg { display: block; max-width: 100%; }
.he-card-split-shutter-reveal a { color: inherit; }
.he-card-split-shutter-reveal :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-split-shutter-reveal .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-split-shutter-reveal .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Split Shutter Reveal
   ========================================================= */.he-card-split-shutter-reveal{
  width: min(380px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-split-shutter-reveal .media{
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-split-shutter-reveal .media > img{ width: 100%; height: 100%; object-fit: cover; }.he-card-split-shutter-reveal .shutter{
  position: absolute;
  top: 0; bottom: 0;
  width: 50.4%;
  background: rgb(24 30 27 / .8);
  background: linear-gradient(180deg, rgb(28 36 32 / .86), rgb(18 24 21 / .78));
  transition: transform .55s var(--ease);
  pointer-events: none;
}.he-card-split-shutter-reveal .shutter-left{ left: 0; }.he-card-split-shutter-reveal .shutter-right{ right: 0; }.he-card-split-shutter-reveal .card-body{ padding: 18px 20px 20px; }.he-card-split-shutter-reveal h2{ font-size: 1.1rem; margin-bottom: 7px; }.he-card-split-shutter-reveal .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-split-shutter-reveal .card-footer{ margin-top: 15px; }
@media (hover: hover) and (pointer: fine){.he-card-split-shutter-reveal:hover .shutter-left{ transform: translateX(-101%); }.he-card-split-shutter-reveal:hover .shutter-right{ transform: translateX(101%); }
}.he-card-split-shutter-reveal:focus-within .shutter-left{ transform: translateX(-101%); }.he-card-split-shutter-reveal:focus-within .shutter-right{ transform: translateX(101%); }
@media (prefers-reduced-motion: reduce){.he-card-split-shutter-reveal .shutter{ display: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-split-shutter-reveal { width: min(320px, 100%); height: 250px; }
.he-card-split-shutter-reveal { overflow: hidden; }
.he-card-split-shutter-reveal { display: flex; flex-direction: column; }
.he-card-split-shutter-reveal .media, .he-card-split-shutter-reveal .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-split-shutter-reveal .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-split-shutter-reveal .card-footer { margin-top: auto; }
.he-card-split-shutter-reveal h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-split-shutter-reveal .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-split-shutter-reveal .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-split-shutter-reveal .meta { font-size: .75rem; margin-top: 7px; }
.he-card-split-shutter-reveal .price { font-size: .98rem; margin-top: 9px; }
.he-card-split-shutter-reveal .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-split-shutter-reveal .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-split-shutter-reveal .card-icon svg { width: 17px; height: 17px; }
.he-card-split-shutter-reveal .card-body { padding: 13px 16px 14px; }
.he-card-split-shutter-reveal .chips { gap: 6px; margin-top: 12px; }
.he-card-split-shutter-reveal .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-split-shutter-reveal .specs { gap: 5px; margin-top: 9px; }
.he-card-split-shutter-reveal .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-split-shutter-reveal .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-split-shutter-reveal .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-split-shutter-reveal .trail { margin: 14px 6px 0; }
.he-card-split-shutter-reveal .trail::before { top: 13px; }
.he-card-split-shutter-reveal .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-split-shutter-reveal .chart { height: 52px; margin-top: 12px; }
.he-card-split-shutter-reveal .value { font-size: 1.45rem; }`;

const IMG_PORTFOLIO_ATRIUM = cardImage("portfolio-atrium");

export const cardSplitShutterReveal: HoverEffect = {
  id: "card-split-shutter-reveal",
  title: "Split Shutter Reveal",
  category: "cards",
  description: "Two shutters part to unveil the image while the title and call to action stay outside.",
  tags: ["card","split","shutter","reveal","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function SplitShutterRevealCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-split-shutter-reveal" aria-labelledby="card-split-shutter-reveal-title">
      <figure className="media">
        <img src="${IMG_PORTFOLIO_ATRIUM}" alt="Illustration of an atrium building with layered concrete slabs" width="1200" height="750" />
        <span className="shutter shutter-left" aria-hidden="true"></span>
        <span className="shutter shutter-right" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-split-shutter-reveal-title">Slab house, north elevation</h2>
        <p className="body-copy">A study in stacked concrete floors, modelled and rendered during the concept phase.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Explore the model
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-split-shutter-reveal" aria-labelledby="card-split-shutter-reveal-title">
      <figure class="media">
        <img src="${IMG_PORTFOLIO_ATRIUM}" alt="Illustration of an atrium building with layered concrete slabs" width="1200" height="750">
        <span class="shutter shutter-left" aria-hidden="true"></span>
        <span class="shutter shutter-right" aria-hidden="true"></span>
      </figure>
      <div class="card-body">
        <h2 id="card-split-shutter-reveal-title">Slab house, north elevation</h2>
        <p class="body-copy">A study in stacked concrete floors, modelled and rendered during the concept phase.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Explore the model
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
