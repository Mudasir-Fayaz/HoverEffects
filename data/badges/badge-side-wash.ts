import type { HoverEffect } from "../types";

const css = `.he-badge-side-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-side-wash, .he-badge-side-wash *, .he-badge-side-wash *::before, .he-badge-side-wash *::after { box-sizing: border-box; }
.he-badge-side-wash h2, .he-badge-side-wash h3, .he-badge-side-wash p, .he-badge-side-wash figure, .he-badge-side-wash ol, .he-badge-side-wash ul { margin: 0; }
.he-badge-side-wash h2, .he-badge-side-wash h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-side-wash img, .he-badge-side-wash svg { display: block; max-width: 100%; }
.he-badge-side-wash a { color: inherit; }
.he-badge-side-wash :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-side-wash {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 11px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
  overflow: hidden;
}
.bdg07-wash {
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  transform: translateX(-101%);
  transition: transform .32s var(--ease);
  pointer-events: none;
}
.bdg07-inner {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.bdg07-inner svg { color: var(--accent); }
@media (hover: hover) and (pointer: fine) {
  .he-badge-side-wash:hover .bdg07-wash { transform: translateX(0); }
}
.he-badge-side-wash:focus-visible .bdg07-wash { transform: translateX(0); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-side-wash, .he-badge-side-wash *, .he-badge-side-wash *::before, .he-badge-side-wash *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeSideWash: HoverEffect = {
  id: "badge-side-wash",
  title: "Side Wash",
  category: "badges",
  description: "An accent fill travels in from the leading edge across a destination badge, with icon and label fixed.",
  tags: ["badges","side","wash","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeSideWash() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-side-wash" href="https://example.com"><i className="bdg07-wash" aria-hidden="true"></i><span className="bdg07-inner"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> Releases</span></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-side-wash" href="https://example.com"><i class="bdg07-wash" aria-hidden="true"></i><span class="bdg07-inner"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Releases</span></a>`,
};
