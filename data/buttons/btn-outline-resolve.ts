import type { HoverEffect } from "../types";

const css = `.he-btn-outline-resolve{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-outline-resolve, .he-btn-outline-resolve *, .he-btn-outline-resolve *::before, .he-btn-outline-resolve *::after { box-sizing: border-box; }
.he-btn-outline-resolve h2, .he-btn-outline-resolve h3, .he-btn-outline-resolve p, .he-btn-outline-resolve figure, .he-btn-outline-resolve ol, .he-btn-outline-resolve ul { margin: 0; }
.he-btn-outline-resolve h2, .he-btn-outline-resolve h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-outline-resolve img, .he-btn-outline-resolve svg { display: block; max-width: 100%; }
.he-btn-outline-resolve a { color: inherit; }
.he-btn-outline-resolve :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-outline-resolve { position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 44px;
  padding: 11px 22px;
  border: 1px solid var(--button-border);
  border-radius: var(--button-radius);
  background: var(--button-bg);
  color: var(--button-fg);
  font: inherit;
  font-size: .92rem;
  font-weight: 650;
  letter-spacing: .01em;
  line-height: 1.25;
  text-align: center;
  cursor: pointer;
  isolation: isolate;
  transition: border-color .2s var(--ease), background-color .2s var(--ease); }
.he-btn-outline-resolve:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-outline-resolve:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-outline-resolve:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-outline-resolve .label, .he-btn-outline-resolve .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-outline-resolve .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-outline-resolve .deco { pointer-events: none; }
.he-btn-outline-resolve:disabled .deco { transition: none; }
.he-btn-outline-resolve { --duration: .24s; }
.he-btn-outline-resolve .label-stack { display: inline-grid; }
.he-btn-outline-resolve .label-stack > * { grid-area: 1 / 1; }
.he-btn-outline-resolve .resolve { color: transparent;
  -webkit-text-stroke: 1px var(--button-accent);
  opacity: .3;
  transition: opacity var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-outline-resolve:not(:disabled):hover .resolve { opacity: .9; }


}
.he-btn-outline-resolve:not(:disabled):focus-visible .resolve { opacity: .9; }
@supports not (-webkit-text-stroke: 1px #000) {
.he-btn-outline-resolve .resolve { -webkit-text-stroke: 0; color: var(--button-accent); opacity: .18; }


}

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-outline-resolve, .he-btn-outline-resolve *, .he-btn-outline-resolve *::before, .he-btn-outline-resolve *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnOutlineResolve: HoverEffect = {
  id: "btn-outline-resolve",
  title: "Outline Resolve",
  category: "buttons",
  description: "A centred outline sharpens from a faint trace to full strength on hover.",
  tags: ["buttons","outline","resolve","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnOutlineResolve() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-outline-resolve" type="button">
        <span className="label-stack">
          <span className="label">Review draft</span>
          <span className="resolve deco" aria-hidden="true">Review draft</span>
        </span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-outline-resolve" type="button">
        <span class="label-stack">
          <span class="label">Review draft</span>
          <span class="resolve deco" aria-hidden="true">Review draft</span>
        </span>
      </button>`,
};
