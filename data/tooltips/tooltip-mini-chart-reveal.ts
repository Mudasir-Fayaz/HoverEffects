import type { HoverEffect } from "../types";

const css = `.he-tooltip-mini-chart-reveal{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-tooltip-mini-chart-reveal, .he-tooltip-mini-chart-reveal *, .he-tooltip-mini-chart-reveal *::before, .he-tooltip-mini-chart-reveal *::after { box-sizing: border-box; }
.he-tooltip-mini-chart-reveal h2, .he-tooltip-mini-chart-reveal h3, .he-tooltip-mini-chart-reveal p, .he-tooltip-mini-chart-reveal figure, .he-tooltip-mini-chart-reveal ol, .he-tooltip-mini-chart-reveal ul { margin: 0; }
.he-tooltip-mini-chart-reveal h2, .he-tooltip-mini-chart-reveal h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-tooltip-mini-chart-reveal img, .he-tooltip-mini-chart-reveal svg { display: block; max-width: 100%; }
.he-tooltip-mini-chart-reveal a { color: inherit; }
.he-tooltip-mini-chart-reveal :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-tooltip-mini-chart-reveal { position: relative; display: inline-flex; }
.he-tooltip-mini-chart-reveal .tip-trigger {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 13px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  font-size: .85rem; font-weight: 650;
  text-decoration: none;
  transition: border-color .2s var(--ease), color .2s var(--ease);
}
.he-tooltip-mini-chart-reveal .tip-trigger:hover { border-color: var(--accent-2); }
.he-tooltip-mini-chart-reveal .tip-bubble {
  position: absolute;
  bottom: calc(100% + 10px); left: 50%;
  z-index: 2;
  width: max-content;
  max-width: 250px;
  padding: 9px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  box-shadow: var(--shadow);
  color: var(--text);
  font-size: .78rem;
  line-height: 1.45;
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transform: var(--tf-closed, translateX(-50%));
  transition: opacity var(--td-op, .2s) var(--ease), transform var(--td-tr, .24s) var(--ease);
}
.he-tooltip-mini-chart-reveal .tip-bubble.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: var(--tf-open, translateX(-50%));
}
.he-tooltip-mini-chart-reveal .tip-bubble::before {
  content: "";
  position: absolute;
  top: 100%; height: 12px;
}
.he-tooltip-mini-chart-reveal .tip-arrow {
  position: absolute;
  width: 9px; height: 9px;
  background: var(--surface);
  bottom: -5px; left: 50%; margin-left: -5px; transform: rotate(45deg); border-right: 1px solid var(--line-strong); border-bottom: 1px solid var(--line-strong);
}
.he-tooltip-mini-chart-reveal .tip-chart {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 26px;
  margin-top: 8px;
  padding-top: 4px;
  border-top: 1px solid var(--line);
}
.he-tooltip-mini-chart-reveal .tip-chart i {
  flex: 1;
  height: var(--h, 50%);
  border-radius: 3px;
  background: var(--accent-2);
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: transform .3s var(--ease-out);
  transition-delay: calc(var(--i, 0) * 45ms + 60ms);
}
.he-tooltip-mini-chart-reveal .tip-bubble.is-open .tip-chart i { transform: scaleY(1); }
.he-tooltip-mini-chart-reveal .tip-chart-note { display: block; margin-top: 5px; color: var(--text-2); font-size: .68rem; }
.he-tooltip-mini-chart-reveal .tip-text { position: relative; display: block; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-tooltip-mini-chart-reveal, .he-tooltip-mini-chart-reveal *, .he-tooltip-mini-chart-reveal *::before, .he-tooltip-mini-chart-reveal *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const tooltipMiniChartReveal: HoverEffect = {
  id: "tooltip-mini-chart-reveal",
  title: "Mini Chart Reveal",
  category: "tooltips",
  description: "A decorative labelled chart grows its bars to existing sample values while the explanation stays visible.",
  tags: ["tooltips","mini","chart","reveal","hover"],
  animationType: "opacity",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function TooltipMiniChartReveal() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const trigger = root.querySelector(".tip-trigger") as HTMLAnchorElement | null;
    const bubble = root.querySelector(".tip-bubble") as HTMLElement | null;
    if (!trigger || !bubble) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const HOVER_DELAY = 80;

    const enabled = true;
    const state = { hover: false, focus: false, suppressed: false, timer: 0, open: false };
    const openChange: (next: boolean) => void = () => {};

    const setOpen = (next: boolean) => {
      if (state.open === next) return;
      state.open = next;
      bubble.classList.toggle("is-open", next);
      openChange(next);
    };

    const maybeOpen = () => {
      if (!enabled || state.suppressed) return;
      if (state.focus) {
        setOpen(true);
        return;
      }
      if (state.hover) {
        window.clearTimeout(state.timer);
        state.timer = window.setTimeout(() => {
          state.timer = 0;
          if (enabled && state.hover && !state.suppressed) setOpen(true);
        }, HOVER_DELAY);
      }
    };

    const maybeClose = () => {
      window.clearTimeout(state.timer);
      state.timer = 0;
      if (!state.hover && !state.focus) setOpen(false);
    };

    const onPointerEnter = (event: PointerEvent) => {
      if (!finePointer.matches && event.pointerType !== "touch") return;
      state.hover = true;
      state.suppressed = false;
      maybeOpen();
    };
    const onPointerLeave = (event: PointerEvent) => {
      state.hover = false;
      state.suppressed = false;
      if (event.pointerType === "touch") {
        // Touch pointers vanish on release. Wait a beat so the tap
        // activation layer can re-enter before the bubble closes.
        window.clearTimeout(state.timer);
        state.timer = window.setTimeout(() => {
          state.timer = 0;
          // A tap focuses the trigger, but on touch the bubble should close
          // with the activation window — not stay pinned by that focus.
          if (!state.hover) setOpen(false);
        }, 420);
        return;
      }
      maybeClose();
    };
    const onFocusIn = () => {
      state.focus = true;
      state.suppressed = false;
      maybeOpen();
    };
    const onFocusOut = () => {
      state.focus = false;
      state.suppressed = false;
      maybeClose();
    };
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !state.open) return;
      setOpen(false);
      if (state.hover || state.focus) state.suppressed = true;
    };
    root.addEventListener("pointerenter", onPointerEnter);
    root.addEventListener("pointerleave", onPointerLeave);
    root.addEventListener("focusin", onFocusIn);
    root.addEventListener("focusout", onFocusOut);
    root.addEventListener("keydown", onKeydown);
    return () => {
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("focusin", onFocusIn);
      root.removeEventListener("focusout", onFocusOut);
      root.removeEventListener("keydown", onKeydown);
      window.clearTimeout(state.timer);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <div ref={rootRef} className="he-tooltip-mini-chart-reveal" data-tip>
        <a className="tip-trigger" href="https://example.com" aria-describedby="tooltip-mini-chart-reveal-tip27-bubble">Traffic split</a>
        <span className="tip-bubble" id="tooltip-mini-chart-reveal-tip27-bubble" role="tooltip"><span className="tip-text">Version 2 now serves most requests.<span className="tip-chart" aria-hidden="true"><i style={{ ["--h" as string]: "34%", ["--i" as string]: "0" }}></i><i style={{ ["--h" as string]: "52%", ["--i" as string]: "1" }}></i><i style={{ ["--h" as string]: "44%", ["--i" as string]: "2" }}></i><i style={{ ["--h" as string]: "78%", ["--i" as string]: "3" }}></i><i style={{ ["--h" as string]: "100%", ["--i" as string]: "4" }}></i></span><span className="tip-chart-note">Sample data · last 5 releases</span></span><i className="tip-arrow" aria-hidden="true"></i></span>
      </div>
    </>
  );
}`,
  html: `<style>${css}</style>
<div class="he-tooltip-mini-chart-reveal" data-tip>
        <a class="tip-trigger" href="https://example.com" aria-describedby="tooltip-mini-chart-reveal-tip27-bubble">Traffic split</a>
        <span class="tip-bubble" id="tooltip-mini-chart-reveal-tip27-bubble" role="tooltip"><span class="tip-text">Version 2 now serves most requests.<span class="tip-chart" aria-hidden="true"><i style="--h: 34%; --i: 0"></i><i style="--h: 52%; --i: 1"></i><i style="--h: 44%; --i: 2"></i><i style="--h: 78%; --i: 3"></i><i style="--h: 100%; --i: 4"></i></span><span class="tip-chart-note">Sample data · last 5 releases</span></span><i class="tip-arrow" aria-hidden="true"></i></span>
      </div>
<script>(function(){'use strict';var root=document.querySelector('.he-tooltip-mini-chart-reveal');if(!root)return;var trigger=root.querySelector('.tip-trigger');var bubble=root.querySelector('.tip-bubble');if(!trigger||!bubble)return;var finePointer=matchMedia('(hover: hover) and (pointer: fine)');var HOVER_DELAY=80;var enabled=true;var state={hover:false,focus:false,suppressed:false,timer:0,open:false};var hook=null;function setOpen(next){if(state.open===next)return;state.open=next;bubble.classList.toggle('is-open',next);if(hook)hook(next)}function maybeOpen(){if(!enabled||state.suppressed)return;if(state.focus){setOpen(true);return}if(state.hover){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(enabled&&state.hover&&!state.suppressed)setOpen(true)},HOVER_DELAY)}}function maybeClose(){clearTimeout(state.timer);state.timer=0;if(!state.hover&&!state.focus)setOpen(false)}function onPointerEnter(e){if(!finePointer.matches&&e.pointerType!=='touch')return;state.hover=true;state.suppressed=false;maybeOpen()}function onPointerLeave(e){state.hover=false;state.suppressed=false;if(e.pointerType==='touch'){clearTimeout(state.timer);state.timer=setTimeout(function(){state.timer=0;if(!state.hover)setOpen(false)},420);return}maybeClose()}function onFocusIn(){state.focus=true;state.suppressed=false;maybeOpen()}function onFocusOut(){state.focus=false;state.suppressed=false;maybeClose()}function onKeydown(event){if(event.key!=='Escape'||!state.open)return;setOpen(false);if(state.hover||state.focus)state.suppressed=true}root.addEventListener('pointerenter',onPointerEnter);root.addEventListener('pointerleave',onPointerLeave);root.addEventListener('focusin',onFocusIn);root.addEventListener('focusout',onFocusOut);root.addEventListener('keydown',onKeydown);})();</script>`,
};
