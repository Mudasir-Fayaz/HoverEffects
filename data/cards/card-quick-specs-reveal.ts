import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-quick-specs-reveal{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-quick-specs-reveal, .he-card-quick-specs-reveal *, .he-card-quick-specs-reveal *::before, .he-card-quick-specs-reveal *::after { box-sizing: border-box; }
.he-card-quick-specs-reveal h2, .he-card-quick-specs-reveal h3, .he-card-quick-specs-reveal p, .he-card-quick-specs-reveal figure, .he-card-quick-specs-reveal ol, .he-card-quick-specs-reveal ul { margin: 0; }
.he-card-quick-specs-reveal h2, .he-card-quick-specs-reveal h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-quick-specs-reveal img, .he-card-quick-specs-reveal svg { display: block; max-width: 100%; }
.he-card-quick-specs-reveal a { color: inherit; }
.he-card-quick-specs-reveal :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-quick-specs-reveal .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-quick-specs-reveal .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Quick Specs Reveal
   ========================================================= */.he-card-quick-specs-reveal{
  width: min(350px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-quick-specs-reveal .media{
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-quick-specs-reveal .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-quick-specs-reveal .card-body{ padding: 18px 20px 20px; }.he-card-quick-specs-reveal h2{ font-size: 1.1rem; margin-bottom: 8px; }.he-card-quick-specs-reveal .price{ font-size: 1rem; font-weight: 700; letter-spacing: -0.01em; }.he-card-quick-specs-reveal .demo-tag{
  display: inline-block;
  margin-left: 6px; padding: 2px 7px;
  font-size: .64rem; font-weight: 650; letter-spacing: .05em; text-transform: uppercase;
  color: var(--text-2);
  background: var(--surface-2);
  border-radius: var(--radius-pill);
  vertical-align: 2px;
}.he-card-quick-specs-reveal .specs{
  list-style: none;
  padding: 0;
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}.he-card-quick-specs-reveal .specs li{
  padding: 4px 10px;
  font-size: .72rem; font-weight: 650;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-pill);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity .3s var(--ease), transform .3s var(--ease);
  transition-delay: calc(var(--i, 0) * 55ms);
}.he-card-quick-specs-reveal .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-quick-specs-reveal:hover .specs li{ opacity: 1; transform: none; }
}.he-card-quick-specs-reveal:focus-within .specs li{ opacity: 1; transform: none; }

/* Touch devices: show the optional specs in their revealed state. */
@media (hover: none){.he-card-quick-specs-reveal .specs li{ opacity: 1; transform: none; transition: none; }
}
@media (prefers-reduced-motion: reduce){.he-card-quick-specs-reveal .specs li{ opacity: 1; transform: none; transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-quick-specs-reveal { width: min(320px, 100%); height: 250px; }
.he-card-quick-specs-reveal { overflow: hidden; }
.he-card-quick-specs-reveal { display: flex; flex-direction: column; }
.he-card-quick-specs-reveal .media, .he-card-quick-specs-reveal .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-quick-specs-reveal .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-quick-specs-reveal .card-footer { margin-top: auto; }
.he-card-quick-specs-reveal h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-quick-specs-reveal .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-quick-specs-reveal .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-quick-specs-reveal .meta { font-size: .75rem; margin-top: 7px; }
.he-card-quick-specs-reveal .price { font-size: .98rem; margin-top: 9px; }
.he-card-quick-specs-reveal .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-quick-specs-reveal .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-quick-specs-reveal .card-icon svg { width: 17px; height: 17px; }
.he-card-quick-specs-reveal .card-body { padding: 13px 16px 14px; }
.he-card-quick-specs-reveal .chips { gap: 6px; margin-top: 12px; }
.he-card-quick-specs-reveal .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-quick-specs-reveal .specs { gap: 5px; margin-top: 9px; }
.he-card-quick-specs-reveal .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-quick-specs-reveal .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-quick-specs-reveal .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-quick-specs-reveal .trail { margin: 14px 6px 0; }
.he-card-quick-specs-reveal .trail::before { top: 13px; }
.he-card-quick-specs-reveal .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-quick-specs-reveal .chart { height: 52px; margin-top: 12px; }
.he-card-quick-specs-reveal .value { font-size: 1.45rem; }`;

const IMG_PRODUCT_WATCH = cardImage("product-watch");

export const cardQuickSpecsReveal: HoverEffect = {
  id: "card-quick-specs-reveal",
  title: "Quick Specs Reveal",
  category: "cards",
  description: "Spec chips fade into a reserved slot in sequence on hover.",
  tags: ["card","quick","specs","reveal","hover"],
  animationType: "opacity",
  complexity: "medium",
  css,
  react: `export default function QuickSpecsRevealCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-quick-specs-reveal" aria-labelledby="card-quick-specs-reveal-title">
      <figure className="media">
        <img src="${IMG_PRODUCT_WATCH}" alt="Illustration of a round field watch with a dark case and a light dial" width="1000" height="750" />
      </figure>
      <div className="card-body">
        <h2 id="card-quick-specs-reveal-title">Atlas Field Watch, 38 mm</h2>
        <p className="price">£148.00 <span className="demo-tag">sample price</span></p>
        <ul className="specs" aria-label="Quick specifications">
          <li style={{ ["--i" as string]: "0" }}>40-hour movement</li>
          <li style={{ ["--i" as string]: "1" }}>Sapphire glass</li>
          <li style={{ ["--i" as string]: "2" }}>50 m water resistant</li>
        </ul>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">View full specifications
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-quick-specs-reveal" aria-labelledby="card-quick-specs-reveal-title">
      <figure class="media">
        <img src="${IMG_PRODUCT_WATCH}" alt="Illustration of a round field watch with a dark case and a light dial" width="1000" height="750">
      </figure>
      <div class="card-body">
        <h2 id="card-quick-specs-reveal-title">Atlas Field Watch, 38 mm</h2>
        <p class="price">£148.00 <span class="demo-tag">sample price</span></p>
        <ul class="specs" aria-label="Quick specifications">
          <li style="--i: 0">40-hour movement</li>
          <li style="--i: 1">Sapphire glass</li>
          <li style="--i: 2">50 m water resistant</li>
        </ul>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">View full specifications
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
