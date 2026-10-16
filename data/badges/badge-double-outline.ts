import type { HoverEffect } from "../types";

const css = `.he-badge-double-outline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-double-outline, .he-badge-double-outline *, .he-badge-double-outline *::before, .he-badge-double-outline *::after { box-sizing: border-box; }
.he-badge-double-outline h2, .he-badge-double-outline h3, .he-badge-double-outline p, .he-badge-double-outline figure, .he-badge-double-outline ol, .he-badge-double-outline ul { margin: 0; }
.he-badge-double-outline h2, .he-badge-double-outline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-double-outline img, .he-badge-double-outline svg { display: block; max-width: 100%; }
.he-badge-double-outline a { color: inherit; }
.he-badge-double-outline :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-double-outline {
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
.he-badge-double-outline::after {
  content: "";
  position: absolute;
  inset: -6px;
  border: 1.5px dashed var(--accent-2);
  border-radius: inherit;
  opacity: 0;
  transform: scale(.95);
  transition: opacity .22s var(--ease), transform .28s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-double-outline:hover::after { opacity: 1; transform: scale(1); }
}
.he-badge-double-outline:focus-within::after { opacity: 1; transform: scale(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-double-outline, .he-badge-double-outline *, .he-badge-double-outline *::before, .he-badge-double-outline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeDoubleOutline: HoverEffect = {
  id: "badge-double-outline",
  title: "Double Outline",
  category: "badges",
  description: "A second dotted outline fades in around the badge, kept fully outside the pill so nothing is clipped.",
  tags: ["badges","double","outline","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeDoubleOutline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-double-outline"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="2.4" fill="currentColor" /><path d="M2.5 8a5.5 5.5 0 0 1 11 0 5.5 5.5 0 0 1-11 0z" stroke="currentColor" strokeWidth="1.3" /></svg> Synced</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-double-outline"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="2.4" fill="currentColor"/><path d="M2.5 8a5.5 5.5 0 0 1 11 0 5.5 5.5 0 0 1-11 0z" stroke="currentColor" stroke-width="1.3"/></svg> Synced</span>`,
};
