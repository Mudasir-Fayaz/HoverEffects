import type { HoverEffect } from "../types";

const css = `.he-card-step-trail{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-step-trail, .he-card-step-trail *, .he-card-step-trail *::before, .he-card-step-trail *::after { box-sizing: border-box; }
.he-card-step-trail h2, .he-card-step-trail h3, .he-card-step-trail p, .he-card-step-trail figure, .he-card-step-trail ol, .he-card-step-trail ul { margin: 0; }
.he-card-step-trail h2, .he-card-step-trail h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-step-trail img, .he-card-step-trail svg { display: block; max-width: 100%; }
.he-card-step-trail a { color: inherit; }
.he-card-step-trail :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-step-trail .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-step-trail .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Step Trail
   ========================================================= */.he-card-step-trail{
  --on: 0;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-step-trail h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-step-trail .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-step-trail .trail{
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 24px 6px 0;
  padding: 0;
}.he-card-step-trail .trail::before{
  content: "";
  position: absolute;
  left: 22px; right: 22px; top: 15px;
  height: 2px;
  background: var(--accent);
  transform-origin: left center;
  transform: scaleX(var(--on));
  transition: transform .5s var(--ease);
  transition-delay: calc(var(--on) * 0ms + (1 - var(--on)) * 140ms);
}.he-card-step-trail .step{
  position: relative;
  display: grid;
  justify-items: center;
  gap: 7px;
  width: 64px;
}.he-card-step-trail .marker{
  display: grid;
  place-items: center;
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  background: var(--surface-2);
  color: var(--text-2);
  font-size: .78rem; font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: background-color .26s var(--ease), border-color .26s var(--ease), color .26s var(--ease);
  transition-delay: calc((1 - var(--on)) * var(--out, 0ms) + var(--on) * var(--in, 0ms));
}.he-card-step-trail .step:nth-child(1) .marker{ --in: 60ms;  --out: 200ms; }.he-card-step-trail .step:nth-child(2) .marker{ --in: 140ms; --out: 100ms; }.he-card-step-trail .step:nth-child(3) .marker{ --in: 220ms; --out: 0ms; }.he-card-step-trail .step-label{
  font-size: .74rem; font-weight: 650;
  color: var(--text-2);
  white-space: nowrap;
  transition: color .26s var(--ease);
  transition-delay: calc((1 - var(--on)) * var(--out, 0ms) + var(--on) * var(--in, 0ms));
}.he-card-step-trail .step:nth-child(1) .step-label{ --in: 60ms;  --out: 200ms; }.he-card-step-trail .step:nth-child(2) .step-label{ --in: 140ms; --out: 100ms; }.he-card-step-trail .step:nth-child(3) .step-label{ --in: 220ms; --out: 0ms; }
@media (hover: hover) and (pointer: fine){.he-card-step-trail:hover{ --on: 1; }
}.he-card-step-trail:focus-within{ --on: 1; }

/* Active marker styling driven by the same --on flag. */.he-card-step-trail .marker{
  background: color-mix(in srgb, var(--accent) calc(var(--on) * 100%), var(--surface-2));
  border-color: color-mix(in srgb, var(--accent) calc(var(--on) * 100%), var(--line-strong));
  color: color-mix(in srgb, #ffffff calc(var(--on) * 100%), var(--text-2));
}.he-card-step-trail .step-label{ color: color-mix(in srgb, var(--text) calc(var(--on) * 100%), var(--text-2)); }
@media (prefers-reduced-motion: reduce){.he-card-step-trail .trail::before, .he-card-step-trail .marker, .he-card-step-trail .step-label{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-step-trail { width: min(320px, 100%); height: 250px; }
.he-card-step-trail { overflow: hidden; }
.he-card-step-trail { display: flex; flex-direction: column; }
.he-card-step-trail .card-footer { margin-top: auto; }
.he-card-step-trail h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-step-trail .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-step-trail .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-step-trail .meta { font-size: .75rem; margin-top: 7px; }
.he-card-step-trail .price { font-size: .98rem; margin-top: 9px; }
.he-card-step-trail .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-step-trail .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-step-trail .card-icon svg { width: 17px; height: 17px; }
.he-card-step-trail .card-body { padding: 13px 16px 14px; }
.he-card-step-trail .chips { gap: 6px; margin-top: 12px; }
.he-card-step-trail .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-step-trail .specs { gap: 5px; margin-top: 9px; }
.he-card-step-trail .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-step-trail .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-step-trail .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-step-trail .trail { margin: 14px 6px 0; }
.he-card-step-trail .trail::before { top: 13px; }
.he-card-step-trail .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-step-trail .chart { height: 52px; margin-top: 12px; }
.he-card-step-trail .value { font-size: 1.45rem; }`;

export const cardStepTrail: HoverEffect = {
  id: "card-step-trail",
  title: "Step Trail",
  category: "cards",
  description: "A connector line draws and three step markers highlight in sequence on hover.",
  tags: ["card","step","trail","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function StepTrailCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-step-trail" aria-labelledby="card-step-trail-title">
      <h2 id="card-step-trail-title">How an audit runs</h2>
      <p className="body-copy">Three phases, one prioritised plan — from inventory to a fix list your team can start on Monday.</p>
      <ol className="trail">
        <li className="step">
          <span className="marker" aria-hidden="true">1</span>
          <span className="step-label">Map</span>
        </li>
        <li className="step">
          <span className="marker" aria-hidden="true">2</span>
          <span className="step-label">Measure</span>
        </li>
        <li className="step">
          <span className="marker" aria-hidden="true">3</span>
          <span className="step-label">Fix</span>
        </li>
      </ol>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">See the full method
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-step-trail" aria-labelledby="card-step-trail-title">
      <h2 id="card-step-trail-title">How an audit runs</h2>
      <p class="body-copy">Three phases, one prioritised plan — from inventory to a fix list your team can start on Monday.</p>
      <ol class="trail">
        <li class="step">
          <span class="marker" aria-hidden="true">1</span>
          <span class="step-label">Map</span>
        </li>
        <li class="step">
          <span class="marker" aria-hidden="true">2</span>
          <span class="step-label">Measure</span>
        </li>
        <li class="step">
          <span class="marker" aria-hidden="true">3</span>
          <span class="step-label">Fix</span>
        </li>
      </ol>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">See the full method
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
