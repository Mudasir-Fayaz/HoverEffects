import type { HoverEffect } from "../types";

const css = `.he-badge-star-turn{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-star-turn, .he-badge-star-turn *, .he-badge-star-turn *::before, .he-badge-star-turn *::after { box-sizing: border-box; }
.he-badge-star-turn h2, .he-badge-star-turn h3, .he-badge-star-turn p, .he-badge-star-turn figure, .he-badge-star-turn ol, .he-badge-star-turn ul { margin: 0; }
.he-badge-star-turn h2, .he-badge-star-turn h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-star-turn img, .he-badge-star-turn svg { display: block; max-width: 100%; }
.he-badge-star-turn a { color: inherit; }
.he-badge-star-turn :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-star-turn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 11px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg18-star {
  color: var(--accent);
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  transition: transform .3s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-star-turn:hover .bdg18-star { transform: rotate(18deg); }
}
.he-badge-star-turn:focus-within .bdg18-star { transform: rotate(18deg); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-star-turn, .he-badge-star-turn *, .he-badge-star-turn *::before, .he-badge-star-turn *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeStarTurn: HoverEffect = {
  id: "badge-star-turn",
  title: "Star Turn",
  category: "badges",
  description: "The decorative star rotates a small angle while the label stays anchored in place.",
  tags: ["badges","star","turn","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeStarTurn() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-star-turn"><svg className="bdg18-star" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.9l1.9 3.8 4.2.6-3 3 .7 4.2L8 11.5l-3.8 2 .7-4.2-3-3 4.2-.6z" fill="currentColor" /></svg>Featured</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-star-turn"><svg class="bdg18-star" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.9l1.9 3.8 4.2.6-3 3 .7 4.2L8 11.5l-3.8 2 .7-4.2-3-3 4.2-.6z" fill="currentColor"/></svg>Featured</span>`,
};
