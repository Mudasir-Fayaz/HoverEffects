import type { HoverEffect } from "../types";

const css = `.he-nav-icon-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-icon-accent, .he-nav-icon-accent *, .he-nav-icon-accent *::before, .he-nav-icon-accent *::after { box-sizing: border-box; }
.he-nav-icon-accent h2, .he-nav-icon-accent h3, .he-nav-icon-accent p, .he-nav-icon-accent figure, .he-nav-icon-accent ol, .he-nav-icon-accent ul { margin: 0; }
.he-nav-icon-accent h2, .he-nav-icon-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-icon-accent img, .he-nav-icon-accent svg { display: block; max-width: 100%; }
.he-nav-icon-accent a { color: inherit; }
.he-nav-icon-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav12-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav12-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav12-link[aria-current="page"] { color: var(--text); }
.nav12-ic {
  color: var(--text-2);
  transition: color .2s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav12-link:hover { color: var(--text); }
  .nav12-link:hover .nav12-ic { color: var(--accent); }
}
.nav12-link:focus-visible .nav12-ic { color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-icon-accent, .he-nav-icon-accent *, .he-nav-icon-accent *::before, .he-nav-icon-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navIconAccent: HoverEffect = {
  id: "nav-icon-accent",
  title: "Icon Accent",
  category: "navigation",
  description: "The link icon gains the accent colour while the label position stays fixed.",
  tags: ["navigation","icon","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavIconAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-icon-accent" aria-label="Example section">
        <ul className="nav12-list">
          <li><a className="nav12-link" href="https://example.com" aria-current="page"><svg className="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 6.4h11" stroke="currentColor" strokeWidth="1.4" /></svg>Overview</a></li>
          <li><a className="nav12-link" href="https://example.com"><svg className="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3h7l3 3v7H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M10 3v3h3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>Guide</a></li>
          <li><a className="nav12-link" href="https://example.com"><svg className="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeWidth="1.4" /><path d="M8 5.4v3.2M8 10.8h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-icon-accent" aria-label="Example section">
        <ul class="nav12-list">
          <li><a class="nav12-link" href="https://example.com" aria-current="page"><svg class="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="3" width="11" height="10" rx="1.6" stroke="currentColor" stroke-width="1.4"/><path d="M2.5 6.4h11" stroke="currentColor" stroke-width="1.4"/></svg>Overview</a></li>
          <li><a class="nav12-link" href="https://example.com"><svg class="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3h7l3 3v7H3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 3v3h3" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>Guide</a></li>
          <li><a class="nav12-link" href="https://example.com"><svg class="nav12-ic" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.6" stroke="currentColor" stroke-width="1.4"/><path d="M8 5.4v3.2M8 10.8h.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>Details</a></li>
        </ul>
      </nav>`,
};
