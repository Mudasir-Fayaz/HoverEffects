import type { HoverEffect } from "../types";

const css = `.he-nav-foreground-contrast{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-foreground-contrast, .he-nav-foreground-contrast *, .he-nav-foreground-contrast *::before, .he-nav-foreground-contrast *::after { box-sizing: border-box; }
.he-nav-foreground-contrast h2, .he-nav-foreground-contrast h3, .he-nav-foreground-contrast p, .he-nav-foreground-contrast figure, .he-nav-foreground-contrast ol, .he-nav-foreground-contrast ul { margin: 0; }
.he-nav-foreground-contrast h2, .he-nav-foreground-contrast h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-foreground-contrast img, .he-nav-foreground-contrast svg { display: block; max-width: 100%; }
.he-nav-foreground-contrast a { color: inherit; }
.he-nav-foreground-contrast :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav25-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav25-link {
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav25-link[aria-current="page"] { color: var(--text); }
@media (hover: hover) and (pointer: fine) {
  .nav25-link:hover { color: var(--text); }
}
.nav25-link:focus-visible { color: var(--text); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-foreground-contrast, .he-nav-foreground-contrast *, .he-nav-foreground-contrast *::before, .he-nav-foreground-contrast *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navForegroundContrast: HoverEffect = {
  id: "nav-foreground-contrast",
  title: "Foreground Contrast",
  category: "navigation",
  description: "The link becomes more visually prominent through text colour alone — no weight or width change.",
  tags: ["navigation","foreground","contrast","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavForegroundContrast() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-foreground-contrast" aria-label="Example section">
        <ul className="nav25-list">
          <li><a className="nav25-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a className="nav25-link" href="https://example.com">Guide</a></li>
          <li><a className="nav25-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-foreground-contrast" aria-label="Example section">
        <ul class="nav25-list">
          <li><a class="nav25-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a class="nav25-link" href="https://example.com">Guide</a></li>
          <li><a class="nav25-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>`,
};
