import type { HoverEffect } from "../types";

const css = `.he-nav-outline-trace{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-outline-trace, .he-nav-outline-trace *, .he-nav-outline-trace *::before, .he-nav-outline-trace *::after { box-sizing: border-box; }
.he-nav-outline-trace h2, .he-nav-outline-trace h3, .he-nav-outline-trace p, .he-nav-outline-trace figure, .he-nav-outline-trace ol, .he-nav-outline-trace ul { margin: 0; }
.he-nav-outline-trace h2, .he-nav-outline-trace h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-outline-trace img, .he-nav-outline-trace svg { display: block; max-width: 100%; }
.he-nav-outline-trace a { color: inherit; }
.he-nav-outline-trace :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav08-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 3px; width: min(240px, 100%); }
.nav08-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav08-link[aria-current="page"] { color: var(--text); }
.nav08-s {
  position: absolute;
  background: var(--accent);
  border-radius: 2px;
  transition: transform .2s var(--ease);
  transition-delay: calc((1 - var(--on, 0)) * var(--out, 0ms));
  pointer-events: none;
}
.nav08-t { top: 0; left: 10px; right: 10px; height: 2px; transform-origin: left; transform: scaleX(var(--on, 0)); }
.nav08-r { right: 0; top: 10px; bottom: 10px; width: 2px; transform-origin: top; transform: scaleY(var(--on, 0)); }
.nav08-b { bottom: 0; left: 10px; right: 10px; height: 2px; transform-origin: right; transform: scaleX(var(--on, 0)); }
.nav08-l { left: 0; top: 10px; bottom: 10px; width: 2px; transform-origin: bottom; transform: scaleY(var(--on, 0)); }
@media (hover: hover) and (pointer: fine) {
  .nav08-link:hover { --on: 1; }
}
.nav08-link:focus-visible { --on: 1; }
.nav08-link { --on: 0; }
.nav08-t { --in: 0ms; --out: 150ms; }
.nav08-r { --in: 60ms; --out: 100ms; }
.nav08-b { --in: 120ms; --out: 50ms; }
.nav08-l { --in: 180ms; --out: 0ms; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-outline-trace, .he-nav-outline-trace *, .he-nav-outline-trace *::before, .he-nav-outline-trace *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navOutlineTrace: HoverEffect = {
  id: "nav-outline-trace",
  title: "Outline Trace",
  category: "navigation",
  description: "Four short strokes trace the item perimeter in sequence and retract in reverse.",
  tags: ["navigation","outline","trace","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavOutlineTrace() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-outline-trace" aria-label="Example section">
        <ul className="nav08-list">
          <li><a className="nav08-link" href="https://example.com" aria-current="page">Overview<i className="nav08-s nav08-t" aria-hidden="true"></i><i className="nav08-s nav08-r" aria-hidden="true"></i><i className="nav08-s nav08-b" aria-hidden="true"></i><i className="nav08-s nav08-l" aria-hidden="true"></i></a></li>
          <li><a className="nav08-link" href="https://example.com">Guide<i className="nav08-s nav08-t" aria-hidden="true"></i><i className="nav08-s nav08-r" aria-hidden="true"></i><i className="nav08-s nav08-b" aria-hidden="true"></i><i className="nav08-s nav08-l" aria-hidden="true"></i></a></li>
          <li><a className="nav08-link" href="https://example.com">Details<i className="nav08-s nav08-t" aria-hidden="true"></i><i className="nav08-s nav08-r" aria-hidden="true"></i><i className="nav08-s nav08-b" aria-hidden="true"></i><i className="nav08-s nav08-l" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-outline-trace" aria-label="Example section">
        <ul class="nav08-list">
          <li><a class="nav08-link" href="https://example.com" aria-current="page">Overview<i class="nav08-s nav08-t" aria-hidden="true"></i><i class="nav08-s nav08-r" aria-hidden="true"></i><i class="nav08-s nav08-b" aria-hidden="true"></i><i class="nav08-s nav08-l" aria-hidden="true"></i></a></li>
          <li><a class="nav08-link" href="https://example.com">Guide<i class="nav08-s nav08-t" aria-hidden="true"></i><i class="nav08-s nav08-r" aria-hidden="true"></i><i class="nav08-s nav08-b" aria-hidden="true"></i><i class="nav08-s nav08-l" aria-hidden="true"></i></a></li>
          <li><a class="nav08-link" href="https://example.com">Details<i class="nav08-s nav08-t" aria-hidden="true"></i><i class="nav08-s nav08-r" aria-hidden="true"></i><i class="nav08-s nav08-b" aria-hidden="true"></i><i class="nav08-s nav08-l" aria-hidden="true"></i></a></li>
        </ul>
      </nav>`,
};
