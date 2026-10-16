import type { HoverEffect } from "../types";

const css = `.he-badge-diagonal-sweep{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-diagonal-sweep, .he-badge-diagonal-sweep *, .he-badge-diagonal-sweep *::before, .he-badge-diagonal-sweep *::after { box-sizing: border-box; }
.he-badge-diagonal-sweep h2, .he-badge-diagonal-sweep h3, .he-badge-diagonal-sweep p, .he-badge-diagonal-sweep figure, .he-badge-diagonal-sweep ol, .he-badge-diagonal-sweep ul { margin: 0; }
.he-badge-diagonal-sweep h2, .he-badge-diagonal-sweep h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-diagonal-sweep img, .he-badge-diagonal-sweep svg { display: block; max-width: 100%; }
.he-badge-diagonal-sweep a { color: inherit; }
.he-badge-diagonal-sweep :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-diagonal-sweep {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
  overflow: hidden;
}
.bdg09-sweep {
  position: absolute;
  top: -40%;
  bottom: -40%;
  left: 0;
  width: 34%;
  background: linear-gradient(90deg, transparent, rgb(46 111 92 / .2), transparent);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 20%, transparent), transparent);
  opacity: 0;
  transform: translateX(-180%) skewX(-18deg);
  pointer-events: none;
}
.bdg09-label { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .he-badge-diagonal-sweep:hover .bdg09-sweep { animation: he-badge-diagonal-sweep-bdg09-sweep .55s var(--ease) 1; }
}
.he-badge-diagonal-sweep:focus-visible .bdg09-sweep { animation: he-badge-diagonal-sweep-bdg09-sweep .55s var(--ease) 1; }
@keyframes he-badge-diagonal-sweep-bdg09-sweep {
  0%   { opacity: 0; transform: translateX(-180%) skewX(-18deg); }
  18%  { opacity: 1; }
  80%  { opacity: .6; }
  100% { opacity: 0; transform: translateX(420%) skewX(-18deg); }
}

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-diagonal-sweep, .he-badge-diagonal-sweep *, .he-badge-diagonal-sweep *::before, .he-badge-diagonal-sweep *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeDiagonalSweep: HoverEffect = {
  id: "badge-diagonal-sweep",
  title: "Diagonal Sweep",
  category: "badges",
  description: "One restrained diagonal tint passes behind the label per interaction, then fades out completely.",
  tags: ["badges","diagonal","sweep","hover"],
  animationType: "opacity",
  complexity: "simple",
  css,
  react: `export default function BadgeDiagonalSweep() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <a className="he-badge-diagonal-sweep" href="https://example.com"><i className="bdg09-sweep" aria-hidden="true"></i><span className="bdg09-label">Stable release</span></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-diagonal-sweep" href="https://example.com"><i class="bdg09-sweep" aria-hidden="true"></i><span class="bdg09-label">Stable release</span></a>`,
};
