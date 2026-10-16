import type { HoverEffect } from "../types";

const css = `.he-nav-count-cell-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-nav-count-cell-accent, .he-nav-count-cell-accent *, .he-nav-count-cell-accent *::before, .he-nav-count-cell-accent *::after { box-sizing: border-box; }
.he-nav-count-cell-accent h2, .he-nav-count-cell-accent h3, .he-nav-count-cell-accent p, .he-nav-count-cell-accent figure, .he-nav-count-cell-accent ol, .he-nav-count-cell-accent ul { margin: 0; }
.he-nav-count-cell-accent h2, .he-nav-count-cell-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-nav-count-cell-accent img, .he-nav-count-cell-accent svg { display: block; max-width: 100%; }
.he-nav-count-cell-accent a { color: inherit; }
.he-nav-count-cell-accent :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.nav18-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; width: min(250px, 100%); }
.nav18-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-2);
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
}
.nav18-link[aria-current="page"] { color: var(--text); }
.nav18-cell {
  position: relative;
  display: grid;
  place-items: center;
  min-width: 30px;
  height: 20px;
  padding: 0 7px;
  border-radius: 6px;
  background: var(--surface-2);
  font-size: .72rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  overflow: hidden;
}
.nav18-tint {
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .22s var(--ease);
}
.nav18-num { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .nav18-link:hover .nav18-tint { opacity: 1; }
}
.nav18-link:focus-visible .nav18-tint { opacity: 1; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-nav-count-cell-accent, .he-nav-count-cell-accent *, .he-nav-count-cell-accent *::before, .he-nav-count-cell-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const navCountCellAccent: HoverEffect = {
  id: "nav-count-cell-accent",
  title: "Count Cell Accent",
  category: "navigation",
  description: "A static count compartment gains a subtle tint; the count value itself never animates.",
  tags: ["navigation","count","cell","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function NavCountCellAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <nav className="he-nav-count-cell-accent" aria-label="Example section">
        <ul className="nav18-list">
          <li><a className="nav18-link" href="https://example.com" aria-current="page">Inbox<span className="nav18-cell"><i className="nav18-tint" aria-hidden="true"></i><span className="nav18-num">12</span></span></a></li>
          <li><a className="nav18-link" href="https://example.com">Drafts<span className="nav18-cell"><i className="nav18-tint" aria-hidden="true"></i><span className="nav18-num">3</span></span></a></li>
          <li><a className="nav18-link" href="https://example.com">Archive<span className="nav18-cell"><i className="nav18-tint" aria-hidden="true"></i><span className="nav18-num">248</span></span></a></li>
        </ul>
      </nav>
    </>
  );
}`,
  html: `<style>${css}</style>
<nav class="he-nav-count-cell-accent" aria-label="Example section">
        <ul class="nav18-list">
          <li><a class="nav18-link" href="https://example.com" aria-current="page">Inbox<span class="nav18-cell"><i class="nav18-tint" aria-hidden="true"></i><span class="nav18-num">12</span></span></a></li>
          <li><a class="nav18-link" href="https://example.com">Drafts<span class="nav18-cell"><i class="nav18-tint" aria-hidden="true"></i><span class="nav18-num">3</span></span></a></li>
          <li><a class="nav18-link" href="https://example.com">Archive<span class="nav18-cell"><i class="nav18-tint" aria-hidden="true"></i><span class="nav18-num">248</span></span></a></li>
        </ul>
      </nav>`,
};
