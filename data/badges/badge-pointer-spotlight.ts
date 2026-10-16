import type { HoverEffect } from "../types";

const css = `.he-badge-pointer-spotlight{
  --surface: #ffffff; --surface-2: #ebebe5; --surface-3: #e2e2db; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --danger: #a2533f; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0 1px 2px rgb(18 22 19 / .05), 0 14px 34px -22px rgb(18 22 19 / .3); --ease: cubic-bezier(.22, 1, .36, 1); --ease-out: cubic-bezier(.16, 1, .3, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-badge-pointer-spotlight, .he-badge-pointer-spotlight *, .he-badge-pointer-spotlight *::before, .he-badge-pointer-spotlight *::after { box-sizing: border-box; }
.he-badge-pointer-spotlight h2, .he-badge-pointer-spotlight h3, .he-badge-pointer-spotlight p, .he-badge-pointer-spotlight figure, .he-badge-pointer-spotlight ol, .he-badge-pointer-spotlight ul { margin: 0; }
.he-badge-pointer-spotlight h2, .he-badge-pointer-spotlight h3 { line-height: 1.2; letter-spacing: -0.02em; }
.he-badge-pointer-spotlight img, .he-badge-pointer-spotlight svg { display: block; max-width: 100%; }
.he-badge-pointer-spotlight a { color: inherit; }
.he-badge-pointer-spotlight :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* ---------- Section 2 · Component -------------------------- */
.he-badge-pointer-spotlight {
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
}
.bdg34-glow {
  will-change: transform;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90px;
  height: 90px;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .3), transparent 72%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 36%, transparent), transparent 72%);
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: opacity .3s var(--ease);
  pointer-events: none;
}
.he-badge-pointer-spotlight.is-live .bdg34-glow { opacity: 1; }
.bdg34-label { position: relative; }

/* Reduced motion: state changes stay, movement is removed. */
@media (prefers-reduced-motion: reduce) {
  .he-badge-pointer-spotlight, .he-badge-pointer-spotlight *, .he-badge-pointer-spotlight *::before, .he-badge-pointer-spotlight *::after {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
}`;

export const badgePointerSpotlight: HoverEffect = {
  id: "badge-pointer-spotlight",
  title: "Pointer Spotlight",
  category: "badges",
  description: "A small radial highlight follows the pointer across the badge while the text stays perfectly still.",
  tags: ["badges","pointer","spotlight","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function BadgePointerSpotlight() {
  const rootRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const badge = rootRef.current;
    if (!badge) return;
    const glow = badge.querySelector(".bdg34-glow") as HTMLElement | null;
    if (!glow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let raf = 0;
    let live = false;
    let x = 0;
    let y = 0;

    const measure = () => {
      rect = badge.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };
    const frame = () => {
      raf = 0;
      if (!live || !rect) return;
      glow.style.transform = "translate3d(" + (x - rect.width / 2) + "px," + (y - rect.height / 2) + "px,0)";
    };
    const onEnter = (event: PointerEvent) => {
      if (!fine.matches || reduce.matches || event.pointerType === "touch") return;
      measure();
      live = true;
      badge.classList.add("is-live");
      onMove(event);
    };
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      if (!rect) measure();
      x = event.clientX - (rect as DOMRect).left;
      y = event.clientY - (rect as DOMRect).top;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onLeave = () => {
      if (!live) return;
      live = false;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      badge.classList.remove("is-live");
      glow.style.transform = "";
    };
    const onFocusIn = () => {
      if (reduce.matches) return;
      glow.style.transform = "";
      badge.classList.add("is-live");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (live) return;
      if (!badge.contains(event.relatedTarget as Node | null)) {
        badge.classList.remove("is-live");
      }
    };
    badge.addEventListener("pointerenter", onEnter);
    badge.addEventListener("pointermove", onMove);
    badge.addEventListener("pointerleave", onLeave);
    badge.addEventListener("pointercancel", onLeave);
    badge.addEventListener("focusin", onFocusIn);
    badge.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);
    return () => {
      badge.removeEventListener("pointerenter", onEnter);
      badge.removeEventListener("pointermove", onMove);
      badge.removeEventListener("pointerleave", onLeave);
      badge.removeEventListener("pointercancel", onLeave);
      badge.removeEventListener("focusin", onFocusIn);
      badge.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <a ref={rootRef} className="he-badge-pointer-spotlight" href="https://example.com"><i className="bdg34-glow" aria-hidden="true"></i><span className="bdg34-label">Pro tip</span></a>
    </>
  );
}`,
  html: `<style>${css}</style>
<a class="he-badge-pointer-spotlight" href="https://example.com"><i class="bdg34-glow" aria-hidden="true"></i><span class="bdg34-label">Pro tip</span></a>
<script>(function(){var badge=document.querySelector('.he-badge-pointer-spotlight');if(!badge)return;var glow=badge.querySelector('.bdg34-glow');var reduce=matchMedia('(prefers-reduced-motion: reduce)');var fine=matchMedia('(hover: hover) and (pointer: fine)');var rect=null,raf=0,live=false,x=0,y=0;function measure(){rect=badge.getBoundingClientRect()}function invalidate(){rect=null}function frame(){raf=0;if(!live||!rect)return;glow.style.transform='translate3d('+(x-rect.width/2)+'px,'+(y-rect.height/2)+'px,0)'}function onEnter(event){if(!fine.matches||reduce.matches||event.pointerType==='touch')return;measure();live=true;badge.classList.add('is-live');onMove(event)}function onMove(event){if(!live)return;if(!rect)measure();x=event.clientX-rect.left;y=event.clientY-rect.top;if(!raf)raf=requestAnimationFrame(frame)}function onLeave(){if(!live)return;live=false;if(raf){cancelAnimationFrame(raf);raf=0}badge.classList.remove('is-live');glow.style.transform=''}badge.addEventListener('pointerenter',onEnter);badge.addEventListener('pointermove',onMove);badge.addEventListener('pointerleave',onLeave);badge.addEventListener('pointercancel',onLeave);badge.addEventListener('focusin',function(){if(reduce.matches)return;glow.style.transform='';badge.classList.add('is-live')});badge.addEventListener('focusout',function(event){if(live)return;if(!badge.contains(event.relatedTarget))badge.classList.remove('is-live')});window.addEventListener('resize',invalidate);window.addEventListener('scroll',invalidate,true)})();</script>`,
};
