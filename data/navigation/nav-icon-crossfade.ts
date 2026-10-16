import type { HoverEffect } from "../types";

const css = `.he-nav-icon-crossfade{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-icon-crossfade, .he-nav-icon-crossfade *, .he-nav-icon-crossfade *::before, .he-nav-icon-crossfade *::after { box-sizing: border-box; }
.he-nav-icon-crossfade h2, .he-nav-icon-crossfade h3, .he-nav-icon-crossfade p, .he-nav-icon-crossfade figure, .he-nav-icon-crossfade ol, .he-nav-icon-crossfade ul { margin: 0; }
.he-nav-icon-crossfade h2, .he-nav-icon-crossfade h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-icon-crossfade img, .he-nav-icon-crossfade svg { display: block; max-width: 100%; }
.he-nav-icon-crossfade a { color: inherit; }
.he-nav-icon-crossfade :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav14-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav14-link {
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
.nav14-link[aria-current="page"] { color: var(--text); }
.nav14-box {
  position: relative;
  width: 15px;
  height: 15px;
}
.nav14-box svg {
  position: absolute;
  inset: 0;
  transition: opacity .22s var(--ease);
}
.nav14-a { opacity: 1; color: var(--text-2); }
.nav14-b { opacity: 0; color: var(--accent); }
@media (hover: hover) and (pointer: fine) {
  .nav14-link:hover .nav14-a { opacity: 0; }
  .nav14-link:hover .nav14-b { opacity: 1; }
}
.nav14-link:focus-visible .nav14-a { opacity: 0; }
.nav14-link:focus-visible .nav14-b { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-icon-crossfade, .he-nav-icon-crossfade *, .he-nav-icon-crossfade *::before, .he-nav-icon-crossfade *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navIconCrossfade: HoverEffect = {
  id: "nav-icon-crossfade",
  title: "Icon Crossfade",
  category: "navigation",
  description: "One icon fades into a related alternate in a fixed box, avoiding state-signalling substitutions.",
  tags: ["navigation","icon","crossfade","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavIconCrossfade() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-icon-crossfade" aria-label="Example section">
        <ul className="nav14-list">
          <li><a className="nav14-link" href="https://example.com" aria-current="page"><span className="nav14-box" aria-hidden="true"><svg className="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z" /></svg><svg className="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3v10" /></svg></span>Overview</a></li>
          <li><a className="nav14-link" href="https://example.com"><span className="nav14-box" aria-hidden="true"><svg className="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z" /></svg><svg className="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3v10" /></svg></span>Guide</a></li>
          <li><a className="nav14-link" href="https://example.com"><span className="nav14-box" aria-hidden="true"><svg className="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z" /></svg><svg className="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M8 3v10" /></svg></span>Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-icon-crossfade" aria-label="Example section">
        <ul class="nav14-list">
          <li><a class="nav14-link" href="https://example.com" aria-current="page"><span class="nav14-box" aria-hidden="true"><svg class="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z"/></svg><svg class="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M8 3v10"/></svg></span>Overview</a></li>
          <li><a class="nav14-link" href="https://example.com"><span class="nav14-box" aria-hidden="true"><svg class="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z"/></svg><svg class="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M8 3v10"/></svg></span>Guide</a></li>
          <li><a class="nav14-link" href="https://example.com"><span class="nav14-box" aria-hidden="true"><svg class="nav14-a" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5h4.5v9H2.5zM9 3.5h4.5v9H9z"/></svg><svg class="nav14-b" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M8 3v10"/></svg></span>Details</a></li>
        </ul>
      </nav>`,
};
