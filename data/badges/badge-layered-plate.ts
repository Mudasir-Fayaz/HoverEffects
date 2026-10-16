import type { HoverEffect } from "../types";

const css = `.he-badge-layered-plate{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-layered-plate, .he-badge-layered-plate *, .he-badge-layered-plate *::before, .he-badge-layered-plate *::after { box-sizing: border-box; }
.he-badge-layered-plate h2, .he-badge-layered-plate h3, .he-badge-layered-plate p, .he-badge-layered-plate figure, .he-badge-layered-plate ol, .he-badge-layered-plate ul { margin: 0; }
.he-badge-layered-plate h2, .he-badge-layered-plate h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-layered-plate img, .he-badge-layered-plate svg { display: block; max-width: 100%; }
.he-badge-layered-plate a { color: inherit; }
.he-badge-layered-plate :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-layered-plate {
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
.bdg29-plate {
  position: absolute;
  inset: 0;
  border: 1px solid var(--line-strong);
  border-radius: inherit;
  background: var(--surface-2);
  transform: translate(0, 0);
  transition: transform .22s var(--ease);
  pointer-events: none;
}
.bdg29-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-layered-plate:hover .bdg29-plate { transform: translate(-3px, -3px); }
}
.he-badge-layered-plate:focus-within .bdg29-plate { transform: translate(-3px, -3px); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-layered-plate, .he-badge-layered-plate *, .he-badge-layered-plate *::before, .he-badge-layered-plate *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeLayeredPlate: HoverEffect = {
  id: "badge-layered-plate",
  title: "Layered Plate",
  category: "badges",
  description: "The rear plate shifts two to three pixels to reveal a second edge, with clearance around the badge.",
  tags: ["badges","layered","plate","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeLayeredPlate() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-layered-plate"><i className="bdg29-plate" aria-hidden="true"></i><span className="bdg29-label">Pinned</span></span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-layered-plate"><i class="bdg29-plate" aria-hidden="true"></i><span class="bdg29-label">Pinned</span></span>`,
};
