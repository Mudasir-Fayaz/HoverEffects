import type { HoverEffect } from "../types";

const css = `.he-btn-word-relay{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-word-relay, .he-btn-word-relay *, .he-btn-word-relay *::before, .he-btn-word-relay *::after { box-sizing: border-box; }
.he-btn-word-relay h2, .he-btn-word-relay h3, .he-btn-word-relay p, .he-btn-word-relay figure, .he-btn-word-relay ol, .he-btn-word-relay ul { margin: 0; }
.he-btn-word-relay h2, .he-btn-word-relay h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-word-relay img, .he-btn-word-relay svg { display: block; max-width: 100%; }
.he-btn-word-relay a { color: inherit; }
.he-btn-word-relay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-word-relay { position: relative;
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
.he-btn-word-relay:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-word-relay:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-word-relay:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-word-relay .label, .he-btn-word-relay .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-word-relay .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-word-relay .deco { pointer-events: none; }
.he-btn-word-relay:disabled .deco { transition: none; }
.he-btn-word-relay { --duration: .18s; }
.he-btn-word-relay .word { transition: color var(--duration) var(--ease);
  transition-delay: calc((6 - var(--i, 0)) * 40ms); }
@media (hover: hover) and (pointer: fine) {
.he-btn-word-relay:not(:disabled):hover .word { color: var(--button-accent);
    transition-delay: calc(var(--i, 0) * 60ms); }


}
.he-btn-word-relay:not(:disabled):focus-visible .word { color: var(--button-accent);
  transition-delay: calc(var(--i, 0) * 60ms); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-word-relay, .he-btn-word-relay *, .he-btn-word-relay *::before, .he-btn-word-relay *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnWordRelay: HoverEffect = {
  id: "btn-word-relay",
  title: "Word Relay",
  category: "buttons",
  description: "Words accent in reading order, then settle evenly on hover.",
  tags: ["buttons","word","relay","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnWordRelay() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-word-relay" type="button">
        <span className="label"><span className="word" style={{ ["--i" as string]: "0" }}>Publish</span> <span className="word" style={{ ["--i" as string]: "1" }}>release</span></span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-word-relay" type="button">
        <span class="label"><span class="word" style="--i: 0">Publish</span> <span class="word" style="--i: 1">release</span></span>
      </button>`,
};
