import type { HoverEffect } from "../types";

const css = `.he-nav-logo-companion{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-logo-companion, .he-nav-logo-companion *, .he-nav-logo-companion *::before, .he-nav-logo-companion *::after { box-sizing: border-box; }
.he-nav-logo-companion h2, .he-nav-logo-companion h3, .he-nav-logo-companion p, .he-nav-logo-companion figure, .he-nav-logo-companion ol, .he-nav-logo-companion ul { margin: 0; }
.he-nav-logo-companion h2, .he-nav-logo-companion h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-logo-companion img, .he-nav-logo-companion svg { display: block; max-width: 100%; }
.he-nav-logo-companion a { color: inherit; }
.he-nav-logo-companion :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav27-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav27-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
}
.nav27-link[aria-current="page"] { color: var(--text); }
.nav27-logo {
  position: relative;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  color: var(--text-2);
}
.nav27-disc {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .24s var(--ease);
}
.nav27-logo svg { position: relative; transition: color .24s var(--ease); }
@media (hover: hover) and (pointer: fine) {
  .nav27-link:hover .nav27-disc { opacity: 1; }
  .nav27-link:hover .nav27-logo svg { color: var(--accent); }
}
.nav27-link:focus-visible .nav27-disc { opacity: 1; }
.nav27-link:focus-visible .nav27-logo svg { color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-logo-companion, .he-nav-logo-companion *, .he-nav-logo-companion *::before, .he-nav-logo-companion *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navLogoCompanion: HoverEffect = {
  id: "nav-logo-companion",
  title: "Logo Companion",
  category: "navigation",
  description: "A muted logo accent fades into its reserved compartment, preserving the visible destination text.",
  tags: ["navigation","logo","companion","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavLogoCompanion() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-logo-companion" aria-label="Partner">
        <ul className="nav27-list">
          <li><a className="nav27-link" href="https://example.com" aria-current="page"><span className="nav27-logo"><i className="nav27-disc" aria-hidden="true"></i><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 12.5v-9l9 9v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span className="nav27-name">Northwind</span></a></li>
          <li><a className="nav27-link" href="https://example.com"><span className="nav27-logo"><i className="nav27-disc" aria-hidden="true"></i><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.6" /><path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span><span className="nav27-name">Acme Cloud</span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-logo-companion" aria-label="Partner">
        <ul class="nav27-list">
          <li><a class="nav27-link" href="https://example.com" aria-current="page"><span class="nav27-logo"><i class="nav27-disc" aria-hidden="true"></i><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 12.5v-9l9 9v-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="nav27-name">Northwind</span></a></li>
          <li><a class="nav27-link" href="https://example.com"><span class="nav27-logo"><i class="nav27-disc" aria-hidden="true"></i><svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.4" stroke="currentColor" stroke-width="1.6"/><path d="M8 5v6M5 8h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></span><span class="nav27-name">Acme Cloud</span></a></li>
        </ul>
      </nav>`,
};
