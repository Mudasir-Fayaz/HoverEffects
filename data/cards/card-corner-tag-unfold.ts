import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-corner-tag-unfold{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-corner-tag-unfold, .he-card-corner-tag-unfold *, .he-card-corner-tag-unfold *::before, .he-card-corner-tag-unfold *::after { box-sizing: border-box; }
.he-card-corner-tag-unfold h2, .he-card-corner-tag-unfold h3, .he-card-corner-tag-unfold p, .he-card-corner-tag-unfold figure, .he-card-corner-tag-unfold ol, .he-card-corner-tag-unfold ul { margin: 0; }
.he-card-corner-tag-unfold h2, .he-card-corner-tag-unfold h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-corner-tag-unfold img, .he-card-corner-tag-unfold svg { display: block; max-width: 100%; }
.he-card-corner-tag-unfold a { color: inherit; }
.he-card-corner-tag-unfold :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-corner-tag-unfold .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-corner-tag-unfold .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Corner Tag Unfold
   ========================================================= */.he-card-corner-tag-unfold{
  width: min(370px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-corner-tag-unfold .media{
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-corner-tag-unfold .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-corner-tag-unfold .tag{
  position: absolute;
  top: 14px; right: 0;
  padding: 6px 12px 6px 14px;
  font-size: .68rem; font-weight: 700; letter-spacing: .07em; text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  transform-origin: top right;
  transform: rotate(-7deg) translate(-2px, 2px) scale(.94);
  transition: transform .3s var(--ease);
}.he-card-corner-tag-unfold .tag::after{
  content: "";
  position: absolute;
  top: 0; right: -10px;
  width: 10px; height: 100%;
  background: linear-gradient(90deg, rgb(0 0 0 / .14), transparent);
  opacity: 0;
  transition: opacity .3s var(--ease);
}.he-card-corner-tag-unfold .card-body{ padding: 17px 20px 20px; }.he-card-corner-tag-unfold .cat{
  font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}.he-card-corner-tag-unfold h2{ font-size: 1.12rem; }.he-card-corner-tag-unfold .meta{ margin-top: 8px; font-size: .8rem; color: var(--text-2); }.he-card-corner-tag-unfold .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-corner-tag-unfold:hover .tag{ transform: rotate(0deg) translate(0, 0) scale(1); }.he-card-corner-tag-unfold:hover .tag::after{ opacity: 1; }
}.he-card-corner-tag-unfold:focus-within .tag{ transform: rotate(0deg) translate(0, 0) scale(1); }.he-card-corner-tag-unfold:focus-within .tag::after{ opacity: 1; }
@media (prefers-reduced-motion: reduce){.he-card-corner-tag-unfold .tag, .he-card-corner-tag-unfold .tag::after{ transition: none; }.he-card-corner-tag-unfold .tag{ transform: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-corner-tag-unfold { width: min(320px, 100%); height: 250px; }
.he-card-corner-tag-unfold { overflow: hidden; }
.he-card-corner-tag-unfold { display: flex; flex-direction: column; }
.he-card-corner-tag-unfold .media, .he-card-corner-tag-unfold .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-corner-tag-unfold .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-corner-tag-unfold .card-footer { margin-top: auto; }
.he-card-corner-tag-unfold h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-corner-tag-unfold .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-corner-tag-unfold .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-corner-tag-unfold .meta { font-size: .75rem; margin-top: 7px; }
.he-card-corner-tag-unfold .price { font-size: .98rem; margin-top: 9px; }
.he-card-corner-tag-unfold .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-corner-tag-unfold .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-corner-tag-unfold .card-icon svg { width: 17px; height: 17px; }
.he-card-corner-tag-unfold .card-body { padding: 13px 16px 14px; }
.he-card-corner-tag-unfold .chips { gap: 6px; margin-top: 12px; }
.he-card-corner-tag-unfold .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-corner-tag-unfold .specs { gap: 5px; margin-top: 9px; }
.he-card-corner-tag-unfold .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-corner-tag-unfold .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-corner-tag-unfold .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-corner-tag-unfold .trail { margin: 14px 6px 0; }
.he-card-corner-tag-unfold .trail::before { top: 13px; }
.he-card-corner-tag-unfold .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-corner-tag-unfold .chart { height: 52px; margin-top: 12px; }
.he-card-corner-tag-unfold .value { font-size: 1.45rem; }`;

const IMG_PHOTO_CERAMICS = cardImage("photo-ceramics");

export const cardCornerTagUnfold: HoverEffect = {
  id: "card-corner-tag-unfold",
  title: "Corner Tag Unfold",
  category: "cards",
  description: "A corner tag opens a few degrees, exposing its underside on hover.",
  tags: ["card","corner","tag","unfold","hover"],
  animationType: "transform",
  complexity: "medium",
  css,
  react: `export default function CornerTagUnfoldCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-corner-tag-unfold" aria-labelledby="card-corner-tag-unfold-title">
      <figure className="media">
        <img src="${IMG_PHOTO_CERAMICS}" alt="Three ceramic bowls arranged on a studio shelf" width="1000" height="750" />
        <span className="tag" aria-hidden="true">Staff pick</span>
      </figure>
      <div className="card-body">
        <p className="cat">Editorial</p>
        <h2 id="card-corner-tag-unfold-title">Making glazes from local ash</h2>
        <p className="meta">Workshop notes · April 2026</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Read the workshop notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-corner-tag-unfold" aria-labelledby="card-corner-tag-unfold-title">
      <figure class="media">
        <img src="${IMG_PHOTO_CERAMICS}" alt="Three ceramic bowls arranged on a studio shelf" width="1000" height="750">
        <span class="tag" aria-hidden="true">Staff pick</span>
      </figure>
      <div class="card-body">
        <p class="cat">Editorial</p>
        <h2 id="card-corner-tag-unfold-title">Making glazes from local ash</h2>
        <p class="meta">Workshop notes · April 2026</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Read the workshop notes
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
