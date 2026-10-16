import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-alternate-preview{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-alternate-preview, .he-card-alternate-preview *, .he-card-alternate-preview *::before, .he-card-alternate-preview *::after { box-sizing: border-box; }
.he-card-alternate-preview h2, .he-card-alternate-preview h3, .he-card-alternate-preview p, .he-card-alternate-preview figure, .he-card-alternate-preview ol, .he-card-alternate-preview ul { margin: 0; }
.he-card-alternate-preview h2, .he-card-alternate-preview h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-alternate-preview img, .he-card-alternate-preview svg { display: block; max-width: 100%; }
.he-card-alternate-preview a { color: inherit; }
.he-card-alternate-preview :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-alternate-preview .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-alternate-preview .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Alternate Preview
   ========================================================= */.he-card-alternate-preview{
  width: min(350px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-alternate-preview .media{
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-alternate-preview .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-alternate-preview .view-alt{ position: absolute; inset: 0; }.he-card-alternate-preview .view-primary{
  position: relative;
  opacity: 1;
  transition: opacity .45s var(--ease);
}.he-card-alternate-preview .view-dots{
  position: absolute;
  left: 14px; bottom: 12px;
  display: flex; gap: 5px;
  padding: 5px 7px;
  border-radius: var(--radius-pill);
  background: rgb(17 22 19 / .55);
  pointer-events: none;
}.he-card-alternate-preview .dot{
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgb(255 255 255 / .45);
  transition: background-color .3s var(--ease), transform .3s var(--ease);
}.he-card-alternate-preview .dot.is-on{ background: #ffffff; transform: scale(1.15); }.he-card-alternate-preview .card-body{ padding: 18px 20px 20px; }.he-card-alternate-preview h2{ font-size: 1.08rem; margin-bottom: 8px; }.he-card-alternate-preview .price{ font-size: 1rem; font-weight: 700; letter-spacing: -0.01em; }.he-card-alternate-preview .demo-tag{
  display: inline-block;
  margin-left: 6px; padding: 2px 7px;
  font-size: .64rem; font-weight: 650; letter-spacing: .05em; text-transform: uppercase;
  color: var(--text-2);
  background: var(--surface-2);
  border-radius: var(--radius-pill);
  vertical-align: 2px;
}.he-card-alternate-preview .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-alternate-preview:hover .view-primary{ opacity: 0; }.he-card-alternate-preview:hover .dot:first-child{ background: rgb(255 255 255 / .45); transform: none; }.he-card-alternate-preview:hover .dot:last-child{ background: #ffffff; transform: scale(1.15); }
}.he-card-alternate-preview:focus-within .view-primary{ opacity: 0; }.he-card-alternate-preview:focus-within .dot:first-child{ background: rgb(255 255 255 / .45); transform: none; }.he-card-alternate-preview:focus-within .dot:last-child{ background: #ffffff; transform: scale(1.15); }
@media (prefers-reduced-motion: reduce){.he-card-alternate-preview .view-primary, .he-card-alternate-preview .dot{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-alternate-preview { width: min(320px, 100%); height: 250px; }
.he-card-alternate-preview { overflow: hidden; }
.he-card-alternate-preview { display: flex; flex-direction: column; }
.he-card-alternate-preview .media, .he-card-alternate-preview .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-alternate-preview .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-alternate-preview .card-footer { margin-top: auto; }
.he-card-alternate-preview h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-alternate-preview .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-alternate-preview .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-alternate-preview .meta { font-size: .75rem; margin-top: 7px; }
.he-card-alternate-preview .price { font-size: .98rem; margin-top: 9px; }
.he-card-alternate-preview .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-alternate-preview .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-alternate-preview .card-icon svg { width: 17px; height: 17px; }
.he-card-alternate-preview .card-body { padding: 13px 16px 14px; }
.he-card-alternate-preview .chips { gap: 6px; margin-top: 12px; }
.he-card-alternate-preview .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-alternate-preview .specs { gap: 5px; margin-top: 9px; }
.he-card-alternate-preview .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-alternate-preview .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-alternate-preview .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-alternate-preview .trail { margin: 14px 6px 0; }
.he-card-alternate-preview .trail::before { top: 13px; }
.he-card-alternate-preview .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-alternate-preview .chart { height: 52px; margin-top: 12px; }
.he-card-alternate-preview .value { font-size: 1.45rem; }`;

const IMG_PRODUCT_HEADPHONES_ALT = cardImage("product-headphones-alt");
const IMG_PRODUCT_HEADPHONES = cardImage("product-headphones");

export const cardAlternatePreview: HoverEffect = {
  id: "card-alternate-preview",
  title: "Alternate Preview",
  category: "cards",
  description: "Two preloaded product views crossfade on hover with no blank flash.",
  tags: ["card","alternate","preview","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function AlternatePreviewCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-alternate-preview" aria-labelledby="card-alternate-preview-title">
      <figure className="media">
        <img className="view-alt" src="${IMG_PRODUCT_HEADPHONES_ALT}" alt="" aria-hidden="true" />
        <img className="view-primary" src="${IMG_PRODUCT_HEADPHONES}" alt="Front view: studio headphones with dark cups and green pads" width="800" height="800" />
        <span className="view-dots" aria-hidden="true"><i className="dot is-on"></i><i className="dot"></i></span>
      </figure>
      <div className="card-body">
        <h2 id="card-alternate-preview-title">Studio headphones — two colourways</h2>
        <p className="price">£210.00 <span className="demo-tag">sample price</span></p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">See both finishes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-alternate-preview" aria-labelledby="card-alternate-preview-title">
      <figure class="media">
        <img class="view-alt" src="${IMG_PRODUCT_HEADPHONES_ALT}" alt="" aria-hidden="true">
        <img class="view-primary" src="${IMG_PRODUCT_HEADPHONES}" alt="Front view: studio headphones with dark cups and green pads" width="800" height="800">
        <span class="view-dots" aria-hidden="true"><i class="dot is-on"></i><i class="dot"></i></span>
      </figure>
      <div class="card-body">
        <h2 id="card-alternate-preview-title">Studio headphones — two colourways</h2>
        <p class="price">£210.00 <span class="demo-tag">sample price</span></p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">See both finishes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
