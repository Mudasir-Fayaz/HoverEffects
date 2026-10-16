import type { HoverEffect } from "../types";

const css = `.he-nav-arrow-nudge{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-arrow-nudge, .he-nav-arrow-nudge *, .he-nav-arrow-nudge *::before, .he-nav-arrow-nudge *::after { box-sizing: border-box; }
.he-nav-arrow-nudge h2, .he-nav-arrow-nudge h3, .he-nav-arrow-nudge p, .he-nav-arrow-nudge figure, .he-nav-arrow-nudge ol, .he-nav-arrow-nudge ul { margin: 0; }
.he-nav-arrow-nudge h2, .he-nav-arrow-nudge h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-arrow-nudge img, .he-nav-arrow-nudge svg { display: block; max-width: 100%; }
.he-nav-arrow-nudge a { color: inherit; }
.he-nav-arrow-nudge :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav11-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav11-link {
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
.nav11-link[aria-current="page"] { color: var(--text); }
.nav11-arrow {
  color: var(--text-2);
  transform: translateX(0);
  transition: transform .2s var(--ease), color .2s var(--ease);
}
:dir(rtl) .nav11-arrow { transform: rotate(180deg); }
@media (hover: hover) and (pointer: fine) {
  .nav11-link:hover .nav11-arrow { transform: translateX(3px); color: var(--accent); }
}
.nav11-link:focus-visible .nav11-arrow { transform: translateX(3px); color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-arrow-nudge, .he-nav-arrow-nudge *, .he-nav-arrow-nudge *::before, .he-nav-arrow-nudge *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navArrowNudge: HoverEffect = {
  id: "nav-arrow-nudge",
  title: "Arrow Nudge",
  category: "navigation",
  description: "A trailing arrow moves two to three pixels toward the destination while the hit area stays still.",
  tags: ["navigation","arrow","nudge","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavArrowNudge() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-arrow-nudge" aria-label="Example section">
        <ul className="nav11-list">
          <li><a className="nav11-link" href="https://example.com" aria-current="page">Overview<svg className="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a></li>
          <li><a className="nav11-link" href="https://example.com">Guide<svg className="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a></li>
          <li><a className="nav11-link" href="https://example.com">Details<svg className="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-arrow-nudge" aria-label="Example section">
        <ul class="nav11-list">
          <li><a class="nav11-link" href="https://example.com" aria-current="page">Overview<svg class="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
          <li><a class="nav11-link" href="https://example.com">Guide<svg class="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
          <li><a class="nav11-link" href="https://example.com">Details<svg class="nav11-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
        </ul>
      </nav>`,
};
