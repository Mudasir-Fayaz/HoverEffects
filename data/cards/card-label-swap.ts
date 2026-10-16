import type { HoverEffect } from "../types";

const css = `.he-card-label-swap{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-label-swap, .he-card-label-swap *, .he-card-label-swap *::before, .he-card-label-swap *::after { box-sizing: border-box; }
.he-card-label-swap h2, .he-card-label-swap h3, .he-card-label-swap p, .he-card-label-swap figure, .he-card-label-swap ol, .he-card-label-swap ul { margin: 0; }
.he-card-label-swap h2, .he-card-label-swap h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-label-swap img, .he-card-label-swap svg { display: block; max-width: 100%; }
.he-card-label-swap a { color: inherit; }
.he-card-label-swap :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-label-swap .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-label-swap .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Label Swap
   ========================================================= */.he-card-label-swap{
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-label-swap .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-label-swap h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-label-swap .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-label-swap .label-viewport{
  position: relative;
  width: max-content;
  min-width: 148px;
  height: 1.8rem;
  margin-top: 16px;
  border-radius: var(--radius-pill);
  background: var(--accent-soft);
  overflow: hidden;
}.he-card-label-swap .label{
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 0 14px;
  font-size: .68rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--accent);
  white-space: nowrap;
  transition: transform .32s var(--ease), opacity .32s var(--ease);
}.he-card-label-swap .label-a{ transform: translateY(0); opacity: 1; }.he-card-label-swap .label-b{ transform: translateY(100%); opacity: 0; }.he-card-label-swap .card-footer{ margin-top: 16px; }
@media (hover: hover) and (pointer: fine){.he-card-label-swap:hover .label-a{ transform: translateY(-100%); opacity: 0; }.he-card-label-swap:hover .label-b{ transform: translateY(0); opacity: 1; }
}.he-card-label-swap:focus-within .label-a{ transform: translateY(-100%); opacity: 0; }.he-card-label-swap:focus-within .label-b{ transform: translateY(0); opacity: 1; }
@media (prefers-reduced-motion: reduce){.he-card-label-swap .label{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-label-swap { width: min(320px, 100%); height: 250px; }
.he-card-label-swap { overflow: hidden; }
.he-card-label-swap { display: flex; flex-direction: column; }
.he-card-label-swap .card-footer { margin-top: auto; }
.he-card-label-swap h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-label-swap .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-label-swap .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-label-swap .meta { font-size: .75rem; margin-top: 7px; }
.he-card-label-swap .price { font-size: .98rem; margin-top: 9px; }
.he-card-label-swap .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-label-swap .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-label-swap .card-icon svg { width: 17px; height: 17px; }
.he-card-label-swap .card-body { padding: 13px 16px 14px; }
.he-card-label-swap .chips { gap: 6px; margin-top: 12px; }
.he-card-label-swap .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-label-swap .specs { gap: 5px; margin-top: 9px; }
.he-card-label-swap .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-label-swap .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-label-swap .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-label-swap .trail { margin: 14px 6px 0; }
.he-card-label-swap .trail::before { top: 13px; }
.he-card-label-swap .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-label-swap .chart { height: 52px; margin-top: 12px; }
.he-card-label-swap .value { font-size: 1.45rem; }`;

export const cardLabelSwap: HoverEffect = {
  id: "card-label-swap",
  title: "Label Swap",
  category: "cards",
  description: "Decorative labels roll over to a second state while the real link name stays stable.",
  tags: ["card","label","swap","hover"],
  animationType: "translate",
  complexity: "simple",
  css,
  react: `export default function LabelSwapCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-label-swap" aria-labelledby="card-label-swap-title">
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16M4 12h10M4 17h7" />
        </svg>
      </span>
      <h2 id="card-label-swap-title">The seasonal drop</h2>
      <p className="body-copy">Twelve pieces released each season, made in small batches and never restocked once they sell through.</p>
      <div className="label-viewport" aria-hidden="true">
        <span className="label label-a">New this week</span>
        <span className="label label-b">Back in stock</span>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">Browse the collection
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-label-swap" aria-labelledby="card-label-swap-title">
      <span class="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 7h16M4 12h10M4 17h7"/>
        </svg>
      </span>
      <h2 id="card-label-swap-title">The seasonal drop</h2>
      <p class="body-copy">Twelve pieces released each season, made in small batches and never restocked once they sell through.</p>
      <div class="label-viewport" aria-hidden="true">
        <span class="label label-a">New this week</span>
        <span class="label label-b">Back in stock</span>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">Browse the collection
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
