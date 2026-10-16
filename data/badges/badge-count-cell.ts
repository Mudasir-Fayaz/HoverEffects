import type { HoverEffect } from "../types";

const css = `.he-badge-count-cell{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-count-cell, .he-badge-count-cell *, .he-badge-count-cell *::before, .he-badge-count-cell *::after { box-sizing: border-box; }
.he-badge-count-cell h2, .he-badge-count-cell h3, .he-badge-count-cell p, .he-badge-count-cell figure, .he-badge-count-cell ol, .he-badge-count-cell ul { margin: 0; }
.he-badge-count-cell h2, .he-badge-count-cell h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-count-cell img, .he-badge-count-cell svg { display: block; max-width: 100%; }
.he-badge-count-cell a { color: inherit; }
.he-badge-count-cell :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-count-cell {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 26px;
  padding: 0 7px 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg21-div {
  width: 1px;
  height: 12px;
  background: var(--line-strong);
}
.bdg21-cell {
  position: relative;
  display: grid;
  place-items: center;
  min-width: 22px;
  height: 20px;
  border-radius: 5px;
  overflow: hidden;
}
.bdg21-tint {
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .25s var(--ease);
}
.bdg21-num {
  position: relative;
  font-variant-numeric: tabular-nums;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-count-cell:hover .bdg21-tint { opacity: 1; }
}
.he-badge-count-cell:focus-within .bdg21-tint { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-count-cell, .he-badge-count-cell *, .he-badge-count-cell *::before, .he-badge-count-cell *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeCountCell: HoverEffect = {
  id: "badge-count-cell",
  title: "Count Cell",
  category: "badges",
  description: "A dedicated count cell brightens independently while its numeric width and the main label stay stable.",
  tags: ["badges","count","cell","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeCountCell() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-count-cell">Tasks<i className="bdg21-div" aria-hidden="true"></i><span className="bdg21-cell"><i className="bdg21-tint" aria-hidden="true"></i><span className="bdg21-num">8</span></span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-count-cell">Tasks<i class="bdg21-div" aria-hidden="true"></i><span class="bdg21-cell"><i class="bdg21-tint" aria-hidden="true"></i><span class="bdg21-num">8</span></span></span>`,
};
