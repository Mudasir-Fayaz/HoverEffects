import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-monochrome-to-colour{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-monochrome-to-colour, .he-card-monochrome-to-colour *, .he-card-monochrome-to-colour *::before, .he-card-monochrome-to-colour *::after { box-sizing: border-box; }
.he-card-monochrome-to-colour h2, .he-card-monochrome-to-colour h3, .he-card-monochrome-to-colour p, .he-card-monochrome-to-colour figure, .he-card-monochrome-to-colour ol, .he-card-monochrome-to-colour ul { margin: 0; }
.he-card-monochrome-to-colour h2, .he-card-monochrome-to-colour h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-monochrome-to-colour img, .he-card-monochrome-to-colour svg { display: block; max-width: 100%; }
.he-card-monochrome-to-colour a { color: inherit; }
.he-card-monochrome-to-colour :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-monochrome-to-colour .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-monochrome-to-colour .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Monochrome to Colour
   ========================================================= */.he-card-monochrome-to-colour{
  width: min(370px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-monochrome-to-colour .media{
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-monochrome-to-colour .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-monochrome-to-colour .mono{ filter: grayscale(1) contrast(1.04); }.he-card-monochrome-to-colour .colour{
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity .5s var(--ease);
}.he-card-monochrome-to-colour .card-body{ padding: 18px 20px 20px; }.he-card-monochrome-to-colour .cat{
  font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}.he-card-monochrome-to-colour h2{ font-size: 1.12rem; }.he-card-monochrome-to-colour .meta{ margin-top: 8px; font-size: .8rem; color: var(--text-2); }.he-card-monochrome-to-colour .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-monochrome-to-colour:hover .colour{ opacity: 1; }
}.he-card-monochrome-to-colour:focus-within .colour{ opacity: 1; }
@media (prefers-reduced-motion: reduce){.he-card-monochrome-to-colour .colour{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-monochrome-to-colour { width: min(320px, 100%); height: 250px; }
.he-card-monochrome-to-colour { overflow: hidden; }
.he-card-monochrome-to-colour { display: flex; flex-direction: column; }
.he-card-monochrome-to-colour .media, .he-card-monochrome-to-colour .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-monochrome-to-colour .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-monochrome-to-colour .card-footer { margin-top: auto; }
.he-card-monochrome-to-colour h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-monochrome-to-colour .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-monochrome-to-colour .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-monochrome-to-colour .meta { font-size: .75rem; margin-top: 7px; }
.he-card-monochrome-to-colour .price { font-size: .98rem; margin-top: 9px; }
.he-card-monochrome-to-colour .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-monochrome-to-colour .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-monochrome-to-colour .card-icon svg { width: 17px; height: 17px; }
.he-card-monochrome-to-colour .card-body { padding: 13px 16px 14px; }
.he-card-monochrome-to-colour .chips { gap: 6px; margin-top: 12px; }
.he-card-monochrome-to-colour .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-monochrome-to-colour .specs { gap: 5px; margin-top: 9px; }
.he-card-monochrome-to-colour .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-monochrome-to-colour .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-monochrome-to-colour .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-monochrome-to-colour .trail { margin: 14px 6px 0; }
.he-card-monochrome-to-colour .trail::before { top: 13px; }
.he-card-monochrome-to-colour .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-monochrome-to-colour .chart { height: 52px; margin-top: 12px; }
.he-card-monochrome-to-colour .value { font-size: 1.45rem; }`;

const IMG_PHOTO_CERAMICS = cardImage("photo-ceramics");

export const cardMonochromeToColour: HoverEffect = {
  id: "card-monochrome-to-colour",
  title: "Monochrome to Colour",
  category: "cards",
  description: "A static grayscale layer crossfades to an aligned colour layer on hover.",
  tags: ["card","monochrome","to","colour","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function MonochromeToColourCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-monochrome-to-colour" aria-labelledby="card-monochrome-to-colour-title">
      <figure className="media">
        <img className="mono" src="${IMG_PHOTO_CERAMICS}" alt="Illustration of three ceramic bowls on a studio shelf" width="1000" height="750" />
        <img className="colour" src="${IMG_PHOTO_CERAMICS}" alt="" aria-hidden="true" />
      </figure>
      <div className="card-body">
        <p className="cat">Studio work</p>
        <h2 id="card-monochrome-to-colour-title">Glaze tests, batch 14</h2>
        <p className="meta">Stoneware · oxidation firing · March 2026</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">See the full batch
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-monochrome-to-colour" aria-labelledby="card-monochrome-to-colour-title">
      <figure class="media">
        <img class="mono" src="${IMG_PHOTO_CERAMICS}" alt="Illustration of three ceramic bowls on a studio shelf" width="1000" height="750">
        <img class="colour" src="${IMG_PHOTO_CERAMICS}" alt="" aria-hidden="true">
      </figure>
      <div class="card-body">
        <p class="cat">Studio work</p>
        <h2 id="card-monochrome-to-colour-title">Glaze tests, batch 14</h2>
        <p class="meta">Stoneware · oxidation firing · March 2026</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">See the full batch
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
