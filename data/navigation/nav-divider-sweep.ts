import type { HoverEffect } from "../types";

const css = `.he-nav-divider-sweep{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-divider-sweep, .he-nav-divider-sweep *, .he-nav-divider-sweep *::before, .he-nav-divider-sweep *::after { box-sizing: border-box; }
.he-nav-divider-sweep h2, .he-nav-divider-sweep h3, .he-nav-divider-sweep p, .he-nav-divider-sweep figure, .he-nav-divider-sweep ol, .he-nav-divider-sweep ul { margin: 0; }
.he-nav-divider-sweep h2, .he-nav-divider-sweep h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-divider-sweep img, .he-nav-divider-sweep svg { display: block; max-width: 100%; }
.he-nav-divider-sweep a { color: inherit; }
.he-nav-divider-sweep :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav19-list { list-style: none; margin: 0; padding: 0; width: min(260px, 100%); }
.nav19-link {
  display: block;
  padding: 11px 12px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s var(--ease);
}
.nav19-link[aria-current="page"] { color: var(--text); }
.nav19-rule {
  display: block;
  height: 1px;
  margin: 0 12px;
  background: var(--accent-2);
  transform: scaleX(.28);
  transform-origin: left center;
  transition: transform .28s var(--ease), background-color .2s var(--ease);
}
:dir(rtl) .nav19-rule { transform-origin: right center; }
@media (hover: hover) and (pointer: fine) {
  .nav19-item:hover .nav19-rule { transform: scaleX(1); background: var(--accent); }
  .nav19-item:hover .nav19-link { color: var(--text); }
}
.nav19-item:focus-within .nav19-rule { transform: scaleX(1); background: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-divider-sweep, .he-nav-divider-sweep *, .he-nav-divider-sweep *::before, .he-nav-divider-sweep *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navDividerSweep: HoverEffect = {
  id: "nav-divider-sweep",
  title: "Divider Sweep",
  category: "navigation",
  description: "The short rule above the hovered row extends within its allocated region without moving other rows.",
  tags: ["navigation","divider","sweep","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavDividerSweep() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-divider-sweep" aria-label="Example section">
        <ul className="nav19-list">
          <li className="nav19-item"><i className="nav19-rule" aria-hidden="true"></i><a className="nav19-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li className="nav19-item"><i className="nav19-rule" aria-hidden="true"></i><a className="nav19-link" href="https://example.com">Guide</a></li>
          <li className="nav19-item"><i className="nav19-rule" aria-hidden="true"></i><a className="nav19-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-divider-sweep" aria-label="Example section">
        <ul class="nav19-list">
          <li class="nav19-item"><i class="nav19-rule" aria-hidden="true"></i><a class="nav19-link" href="https://example.com" aria-current="page">Overview</a></li>
          <li class="nav19-item"><i class="nav19-rule" aria-hidden="true"></i><a class="nav19-link" href="https://example.com">Guide</a></li>
          <li class="nav19-item"><i class="nav19-rule" aria-hidden="true"></i><a class="nav19-link" href="https://example.com">Details</a></li>
        </ul>
      </nav>`,
};
