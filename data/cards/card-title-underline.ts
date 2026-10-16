import type { HoverEffect } from "../types";
import { cardImage } from "./assets";

const css = `.he-card-title-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-title-underline, .he-card-title-underline *, .he-card-title-underline *::before, .he-card-title-underline *::after { box-sizing: border-box; }
.he-card-title-underline h2, .he-card-title-underline h3, .he-card-title-underline p, .he-card-title-underline figure, .he-card-title-underline ol, .he-card-title-underline ul { margin: 0; }
.he-card-title-underline h2, .he-card-title-underline h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-title-underline img, .he-card-title-underline svg { display: block; max-width: 100%; }
.he-card-title-underline a { color: inherit; }
.he-card-title-underline :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-title-underline .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-title-underline .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Title Underline
   ========================================================= */.he-card-title-underline{
  width: min(360px, 100%);
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-title-underline .media{
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  background: var(--surface-2);
}.he-card-title-underline .media img{ width: 100%; height: 100%; object-fit: cover; }.he-card-title-underline .card-body{ padding: 18px 20px 20px; }.he-card-title-underline .cat{
  font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 7px;
}.he-card-title-underline h2{ font-size: 1.18rem; line-height: 1.3; }.he-card-title-underline .underline{
  /* Inline element: each wrapped line fragment draws its own animated underline. */
  padding-bottom: 3px;
  background-image: linear-gradient(var(--accent), var(--accent));
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0% 2.5px;
  transition: background-size .45s var(--ease);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}.he-card-title-underline .meta{ margin-top: 10px; font-size: .8rem; color: var(--text-2); }.he-card-title-underline .card-footer{ margin-top: 14px; }
@media (hover: hover) and (pointer: fine){.he-card-title-underline:hover .underline{ background-size: 100% 2.5px; }
}.he-card-title-underline:focus-within .underline{ background-size: 100% 2.5px; }
@media (prefers-reduced-motion: reduce){.he-card-title-underline .underline{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-title-underline { width: min(320px, 100%); height: 250px; }
.he-card-title-underline { overflow: hidden; }
.he-card-title-underline { display: flex; flex-direction: column; }
.he-card-title-underline .media, .he-card-title-underline .stack { aspect-ratio: auto; flex: none; height: 92px; }
.he-card-title-underline .card-body { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-title-underline .card-footer { margin-top: auto; }
.he-card-title-underline h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-title-underline .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-title-underline .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-title-underline .meta { font-size: .75rem; margin-top: 7px; }
.he-card-title-underline .price { font-size: .98rem; margin-top: 9px; }
.he-card-title-underline .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-title-underline .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-title-underline .card-icon svg { width: 17px; height: 17px; }
.he-card-title-underline .card-body { padding: 13px 16px 14px; }
.he-card-title-underline .chips { gap: 6px; margin-top: 12px; }
.he-card-title-underline .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-title-underline .specs { gap: 5px; margin-top: 9px; }
.he-card-title-underline .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-title-underline .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-title-underline .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-title-underline .trail { margin: 14px 6px 0; }
.he-card-title-underline .trail::before { top: 13px; }
.he-card-title-underline .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-title-underline .chart { height: 52px; margin-top: 12px; }
.he-card-title-underline .value { font-size: 1.45rem; }`;

const IMG_EDITORIAL_STUDIO = cardImage("editorial-studio");

export const cardTitleUnderline: HoverEffect = {
  id: "card-title-underline",
  title: "Title Underline",
  category: "cards",
  description: "An accent underline sweeps beneath a wrapping headline, drawing across each line fragment.",
  tags: ["card","title","underline","hover"],
  animationType: "background-size",
  complexity: "simple",
  css,
  react: `export default function TitleUnderlineCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-title-underline" aria-labelledby="card-title-underline-title">
      <figure className="media">
        <img src="${IMG_EDITORIAL_STUDIO}" alt="Editorial illustration of a studio still life with ceramics and plant shapes" width="1200" height="800" />
      </figure>
      <div className="card-body">
        <p className="cat">Field notes · Essay</p>
        <h2 id="card-title-underline-title"><span className="underline">The quiet return of the workshop studio</span></h2>
        <p className="meta"><time dateTime="2026-03-12">12 March 2026</time> · 6 min read</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Read the essay
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-title-underline" aria-labelledby="card-title-underline-title">
      <figure class="media">
        <img src="${IMG_EDITORIAL_STUDIO}" alt="Editorial illustration of a studio still life with ceramics and plant shapes" width="1200" height="800">
      </figure>
      <div class="card-body">
        <p class="cat">Field notes · Essay</p>
        <h2 id="card-title-underline-title"><span class="underline">The quiet return of the workshop studio</span></h2>
        <p class="meta"><time datetime="2026-03-12">12 March 2026</time> · 6 min read</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Read the essay
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>`,
};
