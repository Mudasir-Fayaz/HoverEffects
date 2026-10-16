import type { HoverEffect } from "../types";

const css = `.he-badge-ribbon-tab{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-ribbon-tab, .he-badge-ribbon-tab *, .he-badge-ribbon-tab *::before, .he-badge-ribbon-tab *::after { box-sizing: border-box; }
.he-badge-ribbon-tab h2, .he-badge-ribbon-tab h3, .he-badge-ribbon-tab p, .he-badge-ribbon-tab figure, .he-badge-ribbon-tab ol, .he-badge-ribbon-tab ul { margin: 0; }
.he-badge-ribbon-tab h2, .he-badge-ribbon-tab h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-ribbon-tab img, .he-badge-ribbon-tab svg { display: block; max-width: 100%; }
.he-badge-ribbon-tab a { color: inherit; }
.he-badge-ribbon-tab :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-ribbon-tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px 0 16px;
  border: 1px solid var(--line-strong);
  border-radius: 7px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
}
.bdg27-ribbon {
  position: absolute;
  left: 6px;
  top: 6px;
  bottom: 6px;
  width: 3px;
  border-radius: 2px;
  background: var(--accent-soft);
  border: 1px solid var(--accent-2);
  transform: translateX(0);
  transition: transform .24s var(--ease), background-color .24s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-ribbon-tab:hover .bdg27-ribbon { transform: translateX(2px); background: var(--accent); }
}
.he-badge-ribbon-tab:focus-within .bdg27-ribbon { transform: translateX(2px); background: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-ribbon-tab, .he-badge-ribbon-tab *, .he-badge-ribbon-tab *::before, .he-badge-ribbon-tab *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeRibbonTab: HoverEffect = {
  id: "badge-ribbon-tab",
  title: "Ribbon Tab",
  category: "badges",
  description: "A short inset ribbon stripe slides a few pixels inside its reserved region.",
  tags: ["badges","ribbon","tab","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeRibbonTab() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-ribbon-tab"><i className="bdg27-ribbon" aria-hidden="true"></i>Changelog</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-ribbon-tab"><i class="bdg27-ribbon" aria-hidden="true"></i>Changelog</span>`,
};
