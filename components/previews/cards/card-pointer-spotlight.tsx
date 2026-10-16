"use client";

import { cardPointerSpotlight } from "@/data/cards/card-pointer-spotlight";
import { useEffect, useRef } from "react";

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
      <style>{cardPointerSpotlight.css}</style>
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
          <a onClick={(event) => event.preventDefault()} className="card-link" href="https://example.com">Explore the live demo
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </p>
      </div>
    </article>
    </>
  );
}
