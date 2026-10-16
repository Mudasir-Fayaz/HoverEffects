import type { HoverEffect } from "../types";

const css = `.he-badge-top-rail{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-top-rail, .he-badge-top-rail *, .he-badge-top-rail *::before, .he-badge-top-rail *::after { box-sizing: border-box; }
.he-badge-top-rail h2, .he-badge-top-rail h3, .he-badge-top-rail p, .he-badge-top-rail figure, .he-badge-top-rail ol, .he-badge-top-rail ul { margin: 0; }
.he-badge-top-rail h2, .he-badge-top-rail h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-top-rail img, .he-badge-top-rail svg { display: block; max-width: 100%; }
.he-badge-top-rail a { color: inherit; }
.he-badge-top-rail :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-top-rail {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg05-rail {
  position: absolute;
  top: 0;
  left: 9px;
  right: 9px;
  height: 2px;
  border-radius: 0 0 2px 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .26s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-top-rail:hover .bdg05-rail { transform: scaleX(1); }
}
.he-badge-top-rail:focus-within .bdg05-rail { transform: scaleX(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-top-rail, .he-badge-top-rail *, .he-badge-top-rail *::before, .he-badge-top-rail *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeTopRail: HoverEffect = {
  id: "badge-top-rail",
  title: "Top Rail",
  category: "badges",
  description: "A reserved upper accent rail grows from left to right above the rectangular label.",
  tags: ["badges","top","rail","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeTopRail() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-top-rail"><i className="bdg05-rail" aria-hidden="true"></i>Category</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-top-rail"><i class="bdg05-rail" aria-hidden="true"></i>Category</span>`,
};
