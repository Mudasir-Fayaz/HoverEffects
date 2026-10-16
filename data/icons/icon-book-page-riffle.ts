import type { HoverEffect } from "../types";

const css = `.he-icon-book-page-riffle{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --plate-a: #b0736a; --plate-b: #6f8ea8; --radius: 12px; --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-icon-book-page-riffle, .he-icon-book-page-riffle *, .he-icon-book-page-riffle *::before, .he-icon-book-page-riffle *::after { box-sizing: border-box; }
.he-icon-book-page-riffle h2, .he-icon-book-page-riffle h3, .he-icon-book-page-riffle p, .he-icon-book-page-riffle figure, .he-icon-book-page-riffle ol, .he-icon-book-page-riffle ul { margin: 0; }
.he-icon-book-page-riffle img, .he-icon-book-page-riffle svg { display: block; max-width: 100%; }
.he-icon-book-page-riffle a { color: inherit; }
.he-icon-book-page-riffle :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-icon-book-page-riffle {
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
.he-icon-book-page-riffle:hover { border-color: var(--accent-2); }
.he-icon-book-page-riffle:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.he-icon-book-page-riffle:active { border-color: var(--accent); }
.hi11-icon { display: block; }
.hi11-e {
  transform: translateX(0);
  transition: transform .2s var(--ease-out);
  transition-delay: calc((2 - var(--i, 0)) * 45ms);
}
@media (hover: hover) and (pointer: fine) {
  .he-icon-book-page-riffle:hover .hi11-e {
    transform: translateX(1.8px);
    transition-delay: calc(var(--i, 0) * 55ms);
  }
}
.he-icon-book-page-riffle:focus-visible .hi11-e {
  transform: translateX(1.8px);
  transition-delay: calc(var(--i, 0) * 55ms);
}

/* Reduced motion: keyframes, strokes and tracking stop; a static
   accent state and the focus/pressed feedback remain. */
@media (prefers-reduced-motion: reduce) {
  .he-icon-book-page-riffle, .he-icon-book-page-riffle *, .he-icon-book-page-riffle *::before, .he-icon-book-page-riffle *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

}`;

export const iconBookPageRiffle: HoverEffect = {
  id: "icon-book-page-riffle",
  title: "Book Page Riffle",
  category: "icons",
  description: "Page-edge marks riffle and settle back",
  tags: ["icons","book","page","riffle","hover"],
  animationType: "transform",
  complexity: "simple",
  css,
  react: `export default function IconBookPageRiffle() {
  return (
    <>
      <style>{\`${css}\`}</style>
      <button className="he-icon-book-page-riffle" type="button">
        <svg className="hi11-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 7.1c-.9-.7-2.1-1.1-3.6-1.1H6.2c-.8 0-1.5.7-1.5 1.5v9.2c0 .8.7 1.5 1.5 1.5h2.2c1.5 0 2.7.4 3.6 1.1.9-.7 2.1-1.1 3.6-1.1h2.2c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5h-2.2c-1.5 0-2.7.4-3.6 1.1z" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 7.4v11.8" stroke="var(--text-2)" strokeWidth="1.3" opacity=".7" />
          <g stroke="var(--accent-2)" strokeWidth="1.6" strokeLinecap="round">
            <path className="hi11-e" style={{ ["--i" as string]: "0" }} d="M18.7 10.1h2" />
            <path className="hi11-e" style={{ ["--i" as string]: "1" }} d="M18.7 12.3h2" />
            <path className="hi11-e" style={{ ["--i" as string]: "2" }} d="M18.7 14.5h2" />
          </g>
        </svg>
      </button>
    </>
  );
}`,
  html: `<style>${css}</style>
<button class="he-icon-book-page-riffle" type="button">
        <svg class="hi11-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 7.1c-.9-.7-2.1-1.1-3.6-1.1H6.2c-.8 0-1.5.7-1.5 1.5v9.2c0 .8.7 1.5 1.5 1.5h2.2c1.5 0 2.7.4 3.6 1.1.9-.7 2.1-1.1 3.6-1.1h2.2c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5h-2.2c-1.5 0-2.7.4-3.6 1.1z" stroke="var(--text-2)" stroke-width="1.7" stroke-linejoin="round"/>
          <path d="M12 7.4v11.8" stroke="var(--text-2)" stroke-width="1.3" opacity=".7"/>
          <g stroke="var(--accent-2)" stroke-width="1.6" stroke-linecap="round">
            <path class="hi11-e" style="--i: 0" d="M18.7 10.1h2"/>
            <path class="hi11-e" style="--i: 1" d="M18.7 12.3h2"/>
            <path class="hi11-e" style="--i: 2" d="M18.7 14.5h2"/>
          </g>
        </svg>
      </button>`,
};
