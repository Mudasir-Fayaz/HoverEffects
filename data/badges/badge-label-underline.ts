import type { HoverEffect } from "../types";

const css = `.he-badge-label-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-label-underline, .he-badge-label-underline *, .he-badge-label-underline *::before, .he-badge-label-underline *::after { box-sizing: border-box; }
.he-badge-label-underline h2, .he-badge-label-underline h3, .he-badge-label-underline p, .he-badge-label-underline figure, .he-badge-label-underline ol, .he-badge-label-underline ul { margin: 0; }
.he-badge-label-underline h2, .he-badge-label-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-label-underline img, .he-badge-label-underline svg { display: block; max-width: 100%; }
.he-badge-label-underline a { color: inherit; }
.he-badge-label-underline :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-label-underline {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 3px 2px 10px;
  color: var(--text);
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .01em;
}
.bdg04-u {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .28s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-label-underline:hover .bdg04-u { transform: scaleX(1); }
}
.he-badge-label-underline:focus-within .bdg04-u { transform: scaleX(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-label-underline, .he-badge-label-underline *, .he-badge-label-underline *::before, .he-badge-label-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeLabelUnderline: HoverEffect = {
  id: "badge-label-underline",
  title: "Label Underline",
  category: "badges",
  description: "A fine underline grows outward from the centre of the label, in space reserved beneath it.",
  tags: ["badges","label","underline","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeLabelUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-label-underline">Editor’s pick<i className="bdg04-u" aria-hidden="true"></i></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-label-underline">Editor’s pick<i class="bdg04-u" aria-hidden="true"></i></span>`,
};
