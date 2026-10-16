import type { HoverEffect } from "../types";

const css = `.he-input-file-picker-accent{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-file-picker-accent, .he-input-file-picker-accent *, .he-input-file-picker-accent *::before, .he-input-file-picker-accent *::after { box-sizing: border-box; }
.he-input-file-picker-accent h2, .he-input-file-picker-accent h3, .he-input-file-picker-accent p, .he-input-file-picker-accent figure, .he-input-file-picker-accent ol, .he-input-file-picker-accent ul { margin: 0; }
.he-input-file-picker-accent h2, .he-input-file-picker-accent h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-file-picker-accent img, .he-input-file-picker-accent svg { display: block; max-width: 100%; }
.he-input-file-picker-accent a { color: inherit; }
.he-input-file-picker-accent :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-file-picker-accent { max-width: 400px; }
.inp30-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp30-wrap { position: relative; border-radius: var(--radius-sm); }
.inp30-surface {
  position: absolute;
  inset: -4px;
  border-radius: 12px;
  background: var(--surface-2);
  opacity: 0;
  transition: opacity .22s var(--ease);
  pointer-events: none;
}
.inp30-control {
  position: relative;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text-2);
  font: inherit;
  font-size: .82rem;
}
.inp30-control::file-selector-button {
  margin-right: 12px;
  padding: 7px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 7px;
  background: var(--surface-2);
  color: var(--text);
  font: inherit;
  font-size: .8rem;
  font-weight: 650;
  cursor: pointer;
  transition: background-color .2s var(--ease), border-color .2s var(--ease);
}
.inp30-control:hover::file-selector-button { border-color: var(--accent-2); }
@media (hover: hover) and (pointer: fine) {
  .inp30-wrap:hover .inp30-surface { opacity: 1; }
}
.inp30-wrap:focus-within .inp30-surface { opacity: 1; }
.inp30-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-file-picker-accent, .he-input-file-picker-accent *, .he-input-file-picker-accent *::before, .he-input-file-picker-accent *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputFilePickerAccent: HoverEffect = {
  id: "input-file-picker-accent",
  title: "File Picker Accent",
  category: "inputs",
  description: "The surrounding surface highlights the clickable picker area, with the native file input fully keyboard accessible.",
  tags: ["inputs","file","picker","accent","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputFilePickerAccent() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-file-picker-accent">
        <label className="inp30-label" htmlFor="input-file-picker-accent-inp30-input">Attachments</label>
        <div className="inp30-wrap">
          <i className="inp30-surface" aria-hidden="true"></i>
          <input className="inp30-control" id="input-file-picker-accent-inp30-input" type="file" multiple aria-describedby="input-file-picker-accent-inp30-help" />
        </div>
        <p className="inp30-help" id="input-file-picker-accent-inp30-help">PDF or PNG up to 10 MB each — chosen files are not uploaded by this demo.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-file-picker-accent">
        <label class="inp30-label" for="input-file-picker-accent-inp30-input">Attachments</label>
        <div class="inp30-wrap">
          <i class="inp30-surface" aria-hidden="true"></i>
          <input class="inp30-control" id="input-file-picker-accent-inp30-input" type="file" multiple aria-describedby="input-file-picker-accent-inp30-help">
        </div>
        <p class="inp30-help" id="input-file-picker-accent-inp30-help">PDF or PNG up to 10 MB each — chosen files are not uploaded by this demo.</p>
      </div>`,
};
