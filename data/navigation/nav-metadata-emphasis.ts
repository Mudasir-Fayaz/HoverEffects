import type { HoverEffect } from "../types";

const css = `.he-nav-metadata-emphasis{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-metadata-emphasis, .he-nav-metadata-emphasis *, .he-nav-metadata-emphasis *::before, .he-nav-metadata-emphasis *::after { box-sizing: border-box; }
.he-nav-metadata-emphasis h2, .he-nav-metadata-emphasis h3, .he-nav-metadata-emphasis p, .he-nav-metadata-emphasis figure, .he-nav-metadata-emphasis ol, .he-nav-metadata-emphasis ul { margin: 0; }
.he-nav-metadata-emphasis h2, .he-nav-metadata-emphasis h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-metadata-emphasis img, .he-nav-metadata-emphasis svg { display: block; max-width: 100%; }
.he-nav-metadata-emphasis a { color: inherit; }
.he-nav-metadata-emphasis :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav16-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav16-link {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav16-link[aria-current="page"] { color: var(--text); }
.nav16-meta {
  color: var(--text-2);
  font-size: .76rem;
  font-weight: 600;
  opacity: .75;
  transition: opacity .22s var(--ease), color .22s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav16-link:hover .nav16-meta { opacity: 1; color: var(--accent); }
}
.nav16-link:focus-visible .nav16-meta { opacity: 1; color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-metadata-emphasis, .he-nav-metadata-emphasis *, .he-nav-metadata-emphasis *::before, .he-nav-metadata-emphasis *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navMetadataEmphasis: HoverEffect = {
  id: "nav-metadata-emphasis",
  title: "Metadata Emphasis",
  category: "navigation",
  description: "A always-visible secondary caption gains contrast gently on hover while staying readable at rest.",
  tags: ["navigation","metadata","emphasis","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavMetadataEmphasis() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-metadata-emphasis" aria-label="Example section">
        <ul className="nav16-list">
          <li><a className="nav16-link" href="https://example.com" aria-current="page">Overview<span className="nav16-meta">3 min</span></a></li>
          <li><a className="nav16-link" href="https://example.com">Guide<span className="nav16-meta">8 min</span></a></li>
          <li><a className="nav16-link" href="https://example.com">Details<span className="nav16-meta">5 min</span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-metadata-emphasis" aria-label="Example section">
        <ul class="nav16-list">
          <li><a class="nav16-link" href="https://example.com" aria-current="page">Overview<span class="nav16-meta">3 min</span></a></li>
          <li><a class="nav16-link" href="https://example.com">Guide<span class="nav16-meta">8 min</span></a></li>
          <li><a class="nav16-link" href="https://example.com">Details<span class="nav16-meta">5 min</span></a></li>
        </ul>
      </nav>`,
};
