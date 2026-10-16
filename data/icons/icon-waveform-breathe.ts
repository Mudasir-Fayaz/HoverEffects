import type { HoverEffect } from "../types";

const css = `.he-icon-waveform-breathe{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-waveform-breathe, .he-icon-waveform-breathe *, .he-icon-waveform-breathe *::before, .he-icon-waveform-breathe *::after { box-sizing: border-box; }
.he-icon-waveform-breathe h2, .he-icon-waveform-breathe h3, .he-icon-waveform-breathe p, .he-icon-waveform-breathe figure, .he-icon-waveform-breathe ol, .he-icon-waveform-breathe ul { margin: 0; }
.he-icon-waveform-breathe img, .he-icon-waveform-breathe svg { display: block; max-width: 100%; }
.he-icon-waveform-breathe a { color: inherit; }
.he-icon-waveform-breathe :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-waveform-breathe {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-2);
  cursor: pointer;
  transition: border-color .2s var(--ease);
}
.he-icon-waveform-breathe:hover { border-color: var(--accent-2); }
.he-icon-waveform-breathe:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-waveform-breathe:active { border-color: var(--accent); }
.hi15-icon { display: block; }
.hi15-b {
  transform-box: fill-box;
  transform-origin: center;
  transform: scaleY(.34);
  transition: transform .3s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-waveform-breathe:hover .hi15-b {
    transform: scaleY(var(--s, 1));
    transition-delay: var(--d, 0ms);
  }
}
.he-icon-waveform-breathe:focus-visible .hi15-b {
  transform: scaleY(var(--s, 1));
  transition-delay: var(--d, 0ms);
}

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-waveform-breathe, .he-icon-waveform-breathe *, .he-icon-waveform-breathe *::before, .he-icon-waveform-breathe *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconWaveformBreathe: HoverEffect = {
  id: "icon-waveform-breathe",
  title: "Waveform Breathe",
  category: "icons",
  description: "Bars change amplitude centre-out",
  tags: ["icons","waveform","breathe","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconWaveformBreathe() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-waveform-breathe" type="button">
        <svg className="hi15-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.6 12h16.8" stroke="var(--line-strong)" strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
          <g fill="var(--accent-2)">
            <rect className="hi15-b" style={{ ["--s" as string]: ".55", ["--d" as string]: "0ms" }} x="4.9" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".75", ["--d" as string]: "40ms" }} x="7.7" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".95", ["--d" as string]: "80ms" }} x="10.5" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: "1", ["--d" as string]: "120ms" }} x="13.3" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".95", ["--d" as string]: "80ms" }} x="16.1" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".75", ["--d" as string]: "40ms" }} x="18.9" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".55", ["--d" as string]: "0ms" }} x="21.7" y="7" width="1.7" height="10" rx=".85" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-waveform-breathe" type="button">
        <svg class="hi15-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.6 12h16.8" stroke="var(--line-strong)" stroke-width="1.4" stroke-linecap="round" opacity=".7"/>
          <g fill="var(--accent-2)">
            <rect class="hi15-b" style="--s: .55; --d: 0ms" x="4.9" y="7" width="1.7" height="10" rx=".85"/>
            <rect class="hi15-b" style="--s: .75; --d: 40ms" x="7.7" y="7" width="1.7" height="10" rx=".85"/>
            <rect class="hi15-b" style="--s: .95; --d: 80ms" x="10.5" y="7" width="1.7" height="10" rx=".85"/>
            <rect class="hi15-b" style="--s: 1; --d: 120ms" x="13.3" y="7" width="1.7" height="10" rx=".85"/>
            <rect class="hi15-b" style="--s: .95; --d: 80ms" x="16.1" y="7" width="1.7" height="10" rx=".85"/>
            <rect class="hi15-b" style="--s: .75; --d: 40ms" x="18.9" y="7" width="1.7" height="10" rx=".85"/>
            <rect class="hi15-b" style="--s: .55; --d: 0ms" x="21.7" y="7" width="1.7" height="10" rx=".85"/>
          </g>
        </svg>
      </button>`,
};
