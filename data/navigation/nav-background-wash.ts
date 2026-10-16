import type { HoverEffect } from "../types";

const css = `.he-nav-background-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-background-wash, .he-nav-background-wash *, .he-nav-background-wash *::before, .he-nav-background-wash *::after { box-sizing: border-box; }
.he-nav-background-wash h2, .he-nav-background-wash h3, .he-nav-background-wash p, .he-nav-background-wash figure, .he-nav-background-wash ol, .he-nav-background-wash ul { margin: 0; }
.he-nav-background-wash h2, .he-nav-background-wash h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-background-wash img, .he-nav-background-wash svg { display: block; max-width: 100%; }
.he-nav-background-wash a { color: inherit; }
.he-nav-background-wash :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav05-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav05-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
}
.nav05-link[aria-current="page"] { color: var(--text); }
.nav05-link[aria-current="page"]::before {
  content: "";
  position: absolute;
  left: 0; top: 8px; bottom: 8px;
  width: 2px;
  border-radius: 2px;
  background: var(--accent-2);
}
.nav05-wash {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--surface-2);
  transform: translateY(101%);
  transition: transform .28s var(--ease);
  pointer-events: none;
}
.nav05-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .nav05-link:hover .nav05-wash { transform: translateY(0); }
}
.nav05-link:focus-visible .nav05-wash { transform: translateY(0); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-background-wash, .he-nav-background-wash *, .he-nav-background-wash *::before, .he-nav-background-wash *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navBackgroundWash: HoverEffect = {
  id: "nav-background-wash",
  title: "Background Wash",
  category: "navigation",
  description: "A muted surface slides up behind the hovered item with the link padding kept fixed.",
  tags: ["navigation","background","wash","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavBackgroundWash() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-background-wash" aria-label="Example section">
        <ul className="nav05-list">
          <li><a className="nav05-link" href="https://example.com" aria-current="page"><i className="nav05-wash" aria-hidden="true"></i><span className="nav05-label">Overview</span></a></li>
          <li><a className="nav05-link" href="https://example.com"><i className="nav05-wash" aria-hidden="true"></i><span className="nav05-label">Guide</span></a></li>
          <li><a className="nav05-link" href="https://example.com"><i className="nav05-wash" aria-hidden="true"></i><span className="nav05-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-background-wash" aria-label="Example section">
        <ul class="nav05-list">
          <li><a class="nav05-link" href="https://example.com" aria-current="page"><i class="nav05-wash" aria-hidden="true"></i><span class="nav05-label">Overview</span></a></li>
          <li><a class="nav05-link" href="https://example.com"><i class="nav05-wash" aria-hidden="true"></i><span class="nav05-label">Guide</span></a></li>
          <li><a class="nav05-link" href="https://example.com"><i class="nav05-wash" aria-hidden="true"></i><span class="nav05-label">Details</span></a></li>
        </ul>
      </nav>`,
};
