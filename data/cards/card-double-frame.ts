import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-double-frame{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-double-frame, .he-card-double-frame *, .he-card-double-frame *::before, .he-card-double-frame *::after { box-sizing: border-box; }
.he-card-double-frame h2, .he-card-double-frame h3, .he-card-double-frame p, .he-card-double-frame figure, .he-card-double-frame ol, .he-card-double-frame ul { margin: 0; }
.he-card-double-frame h2, .he-card-double-frame h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-double-frame img, .he-card-double-frame svg { display: block; max-width: 100%; }
.he-card-double-frame a { color: inherit; }
.he-card-double-frame :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-double-frame .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-double-frame .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Double Frame
   ========================================================= */.he-card-double-frame{
  position: relative;
  width: min(360px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-double-frame::after{
  content: "";
  position: absolute;
  inset: -12px;
  border: 1.5px dashed var(--accent-2);
  border-radius: calc(var(--radius) + 10px);
  opacity: 0;
  transform: scale(.985);
  transition: opacity .3s var(--ease), transform .38s var(--ease);
  pointer-events: none;
}.he-card-double-frame .media{
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-double-frame .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-double-frame .card-body{ padding: 18px 20px 20px; }.he-card-double-frame h2{ font-size: 1.1rem; margin-bottom: 7px; }.he-card-double-frame .body-copy{ color: var(--text-2); font-size: .91rem; }.he-card-double-frame .card-footer{ margin-top: 16px; }
@media (hover: hover) and (pointer: fine){.he-card-double-frame:hover::after{ opacity: 1; transform: scale(1); }
}.he-card-double-frame:focus-within::after{ opacity: 1; transform: scale(1); }
@media (prefers-reduced-motion: reduce){.he-card-double-frame::after{ transition: none; transform: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-double-frame { width: min(320px, 100%); height: 250px; }
.he-card-double-frame { display: flex; flex-direction: column; }
.he-card-double-frame .media, .he-card-double-frame .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-double-frame .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-double-frame .card-footer { margin-top: auto; }
.he-card-double-frame h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-double-frame .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-double-frame .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-double-frame .meta { font-size: .75rem; margin-top: 7px; }
.he-card-double-frame .price { font-size: .98rem; margin-top: 9px; }
.he-card-double-frame .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-double-frame .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-double-frame .card-icon svg { width: 17px; height: 17px; }
.he-card-double-frame .card-body { padding: 13px 16px 14px; }
.he-card-double-frame .chips { gap: 6px; margin-top: 12px; }
.he-card-double-frame .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-double-frame .specs { gap: 5px; margin-top: 9px; }
.he-card-double-frame .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-double-frame .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-double-frame .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-double-frame .trail { margin: 14px 6px 0; }
.he-card-double-frame .trail::before { top: 13px; }
.he-card-double-frame .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-double-frame .chart { height: 52px; margin-top: 12px; }
.he-card-double-frame .value { font-size: 1.45rem; }`;

const IMG_EDITORIAL_STUDIO = cardImage("editorial-studio");

export const cardDoubleFrame: HoverEffect = {
  id: "card-double-frame",
  title: "Double Frame",
  category: "cards",
  description: "A dotted outer frame fades in around the card on hover without resizing or clipping the surface.",
  tags: ["card","double","frame","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function DoubleFrameCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-double-frame" aria-labelledby="card-double-frame-title">
      <figure className="media">
        <img src="${IMG_EDITORIAL_STUDIO}" alt="Editorial illustration of a studio still life with a vase, ceramics and soft shapes" width="1200" height="800" />
      </figure>
      <div className="card-body">
        <h2 id="card-double-frame-title">Cedar &amp; Co. brand refresh</h2>
        <p className="body-copy">A full identity rework for a small-batch furniture studio — wordmark, packaging and a quieter palette.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">View the case study
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-double-frame" aria-labelledby="card-double-frame-title">
      <figure class="media">
        <img src="${IMG_EDITORIAL_STUDIO}" alt="Editorial illustration of a studio still life with a vase, ceramics and soft shapes" width="1200" height="800">
      </figure>
      <div class="card-body">
        <h2 id="card-double-frame-title">Cedar &amp; Co. brand refresh</h2>
        <p class="body-copy">A full identity rework for a small-batch furniture studio — wordmark, packaging and a quieter palette.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">View the case study
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
