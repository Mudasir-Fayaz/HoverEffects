import type { HoverEffect } from "../types";

const css = `.he-card-mini-chart-reveal{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-mini-chart-reveal, .he-card-mini-chart-reveal *, .he-card-mini-chart-reveal *::before, .he-card-mini-chart-reveal *::after { box-sizing: border-box; }
.he-card-mini-chart-reveal h2, .he-card-mini-chart-reveal h3, .he-card-mini-chart-reveal p, .he-card-mini-chart-reveal figure, .he-card-mini-chart-reveal ol, .he-card-mini-chart-reveal ul { margin: 0; }
.he-card-mini-chart-reveal h2, .he-card-mini-chart-reveal h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-mini-chart-reveal img, .he-card-mini-chart-reveal svg { display: block; max-width: 100%; }
.he-card-mini-chart-reveal a { color: inherit; }
.he-card-mini-chart-reveal :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-mini-chart-reveal .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-mini-chart-reveal .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Mini Chart Reveal
   ========================================================= */.he-card-mini-chart-reveal{
  width: min(360px, 100%);
  padding: 24px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-mini-chart-reveal .value{
  font-size: 1.9rem;
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
}.he-card-mini-chart-reveal h2{ font-size: 1rem; margin-top: 4px; }.he-card-mini-chart-reveal .label{ margin-top: 4px; font-size: .78rem; color: var(--text-2); }.he-card-mini-chart-reveal .chart{
  display: flex;
  align-items: flex-end;
  gap: 7px;
  height: 72px;
  margin-top: 18px;
}.he-card-mini-chart-reveal .bar{
  position: relative;
  flex: 1;
  height: 100%;
  border-radius: 5px;
  background: var(--surface-2);
  overflow: hidden;
}.he-card-mini-chart-reveal .fill{
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: var(--h, 50%);
  border-radius: 5px;
  background: var(--accent);
  transform-origin: bottom;
  transform: scaleY(0);
  transition: transform .45s var(--ease);
  transition-delay: calc(var(--i, 0) * 30ms);
}.he-card-mini-chart-reveal .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-mini-chart-reveal:hover .fill{ transform: scaleY(1); }
}.he-card-mini-chart-reveal:focus-within .fill{ transform: scaleY(1); }

/* Touch devices: show the chart at its values by default. */
@media (hover: none){.he-card-mini-chart-reveal .fill{ transform: scaleY(1); transition: none; }
}
@media (prefers-reduced-motion: reduce){.he-card-mini-chart-reveal .fill{ transform: scaleY(1); transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-mini-chart-reveal { width: min(320px, 100%); height: 250px; }
.he-card-mini-chart-reveal { overflow: hidden; }
.he-card-mini-chart-reveal { display: flex; flex-direction: column; }
.he-card-mini-chart-reveal .card-footer { margin-top: auto; }
.he-card-mini-chart-reveal h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-mini-chart-reveal .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-mini-chart-reveal .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-mini-chart-reveal .meta { font-size: .75rem; margin-top: 7px; }
.he-card-mini-chart-reveal .price { font-size: .98rem; margin-top: 9px; }
.he-card-mini-chart-reveal .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-mini-chart-reveal .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-mini-chart-reveal .card-icon svg { width: 17px; height: 17px; }
.he-card-mini-chart-reveal .card-body { padding: 13px 16px 14px; }
.he-card-mini-chart-reveal .chips { gap: 6px; margin-top: 12px; }
.he-card-mini-chart-reveal .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-mini-chart-reveal .specs { gap: 5px; margin-top: 9px; }
.he-card-mini-chart-reveal .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-mini-chart-reveal .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-mini-chart-reveal .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-mini-chart-reveal .trail { margin: 14px 6px 0; }
.he-card-mini-chart-reveal .trail::before { top: 13px; }
.he-card-mini-chart-reveal .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-mini-chart-reveal .chart { height: 52px; margin-top: 12px; }
.he-card-mini-chart-reveal .value { font-size: 1.45rem; }`;

export const cardMiniChartReveal: HoverEffect = {
  id: "card-mini-chart-reveal",
  title: "Mini Chart Reveal",
  category: "cards",
  description: "Chart bars scale up from the baseline to preset values in sequence on hover.",
  tags: ["card","mini","chart","reveal","hover"],
  animationType: "scale",
  complexity: "medium",
  css,
  react: `export default function MiniChartRevealCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-mini-chart-reveal" aria-labelledby="card-mini-chart-reveal-title">
      <p className="value">3.4×</p>
      <h2 id="card-mini-chart-reveal-title">Organic reach</h2>
      <p className="label">Last 12 weeks · sample data</p>
      <div className="chart" role="img" aria-label="Sample bar chart: organic reach rising over the last eight measured weeks">
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "30%", ["--i" as string]: "0" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "44%", ["--i" as string]: "1" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "38%", ["--i" as string]: "2" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "58%", ["--i" as string]: "3" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "52%", ["--i" as string]: "4" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "70%", ["--i" as string]: "5" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "84%", ["--i" as string]: "6" }}></i></span>
        <span className="bar"><i className="fill" style={{ ["--h" as string]: "100%", ["--i" as string]: "7" }}></i></span>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">How reach is measured
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-mini-chart-reveal" aria-labelledby="card-mini-chart-reveal-title">
      <p class="value">3.4×</p>
      <h2 id="card-mini-chart-reveal-title">Organic reach</h2>
      <p class="label">Last 12 weeks · sample data</p>
      <div class="chart" role="img" aria-label="Sample bar chart: organic reach rising over the last eight measured weeks">
        <span class="bar"><i class="fill" style="--h: 30%; --i: 0"></i></span>
        <span class="bar"><i class="fill" style="--h: 44%; --i: 1"></i></span>
        <span class="bar"><i class="fill" style="--h: 38%; --i: 2"></i></span>
        <span class="bar"><i class="fill" style="--h: 58%; --i: 3"></i></span>
        <span class="bar"><i class="fill" style="--h: 52%; --i: 4"></i></span>
        <span class="bar"><i class="fill" style="--h: 70%; --i: 5"></i></span>
        <span class="bar"><i class="fill" style="--h: 84%; --i: 6"></i></span>
        <span class="bar"><i class="fill" style="--h: 100%; --i: 7"></i></span>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">How reach is measured
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
