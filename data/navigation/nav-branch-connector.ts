import type { HoverEffect } from "../types";

const css = `.he-nav-branch-connector{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-branch-connector, .he-nav-branch-connector *, .he-nav-branch-connector *::before, .he-nav-branch-connector *::after { box-sizing: border-box; }
.he-nav-branch-connector h2, .he-nav-branch-connector h3, .he-nav-branch-connector p, .he-nav-branch-connector figure, .he-nav-branch-connector ol, .he-nav-branch-connector ul { margin: 0; }
.he-nav-branch-connector h2, .he-nav-branch-connector h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-branch-connector img, .he-nav-branch-connector svg { display: block; max-width: 100%; }
.he-nav-branch-connector a { color: inherit; }
.he-nav-branch-connector :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav29-list, .nav29-sub { list-style: none; margin: 0; padding: 0; width: min(260px, 100%); }
.nav29-link {
  display: block;
  padding: 9px 12px;
  color: var(--text-2);
  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav29-list > .nav29-item > .nav29-link[aria-current="page"] { color: var(--text); }
.nav29-sub { margin-left: 16px; }
.nav29-sub .nav29-item {
  position: relative;
  padding-left: 14px;
}
.nav29-sub .nav29-item::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 0;
  width: 11px;
  height: 50%;
  border-left: 1.5px solid var(--line-strong);
  border-bottom: 1.5px solid var(--line-strong);
  border-bottom-left-radius: 7px;
  transition: border-color .22s var(--ease);
}
.nav29-sub .nav29-item::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 50%;
  bottom: 0;
  width: 1.5px;
  background: var(--line-strong);
  transition: background-color .22s var(--ease);
}
.nav29-sub .nav29-item:last-child::after { display: none; }
@media (hover: hover) and (pointer: fine) {
  .nav29-sub .nav29-item:hover::before { border-color: var(--accent); }
  .nav29-sub .nav29-item:hover::after { background: var(--accent); }
  .nav29-sub .nav29-item:hover .nav29-link { color: var(--text); }
}
.nav29-sub .nav29-item:focus-within::before { border-color: var(--accent); }
.nav29-sub .nav29-item:focus-within::after { background: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-branch-connector, .he-nav-branch-connector *, .he-nav-branch-connector *::before, .he-nav-branch-connector *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navBranchConnector: HoverEffect = {
  id: "nav-branch-connector",
  title: "Branch Connector",
  category: "navigation",
  description: "The hovered nested item’s connector path gains the accent colour, with no layout changes.",
  tags: ["navigation","branch","connector","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavBranchConnector() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-branch-connector" aria-label="Tree example">
        <ul className="nav29-list">
          <li className="nav29-item"><a className="nav29-link" href="https://example.com" aria-current="page">Components</a>
            <ul className="nav29-sub">
              <li className="nav29-item"><a className="nav29-link" href="https://example.com">Buttons</a></li>
              <li className="nav29-item"><a className="nav29-link" href="https://example.com">Dialogs</a></li>
              <li className="nav29-item"><a className="nav29-link" href="https://example.com">Tokens</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-branch-connector" aria-label="Tree example">
        <ul class="nav29-list">
          <li class="nav29-item"><a class="nav29-link" href="https://example.com" aria-current="page">Components</a>
            <ul class="nav29-sub">
              <li class="nav29-item"><a class="nav29-link" href="https://example.com">Buttons</a></li>
              <li class="nav29-item"><a class="nav29-link" href="https://example.com">Dialogs</a></li>
              <li class="nav29-item"><a class="nav29-link" href="https://example.com">Tokens</a></li>
            </ul>
          </li>
        </ul>
      </nav>`,
};
