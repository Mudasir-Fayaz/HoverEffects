import type { HoverEffect } from "../types";

const css = `.he-nav-group-separator-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-group-separator-accent, .he-nav-group-separator-accent *, .he-nav-group-separator-accent *::before, .he-nav-group-separator-accent *::after { box-sizing: border-box; }
.he-nav-group-separator-accent h2, .he-nav-group-separator-accent h3, .he-nav-group-separator-accent p, .he-nav-group-separator-accent figure, .he-nav-group-separator-accent ol, .he-nav-group-separator-accent ul { margin: 0; }
.he-nav-group-separator-accent h2, .he-nav-group-separator-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-group-separator-accent img, .he-nav-group-separator-accent svg { display: block; max-width: 100%; }
.he-nav-group-separator-accent a { color: inherit; }
.he-nav-group-separator-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-nav-group-separator-accent { width: min(260px, 100%); }
.nav28-group + .nav28-group { margin-top: 14px; }
.nav28-head {
  margin: 0 0 2px;
  padding: 0 12px;
  color: var(--text-2);
  font-size: .68rem;
  font-weight: 750;
  letter-spacing: .09em;
  text-transform: uppercase;
}
.nav28-sep {
  display: block;
  height: 1.5px;
  margin: 0 12px 6px;
  border-radius: 2px;
  background: var(--line-strong);
  transform: scaleX(1);
  transform-origin: left center;
  transition: background-color .24s var(--ease);
}
.nav28-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1px; }
.nav28-link {
  display: block;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav28-link[aria-current="page"] { color: var(--text); }
@media (hover: hover) and (pointer: fine) {
  .nav28-group:hover .nav28-sep { background: var(--accent); }
}
.nav28-group:focus-within .nav28-sep { background: var(--accent); }
.nav28-link:hover { color: var(--text); }
.nav28-link:focus-visible { color: var(--text); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-group-separator-accent, .he-nav-group-separator-accent *, .he-nav-group-separator-accent *::before, .he-nav-group-separator-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navGroupSeparatorAccent: HoverEffect = {
  id: "nav-group-separator-accent",
  title: "Group Separator Accent",
  category: "navigation",
  description: "Hovering any link in a group highlights the group’s separator rule; links keep individual focus cues.",
  tags: ["navigation","group","separator","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavGroupSeparatorAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-group-separator-accent" aria-label="Grouped example">
        <div className="nav28-group">
          <p className="nav28-head" id="nav-group-separator-accent-nav28-h1">Workspace</p>
          <i className="nav28-sep" aria-hidden="true"></i>
          <ul className="nav28-list" aria-labelledby="nav-group-separator-accent-nav28-h1">
            <li><a className="nav28-link" href="https://example.com" aria-current="page">Overview</a></li>
            <li><a className="nav28-link" href="https://example.com">Activity</a></li>
          </ul>
        </div>
        <div className="nav28-group">
          <p className="nav28-head" id="nav-group-separator-accent-nav28-h2">Account</p>
          <i className="nav28-sep" aria-hidden="true"></i>
          <ul className="nav28-list" aria-labelledby="nav-group-separator-accent-nav28-h2">
            <li><a className="nav28-link" href="https://example.com">Billing</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-group-separator-accent" aria-label="Grouped example">
        <div class="nav28-group">
          <p class="nav28-head" id="nav-group-separator-accent-nav28-h1">Workspace</p>
          <i class="nav28-sep" aria-hidden="true"></i>
          <ul class="nav28-list" aria-labelledby="nav-group-separator-accent-nav28-h1">
            <li><a class="nav28-link" href="https://example.com" aria-current="page">Overview</a></li>
            <li><a class="nav28-link" href="https://example.com">Activity</a></li>
          </ul>
        </div>
        <div class="nav28-group">
          <p class="nav28-head" id="nav-group-separator-accent-nav28-h2">Account</p>
          <i class="nav28-sep" aria-hidden="true"></i>
          <ul class="nav28-list" aria-labelledby="nav-group-separator-accent-nav28-h2">
            <li><a class="nav28-link" href="https://example.com">Billing</a></li>
          </ul>
        </div>
      </nav>`,
};
