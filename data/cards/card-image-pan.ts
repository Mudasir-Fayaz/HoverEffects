import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-image-pan{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-image-pan, .he-card-image-pan *, .he-card-image-pan *::before, .he-card-image-pan *::after { box-sizing: border-box; }
.he-card-image-pan h2, .he-card-image-pan h3, .he-card-image-pan p, .he-card-image-pan figure, .he-card-image-pan ol, .he-card-image-pan ul { margin: 0; }
.he-card-image-pan h2, .he-card-image-pan h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-image-pan img, .he-card-image-pan svg { display: block; max-width: 100%; }
.he-card-image-pan a { color: inherit; }
.he-card-image-pan :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* =========================================================
   Effect: Image Pan
   ========================================================= */.he-card-image-pan{
  width: min(400px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-image-pan .media{
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--surface-2);
}.he-card-image-pan .media img{
  width: 112%;
  height: 112%;
  margin: -6% 0 0 -6%;
  object-fit: cover;
  transform: translate3d(0, 0, 0);
  transition: transform .55s var(--ease);
}.he-card-image-pan .card-body{ padding: 18px 20px 20px; }.he-card-image-pan .cat{
  font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}.he-card-image-pan h2{ font-size: 1.12rem; }
@media (hover: hover) and (pointer: fine){.he-card-image-pan:hover .media img{ transform: translate3d(-2.5%, -1.5%, 0); }
}
@media (prefers-reduced-motion: reduce){.he-card-image-pan .media img{ transition: none; transform: translate3d(-1.5%, -1%, 0); }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-image-pan { width: min(320px, 100%); height: 250px; }
.he-card-image-pan { overflow: hidden; }
.he-card-image-pan { display: flex; flex-direction: column; }
.he-card-image-pan .media, .he-card-image-pan .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-image-pan .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-image-pan .card-footer { margin-top: auto; }
.he-card-image-pan h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-image-pan .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-image-pan .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-image-pan .meta { font-size: .75rem; margin-top: 7px; }
.he-card-image-pan .price { font-size: .98rem; margin-top: 9px; }
.he-card-image-pan .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-image-pan .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-image-pan .card-icon svg { width: 17px; height: 17px; }
.he-card-image-pan .card-body { padding: 13px 16px 14px; }
.he-card-image-pan .chips { gap: 6px; margin-top: 12px; }
.he-card-image-pan .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-image-pan .specs { gap: 5px; margin-top: 9px; }
.he-card-image-pan .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-image-pan .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-image-pan .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-image-pan .trail { margin: 14px 6px 0; }
.he-card-image-pan .trail::before { top: 13px; }
.he-card-image-pan .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-image-pan .chart { height: 52px; margin-top: 12px; }
.he-card-image-pan .value { font-size: 1.45rem; }`;

const IMG_PORTFOLIO_KINETIC = cardImage("portfolio-kinetic");

export const cardImagePan: HoverEffect = {
  id: "card-image-pan",
  title: "Image Pan",
  category: "cards",
  description: "An oversized image pans a few pixels with a six percent crop overscan on hover.",
  tags: ["card","image","pan","hover"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function ImagePanCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-image-pan" aria-labelledby="card-image-pan-title">
      <figure className="media">
        <img src="${IMG_PORTFOLIO_KINETIC}" alt="Illustration of layered diagonal ribbons crossing a measured grid" width="1400" height="800" />
      </figure>
      <div className="card-body">
        <p className="cat">Public art commission</p>
        <h2 id="card-image-pan-title">Kinetic ribbons for the East Line</h2>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-image-pan" aria-labelledby="card-image-pan-title">
      <figure class="media">
        <img src="${IMG_PORTFOLIO_KINETIC}" alt="Illustration of layered diagonal ribbons crossing a measured grid" width="1400" height="800">
      </figure>
      <div class="card-body">
        <p class="cat">Public art commission</p>
        <h2 id="card-image-pan-title">Kinetic ribbons for the East Line</h2>
      </div>
    </article>`,
};
