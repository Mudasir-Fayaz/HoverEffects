import type { HoverEffect } from "../types";

const css = `.he-nav-side-rail-2{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-side-rail-2, .he-nav-side-rail-2 *, .he-nav-side-rail-2 *::before, .he-nav-side-rail-2 *::after { box-sizing: border-box; }
.he-nav-side-rail-2 h2, .he-nav-side-rail-2 h3, .he-nav-side-rail-2 p, .he-nav-side-rail-2 figure, .he-nav-side-rail-2 ol, .he-nav-side-rail-2 ul { margin: 0; }
.he-nav-side-rail-2 h2, .he-nav-side-rail-2 h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-side-rail-2 img, .he-nav-side-rail-2 svg { display: block; max-width: 100%; }
.he-nav-side-rail-2 a { color: inherit; }
.he-nav-side-rail-2 :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav06-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav06-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 12px 10px 18px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav06-link[aria-current="page"] { color: var(--text); }
.nav06-link[aria-current="page"]::before {
  content: "";
  position: absolute;
  left: 6px; top: 8px; bottom: 8px;
  width: 2px;
  border-radius: 2px;
  background: var(--line-strong);
}
.nav06-rail {
  position: absolute;
  left: 6px; top: 8px; bottom: 8px;
  width: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform .24s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav06-link:hover { color: var(--text); }
  .nav06-link:hover .nav06-rail { transform: scaleY(1); }
}
.nav06-link:focus-visible .nav06-rail { transform: scaleY(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-side-rail-2, .he-nav-side-rail-2 *, .he-nav-side-rail-2 *::before, .he-nav-side-rail-2 *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navSideRail2: HoverEffect = {
  id: "nav-side-rail-2",
  title: "Side Rail",
  category: "navigation",
  description: "A narrow rail extends beside the hovered row without indenting the label.",
  tags: ["navigation","side","rail","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavSideRail() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-side-rail-2" aria-label="Example section">
        <ul className="nav06-list">
          <li><a className="nav06-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a className="nav06-link" href="https://example.com"><i className="nav06-rail" aria-hidden="true"></i>Guide</a></li>
          <li><a className="nav06-link" href="https://example.com"><i className="nav06-rail" aria-hidden="true"></i>Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-side-rail-2" aria-label="Example section">
        <ul class="nav06-list">
          <li><a class="nav06-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a class="nav06-link" href="https://example.com"><i class="nav06-rail" aria-hidden="true"></i>Guide</a></li>
          <li><a class="nav06-link" href="https://example.com"><i class="nav06-rail" aria-hidden="true"></i>Details</a></li>
        </ul>
      </nav>`,
};
