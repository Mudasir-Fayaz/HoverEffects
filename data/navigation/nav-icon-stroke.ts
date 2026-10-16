import type { HoverEffect } from "../types";

const css = `.he-nav-icon-stroke{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-icon-stroke, .he-nav-icon-stroke *, .he-nav-icon-stroke *::before, .he-nav-icon-stroke *::after { box-sizing: border-box; }
.he-nav-icon-stroke h2, .he-nav-icon-stroke h3, .he-nav-icon-stroke p, .he-nav-icon-stroke figure, .he-nav-icon-stroke ol, .he-nav-icon-stroke ul { margin: 0; }
.he-nav-icon-stroke h2, .he-nav-icon-stroke h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-icon-stroke img, .he-nav-icon-stroke svg { display: block; max-width: 100%; }
.he-nav-icon-stroke a { color: inherit; }
.he-nav-icon-stroke :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav13-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav13-link {
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
.nav13-link[aria-current="page"] { color: var(--text); }
.nav13-link svg { color: var(--text-2); }
.nav13-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .45s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .nav13-link:hover { color: var(--text); }
  .nav13-link:hover .nav13-draw { stroke-dashoffset: 0; }
}
.nav13-link:focus-visible .nav13-draw { stroke-dashoffset: 0; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-icon-stroke, .he-nav-icon-stroke *, .he-nav-icon-stroke *::before, .he-nav-icon-stroke *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navIconStroke: HoverEffect = {
  id: "nav-icon-stroke",
  title: "Icon Stroke",
  category: "navigation",
  description: "A decorative accent path draws over the existing icon while the base glyph stays recognisable.",
  tags: ["navigation","icon","stroke","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavIconStroke() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-icon-stroke" aria-label="Example section">
        <ul className="nav13-list">
          <li><a className="nav13-link" href="https://example.com" aria-current="page"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /><path className="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Overview</a></li>
          <li><a className="nav13-link" href="https://example.com"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /><path className="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Guide</a></li>
          <li><a className="nav13-link" href="https://example.com"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".45" /><path className="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-icon-stroke" aria-label="Example section">
        <ul class="nav13-list">
          <li><a class="nav13-link" href="https://example.com" aria-current="page"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".45"/><path class="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>Overview</a></li>
          <li><a class="nav13-link" href="https://example.com"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".45"/><path class="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>Guide</a></li>
          <li><a class="nav13-link" href="https://example.com"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 8.5 6 12l7.5-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".45"/><path class="nav13-draw" d="M2.5 8.5 6 12l7.5-8" pathLength="100" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>Details</a></li>
        </ul>
      </nav>`,
};
