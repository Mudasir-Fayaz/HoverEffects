import type { HoverEffect } from "../types";

const css = `.he-card-background-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-background-wash, .he-card-background-wash *, .he-card-background-wash *::before, .he-card-background-wash *::after { box-sizing: border-box; }
.he-card-background-wash h2, .he-card-background-wash h3, .he-card-background-wash p, .he-card-background-wash figure, .he-card-background-wash ol, .he-card-background-wash ul { margin: 0; }
.he-card-background-wash h2, .he-card-background-wash h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-background-wash img, .he-card-background-wash svg { display: block; max-width: 100%; }
.he-card-background-wash a { color: inherit; }
.he-card-background-wash :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-background-wash .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-background-wash .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Background Wash
   ========================================================= */.he-card-background-wash{
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-background-wash .wash{
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  transform: translateY(101%);
  transition: transform .42s var(--ease);
  pointer-events: none;
}.he-card-background-wash .card-content, .he-card-background-wash .card-footer{ position: relative; }.he-card-background-wash .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
  transition: background-color .42s var(--ease);
}.he-card-background-wash h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-background-wash .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-background-wash .card-footer{ margin-top: 18px; }
@media (hover: hover) and (pointer: fine){.he-card-background-wash:hover .wash{ transform: translateY(0); }.he-card-background-wash:hover .card-icon{ background: var(--surface); }
}.he-card-background-wash:focus-within .wash{ transform: translateY(0); }.he-card-background-wash:focus-within .card-icon{ background: var(--surface); }
@media (prefers-reduced-motion: reduce){.he-card-background-wash .wash, .he-card-background-wash .card-icon{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-background-wash { width: min(320px, 100%); height: 250px; }
.he-card-background-wash { overflow: hidden; }
.he-card-background-wash { display: flex; flex-direction: column; }
.he-card-background-wash .card-footer { margin-top: auto; }
.he-card-background-wash h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-background-wash .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-background-wash .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-background-wash .meta { font-size: .75rem; margin-top: 7px; }
.he-card-background-wash .price { font-size: .98rem; margin-top: 9px; }
.he-card-background-wash .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-background-wash .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-background-wash .card-icon svg { width: 17px; height: 17px; }
.he-card-background-wash .card-body { padding: 13px 16px 14px; }
.he-card-background-wash .chips { gap: 6px; margin-top: 12px; }
.he-card-background-wash .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-background-wash .specs { gap: 5px; margin-top: 9px; }
.he-card-background-wash .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-background-wash .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-background-wash .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-background-wash .trail { margin: 14px 6px 0; }
.he-card-background-wash .trail::before { top: 13px; }
.he-card-background-wash .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-background-wash .chart { height: 52px; margin-top: 12px; }
.he-card-background-wash .value { font-size: 1.45rem; }`;

export const cardBackgroundWash: HoverEffect = {
  id: "card-background-wash",
  title: "Background Wash",
  category: "cards",
  description: "A muted accent surface slides up behind the card content on hover.",
  tags: ["card","background","wash","hover"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function BackgroundWashCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-background-wash" aria-labelledby="card-background-wash-title">
      <span className="wash" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.5 9.5 9l3.5 3.5L20 6" /><path d="M15 6h5v5" />
          </svg>
        </span>
        <h2 id="card-background-wash-title">Growth analytics</h2>
        <p className="body-copy">Dashboards that connect acquisition, activation and retention into one weekly view your team actually reads.</p>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">Start a project
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-background-wash" aria-labelledby="card-background-wash-title">
      <span class="wash" aria-hidden="true"></span>
      <div class="card-content">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 14.5 9.5 9l3.5 3.5L20 6"/><path d="M15 6h5v5"/>
          </svg>
        </span>
        <h2 id="card-background-wash-title">Growth analytics</h2>
        <p class="body-copy">Dashboards that connect acquisition, activation and retention into one weekly view your team actually reads.</p>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">Start a project
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
