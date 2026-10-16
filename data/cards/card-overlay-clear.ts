import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-overlay-clear{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-overlay-clear, .he-card-overlay-clear *, .he-card-overlay-clear *::before, .he-card-overlay-clear *::after { box-sizing: border-box; }
.he-card-overlay-clear h2, .he-card-overlay-clear h3, .he-card-overlay-clear p, .he-card-overlay-clear figure, .he-card-overlay-clear ol, .he-card-overlay-clear ul { margin: 0; }
.he-card-overlay-clear h2, .he-card-overlay-clear h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-overlay-clear img, .he-card-overlay-clear svg { display: block; max-width: 100%; }
.he-card-overlay-clear a { color: inherit; }
.he-card-overlay-clear :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-overlay-clear .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-overlay-clear .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Overlay Clear
   ========================================================= */.he-card-overlay-clear{
  width: min(380px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-overlay-clear .media{
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-overlay-clear .media > img{ width: 100%; height: 100%; object-fit: cover; }.he-card-overlay-clear .tint{
  position: absolute;
  inset: 0;
  background: rgb(26 58 48 / .72);
  background: color-mix(in srgb, var(--accent) 55%, #10231c);
  opacity: .82;
  transition: opacity .45s var(--ease);
  pointer-events: none;
}.he-card-overlay-clear .scrim{
  position: absolute;
  inset: auto 0 0 0;
  height: 68%;
  background: linear-gradient(to top, rgb(9 15 12 / .8), transparent);
  pointer-events: none;
}.he-card-overlay-clear .media h2{
  position: absolute;
  left: 18px; right: 18px; bottom: 15px;
  color: #ffffff;
  font-size: 1.18rem;
  text-shadow: 0 1px 10px rgb(0 0 0 / .4);
}.he-card-overlay-clear .card-body{ padding: 17px 20px 20px; }.he-card-overlay-clear .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-overlay-clear .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-overlay-clear:hover .tint{ opacity: .16; }
}.he-card-overlay-clear:focus-within .tint{ opacity: .16; }
@media (prefers-reduced-motion: reduce){.he-card-overlay-clear .tint{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-overlay-clear { width: min(320px, 100%); height: 250px; }
.he-card-overlay-clear { overflow: hidden; }
.he-card-overlay-clear { display: flex; flex-direction: column; }
.he-card-overlay-clear .media, .he-card-overlay-clear .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-overlay-clear .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-overlay-clear .card-footer { margin-top: auto; }
.he-card-overlay-clear h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-overlay-clear .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-overlay-clear .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-overlay-clear .meta { font-size: .75rem; margin-top: 7px; }
.he-card-overlay-clear .price { font-size: .98rem; margin-top: 9px; }
.he-card-overlay-clear .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-overlay-clear .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-overlay-clear .card-icon svg { width: 17px; height: 17px; }
.he-card-overlay-clear .card-body { padding: 13px 16px 14px; }
.he-card-overlay-clear .chips { gap: 6px; margin-top: 12px; }
.he-card-overlay-clear .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-overlay-clear .specs { gap: 5px; margin-top: 9px; }
.he-card-overlay-clear .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-overlay-clear .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-overlay-clear .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-overlay-clear .trail { margin: 14px 6px 0; }
.he-card-overlay-clear .trail::before { top: 13px; }
.he-card-overlay-clear .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-overlay-clear .chart { height: 52px; margin-top: 12px; }
.he-card-overlay-clear .value { font-size: 1.45rem; }`;

const IMG_PHOTO_STUDIO = cardImage("photo-studio");

export const cardOverlayClear: HoverEffect = {
  id: "card-overlay-clear",
  title: "Overlay Clear",
  category: "cards",
  description: "The colour tint fades back while a separate scrim keeps the overlaid title stable.",
  tags: ["card","overlay","clear","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function OverlayClearCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-overlay-clear" aria-labelledby="card-overlay-clear-title">
      <figure className="media">
        <img src="${IMG_PHOTO_STUDIO}" alt="Illustration of a print studio desk in window light" width="1200" height="800" />
        <span className="tint" aria-hidden="true"></span>
        <span className="scrim" aria-hidden="true"></span>
        <h2 id="card-overlay-clear-title">Inside the print room</h2>
      </figure>
      <div className="card-body">
        <p className="body-copy">A short documentary on the presses, papers and people behind a small letterpress shop.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Watch the short film
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-overlay-clear" aria-labelledby="card-overlay-clear-title">
      <figure class="media">
        <img src="${IMG_PHOTO_STUDIO}" alt="Illustration of a print studio desk in window light" width="1200" height="800">
        <span class="tint" aria-hidden="true"></span>
        <span class="scrim" aria-hidden="true"></span>
        <h2 id="card-overlay-clear-title">Inside the print room</h2>
      </figure>
      <div class="card-body">
        <p class="body-copy">A short documentary on the presses, papers and people behind a small letterpress shop.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Watch the short film
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
