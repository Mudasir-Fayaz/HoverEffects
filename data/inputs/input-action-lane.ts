import type { HoverEffect } from "../types";

const css = `.he-input-action-lane{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-action-lane, .he-input-action-lane *, .he-input-action-lane *::before, .he-input-action-lane *::after { box-sizing: border-box; }
.he-input-action-lane h2, .he-input-action-lane h3, .he-input-action-lane p, .he-input-action-lane figure, .he-input-action-lane ol, .he-input-action-lane ul { margin: 0; }
.he-input-action-lane h2, .he-input-action-lane h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-action-lane img, .he-input-action-lane svg { display: block; max-width: 100%; }
.he-input-action-lane a { color: inherit; }
.he-input-action-lane :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-action-lane { max-width: 380px; }
.inp25-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp25-wrap {
  position: relative;
  display: flex;
  align-items: stretch;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  overflow: hidden;
}
.inp25-lane {
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  opacity: 0;
  transition: opacity .22s var(--ease);
  pointer-events: none;
}
.inp25-control {
  position: relative;
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp25-submit {
  position: relative;
  margin: 4px;
  padding: 0 16px;
  border: 1px solid var(--accent);
  border-radius: 7px;
  background: var(--accent);
  color: #ffffff;
  font: inherit;
  font-size: .82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color .2s var(--ease), color .2s var(--ease);
}

.inp25-submit:hover { background: var(--accent-2); border-color: var(--accent-2); color: var(--text); }
@media (hover: hover) and (pointer: fine) {
  .inp25-wrap:hover .inp25-lane { opacity: .6; }
}
.inp25-wrap:focus-within .inp25-lane { opacity: .6; }
.inp25-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-action-lane, .he-input-action-lane *, .he-input-action-lane *::before, .he-input-action-lane *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputActionLane: HoverEffect = {
  id: "input-action-lane",
  title: "Action Lane",
  category: "inputs",
  description: "The action lane’s background accent brightens while the submit button keeps its own focus cue and real behaviour.",
  tags: ["inputs","action","lane","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputActionLane() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <form className="field he-input-action-lane" role="search" action="#usage" method="get">
        <label className="inp25-label" htmlFor="input-action-lane-inp25-input">Search the handbook</label>
        <div className="inp25-wrap">
          <i className="inp25-lane" aria-hidden="true"></i>
          <input className="inp25-control" id="input-action-lane-inp25-input" type="search" name="q" placeholder="e.g. rollout checklist" aria-describedby="input-action-lane-inp25-help" />
          <button className="inp25-submit" type="submit">Search</button>
        </div>
        <p className="inp25-help" id="input-action-lane-inp25-help">Submitting runs a real GET request and returns to the details section.</p>
      </form>
    </>
  );
}`,
  html: `<style>${css}</style>
<form class="field he-input-action-lane" role="search" action="#usage" method="get">
        <label class="inp25-label" for="input-action-lane-inp25-input">Search the handbook</label>
        <div class="inp25-wrap">
          <i class="inp25-lane" aria-hidden="true"></i>
          <input class="inp25-control" id="input-action-lane-inp25-input" type="search" name="q" placeholder="e.g. rollout checklist" aria-describedby="input-action-lane-inp25-help">
          <button class="inp25-submit" type="submit">Search</button>
        </div>
        <p class="inp25-help" id="input-action-lane-inp25-help">Submitting runs a real GET request and returns to the details section.</p>
      </form>`,
};
