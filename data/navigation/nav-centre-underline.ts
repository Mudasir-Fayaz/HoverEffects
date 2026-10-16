import type { HoverEffect } from "../types";

const css = `.he-nav-centre-underline{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-centre-underline, .he-nav-centre-underline *, .he-nav-centre-underline *::before, .he-nav-centre-underline *::after { box-sizing: border-box; }
.he-nav-centre-underline h2, .he-nav-centre-underline h3, .he-nav-centre-underline p, .he-nav-centre-underline figure, .he-nav-centre-underline ol, .he-nav-centre-underline ul { margin: 0; }
.he-nav-centre-underline h2, .he-nav-centre-underline h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-centre-underline img, .he-nav-centre-underline svg { display: block; max-width: 100%; }
.he-nav-centre-underline a { color: inherit; }
.he-nav-centre-underline :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav01-list { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 4px; }
.nav01-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 9px 14px 12px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav01-link[aria-current="page"] { color: var(--text); }
.nav01-link[aria-current="page"]::after {
  content: "";
  position: absolute;
  left: 6px; right: 6px; bottom: 4px;
  height: 2px;
  border-radius: 2px;
  background: var(--line-strong);
}
.nav01-u {
  position: absolute;
  left: 6px; right: 6px; bottom: 4px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .25s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav01-link:hover { color: var(--text); }
  .nav01-link:hover .nav01-u { transform: scaleX(1); }
}
.nav01-link:focus-visible .nav01-u { transform: scaleX(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-centre-underline, .he-nav-centre-underline *, .he-nav-centre-underline *::before, .he-nav-centre-underline *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navCentreUnderline: HoverEffect = {
  id: "nav-centre-underline",
  title: "Centre Underline",
  category: "navigation",
  description: "An underline grows outward from the centre of the hovered link, with current-page styling kept separate.",
  tags: ["navigation","centre","underline","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavCentreUnderline() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-centre-underline" aria-label="Example section">
        <ul className="nav01-list">
          <li><a className="nav01-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a className="nav01-link" href="https://example.com">Guide<i className="nav01-u" aria-hidden="true"></i></a></li>
          <li><a className="nav01-link" href="https://example.com">Details<i className="nav01-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-centre-underline" aria-label="Example section">
        <ul class="nav01-list">
          <li><a class="nav01-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a class="nav01-link" href="https://example.com">Guide<i class="nav01-u" aria-hidden="true"></i></a></li>
          <li><a class="nav01-link" href="https://example.com">Details<i class="nav01-u" aria-hidden="true"></i></a></li>
        </ul>
      </nav>`,
};
