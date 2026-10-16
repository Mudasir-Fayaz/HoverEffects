import type { HoverEffect } from "../types";

const css = `.he-badge-directional-wash{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-directional-wash, .he-badge-directional-wash *, .he-badge-directional-wash *::before, .he-badge-directional-wash *::after { box-sizing: border-box; }
.he-badge-directional-wash h2, .he-badge-directional-wash h3, .he-badge-directional-wash p, .he-badge-directional-wash figure, .he-badge-directional-wash ol, .he-badge-directional-wash ul { margin: 0; }
.he-badge-directional-wash h2, .he-badge-directional-wash h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-directional-wash img, .he-badge-directional-wash svg { display: block; max-width: 100%; }
.he-badge-directional-wash a { color: inherit; }
.he-badge-directional-wash :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-directional-wash {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 13px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  font-size: .75rem;
  font-weight: 650;
  text-decoration: none;
  overflow: hidden;
  isolation: isolate;
}
.bdg35-fill {
  will-change: transform;
  position: absolute;
  inset: 0;
  background: var(--accent-soft);
  opacity: 0;
  transform: translate(var(--dx, 0%), var(--dy, 101%));
  transition: transform .34s var(--ease), opacity .3s var(--ease);
  pointer-events: none;
}
.he-badge-directional-wash.is-active .bdg35-fill {
  opacity: 1;
  transform: translate(0%, 0%);
  transition: transform .34s var(--ease), opacity .16s var(--ease);
}
.bdg35-label { position: relative; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-directional-wash, .he-badge-directional-wash *, .he-badge-directional-wash *::before, .he-badge-directional-wash *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgeDirectionalWash: HoverEffect = {
  id: "badge-directional-wash",
  title: "Directional Wash",
  category: "badges",
  description: "The fill layer enters from the nearest pointer-entry edge and leaves through the departure edge; focus uses a fixed left entry.",
  tags: ["badges","directional","wash","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function BadgeDirectionalWash() {
  const rootRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const badge = rootRef.current;
    if (!badge) return;
    const fill = badge.querySelector(".bdg35-fill") as HTMLElement | null;
    if (!fill) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const EDGES = {
      top: { x: "0%", y: "-101%" },
      right: { x: "101%", y: "0%" },
      bottom: { x: "0%", y: "101%" },
      left: { x: "-101%", y: "0%" },
    } as const;
    type Edge = keyof typeof EDGES;

    let rect: DOMRect | null = null;
    let pointerLive = false;

    const measure = () => {
      rect = badge.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };
    const edgeFor = (clientX: number, clientY: number): Edge => {
      if (!rect) measure();
      const box = rect as DOMRect;
      const x = clientX - box.left;
      const y = clientY - box.top;
      const d: Record<string, number> = {
        top: y,
        right: box.width - x,
        bottom: box.height - y,
        left: x,
      };
      let nearest: Edge = "top";
      for (const key of Object.keys(d) as Edge[]) {
        if (d[key] < d[nearest]) nearest = key;
      }
      return nearest;
    };
    const place = (edge: Edge) => {
      fill.style.setProperty("--dx", EDGES[edge].x);
      fill.style.setProperty("--dy", EDGES[edge].y);
    };
    const activate = (edge: Edge) => {
      place(edge);
      void fill.offsetWidth;
      badge.classList.add("is-active");
    };
    const deactivate = (edge: Edge) => {
      place(edge);
      badge.classList.remove("is-active");
    };
    const onEnter = (event: PointerEvent) => {
      if (reduce.matches || (!fine.matches && event.pointerType !== "touch")) return;
      measure();
      pointerLive = true;
      activate(edgeFor(event.clientX, event.clientY));
    };
    const onLeave = (event: PointerEvent) => {
      if (!pointerLive) return;
      pointerLive = false;
      deactivate(edgeFor(event.clientX, event.clientY));
    };
    const onCancel = () => {
      if (!pointerLive) return;
      pointerLive = false;
      deactivate("bottom");
    };
    const onFocusIn = () => {
      if (reduce.matches || pointerLive) return;
      activate("left");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (reduce.matches || pointerLive) return;
      if (!badge.contains(event.relatedTarget as Node | null)) deactivate("left");
    };
    badge.addEventListener("pointerenter", onEnter);
    badge.addEventListener("pointerleave", onLeave);
    badge.addEventListener("pointercancel", onCancel);
    badge.addEventListener("focusin", onFocusIn);
    badge.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);
    return () => {
      badge.removeEventListener("pointerenter", onEnter);
      badge.removeEventListener("pointerleave", onLeave);
      badge.removeEventListener("pointercancel", onCancel);
      badge.removeEventListener("focusin", onFocusIn);
      badge.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <a ref={rootRef} className="he-badge-directional-wash" href="https://example.com"><i className="bdg35-fill" aria-hidden="true"></i><span className="bdg35-label">Deep dive</span></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-directional-wash" href="https://example.com"><i class="bdg35-fill" aria-hidden="true"></i><span class="bdg35-label">Deep dive</span></a>
<script>(function(){var badge=document.querySelector('.he-badge-directional-wash');if(!badge)return;var fill=badge.querySelector('.bdg35-fill');var reduce=matchMedia('(prefers-reduced-motion: reduce)');var fine=matchMedia('(hover: hover) and (pointer: fine)');var EDGES={top:{x:'0%',y:'-101%'},right:{x:'101%',y:'0%'},bottom:{x:'0%',y:'101%'},left:{x:'-101%',y:'0%'}};var rect=null,pointerLive=false;function measure(){rect=badge.getBoundingClientRect()}function invalidate(){rect=null}function edgeFor(cx,cy){if(!rect)measure();var x=cx-rect.left,y=cy-rect.top,d={top:y,right:rect.width-x,bottom:rect.height-y,left:x},nearest='top';for(var key in d){if(d[key]<d[nearest])nearest=key}return nearest}function place(edge){fill.style.setProperty('--dx',EDGES[edge].x);fill.style.setProperty('--dy',EDGES[edge].y)}function activate(edge){place(edge);void fill.offsetWidth;badge.classList.add('is-active')}function deactivate(edge){place(edge);badge.classList.remove('is-active')}function onEnter(event){if(reduce.matches||(!fine.matches&&event.pointerType!=='touch'))return;measure();pointerLive=true;activate(edgeFor(event.clientX,event.clientY))}function onLeave(event){if(!pointerLive)return;pointerLive=false;deactivate(edgeFor(event.clientX,event.clientY))}function onCancel(){if(!pointerLive)return;pointerLive=false;deactivate('bottom')}badge.addEventListener('pointerenter',onEnter);badge.addEventListener('pointerleave',onLeave);badge.addEventListener('pointercancel',onCancel);badge.addEventListener('focusin',function(){if(reduce.matches||pointerLive)return;activate('left')});badge.addEventListener('focusout',function(event){if(reduce.matches||pointerLive)return;if(!badge.contains(event.relatedTarget))deactivate('left')});window.addEventListener('resize',invalidate);window.addEventListener('scroll',invalidate,true)})();</script>`,
};
