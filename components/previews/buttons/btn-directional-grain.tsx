"use client";

import { btnDirectionalGrain } from "@/data/buttons/btn-directional-grain";
import { useEffect, useRef } from "react";

export default function BtnDirectionalGrain() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const grain = button.querySelector(".grain") as HTMLElement | null;
    if (!grain) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const OFFSETS: Record<string, string> = {
      top: "translateY(2px)",
      bottom: "translateY(-2px)",
      left: "translateX(2px)",
      right: "translateX(-2px)",
    };

    const enabled = (event: PointerEvent) =>
      (fineQuery.matches || event.pointerType === "touch") &&
      !reduceQuery.matches &&
      !button.disabled;
    const onEnter = (event: PointerEvent) => {
      if (!enabled(event)) return;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const d: Record<string, number> = {
        top: y,
        right: rect.width - x,
        bottom: rect.height - y,
        left: x,
      };
      let nearest = "top";
      for (const key of Object.keys(d)) {
        if (d[key] < d[nearest]) nearest = key;
      }
      grain.style.transition = "none";
      grain.style.transform = OFFSETS[nearest];
      void grain.offsetWidth;
      grain.style.transition = "";
      grain.style.transform = "";
    };
    const reset = () => {
      grain.style.transition = "";
      grain.style.transform = "";
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
    };
  }, []);

  return (
    <>
      <style>{btnDirectionalGrain.css}</style>
      <button ref={rootRef} className="he-btn-directional-grain" type="button">
        <span className="surface" aria-hidden="true">
          <span className="grain deco"></span>
        </span>
        <span className="label">Apply theme</span>
      </button>
    </>
  );
}
