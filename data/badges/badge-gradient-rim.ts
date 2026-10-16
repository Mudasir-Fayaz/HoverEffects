import type { HoverEffect } from "../types";

const css = `.he-badge-gradient-rim{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-gradient-rim, .he-badge-gradient-rim *, .he-badge-gradient-rim *::before, .he-badge-gradient-rim *::after { box-sizing: border-box; }
.he-badge-gradient-rim h2, .he-badge-gradient-rim h3, .he-badge-gradient-rim p, .he-badge-gradient-rim figure, .he-badge-gradient-rim ol, .he-badge-gradient-rim ul { margin: 0; }
.he-badge-gradient-rim h2, .he-badge-gradient-rim h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-gradient-rim img, .he-badge-gradient-rim svg { display: block; max-width: 100%; }
.he-badge-gradient-rim a { color: inherit; }
.he-badge-gradient-rim :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-gradient-rim {
  position: relative;
  display: inline-flex;
  padding: 1px;
  border-radius: var(--radius-pill);
  background: var(--line-strong);
}
.bdg11-rim {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, var(--accent-2), var(--accent));
  opacity: 0;
  transition: opacity .3s var(--ease);
  pointer-events: none;
}
.bdg11-inner {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 11px;
  border-radius: inherit;
  background: var(--surface);
  font-size: .75rem;
  font-weight: 650;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-gradient-rim:hover .bdg11-rim { opacity: 1; }
}
.he-badge-gradient-rim:focus-within .bdg11-rim { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-gradient-rim, .he-badge-gradient-rim *, .he-badge-gradient-rim *::before, .he-badge-gradient-rim *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeGradientRim: HoverEffect = {
  id: "badge-gradient-rim",
  title: "Gradient Rim",
  category: "badges",
  description: "A colourful perimeter fades in around the solid interior without tinting the label.",
  tags: ["badges","gradient","rim","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeGradientRim() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-gradient-rim"><i className="bdg11-rim" aria-hidden="true"></i><span className="bdg11-inner">Beta program</span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-gradient-rim"><i class="bdg11-rim" aria-hidden="true"></i><span class="bdg11-inner">Beta program</span></span>`,
};
