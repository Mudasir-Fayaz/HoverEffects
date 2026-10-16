import type { HoverEffect } from "../types";

const css = `.he-btn-frost-veil{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-frost-veil, .he-btn-frost-veil *, .he-btn-frost-veil *::before, .he-btn-frost-veil *::after { box-sizing: border-box; }
.he-btn-frost-veil h2, .he-btn-frost-veil h3, .he-btn-frost-veil p, .he-btn-frost-veil figure, .he-btn-frost-veil ol, .he-btn-frost-veil ul { margin: 0; }
.he-btn-frost-veil h2, .he-btn-frost-veil h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-frost-veil img, .he-btn-frost-veil svg { display: block; max-width: 100%; }
.he-btn-frost-veil a { color: inherit; }
.he-btn-frost-veil :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-frost-veil { position: relative;
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
.he-btn-frost-veil:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-frost-veil:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-frost-veil:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-frost-veil .label, .he-btn-frost-veil .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-frost-veil .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-frost-veil .deco { pointer-events: none; }
.he-btn-frost-veil:disabled .deco { transition: none; }
.he-btn-frost-veil { --duration: .28s; }
.he-btn-frost-veil .veil { position: absolute;
  inset: 0;
  background: var(--button-veil);
  opacity: .4;
  transition: opacity var(--duration) var(--ease); }
@media (hover: hover) and (pointer: fine) {
.he-btn-frost-veil:not(:disabled):hover .veil { opacity: .15; }


}
.he-btn-frost-veil:not(:disabled):focus-visible .veil { opacity: .15; }


.he-btn-frost-veil .veil{opacity:.65;background:linear-gradient(120deg,var(--button-veil),var(--button-veil) 42%,rgba(255,255,255,.9) 58%,var(--button-veil))}
.he-btn-frost-veil:not(:disabled){transition:border-color .2s var(--ease),background-color .2s var(--ease),box-shadow .3s var(--ease)}
.he-btn-frost-veil:not(:disabled):hover .veil,.he-btn-frost-veil:not(:disabled):focus-visible .veil{opacity:0}
.he-btn-frost-veil:not(:disabled):hover{background:color-mix(in srgb,var(--button-accent-soft) 30%,var(--button-bg));border-color:color-mix(in srgb,var(--button-accent) 45%,var(--button-border));box-shadow:0 0 0 1px color-mix(in srgb,var(--button-accent) 30%,transparent),0 6px 18px -8px color-mix(in srgb,var(--button-accent) 32%,transparent)}
.he-btn-frost-veil:not(:disabled):focus-visible{background:color-mix(in srgb,var(--button-accent-soft) 30%,var(--button-bg));border-color:color-mix(in srgb,var(--button-accent) 45%,var(--button-border));box-shadow:0 0 0 1px color-mix(in srgb,var(--button-accent) 30%,transparent)}
/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-frost-veil, .he-btn-frost-veil *, .he-btn-frost-veil *::before, .he-btn-frost-veil *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnFrostVeil: HoverEffect = {
  id: "btn-frost-veil",
  title: "Frost Veil",
  category: "buttons",
  description: "A stationary veil thins to sharpen the base colour on hover.",
  tags: ["buttons","frost","veil","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnFrostVeil() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-frost-veil" type="button">
        <span className="surface" aria-hidden="true">
          <span className="veil deco"></span>
        </span>
        <span className="label">Open catalog</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-frost-veil" type="button">
        <span class="surface" aria-hidden="true">
          <span class="veil deco"></span>
        </span>
        <span class="label">Open catalog</span>
      </button>`,
};
