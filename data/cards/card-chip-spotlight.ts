import type { HoverEffect } from "../types";

const css = `.he-card-chip-spotlight{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-chip-spotlight, .he-card-chip-spotlight *, .he-card-chip-spotlight *::before, .he-card-chip-spotlight *::after { box-sizing: border-box; }
.he-card-chip-spotlight h2, .he-card-chip-spotlight h3, .he-card-chip-spotlight p, .he-card-chip-spotlight figure, .he-card-chip-spotlight ol, .he-card-chip-spotlight ul { margin: 0; }
.he-card-chip-spotlight h2, .he-card-chip-spotlight h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-chip-spotlight img, .he-card-chip-spotlight svg { display: block; max-width: 100%; }
.he-card-chip-spotlight a { color: inherit; }
.he-card-chip-spotlight :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-chip-spotlight .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-chip-spotlight .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Chip Spotlight
   ========================================================= */.he-card-chip-spotlight{
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-chip-spotlight h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-chip-spotlight .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-chip-spotlight .chips{
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 16px;
}.he-card-chip-spotlight .chip{
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--line-strong);
  background: var(--surface-2);
  color: var(--text-2);
  font-size: .78rem;
  font-weight: 650;
  text-decoration: none;
  transition: background-color .24s var(--ease), border-color .24s var(--ease), color .24s var(--ease), transform .24s var(--ease), box-shadow .24s var(--ease), opacity .24s var(--ease);
}.he-card-chip-spotlight .chip:focus-visible{
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}.he-card-chip-spotlight .card-footer{ margin-top: 17px; }
@media (hover: hover) and (pointer: fine){.he-card-chip-spotlight:hover .chip{
  background: color-mix(in srgb, var(--accent-soft) 65%, var(--surface-2));
  border-color: color-mix(in srgb, var(--accent) 38%, var(--line-strong));
  color: color-mix(in srgb, var(--accent) 60%, var(--text-2));
}
  .he-card-chip-spotlight .chips:has(.chip:hover) .chip:not(:hover){
    opacity: .5;
    transform: scale(.96);
  }
  .he-card-chip-spotlight .chip:hover{
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 16px -8px color-mix(in srgb, var(--accent) 70%, transparent);
  }
}
@media (prefers-reduced-motion: reduce){.he-card-chip-spotlight .chip{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-chip-spotlight { width: min(320px, 100%); height: 250px; }
.he-card-chip-spotlight { overflow: hidden; }
.he-card-chip-spotlight { display: flex; flex-direction: column; }
.he-card-chip-spotlight .card-footer { margin-top: auto; }
.he-card-chip-spotlight h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-chip-spotlight .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-chip-spotlight .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-chip-spotlight .meta { font-size: .75rem; margin-top: 7px; }
.he-card-chip-spotlight .price { font-size: .98rem; margin-top: 9px; }
.he-card-chip-spotlight .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-chip-spotlight .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-chip-spotlight .card-icon svg { width: 17px; height: 17px; }
.he-card-chip-spotlight .card-body { padding: 13px 16px 14px; }
.he-card-chip-spotlight .chips { gap: 6px; margin-top: 12px; }
.he-card-chip-spotlight .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-chip-spotlight .specs { gap: 5px; margin-top: 9px; }
.he-card-chip-spotlight .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-chip-spotlight .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-chip-spotlight .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-chip-spotlight .trail { margin: 14px 6px 0; }
.he-card-chip-spotlight .trail::before { top: 13px; }
.he-card-chip-spotlight .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-chip-spotlight .chart { height: 52px; margin-top: 12px; }
.he-card-chip-spotlight .value { font-size: 1.45rem; }`;

export const cardChipSpotlight: HoverEffect = {
  id: "card-chip-spotlight",
  title: "Chip Spotlight",
  category: "cards",
  description: "The hovered chip fills with accent and lifts while the other chips dim, like a spotlight.",
  tags: ["card","chip","spotlight","hover"],
  animationType: "color",
  complexity: "simple",
  css,
  react: `export default function ChipSpotlightCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-chip-spotlight" aria-labelledby="card-chip-spotlight-title">
      <h2 id="card-chip-spotlight-title">Practical resources</h2>
      <p className="body-copy">Short guides and templates for the parts of product work that rarely get documented.</p>
      <div className="chips" aria-label="Resource topics">
        <a className="chip" href="https://example.com">Analytics</a>
        <a className="chip" href="https://example.com">Research</a>
        <a className="chip" href="https://example.com">Positioning</a>
        <a className="chip" href="https://example.com">Pricing</a>
      </div>
      <p className="card-footer">
        <a className="card-link" href="https://example.com">Browse the resource library
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </p>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-chip-spotlight" aria-labelledby="card-chip-spotlight-title">
      <h2 id="card-chip-spotlight-title">Practical resources</h2>
      <p class="body-copy">Short guides and templates for the parts of product work that rarely get documented.</p>
      <div class="chips" aria-label="Resource topics">
        <a class="chip" href="https://example.com">Analytics</a>
        <a class="chip" href="https://example.com">Research</a>
        <a class="chip" href="https://example.com">Positioning</a>
        <a class="chip" href="https://example.com">Pricing</a>
      </div>
      <p class="card-footer">
        <a class="card-link" href="https://example.com">Browse the resource library
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </p>
    </article>`,
};
