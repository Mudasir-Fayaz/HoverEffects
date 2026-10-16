import type { HoverEffect } from "../types";

const css = `.he-nav-trailing-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-trailing-underline, .he-nav-trailing-underline *, .he-nav-trailing-underline *::before, .he-nav-trailing-underline *::after { box-sizing: border-box; }
.he-nav-trailing-underline h2, .he-nav-trailing-underline h3, .he-nav-trailing-underline p, .he-nav-trailing-underline figure, .he-nav-trailing-underline ol, .he-nav-trailing-underline ul { margin: 0; }
.he-nav-trailing-underline h2, .he-nav-trailing-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-trailing-underline img, .he-nav-trailing-underline svg { display: block; max-width: 100%; }
.he-nav-trailing-underline a { color: inherit; }
.he-nav-trailing-underline :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav03-list { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 4px; }
.nav03-link {
  position: relative;
  display: inline-flex;
  padding: 9px 14px 12px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav03-link[aria-current="page"] { color: var(--text); }
.nav03-u {
  position: absolute;
  left: 6px; right: 6px; bottom: 4px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform .25s var(--ease);
}
:dir(rtl) .nav03-u { transform-origin: left center; }
@media (hover: hover) and (pointer: fine) {
  .nav03-link:hover { color: var(--text); }
  .nav03-link:hover .nav03-u { transform: scaleX(1); }
}
.nav03-link:focus-visible .nav03-u { transform: scaleX(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-trailing-underline, .he-nav-trailing-underline *, .he-nav-trailing-underline *::before, .he-nav-trailing-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navTrailingUnderline: HoverEffect = {
  id: "nav-trailing-underline",
  title: "Trailing Underline",
  category: "navigation",
  description: "The underline grows from the trailing edge while the label and hit area stay exactly where they were.",
  tags: ["navigation","trailing","underline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavTrailingUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-trailing-underline" aria-label="Example section">
        <ul className="nav03-list">
          <li><a className="nav03-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a className="nav03-link" href="https://example.com">Guide<i className="nav03-u" aria-hidden="true"></i></a></li>
          <li><a className="nav03-link" href="https://example.com">Details<i className="nav03-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-trailing-underline" aria-label="Example section">
        <ul class="nav03-list">
          <li><a class="nav03-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a class="nav03-link" href="https://example.com">Guide<i class="nav03-u" aria-hidden="true"></i></a></li>
          <li><a class="nav03-link" href="https://example.com">Details<i class="nav03-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>`,
};
