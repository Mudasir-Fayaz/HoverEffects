import type { HoverEffect } from "../types";

const css = `.he-nav-inset-frame{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-inset-frame, .he-nav-inset-frame *, .he-nav-inset-frame *::before, .he-nav-inset-frame *::after { box-sizing: border-box; }
.he-nav-inset-frame h2, .he-nav-inset-frame h3, .he-nav-inset-frame p, .he-nav-inset-frame figure, .he-nav-inset-frame ol, .he-nav-inset-frame ul { margin: 0; }
.he-nav-inset-frame h2, .he-nav-inset-frame h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-inset-frame img, .he-nav-inset-frame svg { display: block; max-width: 100%; }
.he-nav-inset-frame a { color: inherit; }
.he-nav-inset-frame :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav07-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(240px, 100%); }
.nav07-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 9px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav07-link[aria-current="page"] { color: var(--text); }
.nav07-link[aria-current="page"]::before {
  content: "";
  position: absolute;
  left: 10px; top: 50%;
  width: 5px; height: 5px;
  margin-top: -2.5px;
  border-radius: 50%;
  background: var(--accent);
}
.nav07-link[aria-current="page"] { padding-left: 22px; }
.nav07-link::after {
  content: "";
  position: absolute;
  inset: 3px;
  border: 1px solid var(--accent-2);
  border-radius: 7px;
  opacity: 0;
  transition: opacity .22s var(--ease);
  pointer-events: none;
}
@media (hover: hover) and (pointer: fine) {
  .nav07-link:hover::after { opacity: 1; }
}
.nav07-link:focus-visible::after { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-inset-frame, .he-nav-inset-frame *, .he-nav-inset-frame *::before, .he-nav-inset-frame *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navInsetFrame: HoverEffect = {
  id: "nav-inset-frame",
  title: "Inset Frame",
  category: "navigation",
  description: "An inset outline fades around the hovered item inside its existing padding.",
  tags: ["navigation","inset","frame","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavInsetFrame() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-inset-frame" aria-label="Example section">
        <ul className="nav07-list">
          <li><a className="nav07-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a className="nav07-link" href="https://example.com">Guide</a></li>
          <li><a className="nav07-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-inset-frame" aria-label="Example section">
        <ul class="nav07-list">
          <li><a class="nav07-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li><a class="nav07-link" href="https://example.com">Guide</a></li>
          <li><a class="nav07-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>`,
};
