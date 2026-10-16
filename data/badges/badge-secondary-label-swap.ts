import type { HoverEffect } from "../types";

const css = `.he-badge-secondary-label-swap{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-secondary-label-swap, .he-badge-secondary-label-swap *, .he-badge-secondary-label-swap *::before, .he-badge-secondary-label-swap *::after { box-sizing: border-box; }
.he-badge-secondary-label-swap h2, .he-badge-secondary-label-swap h3, .he-badge-secondary-label-swap p, .he-badge-secondary-label-swap figure, .he-badge-secondary-label-swap ol, .he-badge-secondary-label-swap ul { margin: 0; }
.he-badge-secondary-label-swap h2, .he-badge-secondary-label-swap h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-secondary-label-swap img, .he-badge-secondary-label-swap svg { display: block; max-width: 100%; }
.he-badge-secondary-label-swap a { color: inherit; }
.he-badge-secondary-label-swap :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-secondary-label-swap {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg24-primary { color: var(--text); }
.bdg24-viewport {
  position: relative;
  width: 64px;
  height: 1.15em;
  overflow: hidden;
  color: var(--text-2);
  font-size: .68rem;
  font-weight: 650;
}
.bdg24-cap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  transition: transform .3s var(--ease), opacity .3s var(--ease);
}
.bdg24-a { transform: translateY(0); opacity: 1; }
.bdg24-b { transform: translateY(100%); opacity: 0; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-secondary-label-swap:hover .bdg24-a { transform: translateY(-100%); opacity: 0; }
  .he-badge-secondary-label-swap:hover .bdg24-b { transform: translateY(0); opacity: 1; }
}
.he-badge-secondary-label-swap:focus-within .bdg24-a { transform: translateY(-100%); opacity: 0; }
.he-badge-secondary-label-swap:focus-within .bdg24-b { transform: translateY(0); opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-secondary-label-swap, .he-badge-secondary-label-swap *, .he-badge-secondary-label-swap *::before, .he-badge-secondary-label-swap *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeSecondaryLabelSwap: HoverEffect = {
  id: "badge-secondary-label-swap",
  title: "Secondary Label Swap",
  category: "badges",
  description: "Two synonymous captions slide past each other in a fixed viewport; the primary name never changes.",
  tags: ["badges","secondary","label","swap","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeSecondaryLabelSwap() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-secondary-label-swap"><span className="bdg24-primary">Delivery</span><span className="bdg24-viewport" aria-hidden="true"><span className="bdg24-cap bdg24-a">2–3 days</span><span className="bdg24-cap bdg24-b">Tracked</span></span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-secondary-label-swap"><span class="bdg24-primary">Delivery</span><span class="bdg24-viewport" aria-hidden="true"><span class="bdg24-cap bdg24-a">2–3 days</span><span class="bdg24-cap bdg24-b">Tracked</span></span></span>`,
};
