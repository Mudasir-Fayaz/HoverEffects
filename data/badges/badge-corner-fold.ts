import type { HoverEffect } from "../types";

const css = `.he-badge-corner-fold{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-corner-fold, .he-badge-corner-fold *, .he-badge-corner-fold *::before, .he-badge-corner-fold *::after { box-sizing: border-box; }
.he-badge-corner-fold h2, .he-badge-corner-fold h3, .he-badge-corner-fold p, .he-badge-corner-fold figure, .he-badge-corner-fold ol, .he-badge-corner-fold ul { margin: 0; }
.he-badge-corner-fold h2, .he-badge-corner-fold h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-corner-fold img, .he-badge-corner-fold svg { display: block; max-width: 100%; }
.he-badge-corner-fold a { color: inherit; }
.he-badge-corner-fold :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-corner-fold {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 14px 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  overflow: hidden;
}
.bdg25-fold {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 12px;
  height: 12px;
  pointer-events: none;
}
.bdg25-fold::before {
  content: "";
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--accent) 16%, var(--surface-2));
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  opacity: .5;
  transition: opacity .3s var(--ease);
}
.bdg25-fold::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(315deg, var(--surface-2) 0 46%, var(--surface) 54%);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transform-origin: 0 100%;
  transform: rotate(0deg);
  transition: transform .3s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-corner-fold:hover .bdg25-fold::after { transform: rotate(-8deg); }
  .he-badge-corner-fold:hover .bdg25-fold::before { opacity: 1; }
}
.he-badge-corner-fold:focus-within .bdg25-fold::after { transform: rotate(-8deg); }
.he-badge-corner-fold:focus-within .bdg25-fold::before { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-corner-fold, .he-badge-corner-fold *, .he-badge-corner-fold *::before, .he-badge-corner-fold *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeCornerFold: HoverEffect = {
  id: "badge-corner-fold",
  title: "Corner Fold",
  category: "badges",
  description: "A tiny decorative folded corner opens a few degrees to reveal its underside — no flips, no clipping.",
  tags: ["badges","corner","fold","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeCornerFold() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-corner-fold">Draft<i className="bdg25-fold" aria-hidden="true"></i></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-corner-fold">Draft<i class="bdg25-fold" aria-hidden="true"></i></span>`,
};
