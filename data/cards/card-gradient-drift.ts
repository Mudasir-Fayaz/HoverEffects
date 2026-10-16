import type { HoverEffect } from "../types";

const css = `.he-card-gradient-drift{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-gradient-drift, .he-card-gradient-drift *, .he-card-gradient-drift *::before, .he-card-gradient-drift *::after { box-sizing: border-box; }
.he-card-gradient-drift h2, .he-card-gradient-drift h3, .he-card-gradient-drift p, .he-card-gradient-drift figure, .he-card-gradient-drift ol, .he-card-gradient-drift ul { margin: 0; }
.he-card-gradient-drift h2, .he-card-gradient-drift h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-gradient-drift img, .he-card-gradient-drift svg { display: block; max-width: 100%; }
.he-card-gradient-drift a { color: inherit; }
.he-card-gradient-drift :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-gradient-drift .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-gradient-drift .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Gradient Drift
   ========================================================= */.he-card-gradient-drift{
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface-2);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-gradient-drift .drift{
  position: absolute;
  inset: -40%;
  background: linear-gradient(115deg, var(--surface-2), var(--accent-2) 46%, var(--surface-2) 82%);
  background: linear-gradient(115deg, var(--surface-2), color-mix(in srgb, var(--accent) 26%, var(--surface-2)) 46%, var(--surface-2) 82%);
  opacity: .55;
  transform: translate3d(-3%, 2%, 0) scale(1.04);
  transition: transform 1.1s var(--ease);
  pointer-events: none;
}.he-card-gradient-drift .card-content, .he-card-gradient-drift .card-footer{ position: relative; }.he-card-gradient-drift .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--surface);
  color: var(--accent);
}.he-card-gradient-drift h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-gradient-drift .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-gradient-drift .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-gradient-drift:hover .drift{ transform: translate3d(3%, -2%, 0) scale(1.04); }
}.he-card-gradient-drift:focus-within .drift{ transform: translate3d(3%, -2%, 0) scale(1.04); }
@media (prefers-reduced-motion: reduce){.he-card-gradient-drift .drift{ transition: none; transform: translate3d(0, 0, 0) scale(1.04); }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-gradient-drift { width: min(320px, 100%); height: 250px; }
.he-card-gradient-drift { overflow: hidden; }
.he-card-gradient-drift { display: flex; flex-direction: column; }
.he-card-gradient-drift .card-footer { margin-top: auto; }
.he-card-gradient-drift h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-gradient-drift .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-gradient-drift .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-gradient-drift .meta { font-size: .75rem; margin-top: 7px; }
.he-card-gradient-drift .price { font-size: .98rem; margin-top: 9px; }
.he-card-gradient-drift .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-gradient-drift .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-gradient-drift .card-icon svg { width: 17px; height: 17px; }
.he-card-gradient-drift .card-body { padding: 13px 16px 14px; }
.he-card-gradient-drift .chips { gap: 6px; margin-top: 12px; }
.he-card-gradient-drift .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-gradient-drift .specs { gap: 5px; margin-top: 9px; }
.he-card-gradient-drift .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-gradient-drift .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-gradient-drift .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-gradient-drift .trail { margin: 14px 6px 0; }
.he-card-gradient-drift .trail::before { top: 13px; }
.he-card-gradient-drift .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-gradient-drift .chart { height: 52px; margin-top: 12px; }
.he-card-gradient-drift .value { font-size: 1.45rem; }`;

export const cardGradientDrift: HoverEffect = {
  id: "card-gradient-drift",
  title: "Gradient Drift",
  category: "cards",
  description: "An oversized muted gradient drifts gently across the card surface on hover.",
  tags: ["card","gradient","drift","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function GradientDriftCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-gradient-drift" aria-labelledby="card-gradient-drift-title">
      <span className="drift" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20 14 4l6 16z" /><circle cx="8" cy="8" r="2.6" />
          </svg>
        </span>
        <h2 id="card-gradient-drift-title">Campaign toolkit</h2>
        <p className="body-copy">Templates, motion presets and a royalty-free asset set for teams that ship campaigns without an agency.</p>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">Browse the toolkit
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-gradient-drift" aria-labelledby="card-gradient-drift-title">
      <span class="drift" aria-hidden="true"></span>
      <div class="card-content">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20 14 4l6 16z"/><circle cx="8" cy="8" r="2.6"/>
          </svg>
        </span>
        <h2 id="card-gradient-drift-title">Campaign toolkit</h2>
        <p class="body-copy">Templates, motion presets and a royalty-free asset set for teams that ship campaigns without an agency.</p>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">Browse the toolkit
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
