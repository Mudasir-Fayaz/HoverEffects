import type { HoverEffect } from "../types";

const css = `.he-badge-single-sheen{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-single-sheen, .he-badge-single-sheen *, .he-badge-single-sheen *::before, .he-badge-single-sheen *::after { box-sizing: border-box; }
.he-badge-single-sheen h2, .he-badge-single-sheen h3, .he-badge-single-sheen p, .he-badge-single-sheen figure, .he-badge-single-sheen ol, .he-badge-single-sheen ul { margin: 0; }
.he-badge-single-sheen h2, .he-badge-single-sheen h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-single-sheen img, .he-badge-single-sheen svg { display: block; max-width: 100%; }
.he-badge-single-sheen a { color: inherit; }
.he-badge-single-sheen :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-single-sheen {
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
  overflow: hidden;
}
.bdg12-sheen {
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: 0;
  width: 32%;
  background: linear-gradient(100deg, transparent, rgb(255 255 255 / .5), transparent);
  opacity: 0;
  transform: translateX(-200%) rotate(8deg);
  pointer-events: none;
}
.bdg12-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-single-sheen:hover .bdg12-sheen { animation: he-badge-single-sheen-bdg12-sheen .5s var(--ease) 1; }
}
.he-badge-single-sheen:focus-within .bdg12-sheen { animation: he-badge-single-sheen-bdg12-sheen .5s var(--ease) 1; }
@keyframes he-badge-single-sheen-bdg12-sheen {
  0%   { opacity: 0; transform: translateX(-200%) rotate(8deg); }
  15%  { opacity: .95; }
  100% { opacity: 0; transform: translateX(420%) rotate(8deg); }
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-single-sheen, .he-badge-single-sheen *, .he-badge-single-sheen *::before, .he-badge-single-sheen *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeSingleSheen: HoverEffect = {
  id: "badge-single-sheen",
  title: "Single Sheen",
  category: "badges",
  description: "A narrow light strip sweeps across the pill exactly once and disappears — no idle loop.",
  tags: ["badges","single","sheen","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeSingleSheen() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-single-sheen"><i className="bdg12-sheen" aria-hidden="true"></i><span className="bdg12-label">New arrival</span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-single-sheen"><i class="bdg12-sheen" aria-hidden="true"></i><span class="bdg12-label">New arrival</span></span>`,
};
