import type { HoverEffect } from "../types";

const css = `.he-nav-breadcrumb-separator{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-breadcrumb-separator, .he-nav-breadcrumb-separator *, .he-nav-breadcrumb-separator *::before, .he-nav-breadcrumb-separator *::after { box-sizing: border-box; }
.he-nav-breadcrumb-separator h2, .he-nav-breadcrumb-separator h3, .he-nav-breadcrumb-separator p, .he-nav-breadcrumb-separator figure, .he-nav-breadcrumb-separator ol, .he-nav-breadcrumb-separator ul { margin: 0; }
.he-nav-breadcrumb-separator h2, .he-nav-breadcrumb-separator h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-breadcrumb-separator img, .he-nav-breadcrumb-separator svg { display: block; max-width: 100%; }
.he-nav-breadcrumb-separator a { color: inherit; }
.he-nav-breadcrumb-separator :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav30-list { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 2px; }
.nav30-link {
  display: inline-block;
  padding: 7px 6px;
  border-radius: 6px;
  color: var(--text-2);
  font-size: .85rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav30-link[aria-current="page"] { color: var(--text); }
.nav30-sep {
  color: var(--line-strong);
  font-style: normal;
  font-size: .8rem;
  padding: 0 2px;
  transition: color .2s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav30-link:hover { color: var(--text); }
  .nav30-link:hover + .nav30-sep { color: var(--accent); }
}
.nav30-link:focus-visible { color: var(--text); }
.nav30-link:focus-visible + .nav30-sep { color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-breadcrumb-separator, .he-nav-breadcrumb-separator *, .he-nav-breadcrumb-separator *::before, .he-nav-breadcrumb-separator *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navBreadcrumbSeparator: HoverEffect = {
  id: "nav-breadcrumb-separator",
  title: "Breadcrumb Separator",
  category: "navigation",
  description: "The separator beside the hovered crumb brightens; separators stay hidden from assistive tech.",
  tags: ["navigation","breadcrumb","separator","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavBreadcrumbSeparator() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-breadcrumb-separator" aria-label="Breadcrumb">
        <ol className="nav30-list">
          <li><a className="nav30-link" href="https://example.com">Home</a><i className="nav30-sep" aria-hidden="true">/</i></li>
          <li><a className="nav30-link" href="https://example.com">Library</a><i className="nav30-sep" aria-hidden="true">/</i></li>
          <li><a className="nav30-link" href="https://example.com" aria-current="page">Details</a></li>
        </ol>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-breadcrumb-separator" aria-label="Breadcrumb">
        <ol class="nav30-list">
          <li><a class="nav30-link" href="https://example.com">Home</a><i class="nav30-sep" aria-hidden="true">/</i></li>
          <li><a class="nav30-link" href="https://example.com">Library</a><i class="nav30-sep" aria-hidden="true">/</i></li>
          <li><a class="nav30-link" href="https://example.com" aria-current="page">Details</a></li>
        </ol>
      </nav>`,
};
