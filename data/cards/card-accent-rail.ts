import type { HoverEffect } from "../types";

const css = `.he-card-accent-rail{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-accent-rail, .he-card-accent-rail *, .he-card-accent-rail *::before, .he-card-accent-rail *::after { box-sizing: border-box; }
.he-card-accent-rail h2, .he-card-accent-rail h3, .he-card-accent-rail p, .he-card-accent-rail figure, .he-card-accent-rail ol, .he-card-accent-rail ul { margin: 0; }
.he-card-accent-rail h2, .he-card-accent-rail h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-accent-rail img, .he-card-accent-rail svg { display: block; max-width: 100%; }
.he-card-accent-rail a { color: inherit; }
.he-card-accent-rail :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* =========================================================
   Effect: Accent Rail
   ========================================================= */.he-card-accent-rail{
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 15px;
  width: min(400px, 100%);
  padding: 20px 18px 20px 26px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
}.he-card-accent-rail .rail{
  position: absolute;
  left: 0; top: 12px; bottom: 12px;
  width: 3px;
  background: var(--accent);
  border-radius: 0 3px 3px 0;
  transform-origin: center;
  transform: scaleY(.24);
  transition: transform .28s var(--ease);
}.he-card-accent-rail .card-icon{
  display: grid; place-items: center;
  width: 42px; height: 42px;
  border-radius: 11px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-accent-rail .card-copy h2{ font-size: 1.05rem; margin-bottom: 4px; }.he-card-accent-rail .body-copy{ color: var(--text-2); font-size: .88rem; }.he-card-accent-rail .arrow-link{
  display: grid; place-items: center;
  width: 40px; height: 40px;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  color: var(--accent);
  text-decoration: none;
  transition: background-color .22s var(--ease), border-color .22s var(--ease), color .22s var(--ease);
}.he-card-accent-rail .arrow-link:hover{ background: var(--accent); border-color: var(--accent); color: #ffffff; }
@media (hover: hover) and (pointer: fine){.he-card-accent-rail:hover .rail{ transform: scaleY(1); }
}.he-card-accent-rail:focus-within .rail{ transform: scaleY(1); }
@media (prefers-reduced-motion: reduce){.he-card-accent-rail .rail, .he-card-accent-rail .arrow-link{ transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-accent-rail { width: min(320px, 100%); height: 250px; }
.he-card-accent-rail { overflow: hidden; }
.he-card-accent-rail h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-accent-rail .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-accent-rail .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-accent-rail .meta { font-size: .75rem; margin-top: 7px; }
.he-card-accent-rail .price { font-size: .98rem; margin-top: 9px; }
.he-card-accent-rail .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-accent-rail .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-accent-rail .card-icon svg { width: 17px; height: 17px; }
.he-card-accent-rail .card-body { padding: 13px 16px 14px; }
.he-card-accent-rail .chips { gap: 6px; margin-top: 12px; }
.he-card-accent-rail .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-accent-rail .specs { gap: 5px; margin-top: 9px; }
.he-card-accent-rail .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-accent-rail .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-accent-rail .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-accent-rail .trail { margin: 14px 6px 0; }
.he-card-accent-rail .trail::before { top: 13px; }
.he-card-accent-rail .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-accent-rail .chart { height: 52px; margin-top: 12px; }
.he-card-accent-rail .value { font-size: 1.45rem; }`;

export const cardAccentRail: HoverEffect = {
  id: "card-accent-rail",
  title: "Accent Rail",
  category: "cards",
  description: "A side rail grows from a centred segment to full height along the card edge on hover.",
  tags: ["card","accent","rail","hover"],
  animationType: "scale",
  complexity: "simple",
  css,
  react: `export default function AccentRailCard() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <article className="he-card-accent-rail" aria-labelledby="card-accent-rail-title">
      <span className="rail" aria-hidden="true"></span>
      <span className="card-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3v6M15 3v6" /><path d="M6 9h12v3.5a6 6 0 0 1-12 0z" /><path d="M12 18.5V21" />
        </svg>
      </span>
      <div className="card-copy">
        <h2 id="card-accent-rail-title">API design review</h2>
        <p className="body-copy">A two-day session covering naming, versioning and error shapes before you commit to a public surface.</p>
      </div>
      <a className="arrow-link" href="https://example.com" aria-label="Read about the API design review">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-accent-rail" aria-labelledby="card-accent-rail-title">
      <span class="rail" aria-hidden="true"></span>
      <span class="card-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 3v6M15 3v6"/><path d="M6 9h12v3.5a6 6 0 0 1-12 0z"/><path d="M12 18.5V21"/>
        </svg>
      </span>
      <div class="card-copy">
        <h2 id="card-accent-rail-title">API design review</h2>
        <p class="body-copy">A two-day session covering naming, versioning and error shapes before you commit to a public surface.</p>
      </div>
      <a class="arrow-link" href="https://example.com" aria-label="Read about the API design review">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </article>`,
};
