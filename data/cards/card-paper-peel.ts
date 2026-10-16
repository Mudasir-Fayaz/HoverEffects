import type { HoverEffect } from "../types";

const css = `.he-card-paper-peel{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-paper-peel, .he-card-paper-peel *, .he-card-paper-peel *::before, .he-card-paper-peel *::after { box-sizing: border-box; }
.he-card-paper-peel h2, .he-card-paper-peel h3, .he-card-paper-peel p, .he-card-paper-peel figure, .he-card-paper-peel ol, .he-card-paper-peel ul { margin: 0; }
.he-card-paper-peel h2, .he-card-paper-peel h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-paper-peel img, .he-card-paper-peel svg { display: block; max-width: 100%; }
.he-card-paper-peel a { color: inherit; }
.he-card-paper-peel :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-paper-peel .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-paper-peel .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Paper Peel
   ========================================================= */.he-card-paper-peel{
  position: relative;
  width: min(380px, 100%);
  padding: 28px 26px 30px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-paper-peel .cat{
  font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}.he-card-paper-peel h2{ font-size: 1.2rem; max-width: 24ch; }.he-card-paper-peel .meta{ margin-top: 9px; font-size: .8rem; color: var(--text-2); }.he-card-paper-peel .card-footer{ margin-top: 18px; }.he-card-paper-peel .peel{
  position: absolute;
  right: 0; bottom: 0;
  width: 38px; height: 38px;
  pointer-events: none;
}.he-card-paper-peel .peel::before{
  /* Exposed underside of the corner */
  content: "";
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--accent) 16%, var(--surface-2));
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  opacity: .55;
  transition: opacity .35s var(--ease);
}.he-card-paper-peel .peel::after{
  /* The folded flap */
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(315deg, var(--surface-2) 0 46%, var(--surface) 54%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transform-origin: 0 100%;
  transform: rotate(0deg) translate(0, 0);
  box-shadow: 2px 2px 7px rgb(18 22 19 / .1);
  transition: transform .35s var(--ease), box-shadow .35s var(--ease);
}.he-card-paper-peel .card-footer a{ position: relative; }
@media (hover: hover) and (pointer: fine){.he-card-paper-peel:hover .peel::after{
    transform: rotate(-6deg) translate(-1px, -1px);
    box-shadow: 3px 3px 11px rgb(18 22 19 / .17);
  }.he-card-paper-peel:hover .peel::before{ opacity: 1; }
}.he-card-paper-peel:focus-within .peel::after{
  transform: rotate(-6deg) translate(-1px, -1px);
  box-shadow: 3px 3px 11px rgb(18 22 19 / .17);
}.he-card-paper-peel:focus-within .peel::before{ opacity: 1; }
@media (prefers-reduced-motion: reduce){.he-card-paper-peel .peel::before, .he-card-paper-peel .peel::after{ transition: none; }.he-card-paper-peel:hover .peel::after, .he-card-paper-peel:focus-within .peel::after{ transform: none; box-shadow: 2px 2px 7px rgb(18 22 19 / .1); }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-paper-peel { width: min(320px, 100%); height: 250px; }
.he-card-paper-peel { overflow: hidden; }
.he-card-paper-peel { display: flex; flex-direction: column; }
.he-card-paper-peel .card-footer { margin-top: auto; }
.he-card-paper-peel h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-paper-peel .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-paper-peel .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-paper-peel .meta { font-size: .75rem; margin-top: 7px; }
.he-card-paper-peel .price { font-size: .98rem; margin-top: 9px; }
.he-card-paper-peel .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-paper-peel .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-paper-peel .card-icon svg { width: 17px; height: 17px; }
.he-card-paper-peel .card-body { padding: 13px 16px 14px; }
.he-card-paper-peel .chips { gap: 6px; margin-top: 12px; }
.he-card-paper-peel .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-paper-peel .specs { gap: 5px; margin-top: 9px; }
.he-card-paper-peel .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-paper-peel .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-paper-peel .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-paper-peel .trail { margin: 14px 6px 0; }
.he-card-paper-peel .trail::before { top: 13px; }
.he-card-paper-peel .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-paper-peel .chart { height: 52px; margin-top: 12px; }
.he-card-paper-peel .value { font-size: 1.45rem; }`;

export const cardPaperPeel: HoverEffect = {
  id: "card-paper-peel",
  title: "Paper Peel",
  category: "cards",
  description: "A folded paper corner opens slightly on hover, never flipping the card.",
  tags: ["card","paper","peel","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function PaperPeelCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-paper-peel" aria-labelledby="card-paper-peel-title">
      <p className="cat">Editorial</p>
      <h2 id="card-paper-peel-title">Folding, scoring and the tidy corner</h2>
      <p className="meta">Craft notes · 5 min read</p>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">Read the craft notes
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
      <span className="peel" aria-hidden="true"></span>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-paper-peel" aria-labelledby="card-paper-peel-title">
      <p class="cat">Editorial</p>
      <h2 id="card-paper-peel-title">Folding, scoring and the tidy corner</h2>
      <p class="meta">Craft notes · 5 min read</p>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">Read the craft notes
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
      <span class="peel" aria-hidden="true"></span>
    </article>`,
};
