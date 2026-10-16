import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-image-zoom{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-image-zoom, .he-card-image-zoom *, .he-card-image-zoom *::before, .he-card-image-zoom *::after { box-sizing: border-box; }
.he-card-image-zoom h2, .he-card-image-zoom h3, .he-card-image-zoom p, .he-card-image-zoom figure, .he-card-image-zoom ol, .he-card-image-zoom ul { margin: 0; }
.he-card-image-zoom h2, .he-card-image-zoom h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-image-zoom img, .he-card-image-zoom svg { display: block; max-width: 100%; }
.he-card-image-zoom a { color: inherit; }
.he-card-image-zoom :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-image-zoom .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-image-zoom .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Image Zoom
   ========================================================= */.he-card-image-zoom{
  width: min(360px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-image-zoom .media{
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-image-zoom .media img{
  width: 100%; height: 100%;
  object-fit: cover;
  transform-origin: 50% 50%;
  transform: scale(1);
  transition: transform .5s var(--ease);
}.he-card-image-zoom .card-body{ padding: 18px 20px 20px; }.he-card-image-zoom h2{ font-size: 1.1rem; margin-bottom: 7px; }.he-card-image-zoom .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-image-zoom .card-footer{ margin-top: 15px; }
@media (hover: hover) and (pointer: fine){.he-card-image-zoom:hover .media img{ transform: scale(1.035); }
}.he-card-image-zoom:focus-within .media img{ transform: scale(1.035); }
@media (prefers-reduced-motion: reduce){.he-card-image-zoom .media img{ transition: none; }.he-card-image-zoom:hover .media img, .he-card-image-zoom:focus-within .media img{ transform: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-image-zoom { width: min(320px, 100%); height: 250px; }
.he-card-image-zoom { overflow: hidden; }
.he-card-image-zoom { display: flex; flex-direction: column; }
.he-card-image-zoom .media, .he-card-image-zoom .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-image-zoom .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-image-zoom .card-footer { margin-top: auto; }
.he-card-image-zoom h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-image-zoom .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-image-zoom .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-image-zoom .meta { font-size: .75rem; margin-top: 7px; }
.he-card-image-zoom .price { font-size: .98rem; margin-top: 9px; }
.he-card-image-zoom .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-image-zoom .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-image-zoom .card-icon svg { width: 17px; height: 17px; }
.he-card-image-zoom .card-body { padding: 13px 16px 14px; }
.he-card-image-zoom .chips { gap: 6px; margin-top: 12px; }
.he-card-image-zoom .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-image-zoom .specs { gap: 5px; margin-top: 9px; }
.he-card-image-zoom .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-image-zoom .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-image-zoom .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-image-zoom .trail { margin: 14px 6px 0; }
.he-card-image-zoom .trail::before { top: 13px; }
.he-card-image-zoom .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-image-zoom .chart { height: 52px; margin-top: 12px; }
.he-card-image-zoom .value { font-size: 1.45rem; }`;

const IMG_PHOTO_STUDIO = cardImage("photo-studio");

export const cardImageZoom: HoverEffect = {
  id: "card-image-zoom",
  title: "Image Zoom",
  category: "cards",
  description: "The image scales subtly inside a fixed-ratio window while the card stays still.",
  tags: ["card","image","zoom","hover"],
  animationType: "scale",
  complexity: "simple",
  css,
  react: `export default function ImageZoomCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-image-zoom" aria-labelledby="card-image-zoom-title">
      <figure className="media">
        <img src="${IMG_PHOTO_STUDIO}" alt="Illustration of a studio desk with a lamp, notebook and window light" width="1200" height="800" />
      </figure>
      <div className="card-body">
        <h2 id="card-image-zoom-title">Studio session: light and paper</h2>
        <p className="body-copy">Process notes from a print series photographed across a single overcast morning.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">View the image notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-image-zoom" aria-labelledby="card-image-zoom-title">
      <figure class="media">
        <img src="${IMG_PHOTO_STUDIO}" alt="Illustration of a studio desk with a lamp, notebook and window light" width="1200" height="800">
      </figure>
      <div class="card-body">
        <h2 id="card-image-zoom-title">Studio session: light and paper</h2>
        <p class="body-copy">Process notes from a print series photographed across a single overcast morning.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">View the image notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
