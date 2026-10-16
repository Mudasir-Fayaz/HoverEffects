import type { HoverEffect } from "../types";

const css = `.he-card-border-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-border-trace, .he-card-border-trace *, .he-card-border-trace *::before, .he-card-border-trace *::after { box-sizing: border-box; }
.he-card-border-trace h2, .he-card-border-trace h3, .he-card-border-trace p, .he-card-border-trace figure, .he-card-border-trace ol, .he-card-border-trace ul { margin: 0; }
.he-card-border-trace h2, .he-card-border-trace h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-border-trace img, .he-card-border-trace svg { display: block; max-width: 100%; }
.he-card-border-trace a { color: inherit; }
.he-card-border-trace :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-border-trace .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-border-trace .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Border Trace
   ========================================================= */.he-card-border-trace{
  --on: 0;
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-border-trace .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-border-trace h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-border-trace .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-border-trace .card-footer{ margin-top: 18px; }.he-card-border-trace .trace{ position: absolute; inset: 0; border-radius: inherit; pointer-events: none; }.he-card-border-trace .trace i{
  position: absolute;
  display: block;
  background: var(--accent);
  border-radius: 2px;
  transition: transform .26s var(--ease);
  transition-delay: calc((1 - var(--on)) * var(--out, 0ms) + var(--on) * var(--in, 0ms));
}.he-card-border-trace .t-top{ top: 0; left: 16px; right: 16px; height: 2px; transform-origin: left;  transform: scaleX(var(--on)); }.he-card-border-trace .t-right{ right: 0; top: 16px; bottom: 16px; width: 2px; transform-origin: top;    transform: scaleY(var(--on)); }.he-card-border-trace .t-bottom{ bottom: 0; left: 16px; right: 16px; height: 2px; transform-origin: right; transform: scaleX(var(--on)); }.he-card-border-trace .t-left{ left: 0; top: 16px; bottom: 16px; width: 2px; transform-origin: bottom;  transform: scaleY(var(--on)); }.he-card-border-trace .t-top{ --in: 0ms;   --out: 210ms; }.he-card-border-trace .t-right{ --in: 110ms; --out: 140ms; }.he-card-border-trace .t-bottom{ --in: 220ms; --out: 70ms; }.he-card-border-trace .t-left{ --in: 330ms; --out: 0ms; }
@media (hover: hover) and (pointer: fine){.he-card-border-trace:hover{ --on: 1; }
}.he-card-border-trace:focus-within{ --on: 1; }
@media (prefers-reduced-motion: reduce){.he-card-border-trace .trace i{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-border-trace { width: min(320px, 100%); height: 250px; }
.he-card-border-trace { overflow: hidden; }
.he-card-border-trace { display: flex; flex-direction: column; }
.he-card-border-trace .card-footer { margin-top: auto; }
.he-card-border-trace h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-border-trace .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-border-trace .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-border-trace .meta { font-size: .75rem; margin-top: 7px; }
.he-card-border-trace .price { font-size: .98rem; margin-top: 9px; }
.he-card-border-trace .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-border-trace .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-border-trace .card-icon svg { width: 17px; height: 17px; }
.he-card-border-trace .card-body { padding: 13px 16px 14px; }
.he-card-border-trace .chips { gap: 6px; margin-top: 12px; }
.he-card-border-trace .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-border-trace .specs { gap: 5px; margin-top: 9px; }
.he-card-border-trace .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-border-trace .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-border-trace .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-border-trace .trail { margin: 14px 6px 0; }
.he-card-border-trace .trail::before { top: 13px; }
.he-card-border-trace .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-border-trace .chart { height: 52px; margin-top: 12px; }
.he-card-border-trace .value { font-size: 1.45rem; }`;

export const cardBorderTrace: HoverEffect = {
  id: "card-border-trace",
  title: "Border Trace",
  category: "cards",
  description: "Four perimeter strokes draw around the card in sequence on hover, then retract cleanly in reverse order on exit.",
  tags: ["card","border","trace","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function BorderTraceCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-border-trace" aria-labelledby="card-border-trace-title">
      <div className="trace" aria-hidden="true">
        <i className="t-top"></i><i className="t-right"></i><i className="t-bottom"></i><i className="t-left"></i>
      </div>
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.4" /><path d="M12 2.8v4M12 17.2v4M2.8 12h4M17.2 12h4" />
        </svg>
      </span>
      <h2 id="card-border-trace-title">Design systems audit</h2>
      <p className="body-copy">We map every component and token in your product, then document the gaps that slow teams down.</p>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">See what the audit covers
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-border-trace" aria-labelledby="card-border-trace-title">
      <div class="trace" aria-hidden="true">
        <i class="t-top"></i><i class="t-right"></i><i class="t-bottom"></i><i class="t-left"></i>
      </div>
      <span class="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4.4"/><path d="M12 2.8v4M12 17.2v4M2.8 12h4M17.2 12h4"/>
        </svg>
      </span>
      <h2 id="card-border-trace-title">Design systems audit</h2>
      <p class="body-copy">We map every component and token in your product, then document the gaps that slow teams down.</p>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">See what the audit covers
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
