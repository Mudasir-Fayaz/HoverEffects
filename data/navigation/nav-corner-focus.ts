import type { HoverEffect } from "../types";

const css = `.he-nav-corner-focus{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-corner-focus, .he-nav-corner-focus *, .he-nav-corner-focus *::before, .he-nav-corner-focus *::after { box-sizing: border-box; }
.he-nav-corner-focus h2, .he-nav-corner-focus h3, .he-nav-corner-focus p, .he-nav-corner-focus figure, .he-nav-corner-focus ol, .he-nav-corner-focus ul { margin: 0; }
.he-nav-corner-focus h2, .he-nav-corner-focus h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-corner-focus img, .he-nav-corner-focus svg { display: block; max-width: 100%; }
.he-nav-corner-focus a { color: inherit; }
.he-nav-corner-focus :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav09-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 3px; width: min(240px, 100%); }
.nav09-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav09-link[aria-current="page"] { color: var(--text); }
.nav09-c {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 0 solid var(--accent);
  opacity: 0;
  transform: scale(.6);
  transition: opacity .18s var(--ease), transform .22s var(--ease);
  pointer-events: none;
}
.nav09-tl { top: 2px; left: 2px; border-top-width: 1.5px; border-left-width: 1.5px; transform-origin: top left; }
.nav09-tr { top: 2px; right: 2px; border-top-width: 1.5px; border-right-width: 1.5px; transform-origin: top right; }
.nav09-bl { bottom: 2px; left: 2px; border-bottom-width: 1.5px; border-left-width: 1.5px; transform-origin: bottom left; }
.nav09-br { bottom: 2px; right: 2px; border-bottom-width: 1.5px; border-right-width: 1.5px; transform-origin: bottom right; }
@media (hover: hover) and (pointer: fine) {
  .nav09-link:hover .nav09-c { opacity: 1; transform: scale(1.4); }
}
.nav09-link:focus-visible .nav09-c { opacity: 1; transform: scale(1.4); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-corner-focus, .he-nav-corner-focus *, .he-nav-corner-focus *::before, .he-nav-corner-focus *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navCornerFocus: HoverEffect = {
  id: "nav-corner-focus",
  title: "Corner Focus",
  category: "navigation",
  description: "Four corner marks extend slightly to frame the label, with keyboard focus independently visible.",
  tags: ["navigation","corner","focus","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavCornerFocus() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-corner-focus" aria-label="Example section">
        <ul className="nav09-list">
          <li><a className="nav09-link" href="https://example.com" aria-current="page">Overview<i className="nav09-c nav09-tl" aria-hidden="true"></i><i className="nav09-c nav09-tr" aria-hidden="true"></i><i className="nav09-c nav09-bl" aria-hidden="true"></i><i className="nav09-c nav09-br" aria-hidden="true"></i></a></li>
          <li><a className="nav09-link" href="https://example.com">Guide<i className="nav09-c nav09-tl" aria-hidden="true"></i><i className="nav09-c nav09-tr" aria-hidden="true"></i><i className="nav09-c nav09-bl" aria-hidden="true"></i><i className="nav09-c nav09-br" aria-hidden="true"></i></a></li>
          <li><a className="nav09-link" href="https://example.com">Details<i className="nav09-c nav09-tl" aria-hidden="true"></i><i className="nav09-c nav09-tr" aria-hidden="true"></i><i className="nav09-c nav09-bl" aria-hidden="true"></i><i className="nav09-c nav09-br" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-corner-focus" aria-label="Example section">
        <ul class="nav09-list">
          <li><a class="nav09-link" href="https://example.com" aria-current="page">Overview<i class="nav09-c nav09-tl" aria-hidden="true"></i><i class="nav09-c nav09-tr" aria-hidden="true"></i><i class="nav09-c nav09-bl" aria-hidden="true"></i><i class="nav09-c nav09-br" aria-hidden="true"></i></a></li>
          <li><a class="nav09-link" href="https://example.com">Guide<i class="nav09-c nav09-tl" aria-hidden="true"></i><i class="nav09-c nav09-tr" aria-hidden="true"></i><i class="nav09-c nav09-bl" aria-hidden="true"></i><i class="nav09-c nav09-br" aria-hidden="true"></i></a></li>
          <li><a class="nav09-link" href="https://example.com">Details<i class="nav09-c nav09-tl" aria-hidden="true"></i><i class="nav09-c nav09-tr" aria-hidden="true"></i><i class="nav09-c nav09-bl" aria-hidden="true"></i><i class="nav09-c nav09-br" aria-hidden="true"></i></a></li>
        </ul>
      </nav>`,
};
