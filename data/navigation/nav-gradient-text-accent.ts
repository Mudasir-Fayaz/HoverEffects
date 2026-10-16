import type { HoverEffect } from "../types";

const css = `.he-nav-gradient-text-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-gradient-text-accent, .he-nav-gradient-text-accent *, .he-nav-gradient-text-accent *::before, .he-nav-gradient-text-accent *::after { box-sizing: border-box; }
.he-nav-gradient-text-accent h2, .he-nav-gradient-text-accent h3, .he-nav-gradient-text-accent p, .he-nav-gradient-text-accent figure, .he-nav-gradient-text-accent ol, .he-nav-gradient-text-accent ul { margin: 0; }
.he-nav-gradient-text-accent h2, .he-nav-gradient-text-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-gradient-text-accent img, .he-nav-gradient-text-accent svg { display: block; max-width: 100%; }
.he-nav-gradient-text-accent a { color: inherit; }
.he-nav-gradient-text-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav24-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav24-link {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: .9rem;
  font-weight: 650;
  text-decoration: none;
}
.nav24-link[aria-current="page"] .nav24-a { color: var(--text); }
.nav24-label { display: inline-grid; }
.nav24-a, .nav24-b { grid-area: 1 / 1; transition: opacity .26s var(--ease); }
.nav24-a { color: var(--text-2); }
.nav24-b {
  color: var(--accent);
  background: linear-gradient(110deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
}
@media (hover: hover) and (pointer: fine) {
  .nav24-link:hover .nav24-a { opacity: 0; }
  .nav24-link:hover .nav24-b { opacity: 1; }
}
.nav24-link:focus-visible .nav24-a { opacity: 0; }
.nav24-link:focus-visible .nav24-b { opacity: 1; }
@supports not ((-webkit-background-clip: text) or (background-clip: text)) {
  .nav24-b { background: none; color: var(--accent); -webkit-text-fill-color: currentColor; }
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-gradient-text-accent, .he-nav-gradient-text-accent *, .he-nav-gradient-text-accent *::before, .he-nav-gradient-text-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navGradientTextAccent: HoverEffect = {
  id: "nav-gradient-text-accent",
  title: "Gradient Text Accent",
  category: "navigation",
  description: "The label crossfades into a restrained accent-gradient treatment with a readable solid fallback.",
  tags: ["navigation","gradient","text","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavGradientTextAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-gradient-text-accent" aria-label="Example section">
        <ul className="nav24-list">
          <li><a className="nav24-link" href="https://example.com" aria-current="page"><span className="nav24-label"><span className="nav24-a">Live metrics</span><span className="nav24-b" aria-hidden="true">Live metrics</span></span></a></li>
          <li><a className="nav24-link" href="https://example.com"><span className="nav24-label"><span className="nav24-a">Event log</span><span className="nav24-b" aria-hidden="true">Event log</span></span></a></li>
          <li><a className="nav24-link" href="https://example.com"><span className="nav24-label"><span className="nav24-a">Saved views</span><span className="nav24-b" aria-hidden="true">Saved views</span></span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-gradient-text-accent" aria-label="Example section">
        <ul class="nav24-list">
          <li><a class="nav24-link" href="https://example.com" aria-current="page"><span class="nav24-label"><span class="nav24-a">Live metrics</span><span class="nav24-b" aria-hidden="true">Live metrics</span></span></a></li>
          <li><a class="nav24-link" href="https://example.com"><span class="nav24-label"><span class="nav24-a">Event log</span><span class="nav24-b" aria-hidden="true">Event log</span></span></a></li>
          <li><a class="nav24-link" href="https://example.com"><span class="nav24-label"><span class="nav24-a">Saved views</span><span class="nav24-b" aria-hidden="true">Saved views</span></span></a></li>
        </ul>
      </nav>`,
};
