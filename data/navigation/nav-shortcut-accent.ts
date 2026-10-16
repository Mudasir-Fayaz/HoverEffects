import type { HoverEffect } from "../types";

const css = `.he-nav-shortcut-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-shortcut-accent, .he-nav-shortcut-accent *, .he-nav-shortcut-accent *::before, .he-nav-shortcut-accent *::after { box-sizing: border-box; }
.he-nav-shortcut-accent h2, .he-nav-shortcut-accent h3, .he-nav-shortcut-accent p, .he-nav-shortcut-accent figure, .he-nav-shortcut-accent ol, .he-nav-shortcut-accent ul { margin: 0; }
.he-nav-shortcut-accent h2, .he-nav-shortcut-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-shortcut-accent img, .he-nav-shortcut-accent svg { display: block; max-width: 100%; }
.he-nav-shortcut-accent a { color: inherit; }
.he-nav-shortcut-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav17-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav17-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav17-link[aria-current="page"] { color: var(--text); }
.nav17-key {
  min-width: 26px;
  padding: 2px 6px;
  border: 1px solid var(--line);
  border-bottom-width: 2px;
  border-radius: 5px;
  background: var(--surface-2);
  color: var(--text-2);
  font: inherit;
  font-size: .68rem;
  font-weight: 700;
  text-align: center;
  transition: background-color .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav17-link:hover .nav17-key {
    background: var(--accent-soft);
    border-color: var(--accent-2);
    color: var(--accent);
  }
}
.nav17-link:focus-visible .nav17-key {
  background: var(--accent-soft);
  border-color: var(--accent-2);
  color: var(--accent);
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-shortcut-accent, .he-nav-shortcut-accent *, .he-nav-shortcut-accent *::before, .he-nav-shortcut-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navShortcutAccent: HoverEffect = {
  id: "nav-shortcut-accent",
  title: "Shortcut Accent",
  category: "navigation",
  description: "A trailing shortcut keycap strengthens its background and outline; the shortcut text stays put.",
  tags: ["navigation","shortcut","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavShortcutAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-shortcut-accent" aria-label="Example section">
        <ul className="nav17-list">
          <li><a className="nav17-link" href="https://example.com" aria-current="page">Command menu<kbd className="nav17-key">⌘K</kbd></a></li>
          <li><a className="nav17-link" href="https://example.com">Search<kbd className="nav17-key">/</kbd></a></li>
          <li><a className="nav17-link" href="https://example.com">New note<kbd className="nav17-key">N</kbd></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-shortcut-accent" aria-label="Example section">
        <ul class="nav17-list">
          <li><a class="nav17-link" href="https://example.com" aria-current="page">Command menu<kbd class="nav17-key">⌘K</kbd></a></li>
          <li><a class="nav17-link" href="https://example.com">Search<kbd class="nav17-key">/</kbd></a></li>
          <li><a class="nav17-link" href="https://example.com">New note<kbd class="nav17-key">N</kbd></a></li>
        </ul>
      </nav>`,
};
