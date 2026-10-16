import type { HoverEffect } from "../types";

const css = `.he-badge-contrast-shift{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-contrast-shift, .he-badge-contrast-shift *, .he-badge-contrast-shift *::before, .he-badge-contrast-shift *::after { box-sizing: border-box; }
.he-badge-contrast-shift h2, .he-badge-contrast-shift h3, .he-badge-contrast-shift p, .he-badge-contrast-shift figure, .he-badge-contrast-shift ol, .he-badge-contrast-shift ul { margin: 0; }
.he-badge-contrast-shift h2, .he-badge-contrast-shift h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-contrast-shift img, .he-badge-contrast-shift svg { display: block; max-width: 100%; }
.he-badge-contrast-shift a { color: inherit; }
.he-badge-contrast-shift :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-contrast-shift {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  transition-property: background-color, border-color, color;
  transition-duration: .26s, .26s, .22s;
  transition-delay: 0s, 0s, .06s;
  transition-timing-function: var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-contrast-shift:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
  }
}
.he-badge-contrast-shift:focus-within {
  background: var(--accent);
  border-color: var(--accent);
  color: #ffffff;
}


/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-contrast-shift, .he-badge-contrast-shift *, .he-badge-contrast-shift *::before, .he-badge-contrast-shift *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeContrastShift: HoverEffect = {
  id: "badge-contrast-shift",
  title: "Contrast Shift",
  category: "badges",
  description: "Surface and label crossfade to a contrasting accent pair, with the label flipping just after the surface.",
  tags: ["badges","contrast","shift","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeContrastShift() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-contrast-shift">Priority</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-contrast-shift">Priority</span>`,
};
