import type { HoverEffect } from "../types";

const css = `.he-btn-rail-registration{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1); /* Component tokens (safe to override per instance) */ --button-bg: #ffffff; --button-bg-hover: #f1f1eb; --button-fg: #1c1d1b; --button-accent: #2e6f5c; --button-accent-2: #8fb8a8; --button-accent-alt: #b0736a; --button-accent-soft: #e3efe8; --button-border: #c4c5bc; --button-radius: 10px; --button-veil: rgba(255, 255, 255, .5); --button-seam: rgba(255, 255, 255, .55); --button-line: rgba(28, 29, 27, .22); --duration: .24s; --travel: 3px;
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-btn-rail-registration, .he-btn-rail-registration *, .he-btn-rail-registration *::before, .he-btn-rail-registration *::after { box-sizing: border-box; }
.he-btn-rail-registration h2, .he-btn-rail-registration h3, .he-btn-rail-registration p, .he-btn-rail-registration figure, .he-btn-rail-registration ol, .he-btn-rail-registration ul { margin: 0; }
.he-btn-rail-registration h2, .he-btn-rail-registration h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-btn-rail-registration img, .he-btn-rail-registration svg { display: block; max-width: 100%; }
.he-btn-rail-registration a { color: inherit; }
.he-btn-rail-registration :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-btn-rail-registration { position: relative;
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
.he-btn-rail-registration:focus-visible { outline: 2px solid var(--button-accent); outline-offset: 3px; }
.he-btn-rail-registration:active:not(:disabled) { background: var(--button-bg-hover); border-color: var(--button-accent-2); }
.he-btn-rail-registration:disabled { cursor: not-allowed; color: var(--text-2); background: var(--surface-2); border-color: var(--line); }
.he-btn-rail-registration .label, .he-btn-rail-registration .label-stack { position: relative; overflow-wrap: break-word; }
.he-btn-rail-registration .surface { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }
.he-btn-rail-registration .deco { pointer-events: none; }
.he-btn-rail-registration:disabled .deco { transition: none; }
.he-btn-rail-registration { --duration: .24s; --travel: 4px; }
.he-btn-rail-registration .rail { position: absolute;
  left: 14px;
  right: 14px;
  height: 2px;
  border-radius: 2px;
  background: var(--button-accent);
  opacity: .55;
  transition: transform var(--duration) var(--ease), opacity var(--duration) var(--ease); }
.he-btn-rail-registration .rail-top { top: 7px; transform: translateX(calc(var(--travel) * -1)); }
.he-btn-rail-registration .rail-bottom { bottom: 7px; transform: translateX(var(--travel)); }
@media (hover: hover) and (pointer: fine) {
.he-btn-rail-registration:not(:disabled):hover .rail { transform: translateX(0); opacity: .85; }


}
.he-btn-rail-registration:not(:disabled):focus-visible .rail { transform: translateX(0); opacity: .85; }

/* Reduced motion: sequences stop; the settled state applies instantly
   and focus / pressed feedback stay visible. */
@media (prefers-reduced-motion: reduce) {
  .he-btn-rail-registration, .he-btn-rail-registration *, .he-btn-rail-registration *::before, .he-btn-rail-registration *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const btnRailRegistration: HoverEffect = {
  id: "btn-rail-registration",
  title: "Rail Registration",
  category: "buttons",
  description: "Two thin edge rails sit slightly out of register at rest and slide in opposite directions into alignment on hover.",
  tags: ["buttons","rail","registration","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function BtnRailRegistration() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-btn-rail-registration" type="button">
        <span className="surface" aria-hidden="true">
          <span className="rail rail-top deco"></span>
          <span className="rail rail-bottom deco"></span>
        </span>
        <span className="label">Create project</span>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-btn-rail-registration" type="button">
        <span class="surface" aria-hidden="true">
          <span class="rail rail-top deco"></span>
          <span class="rail rail-bottom deco"></span>
        </span>
        <span class="label">Create project</span>
      </button>`,
};
