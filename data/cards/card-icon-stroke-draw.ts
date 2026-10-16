import type { HoverEffect } from "../types";

const css = `.he-card-icon-stroke-draw{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-icon-stroke-draw, .he-card-icon-stroke-draw *, .he-card-icon-stroke-draw *::before, .he-card-icon-stroke-draw *::after { box-sizing: border-box; }
.he-card-icon-stroke-draw h2, .he-card-icon-stroke-draw h3, .he-card-icon-stroke-draw p, .he-card-icon-stroke-draw figure, .he-card-icon-stroke-draw ol, .he-card-icon-stroke-draw ul { margin: 0; }
.he-card-icon-stroke-draw h2, .he-card-icon-stroke-draw h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-icon-stroke-draw img, .he-card-icon-stroke-draw svg { display: block; max-width: 100%; }
.he-card-icon-stroke-draw a { color: inherit; }
.he-card-icon-stroke-draw :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-icon-stroke-draw .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-icon-stroke-draw .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Icon Stroke Draw
   ========================================================= */.he-card-icon-stroke-draw{
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-icon-stroke-draw .card-icon{
  display: grid; place-items: center;
  width: 46px; height: 46px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--surface-2);
  color: var(--text-2);
}.he-card-icon-stroke-draw h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-icon-stroke-draw .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-icon-stroke-draw .card-footer{ margin-top: 18px; }.he-card-icon-stroke-draw .draw{
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .6s var(--ease-out);
}
@media (hover: hover) and (pointer: fine){.he-card-icon-stroke-draw:hover .draw{ stroke-dashoffset: 0; }
}.he-card-icon-stroke-draw:focus-within .draw{ stroke-dashoffset: 0; }
@media (prefers-reduced-motion: reduce){.he-card-icon-stroke-draw .draw{ transition: none; stroke-dashoffset: 0; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-icon-stroke-draw { width: min(320px, 100%); height: 250px; }
.he-card-icon-stroke-draw { overflow: hidden; }
.he-card-icon-stroke-draw { display: flex; flex-direction: column; }
.he-card-icon-stroke-draw .card-footer { margin-top: auto; }
.he-card-icon-stroke-draw h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-icon-stroke-draw .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-icon-stroke-draw .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-icon-stroke-draw .meta { font-size: .75rem; margin-top: 7px; }
.he-card-icon-stroke-draw .price { font-size: .98rem; margin-top: 9px; }
.he-card-icon-stroke-draw .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-icon-stroke-draw .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-icon-stroke-draw .card-icon svg { width: 17px; height: 17px; }
.he-card-icon-stroke-draw .card-body { padding: 13px 16px 14px; }
.he-card-icon-stroke-draw .chips { gap: 6px; margin-top: 12px; }
.he-card-icon-stroke-draw .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-icon-stroke-draw .specs { gap: 5px; margin-top: 9px; }
.he-card-icon-stroke-draw .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-icon-stroke-draw .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-icon-stroke-draw .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-icon-stroke-draw .trail { margin: 14px 6px 0; }
.he-card-icon-stroke-draw .trail::before { top: 13px; }
.he-card-icon-stroke-draw .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-icon-stroke-draw .chart { height: 52px; margin-top: 12px; }
.he-card-icon-stroke-draw .value { font-size: 1.45rem; }`;

export const cardIconStrokeDraw: HoverEffect = {
  id: "card-icon-stroke-draw",
  title: "Icon Stroke Draw",
  category: "cards",
  description: "An accent SVG path draws itself in via stroke-dashoffset on hover.",
  tags: ["card","icon","stroke","draw","hover"],
  animationType: "stroke",
  complexity: "simple",
  css,
  react: `export default function IconStrokeDrawCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-icon-stroke-draw" aria-labelledby="card-icon-stroke-draw-title">
      <span className="card-icon" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M6.5 3h7l4 4v14h-11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity=".5" />
          <path d="M13.5 3v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity=".5" />
          <path className="draw" d="m9 14.6 2.2 2.2 4.3-5.2" pathLength="100" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h2 id="card-icon-stroke-draw-title">Compliance checks, automated</h2>
      <p className="body-copy">Every release is scanned against your policy set, with an auditable pass or fail recorded automatically.</p>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">How the checks work
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-icon-stroke-draw" aria-labelledby="card-icon-stroke-draw-title">
      <span class="card-icon" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M6.5 3h7l4 4v14h-11z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".5"/>
          <path d="M13.5 3v4h4" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".5"/>
          <path class="draw" d="m9 14.6 2.2 2.2 4.3-5.2" pathLength="100" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <h2 id="card-icon-stroke-draw-title">Compliance checks, automated</h2>
      <p class="body-copy">Every release is scanned against your policy set, with an auditable pass or fail recorded automatically.</p>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">How the checks work
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
