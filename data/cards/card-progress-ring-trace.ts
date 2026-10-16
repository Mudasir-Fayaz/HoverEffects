import type { HoverEffect } from "../types";

const css = `.he-card-progress-ring-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-progress-ring-trace, .he-card-progress-ring-trace *, .he-card-progress-ring-trace *::before, .he-card-progress-ring-trace *::after { box-sizing: border-box; }
.he-card-progress-ring-trace h2, .he-card-progress-ring-trace h3, .he-card-progress-ring-trace p, .he-card-progress-ring-trace figure, .he-card-progress-ring-trace ol, .he-card-progress-ring-trace ul { margin: 0; }
.he-card-progress-ring-trace h2, .he-card-progress-ring-trace h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-progress-ring-trace img, .he-card-progress-ring-trace svg { display: block; max-width: 100%; }
.he-card-progress-ring-trace a { color: inherit; }
.he-card-progress-ring-trace :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-progress-ring-trace .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-progress-ring-trace .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Progress Ring Trace
   ========================================================= */.he-card-progress-ring-trace{
  display: flex;
  align-items: center;
  gap: 22px;
  width: min(400px, 100%);
  padding: 24px 26px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-progress-ring-trace .ring{ flex: none; }.he-card-progress-ring-trace .progress{
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .7s var(--ease-out);
}.he-card-progress-ring-trace .metric{ min-width: 0; }.he-card-progress-ring-trace .value{
  font-size: 1.75rem;
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}.he-card-progress-ring-trace .metric h2{ font-size: 1rem; margin-top: 4px; }.he-card-progress-ring-trace .meta{ margin-top: 5px; font-size: .78rem; color: var(--text-2); }.he-card-progress-ring-trace .card-footer{ margin-top: 12px; }
@media (hover: hover) and (pointer: fine){.he-card-progress-ring-trace:hover .progress{ stroke-dashoffset: 28; }
}.he-card-progress-ring-trace:focus-within .progress{ stroke-dashoffset: 28; }

/* Touch devices: show the ring at its value by default. */
@media (hover: none){.he-card-progress-ring-trace .progress{ stroke-dashoffset: 28; transition: none; }
}
@media (prefers-reduced-motion: reduce){.he-card-progress-ring-trace .progress{ transition: none; stroke-dashoffset: 28; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-progress-ring-trace { width: min(320px, 100%); height: 250px; }
.he-card-progress-ring-trace { overflow: hidden; }
.he-card-progress-ring-trace h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-progress-ring-trace .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-progress-ring-trace .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-progress-ring-trace .meta { font-size: .75rem; margin-top: 7px; }
.he-card-progress-ring-trace .price { font-size: .98rem; margin-top: 9px; }
.he-card-progress-ring-trace .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-progress-ring-trace .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-progress-ring-trace .card-icon svg { width: 17px; height: 17px; }
.he-card-progress-ring-trace .card-body { padding: 13px 16px 14px; }
.he-card-progress-ring-trace .chips { gap: 6px; margin-top: 12px; }
.he-card-progress-ring-trace .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-progress-ring-trace .specs { gap: 5px; margin-top: 9px; }
.he-card-progress-ring-trace .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-progress-ring-trace .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-progress-ring-trace .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-progress-ring-trace .trail { margin: 14px 6px 0; }
.he-card-progress-ring-trace .trail::before { top: 13px; }
.he-card-progress-ring-trace .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-progress-ring-trace .chart { height: 52px; margin-top: 12px; }
.he-card-progress-ring-trace .value { font-size: 1.45rem; }`;

export const cardProgressRingTrace: HoverEffect = {
  id: "card-progress-ring-trace",
  title: "Progress Ring Trace",
  category: "cards",
  description: "A progress ring traces to 72 percent using pathLength, with no JavaScript.",
  tags: ["card","progress","ring","trace","hover"],
  animationType: "stroke",
  complexity: "medium",
  css,
  react: `export default function ProgressRingTraceCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-progress-ring-trace" aria-labelledby="card-progress-ring-trace-title">
      <span className="ring" aria-hidden="true">
        <svg width="92" height="92" viewBox="0 0 92 92">
          <circle className="track" cx="46" cy="46" r="38" fill="none" stroke="var(--line)" strokeWidth="7" />
          <circle className="progress" cx="46" cy="46" r="38" fill="none" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100" transform="rotate(-90 46 46)" />
        </svg>
      </span>
      <div className="metric">
        <p className="value">72%</p>
        <h2 id="card-progress-ring-trace-title">Team adoption</h2>
        <p className="meta">Sample metric · Q1 2026</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">View the metric definition
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-progress-ring-trace" aria-labelledby="card-progress-ring-trace-title">
      <span class="ring" aria-hidden="true">
        <svg width="92" height="92" viewBox="0 0 92 92">
          <circle class="track" cx="46" cy="46" r="38" fill="none" stroke="var(--line)" stroke-width="7"/>
          <circle class="progress" cx="46" cy="46" r="38" fill="none" stroke="var(--accent)" stroke-width="7" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" transform="rotate(-90 46 46)"/>
        </svg>
      </span>
      <div class="metric">
        <p class="value">72%</p>
        <h2 id="card-progress-ring-trace-title">Team adoption</h2>
        <p class="meta">Sample metric · Q1 2026</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">View the metric definition
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
