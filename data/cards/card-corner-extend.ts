import type { HoverEffect } from "../types";

const css = `.he-card-corner-extend{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-corner-extend, .he-card-corner-extend *, .he-card-corner-extend *::before, .he-card-corner-extend *::after { box-sizing: border-box; }
.he-card-corner-extend h2, .he-card-corner-extend h3, .he-card-corner-extend p, .he-card-corner-extend figure, .he-card-corner-extend ol, .he-card-corner-extend ul { margin: 0; }
.he-card-corner-extend h2, .he-card-corner-extend h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-corner-extend img, .he-card-corner-extend svg { display: block; max-width: 100%; }
.he-card-corner-extend a { color: inherit; }
.he-card-corner-extend :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-corner-extend .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-corner-extend .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Corner Extend
   ========================================================= */.he-card-corner-extend{
  --on: 0;
  --grow: 1.7;
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-corner-extend .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-corner-extend h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-corner-extend .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-corner-extend .card-footer{ margin-top: 18px; }.he-card-corner-extend .corners{ position: absolute; inset: 0; pointer-events: none; }.he-card-corner-extend .corners i{ position: absolute; width: 22px; height: 22px; }.he-card-corner-extend .corners i::before, .he-card-corner-extend .corners i::after{
  content: "";
  position: absolute;
  background: var(--accent);
  border-radius: 2px;
  transition: transform .3s var(--ease);
  transition-delay: calc((1 - var(--on)) * var(--out, 0ms) + var(--on) * var(--in, 0ms));
}.he-card-corner-extend .corners i::before{ width: 22px; height: 2px; transform: scaleX(calc(1 + var(--on) * (var(--grow) - 1))); }.he-card-corner-extend .corners i::after{ width: 2px; height: 22px; transform: scaleY(calc(1 + var(--on) * (var(--grow) - 1))); }.he-card-corner-extend .c-tl{ top: 12px; left: 12px; --in: 0ms;   --out: 270ms; }.he-card-corner-extend .c-tr{ top: 12px; right: 12px; --in: 90ms;  --out: 180ms; }.he-card-corner-extend .c-br{ bottom: 12px; right: 12px; --in: 180ms; --out: 90ms; }.he-card-corner-extend .c-bl{ bottom: 12px; left: 12px; --in: 270ms; --out: 0ms; }.he-card-corner-extend .c-tl::before{ transform-origin: left; }.he-card-corner-extend .c-tl::after{ transform-origin: top; }.he-card-corner-extend .c-tr::before{ transform-origin: right; }.he-card-corner-extend .c-tr::after{ transform-origin: top; }.he-card-corner-extend .c-br::before{ transform-origin: right; }.he-card-corner-extend .c-br::after{ transform-origin: bottom; }.he-card-corner-extend .c-bl::before{ transform-origin: left; }.he-card-corner-extend .c-bl::after{ transform-origin: bottom; }
@media (hover: hover) and (pointer: fine){.he-card-corner-extend:hover{ --on: 1; }
}.he-card-corner-extend:focus-within{ --on: 1; }
@media (prefers-reduced-motion: reduce){.he-card-corner-extend .corners i::before, .he-card-corner-extend .corners i::after{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-corner-extend { width: min(320px, 100%); height: 250px; }
.he-card-corner-extend { overflow: hidden; }
.he-card-corner-extend { display: flex; flex-direction: column; }
.he-card-corner-extend .card-footer { margin-top: auto; }
.he-card-corner-extend h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-corner-extend .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-corner-extend .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-corner-extend .meta { font-size: .75rem; margin-top: 7px; }
.he-card-corner-extend .price { font-size: .98rem; margin-top: 9px; }
.he-card-corner-extend .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-corner-extend .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-corner-extend .card-icon svg { width: 17px; height: 17px; }
.he-card-corner-extend .card-body { padding: 13px 16px 14px; }
.he-card-corner-extend .chips { gap: 6px; margin-top: 12px; }
.he-card-corner-extend .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-corner-extend .specs { gap: 5px; margin-top: 9px; }
.he-card-corner-extend .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-corner-extend .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-corner-extend .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-corner-extend .trail { margin: 14px 6px 0; }
.he-card-corner-extend .trail::before { top: 13px; }
.he-card-corner-extend .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-corner-extend .chart { height: 52px; margin-top: 12px; }
.he-card-corner-extend .value { font-size: 1.45rem; }`;

export const cardCornerExtend: HoverEffect = {
  id: "card-corner-extend",
  title: "Corner Extend",
  category: "cards",
  description: "Corner marks extend along the card edges in a clockwise sequence on hover.",
  tags: ["card","corner","extend","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function CornerExtendCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-corner-extend" aria-labelledby="card-corner-extend-title">
      <div className="corners" aria-hidden="true">
        <i className="c-tl"></i><i className="c-tr"></i><i className="c-br"></i><i className="c-bl"></i>
      </div>
      <span className="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" />
        </svg>
      </span>
      <h2 id="card-corner-extend-title">Realtime collaboration</h2>
      <p className="body-copy">Multiplayer editing with presence, comments and version history — wired into the tools your team already uses.</p>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">How collaboration works
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-corner-extend" aria-labelledby="card-corner-extend-title">
      <div class="corners" aria-hidden="true">
        <i class="c-tl"></i><i class="c-tr"></i><i class="c-br"></i><i class="c-bl"></i>
      </div>
      <span class="card-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>
        </svg>
      </span>
      <h2 id="card-corner-extend-title">Realtime collaboration</h2>
      <p class="body-copy">Multiplayer editing with presence, comments and version history — wired into the tools your team already uses.</p>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">How collaboration works
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
