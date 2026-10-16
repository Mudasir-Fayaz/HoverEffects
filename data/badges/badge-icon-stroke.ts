import type { HoverEffect } from "../types";

const css = `.he-badge-icon-stroke{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-icon-stroke, .he-badge-icon-stroke *, .he-badge-icon-stroke *::before, .he-badge-icon-stroke *::after { box-sizing: border-box; }
.he-badge-icon-stroke h2, .he-badge-icon-stroke h3, .he-badge-icon-stroke p, .he-badge-icon-stroke figure, .he-badge-icon-stroke ol, .he-badge-icon-stroke ul { margin: 0; }
.he-badge-icon-stroke h2, .he-badge-icon-stroke h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-icon-stroke img, .he-badge-icon-stroke svg { display: block; max-width: 100%; }
.he-badge-icon-stroke a { color: inherit; }
.he-badge-icon-stroke :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-icon-stroke {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 11px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
}
.bdg16-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .5s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-badge-icon-stroke:hover .bdg16-draw { stroke-dashoffset: 0; }
}
.he-badge-icon-stroke:focus-visible .bdg16-draw { stroke-dashoffset: 0; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-icon-stroke, .he-badge-icon-stroke *, .he-badge-icon-stroke *::before, .he-badge-icon-stroke *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeIconStroke: HoverEffect = {
  id: "badge-icon-stroke",
  title: "Icon Stroke",
  category: "badges",
  description: "An accent path draws itself over the visible base icon while the document outline stays recognisable.",
  tags: ["badges","icon","stroke","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeIconStroke() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-icon-stroke" href="https://example.com"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 2.5h4.6l2.4 2.4v8.6H4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".55" /><path d="M9 2.5v2.6h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".55" /><path className="bdg16-draw" d="m6.1 9.3 1.5 1.5 2.9-3.5" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Verified docs</a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-icon-stroke" href="https://example.com"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 2.5h4.6l2.4 2.4v8.6H4.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity=".55"/><path d="M9 2.5v2.6h2.5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity=".55"/><path class="bdg16-draw" d="m6.1 9.3 1.5 1.5 2.9-3.5" pathLength="100" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>Verified docs</a>`,
};
