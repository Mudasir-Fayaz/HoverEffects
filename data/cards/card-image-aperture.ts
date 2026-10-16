import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-image-aperture{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-image-aperture, .he-card-image-aperture *, .he-card-image-aperture *::before, .he-card-image-aperture *::after { box-sizing: border-box; }
.he-card-image-aperture h2, .he-card-image-aperture h3, .he-card-image-aperture p, .he-card-image-aperture figure, .he-card-image-aperture ol, .he-card-image-aperture ul { margin: 0; }
.he-card-image-aperture h2, .he-card-image-aperture h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-image-aperture img, .he-card-image-aperture svg { display: block; max-width: 100%; }
.he-card-image-aperture a { color: inherit; }
.he-card-image-aperture :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-image-aperture .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-image-aperture .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Image Aperture
   ========================================================= */.he-card-image-aperture{
  width: min(350px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-image-aperture .media{
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-image-aperture .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-image-aperture .matte{
  position: absolute;
  background: var(--surface);
  transition: transform .5s var(--ease);
  pointer-events: none;
}.he-card-image-aperture .matte-top{ top: 0; left: 0; right: 0; height: 9%; transform: translateY(0); }.he-card-image-aperture .matte-bottom{ bottom: 0; left: 0; right: 0; height: 9%; transform: translateY(0); }.he-card-image-aperture .matte-left{ left: 0; top: 0; bottom: 0; width: 9%; transform: translateX(0); }.he-card-image-aperture .matte-right{ right: 0; top: 0; bottom: 0; width: 9%; transform: translateX(0); }.he-card-image-aperture .card-body{ padding: 18px 20px 20px; }.he-card-image-aperture h2{ font-size: 1.1rem; margin-bottom: 7px; }.he-card-image-aperture .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-image-aperture .card-footer{ margin-top: 15px; }
@media (hover: hover) and (pointer: fine){.he-card-image-aperture:hover .matte-top{ transform: translateY(-72%); }.he-card-image-aperture:hover .matte-bottom{ transform: translateY(72%); }.he-card-image-aperture:hover .matte-left{ transform: translateX(-72%); }.he-card-image-aperture:hover .matte-right{ transform: translateX(72%); }
}.he-card-image-aperture:focus-within .matte-top{ transform: translateY(-72%); }.he-card-image-aperture:focus-within .matte-bottom{ transform: translateY(72%); }.he-card-image-aperture:focus-within .matte-left{ transform: translateX(-72%); }.he-card-image-aperture:focus-within .matte-right{ transform: translateX(72%); }
@media (prefers-reduced-motion: reduce){.he-card-image-aperture .matte{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-image-aperture { width: min(320px, 100%); height: 250px; }
.he-card-image-aperture { overflow: hidden; }
.he-card-image-aperture { display: flex; flex-direction: column; }
.he-card-image-aperture .media, .he-card-image-aperture .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-image-aperture .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-image-aperture .card-footer { margin-top: auto; }
.he-card-image-aperture h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-image-aperture .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-image-aperture .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-image-aperture .meta { font-size: .75rem; margin-top: 7px; }
.he-card-image-aperture .price { font-size: .98rem; margin-top: 9px; }
.he-card-image-aperture .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-image-aperture .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-image-aperture .card-icon svg { width: 17px; height: 17px; }
.he-card-image-aperture .card-body { padding: 13px 16px 14px; }
.he-card-image-aperture .chips { gap: 6px; margin-top: 12px; }
.he-card-image-aperture .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-image-aperture .specs { gap: 5px; margin-top: 9px; }
.he-card-image-aperture .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-image-aperture .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-image-aperture .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-image-aperture .trail { margin: 14px 6px 0; }
.he-card-image-aperture .trail::before { top: 13px; }
.he-card-image-aperture .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-image-aperture .chart { height: 52px; margin-top: 12px; }
.he-card-image-aperture .value { font-size: 1.45rem; }`;

const IMG_PRODUCT_HEADPHONES = cardImage("product-headphones");

export const cardImageAperture: HoverEffect = {
  id: "card-image-aperture",
  title: "Image Aperture",
  category: "cards",
  description: "Four matte strips move outward like an aperture, exposing more of the image.",
  tags: ["card","image","aperture","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function ImageApertureCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-image-aperture" aria-labelledby="card-image-aperture-title">
      <figure className="media">
        <img src="${IMG_PRODUCT_HEADPHONES}" alt="Illustration of over-ear studio headphones with dark cups and green pads" width="800" height="800" />
        <span className="matte matte-top" aria-hidden="true"></span>
        <span className="matte matte-right" aria-hidden="true"></span>
        <span className="matte matte-bottom" aria-hidden="true"></span>
        <span className="matte matte-left" aria-hidden="true"></span>
      </figure>
      <div className="card-body">
        <h2 id="card-image-aperture-title">Monitor headphones, studio black</h2>
        <p className="body-copy">Closed-back cups with memory-foam pads and a detachable coiled cable.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">View the specifications
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-image-aperture" aria-labelledby="card-image-aperture-title">
      <figure class="media">
        <img src="${IMG_PRODUCT_HEADPHONES}" alt="Illustration of over-ear studio headphones with dark cups and green pads" width="800" height="800">
        <span class="matte matte-top" aria-hidden="true"></span>
        <span class="matte matte-right" aria-hidden="true"></span>
        <span class="matte matte-bottom" aria-hidden="true"></span>
        <span class="matte matte-left" aria-hidden="true"></span>
      </figure>
      <div class="card-body">
        <h2 id="card-image-aperture-title">Monitor headphones, studio black</h2>
        <p class="body-copy">Closed-back cups with memory-foam pads and a detachable coiled cable.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">View the specifications
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
