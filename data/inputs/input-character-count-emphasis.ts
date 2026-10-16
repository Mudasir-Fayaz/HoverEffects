import type { HoverEffect } from "../types";

const css = `.he-input-character-count-emphasis{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-character-count-emphasis, .he-input-character-count-emphasis *, .he-input-character-count-emphasis *::before, .he-input-character-count-emphasis *::after { box-sizing: border-box; }
.he-input-character-count-emphasis h2, .he-input-character-count-emphasis h3, .he-input-character-count-emphasis p, .he-input-character-count-emphasis figure, .he-input-character-count-emphasis ol, .he-input-character-count-emphasis ul { margin: 0; }
.he-input-character-count-emphasis h2, .he-input-character-count-emphasis h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-character-count-emphasis img, .he-input-character-count-emphasis svg { display: block; max-width: 100%; }
.he-input-character-count-emphasis a { color: inherit; }
.he-input-character-count-emphasis :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-character-count-emphasis { max-width: 380px; }
.inp31-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp31-control {
  width: 100%;
  min-height: 84px;
  padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .88rem;
  line-height: 1.5;
  resize: vertical;
}
.inp31-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }
.inp31-count {
  margin-top: 4px;
  display: inline-block;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--text-2);
  font-size: .72rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: background-color .22s var(--ease), color .22s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .inp31-wrap:hover ~ .inp31-count { background: var(--accent-soft); color: var(--accent); }
}
.inp31-wrap:focus-within ~ .inp31-count { background: var(--accent-soft); color: var(--accent); }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-character-count-emphasis, .he-input-character-count-emphasis *, .he-input-character-count-emphasis *::before, .he-input-character-count-emphasis *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputCharacterCountEmphasis: HoverEffect = {
  id: "input-character-count-emphasis",
  title: "Character Count Emphasis",
  category: "inputs",
  description: "The counter reflects the true character count and accents on hover; keystrokes are never announced individually.",
  tags: ["inputs","character","count","emphasis","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function InputCharacterCountEmphasis() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const control = root.querySelector(".inp31-control") as HTMLTextAreaElement | null;
    const counter = root.querySelector(".inp31-count") as HTMLElement | null;
    if (!control || !counter) return;
    const limit = Number(control.getAttribute("maxlength")) || 140;
    const update = () => {
      counter.textContent = control.value.length + " / " + limit;
    };
    control.addEventListener("input", update);
    update();
    return () => {
      control.removeEventListener("input", update);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="field he-input-character-count-emphasis">
        <label className="inp31-label" htmlFor="input-character-count-emphasis-inp31-input">Release summary</label>
        <div className="inp31-wrap">
          <textarea className="inp31-control" id="input-character-count-emphasis-inp31-input" rows={3} maxLength={140} placeholder="One or two sentences for the changelog." aria-describedby="input-character-count-emphasis-inp31-help input-character-count-emphasis-inp31-count"></textarea>
        </div>
        <p className="inp31-help" id="input-character-count-emphasis-inp31-help">Shown at the top of the release page.</p>
        <p className="inp31-count" id="input-character-count-emphasis-inp31-count">0 / 140</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-character-count-emphasis">
        <label class="inp31-label" for="input-character-count-emphasis-inp31-input">Release summary</label>
        <div class="inp31-wrap">
          <textarea class="inp31-control" id="input-character-count-emphasis-inp31-input" rows="3" maxlength="140" placeholder="One or two sentences for the changelog." aria-describedby="input-character-count-emphasis-inp31-help input-character-count-emphasis-inp31-count"></textarea>
        </div>
        <p class="inp31-help" id="input-character-count-emphasis-inp31-help">Shown at the top of the release page.</p>
        <p class="inp31-count" id="input-character-count-emphasis-inp31-count">0 / 140</p>
      </div>
<script>(function(){var field=document.querySelector('.he-input-character-count-emphasis');if(!field)return;var control=field.querySelector('.inp31-control'),counter=field.querySelector('.inp31-count');if(!control||!counter)return;var limit=Number(control.getAttribute('maxlength'))||140;function update(){counter.textContent=control.value.length+' / '+limit}control.addEventListener('input',update);update();})();</script>`,
};
