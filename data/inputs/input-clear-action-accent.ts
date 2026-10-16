import type { HoverEffect } from "../types";

const css = `.he-input-clear-action-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-clear-action-accent, .he-input-clear-action-accent *, .he-input-clear-action-accent *::before, .he-input-clear-action-accent *::after { box-sizing: border-box; }
.he-input-clear-action-accent h2, .he-input-clear-action-accent h3, .he-input-clear-action-accent p, .he-input-clear-action-accent figure, .he-input-clear-action-accent ol, .he-input-clear-action-accent ul { margin: 0; }
.he-input-clear-action-accent h2, .he-input-clear-action-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-clear-action-accent img, .he-input-clear-action-accent svg { display: block; max-width: 100%; }
.he-input-clear-action-accent a { color: inherit; }
.he-input-clear-action-accent :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-clear-action-accent { max-width: 360px; }
.inp32-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp32-wrap {
  display: flex;
  align-items: center;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  overflow: hidden;
}
.inp32-control {
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
}
.inp32-clear {
  display: grid;
  place-items: center;
  width: 38px;
  align-self: stretch;
  margin: 4px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: var(--surface-2);
  color: var(--text-2);
  cursor: pointer;
  transition: background-color .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease), opacity .2s var(--ease);
}
.inp32-clear:hover { background: var(--accent-soft); border-color: var(--accent-2); color: var(--accent); }
.inp32-clear:disabled { opacity: .4; cursor: default; }
.inp32-clear:disabled:hover { background: var(--surface-2); border-color: transparent; color: var(--text-2); }
.inp32-wrap:focus-within { border-color: var(--accent); }
.inp32-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-clear-action-accent, .he-input-clear-action-accent *, .he-input-clear-action-accent *::before, .he-input-clear-action-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputClearActionAccent: HoverEffect = {
  id: "input-clear-action-accent",
  title: "Clear Action Accent",
  category: "inputs",
  description: "The clear button updates the real value, restores focus and dispatches an input event for integrations.",
  tags: ["inputs","clear","action","accent","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function InputClearActionAccent() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const control = root.querySelector(".inp32-control") as HTMLInputElement | null;
    const clear = root.querySelector(".inp32-clear") as HTMLButtonElement | null;
    if (!control || !clear) return;

    const sync = () => {
      clear.disabled = control.value.length === 0;
    };
    const handleClick = () => {
      control.value = "";
      control.dispatchEvent(new Event("input", { bubbles: true }));
      sync();
      control.focus();
    };
    const handleInput = () => sync();
    clear.addEventListener("click", handleClick);
    control.addEventListener("input", handleInput);
    sync();
    return () => {
      clear.removeEventListener("click", handleClick);
      control.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="field he-input-clear-action-accent">
        <label className="inp32-label" htmlFor="input-clear-action-accent-inp32-input">Filter query</label>
        <div className="inp32-wrap">
          <input className="inp32-control" id="input-clear-action-accent-inp32-input" type="search" defaultValue="status: open" aria-describedby="input-clear-action-accent-inp32-help" />
          <button className="inp32-clear" type="button" aria-label="Clear the filter query">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4.5 4.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </button>
        </div>
        <p className="inp32-help" id="input-clear-action-accent-inp32-help">Clearing empties the real value and keeps focus in the field.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-clear-action-accent">
        <label class="inp32-label" for="input-clear-action-accent-inp32-input">Filter query</label>
        <div class="inp32-wrap">
          <input class="inp32-control" id="input-clear-action-accent-inp32-input" type="search" value="status: open" aria-describedby="input-clear-action-accent-inp32-help">
          <button class="inp32-clear" type="button" aria-label="Clear the filter query">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4.5 4.5 7 7m0-7-7 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
          </button>
        </div>
        <p class="inp32-help" id="input-clear-action-accent-inp32-help">Clearing empties the real value and keeps focus in the field.</p>
      </div>
<script>(function(){var field=document.querySelector('.he-input-clear-action-accent');if(!field)return;var control=field.querySelector('.inp32-control'),clear=field.querySelector('.inp32-clear');if(!control||!clear)return;function sync(){clear.disabled=control.value.length===0}clear.addEventListener('click',function(){control.value='';control.dispatchEvent(new Event('input',{bubbles:true}));sync();control.focus()});control.addEventListener('input',sync);sync();})();</script>`,
};
