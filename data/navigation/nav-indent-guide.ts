import type { HoverEffect } from "../types";

const css = `.he-nav-indent-guide{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-indent-guide, .he-nav-indent-guide *, .he-nav-indent-guide *::before, .he-nav-indent-guide *::after { box-sizing: border-box; }
.he-nav-indent-guide h2, .he-nav-indent-guide h3, .he-nav-indent-guide p, .he-nav-indent-guide figure, .he-nav-indent-guide ol, .he-nav-indent-guide ul { margin: 0; }
.he-nav-indent-guide h2, .he-nav-indent-guide h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-indent-guide img, .he-nav-indent-guide svg { display: block; max-width: 100%; }
.he-nav-indent-guide a { color: inherit; }
.he-nav-indent-guide :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav20-list { list-style: none; margin: 0; padding: 0; width: min(260px, 100%); }
.nav20-item { position: relative; }
.nav20-link {
  display: block;
  padding: 9px 12px;
  color: var(--text-2);
  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav20-link[aria-current="page"] { color: var(--text); }
.nav20-sub { list-style: none; margin: 0; padding: 0; }
.nav20-sub .nav20-link { padding-left: 40px; font-weight: 550; }
.nav20-sub .nav20-item::before {
  content: "";
  position: absolute;
  left: 22px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  border-radius: 2px;
  background: var(--line-strong);
  transform: scaleY(.72);
  transition: transform .22s var(--ease), background-color .22s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .nav20-sub .nav20-item:hover::before { transform: scaleY(1); background: var(--accent); }
  .nav20-sub .nav20-item:hover .nav20-link { color: var(--text); }
}
.nav20-sub .nav20-item:focus-within::before { transform: scaleY(1); background: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-indent-guide, .he-nav-indent-guide *, .he-nav-indent-guide *::before, .he-nav-indent-guide *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navIndentGuide: HoverEffect = {
  id: "nav-indent-guide",
  title: "Indent Guide",
  category: "navigation",
  description: "The hovered nested item’s guide segment brightens and extends slightly while indentation stays fixed.",
  tags: ["navigation","indent","guide","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavIndentGuide() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-indent-guide" aria-label="Nested example">
        <ul className="nav20-list">
          <li className="nav20-item">
            <a className="nav20-link" href="https://example.com" aria-current="page">Projects</a>
            <ul className="nav20-sub">
              <li className="nav20-item"><a className="nav20-link" href="https://example.com">Alpha release</a></li>
              <li className="nav20-item"><a className="nav20-link" href="https://example.com">Beta feedback</a></li>
            </ul>
          </li>
          <li className="nav20-item"><a className="nav20-link" href="https://example.com">Archive</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-indent-guide" aria-label="Nested example">
        <ul class="nav20-list">
          <li class="nav20-item">
            <a class="nav20-link" href="https://example.com" aria-current="page">Projects</a>
            <ul class="nav20-sub">
              <li class="nav20-item"><a class="nav20-link" href="https://example.com">Alpha release</a></li>
              <li class="nav20-item"><a class="nav20-link" href="https://example.com">Beta feedback</a></li>
            </ul>
          </li>
          <li class="nav20-item"><a class="nav20-link" href="https://example.com">Archive</a></li>
        </ul>
      </nav>`,
};
