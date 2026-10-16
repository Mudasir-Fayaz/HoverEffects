import type { HoverEffect } from "../types";

const css = `.he-nav-texture-highlight{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-texture-highlight, .he-nav-texture-highlight *, .he-nav-texture-highlight *::before, .he-nav-texture-highlight *::after { box-sizing: border-box; }
.he-nav-texture-highlight h2, .he-nav-texture-highlight h3, .he-nav-texture-highlight p, .he-nav-texture-highlight figure, .he-nav-texture-highlight ol, .he-nav-texture-highlight ul { margin: 0; }
.he-nav-texture-highlight h2, .he-nav-texture-highlight h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-texture-highlight img, .he-nav-texture-highlight svg { display: block; max-width: 100%; }
.he-nav-texture-highlight a { color: inherit; }
.he-nav-texture-highlight :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav22-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav22-link {
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
.nav22-link[aria-current="page"] { color: var(--text); }
.nav22-texture {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--line-strong) 1px, transparent 1.2px);
  background-size: 8px 8px;
  opacity: 0;
  transition: opacity .26s var(--ease);
  pointer-events: none;
}
.nav22-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .nav22-link:hover .nav22-texture { opacity: .5; }
}
.nav22-link:focus-visible .nav22-texture { opacity: .5; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-texture-highlight, .he-nav-texture-highlight *, .he-nav-texture-highlight *::before, .he-nav-texture-highlight *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navTextureHighlight: HoverEffect = {
  id: "nav-texture-highlight",
  title: "Texture Highlight",
  category: "navigation",
  description: "A faint dot texture fades behind the hovered item while the label stays uncluttered.",
  tags: ["navigation","texture","highlight","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavTextureHighlight() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-texture-highlight" aria-label="Example section">
        <ul className="nav22-list">
          <li><a className="nav22-link" href="https://example.com" aria-current="page"><i className="nav22-texture" aria-hidden="true"></i><span className="nav22-label">Overview</span></a></li>
          <li><a className="nav22-link" href="https://example.com"><i className="nav22-texture" aria-hidden="true"></i><span className="nav22-label">Guide</span></a></li>
          <li><a className="nav22-link" href="https://example.com"><i className="nav22-texture" aria-hidden="true"></i><span className="nav22-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-texture-highlight" aria-label="Example section">
        <ul class="nav22-list">
          <li><a class="nav22-link" href="https://example.com" aria-current="page"><i class="nav22-texture" aria-hidden="true"></i><span class="nav22-label">Overview</span></a></li>
          <li><a class="nav22-link" href="https://example.com"><i class="nav22-texture" aria-hidden="true"></i><span class="nav22-label">Guide</span></a></li>
          <li><a class="nav22-link" href="https://example.com"><i class="nav22-texture" aria-hidden="true"></i><span class="nav22-label">Details</span></a></li>
        </ul>
      </nav>`,
};
