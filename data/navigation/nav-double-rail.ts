import type { HoverEffect } from "../types";

const css = `.he-nav-double-rail{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-double-rail, .he-nav-double-rail *, .he-nav-double-rail *::before, .he-nav-double-rail *::after { box-sizing: border-box; }
.he-nav-double-rail h2, .he-nav-double-rail h3, .he-nav-double-rail p, .he-nav-double-rail figure, .he-nav-double-rail ol, .he-nav-double-rail ul { margin: 0; }
.he-nav-double-rail h2, .he-nav-double-rail h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-double-rail img, .he-nav-double-rail svg { display: block; max-width: 100%; }
.he-nav-double-rail a { color: inherit; }
.he-nav-double-rail :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav04-list { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }
.nav04-link {
  position: relative;
  display: inline-flex;
  padding: 12px 14px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav04-link[aria-current="page"] { color: var(--text); }
.nav04-link[aria-current="page"]::before {
  content: "";
  position: absolute;
  left: 6px; right: 6px; bottom: 4px;
  height: 2px;
  border-radius: 2px;
  background: var(--line-strong);
}
.nav04-rail {
  position: absolute;
  left: 8px; right: 8px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform .24s var(--ease);
}
.nav04-top { top: 3px; transform-origin: left center; }
.nav04-bot { bottom: 3px; transform-origin: right center; }
@media (hover: hover) and (pointer: fine) {
  .nav04-link:hover { color: var(--text); }
  .nav04-link:hover .nav04-rail { transform: scaleX(1); }
}
.nav04-link:focus-visible .nav04-rail { transform: scaleX(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-double-rail, .he-nav-double-rail *, .he-nav-double-rail *::before, .he-nav-double-rail *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navDoubleRail: HoverEffect = {
  id: "nav-double-rail",
  title: "Double Rail",
  category: "navigation",
  description: "Two thin rails appear above and below the hovered label, in reserved space.",
  tags: ["navigation","double","rail","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavDoubleRail() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-double-rail" aria-label="Example section">
        <ul className="nav04-list">
          <li><a className="nav04-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a className="nav04-link" href="https://example.com">Guide<i className="nav04-rail nav04-top" aria-hidden="true"></i><i className="nav04-rail nav04-bot" aria-hidden="true"></i></a></li>
          <li><a className="nav04-link" href="https://example.com">Details<i className="nav04-rail nav04-top" aria-hidden="true"></i><i className="nav04-rail nav04-bot" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-double-rail" aria-label="Example section">
        <ul class="nav04-list">
          <li><a class="nav04-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a class="nav04-link" href="https://example.com">Guide<i class="nav04-rail nav04-top" aria-hidden="true"></i><i class="nav04-rail nav04-bot" aria-hidden="true"></i></a></li>
          <li><a class="nav04-link" href="https://example.com">Details<i class="nav04-rail nav04-top" aria-hidden="true"></i><i class="nav04-rail nav04-bot" aria-hidden="true"></i></a></li>
        </ul>
      </nav>`,
};
