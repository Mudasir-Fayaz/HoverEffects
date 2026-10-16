import type { HoverEffect } from "../types";

const css = `.he-input-suffix-well{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-suffix-well, .he-input-suffix-well *, .he-input-suffix-well *::before, .he-input-suffix-well *::after { box-sizing: border-box; }
.he-input-suffix-well h2, .he-input-suffix-well h3, .he-input-suffix-well p, .he-input-suffix-well figure, .he-input-suffix-well ol, .he-input-suffix-well ul { margin: 0; }
.he-input-suffix-well h2, .he-input-suffix-well h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-suffix-well img, .he-input-suffix-well svg { display: block; max-width: 100%; }
.he-input-suffix-well a { color: inherit; }
.he-input-suffix-well :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-suffix-well { max-width: 360px; }
.inp24-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp24-wrap {
  display: flex;
  align-items: stretch;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  overflow: hidden;
}
.inp24-control {
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp24-suffix {
  position: relative;
  display: grid;
  place-items: center;
  padding: 0 12px;
  border-left: 1px solid var(--line);
  color: var(--text-2);
  font-size: .8rem;
  font-weight: 650;
}
.inp24-tint {
  position: absolute;
  inset: 0;
  background: var(--surface-2);
  opacity: 0;
  transition: opacity .22s var(--ease);
}
.inp24-text { position: relative; }
@media (hover: hover) and (pointer: fine) {
  .inp24-wrap:hover .inp24-tint { opacity: 1; }
}
.inp24-wrap:focus-within .inp24-tint { opacity: 1; }
.inp24-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-suffix-well, .he-input-suffix-well *, .he-input-suffix-well *::before, .he-input-suffix-well *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputSuffixWell: HoverEffect = {
  id: "input-suffix-well",
  title: "Suffix Well",
  category: "inputs",
  description: "The persistent unit suffix compartment gains a muted tint while its text stays readable.",
  tags: ["inputs","suffix","well","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputSuffixWell() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-suffix-well">
        <label className="inp24-label" htmlFor="input-suffix-well-inp24-input">Subdomain</label>
        <div className="inp24-wrap">
          <input className="inp24-control" id="input-suffix-well-inp24-input" type="text" placeholder="northwind" aria-describedby="input-suffix-well-inp24-help" />
          <span className="inp24-suffix"><i className="inp24-tint" aria-hidden="true"></i><span className="inp24-text">.example.com</span></span>
        </div>
        <p className="inp24-help" id="input-suffix-well-inp24-help">Subdomains propagate within ten minutes.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-suffix-well">
        <label class="inp24-label" for="input-suffix-well-inp24-input">Subdomain</label>
        <div class="inp24-wrap">
          <input class="inp24-control" id="input-suffix-well-inp24-input" type="text" placeholder="northwind" aria-describedby="input-suffix-well-inp24-help">
          <span class="inp24-suffix"><i class="inp24-tint" aria-hidden="true"></i><span class="inp24-text">.example.com</span></span>
        </div>
        <p class="inp24-help" id="input-suffix-well-inp24-help">Subdomains propagate within ten minutes.</p>
      </div>`,
};
