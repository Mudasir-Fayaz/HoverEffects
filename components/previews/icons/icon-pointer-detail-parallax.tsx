"use client";

import { iconPointerDetailParallax } from "@/data/icons/icon-pointer-detail-parallax";
import { useEffect, useRef } from "react";

export default function IconPointerDetailParallax() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const d1 = button.querySelector(".hi33-d1") as HTMLElement | null;
    const d2 = button.querySelector(".hi33-d2") as HTMLElement | null;
    if (!d1 || !d2) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let x = 0;
    let y = 0;
    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;
      const cx = Math.max(-1, Math.min(1, nx));
      const cy = Math.max(-1, Math.min(1, ny));
      d1.style.transform = "translate(" + (cx * 1.2).toFixed(2) + "px," + (cy * 0.9).toFixed(2) + "px)";
      d2.style.transform = "translate(" + (cx * -2).toFixed(2) + "px," + (cy * -1.5).toFixed(2) + "px)";
    };
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      x = event.clientX - (rect as DOMRect).left;
      y = event.clientY - (rect as DOMRect).top;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onEnter = (event: PointerEvent) => {
      if (!enabled(event)) return;
      measure();
      live = true;
      onMove(event);
    };
    const reset = () => {
      live = false;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      d1.style.transform = "";
      d2.style.transform = "";
      rect = null;
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointermove", onMove);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("scroll", reset, true);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointermove", onMove);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("scroll", reset, true);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <style>{iconPointerDetailParallax.css}</style>
      <button ref={rootRef} className="he-icon-pointer-detail-parallax" type="button">
        <svg className="hi33-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="10.6" cy="10.6" r="6.2" stroke="var(--text-2)" strokeWidth="1.7" />
          <path d="M15.2 15.2 19 19" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" />
          <g className="hi33-d1">
            <circle cx="10.6" cy="10.6" r="2.8" stroke="var(--accent-2)" strokeWidth="1.5" />
          </g>
          <g className="hi33-d2" fill="var(--accent)">
            <circle cx="10.6" cy="5.6" r=".9" />
            <circle cx="15.6" cy="12.2" r=".9" />
            <circle cx="8.2" cy="14.4" r=".9" />
          </g>
        </svg>
      </button>
    </>
  );
}
