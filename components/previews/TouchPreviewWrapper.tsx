"use client";

import { useRef, useCallback, useEffect } from "react";

let rulesInjected = false;

function collectStyleRules(
  list: CSSRuleList,
  target: CSSStyleRule[],
): void {
  for (let i = 0; i < list.length; i++) {
    const rule = list[i] as CSSRule;
    if (rule instanceof CSSStyleRule) {
      target.push(rule);
    } else if ("cssRules" in rule) {
      try {
        collectStyleRules((rule as CSSGroupingRule).cssRules, target);
      } catch {}
    }
  }
}

function duplicateHoverRules() {
  if (rulesInjected) return;
  rulesInjected = true;

  const cssBlocks: string[] = [];

  for (const ss of document.styleSheets) {
    try {
      const rules: CSSStyleRule[] = [];
      collectStyleRules(ss.cssRules, rules);

      for (const rule of rules) {
        const sel = rule.selectorText;
        if (!sel || !rule.style.cssText) continue;
        const cssText = rule.style.cssText.trim();
        if (!cssText || !sel.includes(":hover")) continue;

        const base = sel.replace(/:hover(?!\w)/g, "").trim();
        if (base === sel || base === "") continue;

        const newSel = base
          .split(",")
          .map((p) => ".touch-active " + p.trim())
          .join(", ");

        cssBlocks.push(`${newSel} { ${cssText} }`);
      }
    } catch {}
  }

  if (cssBlocks.length > 0) {
    const style = document.createElement("style");
    style.id = "touch-hover-rules";
    style.textContent = cssBlocks.join("\n");
    document.head.appendChild(style);
  }
}

export default function TouchPreviewWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const isTouch = matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (!isTouch) return;

    if (document.readyState === "complete") {
      duplicateHoverRules();
    } else {
      addEventListener("load", duplicateHoverRules, { once: true });
    }
  }, []);

  const activate = useCallback(() => {
    if (!wrapperRef.current) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    wrapperRef.current.classList.add("touch-active");

    timerRef.current = setTimeout(() => {
      wrapperRef.current?.classList.remove("touch-active");
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      onClick={activate}
      className="[&::-webkit-tap-highlight-color]:transparent"
    >
      {children}
    </div>
  );
}
