import type { HoverEffect } from "../types";

const css = `.he-nav-dot-indicator{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-dot-indicator, .he-nav-dot-indicator *, .he-nav-dot-indicator *::before, .he-nav-dot-indicator *::after { box-sizing: border-box; }
.he-nav-dot-indicator h2, .he-nav-dot-indicator h3, .he-nav-dot-indicator p, .he-nav-dot-indicator figure, .he-nav-dot-indicator ol, .he-nav-dot-indicator ul { margin: 0; }
.he-nav-dot-indicator h2, .he-nav-dot-indicator h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-dot-indicator img, .he-nav-dot-indicator svg { display: block; max-width: 100%; }
.he-nav-dot-indicator a { color: inherit; }
.he-nav-dot-indicator :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav10-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav10-link {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav10-link[aria-current="page"] { color: var(--text); font-weight: 700; }
.nav10-slot {
  display: grid;
  place-items: center;
  width: 10px;
  height: 10px;
}
.nav10-link[aria-current="page"] .nav10-slot::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--accent);
}
.nav10-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-2);
  opacity: 0;
  transform: scale(.5);
  transition: opacity .2s var(--ease), transform .22s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav10-link:hover .nav10-dot { opacity: 1; transform: scale(1); }
}
.nav10-link:focus-visible .nav10-dot { opacity: 1; transform: scale(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-dot-indicator, .he-nav-dot-indicator *, .he-nav-dot-indicator *::before, .he-nav-dot-indicator *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navDotIndicator: HoverEffect = {
  id: "nav-dot-indicator",
  title: "Dot Indicator",
  category: "navigation",
  description: "An accent dot fades into a reserved leading slot — hover never implies the current page.",
  tags: ["navigation","dot","indicator","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavDotIndicator() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-dot-indicator" aria-label="Example section">
        <ul className="nav10-list">
          <li><a className="nav10-link" href="https://example.com" aria-current="page"><i className="nav10-slot" aria-hidden="true"><i className="nav10-dot"></i></i>Overview</a></li>
          <li><a className="nav10-link" href="https://example.com"><i className="nav10-slot" aria-hidden="true"><i className="nav10-dot"></i></i>Guide</a></li>
          <li><a className="nav10-link" href="https://example.com"><i className="nav10-slot" aria-hidden="true"><i className="nav10-dot"></i></i>Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-dot-indicator" aria-label="Example section">
        <ul class="nav10-list">
          <li><a class="nav10-link" href="https://example.com" aria-current="page"><i class="nav10-slot" aria-hidden="true"><i class="nav10-dot"></i></i>Overview</a></li>
          <li><a class="nav10-link" href="https://example.com"><i class="nav10-slot" aria-hidden="true"><i class="nav10-dot"></i></i>Guide</a></li>
          <li><a class="nav10-link" href="https://example.com"><i class="nav10-slot" aria-hidden="true"><i class="nav10-dot"></i></i>Details</a></li>
        </ul>
      </nav>`,
};
