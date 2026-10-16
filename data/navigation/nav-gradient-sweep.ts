import type { HoverEffect } from "../types";

const css = `.he-nav-gradient-sweep{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-gradient-sweep, .he-nav-gradient-sweep *, .he-nav-gradient-sweep *::before, .he-nav-gradient-sweep *::after { box-sizing: border-box; }
.he-nav-gradient-sweep h2, .he-nav-gradient-sweep h3, .he-nav-gradient-sweep p, .he-nav-gradient-sweep figure, .he-nav-gradient-sweep ol, .he-nav-gradient-sweep ul { margin: 0; }
.he-nav-gradient-sweep h2, .he-nav-gradient-sweep h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-gradient-sweep img, .he-nav-gradient-sweep svg { display: block; max-width: 100%; }
.he-nav-gradient-sweep a { color: inherit; }
.he-nav-gradient-sweep :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav23-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav23-link {
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
.nav23-link[aria-current="page"] { color: var(--text); }
.nav23-sweep {
  position: absolute;
  inset: -20% -10%;
  background: linear-gradient(100deg, transparent 30%, rgb(46 111 92 / .16) 50%, transparent 70%);
  background: linear-gradient(100deg, transparent 30%, color-mix(in srgb, var(--accent) 16%, transparent) 50%, transparent 70%);
  opacity: 0;
  transform: translateX(-110%) skewX(-10deg);
  pointer-events: none;
}
.nav23-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .nav23-link:hover .nav23-sweep { animation: he-nav-gradient-sweep-nav23-sweep .6s var(--ease) 1; }
}
.nav23-link:focus-visible .nav23-sweep { animation: he-nav-gradient-sweep-nav23-sweep .6s var(--ease) 1; }
@keyframes he-nav-gradient-sweep-nav23-sweep {
  0%   { opacity: 0; transform: translateX(-110%) skewX(-10deg); }
  20%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(110%) skewX(-10deg); }
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-gradient-sweep, .he-nav-gradient-sweep *, .he-nav-gradient-sweep *::before, .he-nav-gradient-sweep *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navGradientSweep: HoverEffect = {
  id: "nav-gradient-sweep",
  title: "Gradient Sweep",
  category: "navigation",
  description: "A low-contrast gradient crosses the item once per interaction, then rests out of view.",
  tags: ["navigation","gradient","sweep","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavGradientSweep() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-gradient-sweep" aria-label="Example section">
        <ul className="nav23-list">
          <li><a className="nav23-link" href="https://example.com" aria-current="page"><i className="nav23-sweep" aria-hidden="true"></i><span className="nav23-label">Overview</span></a></li>
          <li><a className="nav23-link" href="https://example.com"><i className="nav23-sweep" aria-hidden="true"></i><span className="nav23-label">Guide</span></a></li>
          <li><a className="nav23-link" href="https://example.com"><i className="nav23-sweep" aria-hidden="true"></i><span className="nav23-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-gradient-sweep" aria-label="Example section">
        <ul class="nav23-list">
          <li><a class="nav23-link" href="https://example.com" aria-current="page"><i class="nav23-sweep" aria-hidden="true"></i><span class="nav23-label">Overview</span></a></li>
          <li><a class="nav23-link" href="https://example.com"><i class="nav23-sweep" aria-hidden="true"></i><span class="nav23-label">Guide</span></a></li>
          <li><a class="nav23-link" href="https://example.com"><i class="nav23-sweep" aria-hidden="true"></i><span class="nav23-label">Details</span></a></li>
        </ul>
      </nav>`,
};
