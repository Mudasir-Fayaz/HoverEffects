"use client";

import { useEffect, useRef } from "react";

/**
 * Touch activation layer for effect previews.
 *
 * Desktop behaviour is untouched: previews keep reacting to real :hover and
 * pointer input. On touch devices (phones, tablets, touch laptops) a tap puts
 * the preview into its hovered state for READ_WINDOW_MS:
 *
 * 1. CSS — every `:hover` rule on the page is duplicated once under
 *    `.effect-preview-root.touch-active`, including rules gated behind
 *    `@media (hover: hover)` (which is where Tailwind v4 hides `hover:`
 *    utilities), so adding the class replays the hover state without a
 *    hover-capable pointer.
 * 2. JS — previews that track pointer events receive a real enter → move →
 *    leave sequence while the finger is down; the browser fires the final
 *    `pointerleave` on release, which would reset them instantly. The wrapper
 *    therefore re-dispatches a synthetic enter/move on the touched element's
 *    ancestor chain after release (isTrusted=false), and a synthetic leave
 *    when the window ends so previews reset cleanly.
 *
 * Tapping elsewhere ends the window; re-tapping restarts it; a gesture that
 * becomes a scroll (pointercancel) cancels immediately.
 */

const READ_WINDOW_MS = 2600;
const IDLE_SCAN_TIMEOUT_MS = 1800;

/** Stylesheets whose `:hover` rules have been duplicated already. */
const scannedSheets = new WeakSet<CSSStyleSheet>();
let injectedSheet: HTMLStyleElement | null = null;

type TouchPoint = {
  id: number;
  x: number;
  y: number;
  /** Touched element first, wrapper last. */
  chain: Element[];
};

function collectHoverRules(
  list: CSSRuleList,
  out: CSSStyleRule[],
  inert: boolean,
): void {
  for (let i = 0; i < list.length; i++) {
    const rule = list[i] as CSSRule;
    if (rule instanceof CSSStyleRule) {
      if (!inert) out.push(rule);
      continue;
    }
    if (!("cssRules" in rule)) continue;
    let skipInside = inert;
    if (!skipInside && rule instanceof CSSMediaRule) {
      const condition = rule.conditionText ?? "";
      // Never resurface rules that devices or accessibility settings disable.
      skipInside = /prefers-reduced-motion|hover:\s*none/.test(condition);
    }
    try {
      collectHoverRules((rule as CSSGroupingRule).cssRules, out, skipInside);
    } catch {
      // Ignore unreadable sub-rule lists.
    }
  }
}

/**
 * Duplicate newly seen `:hover` rules into `.effect-preview-root.touch-active`
 * scope. Incremental: each stylesheet is scanned once, so client-side
 * navigation only re-scans stylesheets that page actually added.
 */
function ensureTouchHoverRules(): void {
  if (typeof document === "undefined") return;
  const blocks: string[] = [];

  for (const sheet of Array.from(document.styleSheets)) {
    if (scannedSheets.has(sheet)) continue;
    let rules: CSSStyleRule[];
    try {
      rules = [];
      collectHoverRules(sheet.cssRules, rules, false);
    } catch {
      continue; // Cross-origin or not parsed yet — retried on the next call.
    }
    if (rules.length === 0) continue; // Keep empty (still loading) sheets unscanned.
    scannedSheets.add(sheet);

    for (const rule of rules) {
      const selector = rule.selectorText;
      if (!selector || !selector.includes(":hover")) continue;
      const declarations = rule.style.cssText.trim();
      if (!declarations) continue;
      const base = selector.replace(/:hover(?!\w)/g, "").trim();
      if (!base || base === selector) continue;
      const scoped = base
        .split(",")
        .map((part) => `.effect-preview-root.touch-active ${part.trim()}`)
        .join(", ");
      blocks.push(`${scoped}{${declarations}}`);
    }
  }

  if (blocks.length === 0) return;
  if (!injectedSheet || !injectedSheet.isConnected) {
    injectedSheet = document.createElement("style");
    injectedSheet.id = "touch-hover-rules";
    (document.head ?? document.documentElement).append(injectedSheet);
  }
  injectedSheet.appendChild(document.createTextNode(`${blocks.join("\n")}\n`));
}

function dispatchPointer(
  element: Element,
  type: string,
  point: TouchPoint,
  bubbles: boolean,
): void {
  if (typeof PointerEvent === "undefined") return;
  try {
    element.dispatchEvent(
      new PointerEvent(type, {
        bubbles,
        cancelable: false,
        composed: true,
        pointerId: point.id,
        pointerType: "touch",
        isPrimary: true,
        clientX: point.x,
        clientY: point.y,
      }),
    );
  } catch {
    // Synthetic pointer replay is a progressive enhancement.
  }
}

/** Replay a hover-like entry on the touched chain (outermost first). */
function replayEnter(point: TouchPoint): void {
  for (let i = point.chain.length - 1; i >= 0; i--) {
    dispatchPointer(point.chain[i], "pointerenter", point, false);
  }
  dispatchPointer(point.chain[0], "pointerover", point, true);
  dispatchPointer(point.chain[0], "pointermove", point, true);
}

/** Replay the leave sequence when the activation window ends. */
function replayLeave(point: TouchPoint): void {
  dispatchPointer(point.chain[0], "pointerout", point, true);
  for (const element of point.chain) {
    dispatchPointer(element, "pointerleave", point, false);
  }
}

export default function TouchPreviewWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Touch-first devices get the hover-rule scan done before the first tap.
  useEffect(() => {
    if (!matchMedia("(hover: none), (any-pointer: coarse)").matches) return;
    const run = () => ensureTouchHoverRules();
    if (typeof window.requestIdleCallback === "function") {
      const handle = window.requestIdleCallback(run, {
        timeout: IDLE_SCAN_TIMEOUT_MS,
      });
      return () => window.cancelIdleCallback(handle);
    }
    const handle = window.setTimeout(run, 400);
    return () => window.clearTimeout(handle);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let timer = 0;
    let active = false;
    let point: TouchPoint | null = null;

    const deactivate = () => {
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
      document.removeEventListener("pointerdown", handleDocumentDown, true);
      if (!active) return;
      active = false;
      wrapper.classList.remove("touch-active");
      const last = point;
      point = null;
      if (last) replayLeave(last);
    };

    // A touch starting outside this wrapper ends its activation window.
    const handleDocumentDown = (event: PointerEvent) => {
      if (!active) return;
      if (event.target instanceof Node && wrapper.contains(event.target)) {
        return;
      }
      deactivate();
    };

    const handleDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;
      ensureTouchHoverRules();
      const chain: Element[] = [];
      for (
        let node = event.target as Element | null;
        node;
        node = node.parentElement
      ) {
        chain.push(node);
        if (node === wrapper) break;
      }
      point = { id: event.pointerId, x: event.clientX, y: event.clientY, chain };
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
      if (!active) {
        active = true;
        wrapper.classList.add("touch-active");
      }
      document.addEventListener("pointerdown", handleDocumentDown, true);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;
      if (!point || point.id !== event.pointerId) return;
      point.x = event.clientX;
      point.y = event.clientY;
    };

    const handleUp = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;
      if (!point || point.id !== event.pointerId) return;
      point.x = event.clientX;
      point.y = event.clientY;
      const snapshot: TouchPoint = {
        id: point.id,
        x: point.x,
        y: point.y,
        chain: point.chain,
      };
      // The browser follows pointerup with pointerleave for touch pointers,
      // which resets JS-driven previews instantly. Replay the entry on the
      // next task so the hovered state survives the whole read window.
      window.setTimeout(() => {
        if (!active || point?.id !== snapshot.id) return;
        replayEnter(snapshot);
      }, 0);
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => {
        timer = 0;
        deactivate();
      }, READ_WINDOW_MS);
    };

    const handleCancel = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;
      if (!point || point.id !== event.pointerId) return;
      deactivate(); // The gesture turned into a scroll.
    };

    wrapper.addEventListener("pointerdown", handleDown);
    wrapper.addEventListener("pointermove", handleMove);
    wrapper.addEventListener("pointerup", handleUp);
    wrapper.addEventListener("pointercancel", handleCancel);
    return () => {
      wrapper.removeEventListener("pointerdown", handleDown);
      wrapper.removeEventListener("pointermove", handleMove);
      wrapper.removeEventListener("pointerup", handleUp);
      wrapper.removeEventListener("pointercancel", handleCancel);
      if (timer) clearTimeout(timer);
      document.removeEventListener("pointerdown", handleDocumentDown, true);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="effect-preview-root"
      style={{ colorScheme: "light", WebkitTapHighlightColor: "transparent" }}
    >
      {children}
    </div>
  );
}
