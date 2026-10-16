import type { HoverEffect } from "../types";

const css = `.he-card-perimeter-beam{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-perimeter-beam, .he-card-perimeter-beam *, .he-card-perimeter-beam *::before, .he-card-perimeter-beam *::after { box-sizing: border-box; }
.he-card-perimeter-beam h2, .he-card-perimeter-beam h3, .he-card-perimeter-beam p, .he-card-perimeter-beam figure, .he-card-perimeter-beam ol, .he-card-perimeter-beam ul { margin: 0; }
.he-card-perimeter-beam h2, .he-card-perimeter-beam h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-perimeter-beam img, .he-card-perimeter-beam svg { display: block; max-width: 100%; }
.he-card-perimeter-beam a { color: inherit; }
.he-card-perimeter-beam :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-perimeter-beam .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-perimeter-beam .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Perimeter Beam
   ========================================================= */.he-card-perimeter-beam{
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-perimeter-beam .channel{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}.he-card-perimeter-beam .beam{
  opacity: 0;
  stroke-dashoffset: 0;
  transition: none;
}.he-card-perimeter-beam .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-perimeter-beam h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-perimeter-beam .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-perimeter-beam .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-perimeter-beam:hover .beam{
    opacity: 1;
    stroke-dashoffset: -100;
    transition: opacity .1s linear, stroke-dashoffset 1.1s var(--ease);
  }
}.he-card-perimeter-beam:focus-within .beam{
  opacity: 1;
  stroke-dashoffset: -100;
  transition: opacity .1s linear, stroke-dashoffset 1.1s var(--ease);
}
@media (prefers-reduced-motion: reduce){.he-card-perimeter-beam:hover .beam, .he-card-perimeter-beam:focus-within .beam{
    opacity: .9;
    stroke-dashoffset: -26;
    transition: none;
  }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-perimeter-beam { width: min(320px, 100%); height: 250px; }
.he-card-perimeter-beam { overflow: hidden; }
.he-card-perimeter-beam { display: flex; flex-direction: column; }
.he-card-perimeter-beam .card-footer { margin-top: auto; }
.he-card-perimeter-beam h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-perimeter-beam .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-perimeter-beam .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-perimeter-beam .meta { font-size: .75rem; margin-top: 7px; }
.he-card-perimeter-beam .price { font-size: .98rem; margin-top: 9px; }
.he-card-perimeter-beam .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-perimeter-beam .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-perimeter-beam .card-icon svg { width: 17px; height: 17px; }
.he-card-perimeter-beam .card-body { padding: 13px 16px 14px; }
.he-card-perimeter-beam .chips { gap: 6px; margin-top: 12px; }
.he-card-perimeter-beam .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-perimeter-beam .specs { gap: 5px; margin-top: 9px; }
.he-card-perimeter-beam .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-perimeter-beam .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-perimeter-beam .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-perimeter-beam .trail { margin: 14px 6px 0; }
.he-card-perimeter-beam .trail::before { top: 13px; }
.he-card-perimeter-beam .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-perimeter-beam .chart { height: 52px; margin-top: 12px; }
.he-card-perimeter-beam .value { font-size: 1.45rem; }`;

export const cardPerimeterBeam: HoverEffect = {
  id: "card-perimeter-beam",
  title: "Perimeter Beam",
  category: "cards",
  description: "One short beam segment runs a lap around the card perimeter per hover.",
  tags: ["card","perimeter","beam","hover"],
  animationType: "stroke",
  complexity: "medium",
  css,
  react: `export default function PerimeterBeamCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-perimeter-beam" aria-labelledby="card-perimeter-beam-title">
      <svg className="channel" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true">
        <rect className="track" x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <rect className="beam" x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength="100" strokeDasharray="15 85" />
      </svg>
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" /><path d="M20.5 3.5V8H16" />
        </svg>
      </span>
      <h2 id="card-perimeter-beam-title">Automated releases</h2>
      <p className="body-copy">Every merge builds, tests and ships to staging on its own, with a one-click promotion gate to production.</p>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">See the pipeline
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-perimeter-beam" aria-labelledby="card-perimeter-beam-title">
      <svg class="channel" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true">
        <rect class="track" x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--line-strong)" stroke-width="1" vector-effect="non-scaling-stroke"/>
        <rect class="beam" x="1" y="1" width="98" height="98" rx="3" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" pathLength="100" stroke-dasharray="15 85"/>
      </svg>
      <span class="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5"/><path d="M20.5 3.5V8H16"/>
        </svg>
      </span>
      <h2 id="card-perimeter-beam-title">Automated releases</h2>
      <p class="body-copy">Every merge builds, tests and ships to staging on its own, with a one-click promotion gate to production.</p>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">See the pipeline
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
