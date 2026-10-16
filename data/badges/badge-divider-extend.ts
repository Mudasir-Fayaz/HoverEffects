import type { HoverEffect } from "../types";

const css = `.he-badge-divider-extend{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-divider-extend, .he-badge-divider-extend *, .he-badge-divider-extend *::before, .he-badge-divider-extend *::after { box-sizing: border-box; }
.he-badge-divider-extend h2, .he-badge-divider-extend h3, .he-badge-divider-extend p, .he-badge-divider-extend figure, .he-badge-divider-extend ol, .he-badge-divider-extend ul { margin: 0; }
.he-badge-divider-extend h2, .he-badge-divider-extend h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-divider-extend img, .he-badge-divider-extend svg { display: block; max-width: 100%; }
.he-badge-divider-extend a { color: inherit; }
.he-badge-divider-extend :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-divider-extend {
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
.he-badge-divider-extend svg { color: var(--text-2); }
.bdg22-div {
  width: 1px;
  height: 12px;
  background: var(--accent);
  transform: scaleY(.45);
  transition: transform .24s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-divider-extend:hover .bdg22-div { transform: scaleY(1); }
}
.he-badge-divider-extend:focus-within .bdg22-div { transform: scaleY(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-divider-extend, .he-badge-divider-extend *, .he-badge-divider-extend *::before, .he-badge-divider-extend *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeDividerExtend: HoverEffect = {
  id: "badge-divider-extend",
  title: "Divider Extend",
  category: "badges",
  description: "The separator between a prefix and the main label lengthens within its preallocated slot.",
  tags: ["badges","divider","extend","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeDividerExtend() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <span className="he-badge-divider-extend"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" /><path d="M6 6h4M6 8.5h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg><i className="bdg22-div" aria-hidden="true"></i>Workspace</span>
    </>
  );
}`,
  html: `<style>${css}</style>
<span class="he-badge-divider-extend"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M6 6h4M6 8.5h2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg><i class="bdg22-div" aria-hidden="true"></i>Workspace</span>`,
};
