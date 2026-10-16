import type { HoverEffect } from "../types";

const css = `.he-card-corner-bloom{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-corner-bloom, .he-card-corner-bloom *, .he-card-corner-bloom *::before, .he-card-corner-bloom *::after { box-sizing: border-box; }
.he-card-corner-bloom h2, .he-card-corner-bloom h3, .he-card-corner-bloom p, .he-card-corner-bloom figure, .he-card-corner-bloom ol, .he-card-corner-bloom ul { margin: 0; }
.he-card-corner-bloom h2, .he-card-corner-bloom h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-corner-bloom img, .he-card-corner-bloom svg { display: block; max-width: 100%; }
.he-card-corner-bloom a { color: inherit; }
.he-card-corner-bloom :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-corner-bloom .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-corner-bloom .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Corner Bloom
   ========================================================= */.he-card-corner-bloom{
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-corner-bloom .bloom{
  position: absolute;
  right: -80px; bottom: -80px;
  width: 280px; height: 280px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .16), transparent 74%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 22%, transparent), transparent 74%);
  transform-origin: 100% 100%;
  transform: scale(.15);
  opacity: 0;
  transition: transform .55s var(--ease-out), opacity .4s var(--ease);
  pointer-events: none;
}.he-card-corner-bloom .card-content, .he-card-corner-bloom .card-footer{ position: relative; }.he-card-corner-bloom .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-corner-bloom h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-corner-bloom .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-corner-bloom .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-corner-bloom:hover .bloom{ transform: scale(1); opacity: 1; }
}.he-card-corner-bloom:focus-within .bloom{ transform: scale(1); opacity: 1; }
@media (prefers-reduced-motion: reduce){.he-card-corner-bloom .bloom{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-corner-bloom { width: min(320px, 100%); height: 250px; }
.he-card-corner-bloom { overflow: hidden; }
.he-card-corner-bloom { display: flex; flex-direction: column; }
.he-card-corner-bloom .card-footer { margin-top: auto; }
.he-card-corner-bloom h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-corner-bloom .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-corner-bloom .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-corner-bloom .meta { font-size: .75rem; margin-top: 7px; }
.he-card-corner-bloom .price { font-size: .98rem; margin-top: 9px; }
.he-card-corner-bloom .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-corner-bloom .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-corner-bloom .card-icon svg { width: 17px; height: 17px; }
.he-card-corner-bloom .card-body { padding: 13px 16px 14px; }
.he-card-corner-bloom .chips { gap: 6px; margin-top: 12px; }
.he-card-corner-bloom .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-corner-bloom .specs { gap: 5px; margin-top: 9px; }
.he-card-corner-bloom .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-corner-bloom .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-corner-bloom .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-corner-bloom .trail { margin: 14px 6px 0; }
.he-card-corner-bloom .trail::before { top: 13px; }
.he-card-corner-bloom .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-corner-bloom .chart { height: 52px; margin-top: 12px; }
.he-card-corner-bloom .value { font-size: 1.45rem; }`;

export const cardCornerBloom: HoverEffect = {
  id: "card-corner-bloom",
  title: "Corner Bloom",
  category: "cards",
  description: "A translucent accent circle scales out of the card corner, blooming beneath the text.",
  tags: ["card","corner","bloom","hover"],
  animationType: "scale",
  complexity: "simple",
  css,
  react: `export default function CornerBloomCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-corner-bloom" aria-labelledby="card-corner-bloom-title">
      <span className="bloom" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            <path d="M12 8.4 13.2 11l2.8 1-2.8 1L12 15.6 10.8 13 8 12l2.8-1z" />
          </svg>
        </span>
        <h2 id="card-corner-bloom-title">Brand sprints</h2>
        <p className="body-copy">Five focused days to name, position and visually sharpen a product before it goes to market.</p>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">See how a sprint runs
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-corner-bloom" aria-labelledby="card-corner-bloom-title">
      <span class="bloom" aria-hidden="true"></span>
      <div class="card-content">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
            <path d="M12 8.4 13.2 11l2.8 1-2.8 1L12 15.6 10.8 13 8 12l2.8-1z"/>
          </svg>
        </span>
        <h2 id="card-corner-bloom-title">Brand sprints</h2>
        <p class="body-copy">Five focused days to name, position and visually sharpen a product before it goes to market.</p>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">See how a sprint runs
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
