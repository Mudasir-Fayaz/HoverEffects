import type { HoverEffect } from "../types";

const css = `.he-input-password-action-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-password-action-accent, .he-input-password-action-accent *, .he-input-password-action-accent *::before, .he-input-password-action-accent *::after { box-sizing: border-box; }
.he-input-password-action-accent h2, .he-input-password-action-accent h3, .he-input-password-action-accent p, .he-input-password-action-accent figure, .he-input-password-action-accent ol, .he-input-password-action-accent ul { margin: 0; }
.he-input-password-action-accent h2, .he-input-password-action-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-password-action-accent img, .he-input-password-action-accent svg { display: block; max-width: 100%; }
.he-input-password-action-accent a { color: inherit; }
.he-input-password-action-accent :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-password-action-accent { max-width: 380px; }
.inp33-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp33-wrap {
  display: flex;
  align-items: center;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  overflow: hidden;
}
.inp33-control {
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: .9rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.inp33-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  margin: 4px;
  padding: 0 11px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: var(--surface-2);
  color: var(--text-2);
  font: inherit;
  font-size: .72rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease);
}
.inp33-toggle:hover { background: var(--accent-soft); border-color: var(--accent-2); color: var(--accent); }
.inp33-toggle[aria-pressed="true"] { background: var(--accent-soft); border-color: var(--accent-2); color: var(--accent); }
.inp33-wrap:focus-within { border-color: var(--accent); }
.inp33-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-password-action-accent, .he-input-password-action-accent *, .he-input-password-action-accent *::before, .he-input-password-action-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputPasswordActionAccent: HoverEffect = {
  id: "input-password-action-accent",
  title: "Password Action Accent",
  category: "inputs",
  description: "The show/hide control changes real visibility and its announced state while preserving value and caret.",
  tags: ["inputs","password","action","accent","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function InputPasswordActionAccent() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const control = root.querySelector(".inp33-control") as HTMLInputElement | null;
    const toggle = root.querySelector(".inp33-toggle") as HTMLButtonElement | null;
    const label = root.querySelector(".inp33-toggle-label") as HTMLElement | null;
    if (!control || !toggle) return;

    const handleClick = () => {
      const show = control.type === "password";
      const start = control.selectionStart;
      const end = control.selectionEnd;
      control.type = show ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(show));
      if (label) {
        label.textContent = show ? "Hide password" : "Show password";
      }
      control.focus();
      if (start !== null && end !== null) {
        try {
          control.setSelectionRange(start, end);
        } catch {}
      }
    };
    toggle.addEventListener("click", handleClick);
    return () => {
      toggle.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="field he-input-password-action-accent">
        <label className="inp33-label" htmlFor="input-password-action-accent-inp33-input">New password</label>
        <div className="inp33-wrap">
          <input className="inp33-control" id="input-password-action-accent-inp33-input" type="password" defaultValue="Orbit-42-Lantern" aria-describedby="input-password-action-accent-inp33-help" />
          <button className="inp33-toggle" type="button" aria-pressed="false" aria-controls="input-password-action-accent-inp33-input">
            <svg className="inp33-eye" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.8 8S4.4 3.8 8 3.8 14.2 8 14.2 8 11.6 12.2 8 12.2 1.8 8 1.8 8z" stroke="currentColor" strokeWidth="1.4" /><circle cx="8" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.4" /></svg>
            <span className="inp33-toggle-label">Show password</span>
          </button>
        </div>
        <p className="inp33-help" id="input-password-action-accent-inp33-help">At least 12 characters with one number and one symbol.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-password-action-accent">
        <label class="inp33-label" for="input-password-action-accent-inp33-input">New password</label>
        <div class="inp33-wrap">
          <input class="inp33-control" id="input-password-action-accent-inp33-input" type="password" value="Orbit-42-Lantern" aria-describedby="input-password-action-accent-inp33-help">
          <button class="inp33-toggle" type="button" aria-pressed="false" aria-controls="input-password-action-accent-inp33-input">
            <svg class="inp33-eye" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.8 8S4.4 3.8 8 3.8 14.2 8 14.2 8 11.6 12.2 8 12.2 1.8 8 1.8 8z" stroke="currentColor" stroke-width="1.4"/><circle cx="8" cy="8" r="2.1" stroke="currentColor" stroke-width="1.4"/></svg>
            <span class="inp33-toggle-label">Show password</span>
          </button>
        </div>
        <p class="inp33-help" id="input-password-action-accent-inp33-help">At least 12 characters with one number and one symbol.</p>
      </div>
<script>(function(){var field=document.querySelector('.he-input-password-action-accent');if(!field)return;var control=field.querySelector('.inp33-control'),toggle=field.querySelector('.inp33-toggle'),label=field.querySelector('.inp33-toggle-label');if(!control||!toggle)return;toggle.addEventListener('click',function(){var show=control.type==='password',start=control.selectionStart,end=control.selectionEnd;control.type=show?'text':'password';toggle.setAttribute('aria-pressed',String(show));if(label)label.textContent=show?'Hide password':'Show password';control.focus();if(start!==null&&end!==null){try{control.setSelectionRange(start,end)}catch(error){}}})();</script>`,
};
