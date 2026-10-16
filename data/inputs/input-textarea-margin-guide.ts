import type { HoverEffect } from "../types";

const css = `.he-input-textarea-margin-guide{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-input-textarea-margin-guide, .he-input-textarea-margin-guide *, .he-input-textarea-margin-guide *::before, .he-input-textarea-margin-guide *::after { box-sizing: border-box; }
.he-input-textarea-margin-guide h2, .he-input-textarea-margin-guide h3, .he-input-textarea-margin-guide p, .he-input-textarea-margin-guide figure, .he-input-textarea-margin-guide ol, .he-input-textarea-margin-guide ul { margin: 0; }
.he-input-textarea-margin-guide h2, .he-input-textarea-margin-guide h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-input-textarea-margin-guide img, .he-input-textarea-margin-guide svg { display: block; max-width: 100%; }
.he-input-textarea-margin-guide a { color: inherit; }
.he-input-textarea-margin-guide :focus-visible { outline: 2px solid color-mix(in srgb, var(--accent) 45%, transparent); outline-offset: 2px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-input-textarea-margin-guide { max-width: 380px; }
.inp26-label { display: block; margin-bottom: 6px; color: var(--text); font-size: .8rem; font-weight: 650; }
.inp26-wrap { position: relative; }
.inp26-guide {
  position: absolute;
  left: 9px;
  top: 9px;
  bottom: 9px;
  width: 2px;
  border-radius: 2px;
  background: var(--accent-2);
  opacity: .25;
  transition: opacity .24s var(--ease);
  pointer-events: none;
}
.inp26-control {
  width: 100%;
  min-height: 104px;
  padding: 10px 12px 10px 20px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: .88rem;
  line-height: 1.5;
  resize: vertical;
}
@media (hover: hover) and (pointer: fine) {
  .inp26-wrap:hover .inp26-guide { opacity: .9; }
}
.inp26-wrap:focus-within .inp26-guide { opacity: .9; }
.inp26-help { margin-top: 6px; color: var(--text-2); font-size: .76rem; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-input-textarea-margin-guide, .he-input-textarea-margin-guide *, .he-input-textarea-margin-guide *::before, .he-input-textarea-margin-guide *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const inputTextareaMarginGuide: HoverEffect = {
  id: "input-textarea-margin-guide",
  title: "Textarea Margin Guide",
  category: "inputs",
  description: "A decorative inset guide becomes more apparent without entering the text area or blocking resize.",
  tags: ["inputs","textarea","margin","guide","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function InputTextareaMarginGuide() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <div className="field he-input-textarea-margin-guide">
        <label className="inp26-label" htmlFor="input-textarea-margin-guide-inp26-input">Release notes</label>
        <div className="inp26-wrap">
          <i className="inp26-guide" aria-hidden="true"></i>
          <textarea className="inp26-control" id="input-textarea-margin-guide-inp26-input" rows={4} placeholder="What changed in this release?" aria-describedby="input-textarea-margin-guide-inp26-help"></textarea>
        </div>
        <p className="inp26-help" id="input-textarea-margin-guide-inp26-help">Markdown is supported; drag the corner to resize.</p>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="field he-input-textarea-margin-guide">
        <label class="inp26-label" for="input-textarea-margin-guide-inp26-input">Release notes</label>
        <div class="inp26-wrap">
          <i class="inp26-guide" aria-hidden="true"></i>
          <textarea class="inp26-control" id="input-textarea-margin-guide-inp26-input" rows="4" placeholder="What changed in this release?" aria-describedby="input-textarea-margin-guide-inp26-help"></textarea>
        </div>
        <p class="inp26-help" id="input-textarea-margin-guide-inp26-help">Markdown is supported; drag the corner to resize.</p>
      </div>`,
};
