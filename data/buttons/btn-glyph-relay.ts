import type { HoverEffect } from "../types";

const css = `.he-btn-glyph-relay{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-glyph-relay, .he-btn-glyph-relay *, .he-btn-glyph-relay *::before, .he-btn-glyph-relay *::after { box-sizing: border-box; }
.he-btn-glyph-relay h2, .he-btn-glyph-relay h3, .he-btn-glyph-relay p, .he-btn-glyph-relay figure, .he-btn-glyph-relay ol, .he-btn-glyph-relay ul { margin: 0; }
.he-btn-glyph-relay h2, .he-btn-glyph-relay h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-glyph-relay img, .he-btn-glyph-relay svg { display: block; max-width: 100%; }
.he-btn-glyph-relay a { color: inherit; }
.he-btn-glyph-relay :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-glyph-relay { position: relative;
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
.he-btn-glyph-relay:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-glyph-relay:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-glyph-relay:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-glyph-relay .label, .he-btn-glyph-relay .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-glyph-relay .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-glyph-relay .deco { pointer-events: none; }
.he-btn-glyph-relay:disabled .deco { transition: none; }
.he-btn-glyph-relay .glyph { display: inline; }
@keyframes he-btn-glyph-relay-glyph-wave {
  0%, 100% { color: var(--button-fg); }
  45% { color: var(--button-accent); }
}
@media (hover: hover) and (pointer: fine) {
.he-btn-glyph-relay:not(:disabled):hover .glyph { animation: he-btn-glyph-relay-glyph-wave .42s var(--ease) 1;
    animation-delay: calc(min(var(--i, 0), 5) * 45ms); }


}
.he-btn-glyph-relay:not(:disabled):focus-visible .glyph { animation: he-btn-glyph-relay-glyph-wave .42s var(--ease) 1;
  animation-delay: calc(min(var(--i, 0), 5) * 45ms); }
.he-btn-glyph-relay:disabled .label, .he-btn-glyph-relay:disabled .glyphs { color: var(--text-2); }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-glyph-relay, .he-btn-glyph-relay *, .he-btn-glyph-relay *::before, .he-btn-glyph-relay *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnGlyphRelay: HoverEffect = {
  id: "btn-glyph-relay",
  title: "Glyph Relay",
  category: "buttons",
  description: "One accent wave travels through the letters on hover.",
  tags: ["buttons","glyph","relay","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnGlyphRelay() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-glyph-relay" type="button">
        <span className="glyphs" aria-hidden="true"><span className="glyph" style={{ ["--i" as string]: "0" }}>D</span><span className="glyph" style={{ ["--i" as string]: "1" }}>e</span><span className="glyph" style={{ ["--i" as string]: "2" }}>p</span><span className="glyph" style={{ ["--i" as string]: "3" }}>l</span><span className="glyph" style={{ ["--i" as string]: "4" }}>o</span><span className="glyph" style={{ ["--i" as string]: "5" }}>y</span></span>
        <span className="visually-hidden">Deploy</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-glyph-relay" type="button">
        <span class="glyphs" aria-hidden="true"><span class="glyph" style="--i: 0">D</span><span class="glyph" style="--i: 1">e</span><span class="glyph" style="--i: 2">p</span><span class="glyph" style="--i: 3">l</span><span class="glyph" style="--i: 4">o</span><span class="glyph" style="--i: 5">y</span></span>
        <span class="visually-hidden">Deploy</span>
      </button>`,
};
