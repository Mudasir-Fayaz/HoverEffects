import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-caption-slide{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-caption-slide, .he-card-caption-slide *, .he-card-caption-slide *::before, .he-card-caption-slide *::after { box-sizing: border-box; }
.he-card-caption-slide h2, .he-card-caption-slide h3, .he-card-caption-slide p, .he-card-caption-slide figure, .he-card-caption-slide ol, .he-card-caption-slide ul { margin: 0; }
.he-card-caption-slide h2, .he-card-caption-slide h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-caption-slide img, .he-card-caption-slide svg { display: block; max-width: 100%; }
.he-card-caption-slide a { color: inherit; }
.he-card-caption-slide :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-caption-slide .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-caption-slide .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Caption Slide
   ========================================================= */.he-card-caption-slide{
  width: min(370px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-caption-slide .media{
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-caption-slide .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-caption-slide .caption{
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 26px 16px 12px;
  font-size: .8rem; font-weight: 600;
  color: #ffffff;
  background: linear-gradient(to top, rgb(9 15 12 / .78), transparent);
  transform: translateY(100%);
  opacity: 0;
  transition: transform .42s var(--ease), opacity .42s var(--ease);
  pointer-events: none;
}.he-card-caption-slide .card-body{ padding: 17px 20px 20px; }.he-card-caption-slide h2{ font-size: 1.1rem; margin-bottom: 6px; }.he-card-caption-slide .meta{ font-size: .8rem; color: var(--text-2); }.he-card-caption-slide .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-caption-slide:hover .caption{ transform: translateY(0); opacity: 1; }
}.he-card-caption-slide:focus-within .caption{ transform: translateY(0); opacity: 1; }

/* Touch devices: show the optional caption in its revealed state. */
@media (hover: none){.he-card-caption-slide .caption{ transform: translateY(0); opacity: 1; }
}
@media (prefers-reduced-motion: reduce){.he-card-caption-slide .caption{ transition: none; transform: translateY(0); opacity: 1; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-caption-slide { width: min(320px, 100%); height: 250px; }
.he-card-caption-slide { overflow: hidden; }
.he-card-caption-slide { display: flex; flex-direction: column; }
.he-card-caption-slide .media, .he-card-caption-slide .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-caption-slide .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-caption-slide .card-footer { margin-top: auto; }
.he-card-caption-slide h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-caption-slide .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-caption-slide .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-caption-slide .meta { font-size: .75rem; margin-top: 7px; }
.he-card-caption-slide .price { font-size: .98rem; margin-top: 9px; }
.he-card-caption-slide .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-caption-slide .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-caption-slide .card-icon svg { width: 17px; height: 17px; }
.he-card-caption-slide .card-body { padding: 13px 16px 14px; }
.he-card-caption-slide .chips { gap: 6px; margin-top: 12px; }
.he-card-caption-slide .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-caption-slide .specs { gap: 5px; margin-top: 9px; }
.he-card-caption-slide .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-caption-slide .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-caption-slide .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-caption-slide .trail { margin: 14px 6px 0; }
.he-card-caption-slide .trail::before { top: 13px; }
.he-card-caption-slide .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-caption-slide .chart { height: 52px; margin-top: 12px; }
.he-card-caption-slide .value { font-size: 1.45rem; }`;

const IMG_EDITORIAL_STUDIO = cardImage("editorial-studio");

export const cardCaptionSlide: HoverEffect = {
  id: "card-caption-slide",
  title: "Caption Slide",
  category: "cards",
  description: "A caption slides into the lower media on hover while the card title stays visible.",
  tags: ["card","caption","slide","hover"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function CaptionSlideCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-caption-slide" aria-labelledby="card-caption-slide-title">
      <figure className="media">
        <img src="${IMG_EDITORIAL_STUDIO}" alt="Editorial illustration of a studio still life with plant and ceramic shapes" width="1200" height="800" />
        <span className="caption">Studio session — spring 2026</span>
      </figure>
      <div className="card-body">
        <h2 id="card-caption-slide-title">Setting the scene in natural light</h2>
        <p className="meta">Process · 4 min read</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Read the caption notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-caption-slide" aria-labelledby="card-caption-slide-title">
      <figure class="media">
        <img src="${IMG_EDITORIAL_STUDIO}" alt="Editorial illustration of a studio still life with plant and ceramic shapes" width="1200" height="800">
        <span class="caption">Studio session — spring 2026</span>
      </figure>
      <div class="card-body">
        <h2 id="card-caption-slide-title">Setting the scene in natural light</h2>
        <p class="meta">Process · 4 min read</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Read the caption notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
