import type { HoverEffect } from "../types";

const css = `.he-card-pointer-spotlight{
  --surface: #ffffff; --surface-2: #ebebe5; --text: #1c1d1b; --text-2: #5e615b; --line: #dcdcd4; --line-strong: #c4c5bc; --accent: #2e6f5c; --accent-2: #8fb8a8; --accent-soft: #e3efe8; --radius: 14px; --radius-sm: 9px; --radius-pill: 999px; --shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08); --ease: cubic-bezier(.22, 1, .36, 1);
  box-sizing: border-box;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--text);
  -webkit-text-size-adjust: 100%;
}
.he-card-pointer-spotlight, .he-card-pointer-spotlight *, .he-card-pointer-spotlight *::before, .he-card-pointer-spotlight *::after { box-sizing: border-box; }
.he-card-pointer-spotlight h2, .he-card-pointer-spotlight h3, .he-card-pointer-spotlight p, .he-card-pointer-spotlight figure, .he-card-pointer-spotlight ol, .he-card-pointer-spotlight ul { margin: 0; }
.he-card-pointer-spotlight h2, .he-card-pointer-spotlight h3 { line-height: 1.22; letter-spacing: -0.015em; }
.he-card-pointer-spotlight img, .he-card-pointer-spotlight svg { display: block; max-width: 100%; }
.he-card-pointer-spotlight a { color: inherit; }
.he-card-pointer-spotlight :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
/* --- shared card pieces ------------------------------------- */.he-card-pointer-spotlight .card-link{ display: inline-flex; align-items: center; gap: 6px; font-size: .85rem; font-weight: 650; color: var(--accent); text-decoration: none; }.he-card-pointer-spotlight .card-link:hover{ text-decoration: underline; text-underline-offset: 3px; }

/* =========================================================
   Effect: Pointer Spotlight
   ========================================================= */.he-card-pointer-spotlight{
  position: relative;
  width: min(360px, 100%);
  padding: 26px 24px 22px;
  background: var(--surface);
    border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}.he-card-pointer-spotlight .glow{will-change: transform;
  position: absolute;
  left: 50%; top: 50%;
  width: 320px; height: 320px;
  margin: -160px 0 0 -160px;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(46 111 92 / .24), transparent 70%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 32%, transparent), transparent 70%);
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: opacity .35s var(--ease);
  pointer-events: none;
}.he-card-pointer-spotlight.is-live .glow{ opacity: 1; }.he-card-pointer-spotlight .card-content{ position: relative; }.he-card-pointer-spotlight .card-icon{
  display: grid; place-items: center;
  width: 44px; height: 44px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}.he-card-pointer-spotlight h2{ font-size: 1.15rem; margin-bottom: 8px; }.he-card-pointer-spotlight .body-copy{ color: var(--text-2); font-size: .92rem; }.he-card-pointer-spotlight .card-footer{ margin-top: 18px; }

/* Static defaults: touch devices and reduced motion get a centred glow. */
@media (hover: none){.he-card-pointer-spotlight .glow{ opacity: .9; }
}
@media (prefers-reduced-motion: reduce){.he-card-pointer-spotlight .glow{ opacity: .9; transition: none; }
}

/* --- uniform demo frame (shared by every card effect) --- */
.he-card-pointer-spotlight { width: min(320px, 100%); height: 250px; }
.he-card-pointer-spotlight { overflow: hidden; }
.he-card-pointer-spotlight { display: flex; flex-direction: column; }
.he-card-pointer-spotlight .card-content { display: flex; flex-direction: column; flex: 1 1 auto; }
.he-card-pointer-spotlight .card-footer { margin-top: auto; }
.he-card-pointer-spotlight h2 { font-size: 1rem; margin: 0 0 5px; }
.he-card-pointer-spotlight .body-copy { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; font-size: .86rem; line-height: 1.45; }
.he-card-pointer-spotlight .cat { font-size: .66rem; margin-bottom: 5px; }
.he-card-pointer-spotlight .meta { font-size: .75rem; margin-top: 7px; }
.he-card-pointer-spotlight .price { font-size: .98rem; margin-top: 9px; }
.he-card-pointer-spotlight .demo-tag { font-size: .6rem; padding: 2px 6px; margin-left: 5px; }
.he-card-pointer-spotlight .card-icon { width: 34px; height: 34px; margin-bottom: 10px; border-radius: 9px; }
.he-card-pointer-spotlight .card-icon svg { width: 17px; height: 17px; }
.he-card-pointer-spotlight .card-body { padding: 13px 16px 14px; }
.he-card-pointer-spotlight .chips { gap: 6px; margin-top: 12px; }
.he-card-pointer-spotlight .chip { padding: 4px 10px; font-size: .72rem; }
.he-card-pointer-spotlight .specs { gap: 5px; margin-top: 9px; }
.he-card-pointer-spotlight .specs li { padding: 3px 8px; font-size: .68rem; }
.he-card-pointer-spotlight .label-viewport { height: 1.5rem; min-width: 132px; margin-top: 12px; }
.he-card-pointer-spotlight .cta { padding: 8px 14px; font-size: .8rem; }
.he-card-pointer-spotlight .trail { margin: 14px 6px 0; }
.he-card-pointer-spotlight .trail::before { top: 13px; }
.he-card-pointer-spotlight .marker { width: 28px; height: 28px; font-size: .72rem; }
.he-card-pointer-spotlight .chart { height: 52px; margin-top: 12px; }
.he-card-pointer-spotlight .value { font-size: 1.45rem; }`;

export const cardPointerSpotlight: HoverEffect = {
  id: "card-pointer-spotlight",
  title: "Pointer Spotlight",
  category: "cards",
  description: "A radial highlight follows the pointer through one rAF-batched transform and centres itself for keyboard focus.",
  tags: ["card","pointer","spotlight","hover"],
  animationType: "pointer",
  complexity: "medium",
  css,
  react: `import { useEffect, useRef } from "react";

export default function PointerSpotlightCard() {
  const rootRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const card = rootRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    const state = { live: false, raf: 0, x: 0, y: 0 };

    const measure = () => {
      rect = card.getBoundingClientRect();
    };
    const invalidate = () => {
      rect = null;
    };
    const canTrack = () => fine.matches && !reduce.matches;

    const frame = () => {
      state.raf = 0;
      if (!state.live || !rect) return;
      const dx = state.x - rect.width / 2;
      const dy = state.y - rect.height / 2;
      glow.style.transform = "translate3d(" + dx + "px, " + dy + "px, 0)";
    };

    const onMove = (event: PointerEvent) => {
      if (!state.live) return;
      if (!rect) measure();
      state.x = event.clientX - (rect as DOMRect).left;
      state.y = event.clientY - (rect as DOMRect).top;
      if (!state.raf) state.raf = requestAnimationFrame(frame);
    };

    const onEnter = (event: PointerEvent) => {
      if (!canTrack() || event.pointerType === "touch") return;
      measure();
      state.live = true;
      card.classList.add("is-live");
      onMove(event);
    };

    const onLeave = () => {
      if (!state.live) return;
      state.live = false;
      if (state.raf) {
        cancelAnimationFrame(state.raf);
        state.raf = 0;
      }
      card.classList.remove("is-live");
      glow.style.transform = "";
    };

    const onFocusIn = () => {
      if (reduce.matches) return;
      glow.style.transform = "";
      card.classList.add("is-live");
    };

    const onFocusOut = (event: FocusEvent) => {
      if (state.live) return;
      if (!card.contains(event.relatedTarget as Node | null)) {
        card.classList.remove("is-live");
      }
    };

    card.addEventListener("pointerenter", onEnter);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    card.addEventListener("pointercancel", onLeave);
    card.addEventListener("focusin", onFocusIn);
    card.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", invalidate);
    window.addEventListener("scroll", invalidate, true);

    return () => {
      card.removeEventListener("pointerenter", onEnter);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
      card.removeEventListener("pointercancel", onLeave);
      card.removeEventListener("focusin", onFocusIn);
      card.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate, true);
      cancelAnimationFrame(state.raf);
    };
  }, []);

  return (
    <>
      <style>{\`${css}\`}</style>
      <article ref={rootRef} className="he-card-pointer-spotlight" aria-labelledby="card-pointer-spotlight-title">
      <span ref={glowRef} className="glow" aria-hidden="true"></span>
      <div className="card-content">
        <span className="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2.4" />
            <path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5M12 19.5A7.5 7.5 0 0 1 4.5 12" />
            <path d="M12 8.2a3.8 3.8 0 0 1 3.8 3.8" />
          </svg>
        </span>
        <h2 id="card-pointer-spotlight-title">Realtime insights</h2>
        <p className="body-copy">Live funnels, alerts and cohort views that update as events arrive — no refresh, no exports.</p>
        <p className="card-footer">
          <a className="card-link" href="https://example.com">Explore the live demo
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}`,
  html: `<style>${css}</style>
<article class="he-card-pointer-spotlight" aria-labelledby="card-pointer-spotlight-title">
      <span class="glow" aria-hidden="true"></span>
      <div class="card-content">
        <span class="card-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="2.4"/>
            <path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5M12 19.5A7.5 7.5 0 0 1 4.5 12"/>
            <path d="M12 8.2a3.8 3.8 0 0 1 3.8 3.8"/>
          </svg>
        </span>
        <h2 id="card-pointer-spotlight-title">Realtime insights</h2>
        <p class="body-copy">Live funnels, alerts and cohort views that update as events arrive — no refresh, no exports.</p>
        <p class="card-footer">
          <a class="card-link" href="https://example.com">Explore the live demo
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </p>
      </div>
    </article>
<script>(function(){var card=document.querySelector('.he-card-pointer-spotlight');if(!card)return;var glow=card.querySelector('.glow');var reduce=matchMedia('(prefers-reduced-motion: reduce)');var fine=matchMedia('(hover: hover) and (pointer: fine)');var rect=null;function measure(){rect=card.getBoundingClientRect()}function invalidate(){rect=null}function canTrack(){return fine.matches&&!reduce.matches}function canTrackPointer(e){return e.pointerType!=='touch'}var state={live:false,raf:0,x:0,y:0};function frame(){state.raf=0;if(!state.live||!rect)return;var dx=state.x-rect.width/2,dy=state.y-rect.height/2;glow.style.transform='translate3d('+dx+'px, '+dy+'px, 0)'}function onEnter(e){if(!canTrack()||!canTrackPointer(e))return;measure();state.live=true;card.classList.add('is-live');onMove(e)}function onMove(e){if(!state.live)return;if(!rect)measure();state.x=e.clientX-rect.left;state.y=e.clientY-rect.top;if(!state.raf)state.raf=requestAnimationFrame(frame)}function onLeave(){if(!state.live)return;state.live=false;if(state.raf){cancelAnimationFrame(state.raf);state.raf=0}card.classList.remove('is-live');glow.style.transform=''}card.addEventListener('pointerenter',onEnter);card.addEventListener('pointermove',onMove);card.addEventListener('pointerleave',onLeave);card.addEventListener('pointercancel',onLeave);window.addEventListener('resize',invalidate);window.addEventListener('scroll',invalidate,true);function onFocusIn(){if(reduce.matches)return;glow.style.transform='';card.classList.add('is-live')}function onFocusOut(e){if(state.live)return;if(!card.contains(e.relatedTarget))card.classList.remove('is-live')}card.addEventListener('focusin',onFocusIn);card.addEventListener('focusout',onFocusOut)})();</script>`,
};
