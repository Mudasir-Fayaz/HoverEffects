"use client";

import { btnLocalLight } from "@/data/buttons/btn-local-light";
import { useEffect, useRef } from "react";

export default function BtnLocalLight() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const light = button.querySelector(".light") as HTMLElement | null;
    if (!light) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    let frame = 0;
    let live = false;
    let x = 0;

    const measure = () => {
      rect = button.getBoundingClientRect();
    };
    const render = () => {
      frame = 0;
      if (!live || !rect) return;
      const nx = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
      light.style.transform = "translateX(" + (nx * 6).toFixed(2) + "px)";
    };
    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onMove = (event: PointerEvent) => {
      if (!live) return;
      x = event.clientX - (rect as DOMRect).left;
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
      light.style.transform = "";
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
      <style>{btnLocalLight.css}</style>
      <button ref={rootRef} className="he-btn-local-light" type="button">
        <span className="surface" aria-hidden="true">
          <span className="light deco"></span>
        </span>
        <span className="label">Open dashboard</span>
      </button>
    </>
  );
}
