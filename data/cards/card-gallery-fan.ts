import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-gallery-fan{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-gallery-fan, .he-card-gallery-fan *, .he-card-gallery-fan *::before, .he-card-gallery-fan *::after { box-sizing: border-box; }
.he-card-gallery-fan h2, .he-card-gallery-fan h3, .he-card-gallery-fan p, .he-card-gallery-fan figure, .he-card-gallery-fan ol, .he-card-gallery-fan ul { margin: 0; }
.he-card-gallery-fan h2, .he-card-gallery-fan h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-gallery-fan img, .he-card-gallery-fan svg { display: block; max-width: 100%; }
.he-card-gallery-fan a { color: inherit; }
.he-card-gallery-fan :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-gallery-fan .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-gallery-fan .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Gallery Fan
   ========================================================= */.he-card-gallery-fan{
  width: min(370px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-gallery-fan .stack{
  position: relative;
  aspect-ratio: 16 / 10;
  margin: 14px 14px 0;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  overflow: hidden;
}.he-card-gallery-fan .shot{
  position: absolute;
  inset: 9% 12%;
  border-radius: 7px;
  overflow: hidden;
  background: var(--surface);
  box-shadow: 0 1px 2px rgb(18 22 19 / .08), 0 10px 26px -18px rgb(18 22 19 / .4);
  transition: transform .42s var(--ease);
}.he-card-gallery-fan .shot img{ width: 100%; height: 100%; object-fit: cover; }.he-card-gallery-fan .shot-front{ z-index: 3; }.he-card-gallery-fan .shot-mid{ z-index: 2; }.he-card-gallery-fan .shot-rear{ z-index: 1; }.he-card-gallery-fan .card-body{ padding: 16px 20px 20px; }.he-card-gallery-fan h2{ font-size: 1.1rem; }.he-card-gallery-fan .card-footer{ margin-top: 13px; }
@media (hover: hover) and (pointer: fine){.he-card-gallery-fan:hover .shot-rear{ transform: translate(-9%, -3%) rotate(-4.5deg); }.he-card-gallery-fan:hover .shot-mid{ transform: translate(8%, -1.5%) rotate(3.5deg); }
}.he-card-gallery-fan:focus-within .shot-rear{ transform: translate(-9%, -3%) rotate(-4.5deg); }.he-card-gallery-fan:focus-within .shot-mid{ transform: translate(8%, -1.5%) rotate(3.5deg); }
@media (prefers-reduced-motion: reduce){.he-card-gallery-fan .shot{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-gallery-fan { width: min(320px, 100%); height: 250px; }
.he-card-gallery-fan { overflow: hidden; }
.he-card-gallery-fan { display: flex; flex-direction: column; }
.he-card-gallery-fan .media, .he-card-gallery-fan .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-gallery-fan .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-gallery-fan .card-footer { margin-top: auto; }
.he-card-gallery-fan h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-gallery-fan .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-gallery-fan .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-gallery-fan .meta { font-size: .75rem; margin-top: 7px; }
.he-card-gallery-fan .price { font-size: .98rem; margin-top: 9px; }
.he-card-gallery-fan .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-gallery-fan .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-gallery-fan .card-icon svg { width: 17px; height: 17px; }
.he-card-gallery-fan .card-body { padding: 13px 16px 14px; }
.he-card-gallery-fan .chips { gap: 6px; margin-top: 12px; }
.he-card-gallery-fan .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-gallery-fan .specs { gap: 5px; margin-top: 9px; }
.he-card-gallery-fan .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-gallery-fan .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-gallery-fan .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-gallery-fan .trail { margin: 14px 6px 0; }
.he-card-gallery-fan .trail::before { top: 13px; }
.he-card-gallery-fan .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-gallery-fan .chart { height: 52px; margin-top: 12px; }
.he-card-gallery-fan .value { font-size: 1.45rem; }`;

const IMG_PORTFOLIO_ATRIUM = cardImage("portfolio-atrium");
const IMG_EDITORIAL_STUDIO = cardImage("editorial-studio");
const IMG_PHOTO_CERAMICS = cardImage("photo-ceramics");

export const cardGalleryFan: HoverEffect = {
  id: "card-gallery-fan",
  title: "Gallery Fan",
  category: "cards",
  description: "Rear photos fan out with small rotations behind the front shot on hover.",
  tags: ["card","gallery","fan","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function GalleryFanCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-gallery-fan" aria-labelledby="card-gallery-fan-title">
      <div className="stack">
        <figure className="shot shot-rear">
          <img src="${IMG_PORTFOLIO_ATRIUM}" alt="" aria-hidden="true" />
        </figure>
        <figure className="shot shot-mid">
          <img src="${IMG_EDITORIAL_STUDIO}" alt="" aria-hidden="true" />
        </figure>
        <figure className="shot shot-front">
          <img src="${IMG_PHOTO_CERAMICS}" alt="Three ceramic bowls photographed on a studio shelf" width="1000" height="750" />
        </figure>
      </div>
      <div className="card-body">
        <h2 id="card-gallery-fan-title">Selected works, 2024 – 2026</h2>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Open the gallery
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-gallery-fan" aria-labelledby="card-gallery-fan-title">
      <div class="stack">
        <figure class="shot shot-rear">
          <img src="${IMG_PORTFOLIO_ATRIUM}" alt="" aria-hidden="true">
        </figure>
        <figure class="shot shot-mid">
          <img src="${IMG_EDITORIAL_STUDIO}" alt="" aria-hidden="true">
        </figure>
        <figure class="shot shot-front">
          <img src="${IMG_PHOTO_CERAMICS}" alt="Three ceramic bowls photographed on a studio shelf" width="1000" height="750">
        </figure>
      </div>
      <div class="card-body">
        <h2 id="card-gallery-fan-title">Selected works, 2024 – 2026</h2>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Open the gallery
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
