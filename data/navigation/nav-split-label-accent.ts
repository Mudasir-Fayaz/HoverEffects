import type { HoverEffect } from "../types";

const css = `.he-nav-split-label-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-split-label-accent, .he-nav-split-label-accent *, .he-nav-split-label-accent *::before, .he-nav-split-label-accent *::after { box-sizing: border-box; }
.he-nav-split-label-accent h2, .he-nav-split-label-accent h3, .he-nav-split-label-accent p, .he-nav-split-label-accent figure, .he-nav-split-label-accent ol, .he-nav-split-label-accent ul { margin: 0; }
.he-nav-split-label-accent h2, .he-nav-split-label-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-split-label-accent img, .he-nav-split-label-accent svg { display: block; max-width: 100%; }
.he-nav-split-label-accent a { color: inherit; }
.he-nav-split-label-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav15-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; width: min(250px, 100%); }
.nav15-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 650;
  text-decoration: none;
}
.nav15-link[aria-current="page"] { color: var(--text); }
.nav15-w2 {
  position: relative;
  display: inline-block;
}
.nav15-w { position: relative; }
.nav15-tint {
  position: absolute;
  left: -3px; right: -3px; top: 50%;
  height: 1.5em;
  margin-top: -.75em;
  border-radius: 5px;
  background: var(--accent-soft);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform .24s var(--ease);
  pointer-events: none;
}
:dir(rtl) .nav15-tint { transform-origin: right center; }
@media (hover: hover) and (pointer: fine) {
  .nav15-link:hover .nav15-tint { transform: scaleX(1); }
}
.nav15-link:focus-visible .nav15-tint { transform: scaleX(1); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-split-label-accent, .he-nav-split-label-accent *, .he-nav-split-label-accent *::before, .he-nav-split-label-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navSplitLabelAccent: HoverEffect = {
  id: "nav-split-label-accent",
  title: "Split Label Accent",
  category: "navigation",
  description: "A background accent highlights the second word of a two-word label without changing spacing or width.",
  tags: ["navigation","split","label","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavSplitLabelAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-split-label-accent" aria-label="Example section">
        <ul className="nav15-list">
          <li><a className="nav15-link" href="https://example.com" aria-current="page"><span className="nav15-w1">Case</span> <span className="nav15-w2"><i className="nav15-tint" aria-hidden="true"></i><span className="nav15-w">studies</span></span></a></li>
          <li><a className="nav15-link" href="https://example.com"><span className="nav15-w1">Field</span> <span className="nav15-w2"><i className="nav15-tint" aria-hidden="true"></i><span className="nav15-w">notes</span></span></a></li>
          <li><a className="nav15-link" href="https://example.com"><span className="nav15-w1">Release</span> <span className="nav15-w2"><i className="nav15-tint" aria-hidden="true"></i><span className="nav15-w">archive</span></span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-split-label-accent" aria-label="Example section">
        <ul class="nav15-list">
          <li><a class="nav15-link" href="https://example.com" aria-current="page"><span class="nav15-w1">Case</span> <span class="nav15-w2"><i class="nav15-tint" aria-hidden="true"></i><span class="nav15-w">studies</span></span></a></li>
          <li><a class="nav15-link" href="https://example.com"><span class="nav15-w1">Field</span> <span class="nav15-w2"><i class="nav15-tint" aria-hidden="true"></i><span class="nav15-w">notes</span></span></a></li>
          <li><a class="nav15-link" href="https://example.com"><span class="nav15-w1">Release</span> <span class="nav15-w2"><i class="nav15-tint" aria-hidden="true"></i><span class="nav15-w">archive</span></span></a></li>
        </ul>
      </nav>`,
};
