"use client";

import { iconDirectionalDetailAccent } from "@/data/icons/icon-directional-detail-accent";
import { useEffect, useRef } from "react";

export default function IconDirectionalDetailAccent() {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = rootRef.current;
    if (!button) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let rect: DOMRect | null = null;
    const enabled = () => fineQuery.matches && !reduceQuery.matches && !button.disabled;
    const onEnter = (event: PointerEvent) => {
      if (!enabled() || event.pointerType === "touch") return;
      rect = button.getBoundingClientRect();
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
      button.setAttribute("data-region", nearest);
    };
    const reset = () => {
      rect = null;
      button.removeAttribute("data-region");
    };
    const onFocusIn = () => {
      button.setAttribute("data-region", "top");
    };
    const onFocusOut = () => {
      button.removeAttribute("data-region");
    };
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointercancel", reset);
    button.addEventListener("focusin", onFocusIn);
    button.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", reset);
    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointercancel", reset);
      button.removeEventListener("focusin", onFocusIn);
      button.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return (
    <>
      <style>{iconDirectionalDetailAccent.css}</style>
      <button ref={rootRef} className="he-icon-directional-detail-accent" type="button">
        <svg className="hi34-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="9" y="9" width="6" height="6" rx="1.4" stroke="var(--text-2)" strokeWidth="1.6" />
          <path className="hi34-r hi34-tl" d="M4.6 7.8V4.6h3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="hi34-r hi34-tr" d="M16.2 4.6h3.2v3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="hi34-r hi34-br" d="M19.4 16.2v3.2h-3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="hi34-r hi34-bl" d="M7.8 19.4H4.6v-3.2" stroke="var(--line-strong)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
