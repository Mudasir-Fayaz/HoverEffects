"use client";

import { navMegaPanelPreview } from "@/data/navigation/nav-mega-panel-preview";
import { useEffect, useRef } from "react";

export default function NavMegaPanelPreview() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = rootRef.current;
    if (!nav) return;
    const toggle = nav.querySelector(".nav34-toggle") as HTMLElement | null;
    const panel = nav.querySelector(".nav34-panel") as HTMLElement | null;
    if (!toggle || !panel) return;

    const setOpen = (open: boolean, keyboard: boolean) => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (open === isOpen) return;
      toggle.setAttribute("aria-expanded", String(open));
      if (open) {
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add("is-visible"));
        if (keyboard) {
          const first = panel.querySelector("a");
          if (first) (first as HTMLElement).focus();
        }
      } else {
        panel.classList.remove("is-visible");
        panel.hidden = true;
      }
    };

    panel.hidden = true;
    const handleClick = (event: MouseEvent) => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true", event.detail === 0);
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false, false);
        toggle.focus();
      }
    };
    const handleFocusOut = (event: FocusEvent) => {
      if (!nav.contains(event.relatedTarget as Node | null)) setOpen(false, false);
    };
    const handleOutside = (event: PointerEvent) => {
      if (!nav.contains(event.target as Node)) setOpen(false, false);
    };
    toggle.addEventListener("click", handleClick);
    nav.addEventListener("keydown", handleKeydown);
    nav.addEventListener("focusout", handleFocusOut);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      toggle.removeEventListener("click", handleClick);
      nav.removeEventListener("keydown", handleKeydown);
      nav.removeEventListener("focusout", handleFocusOut);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, []);

  return (
    <>
      <style>{navMegaPanelPreview.css}</style>
      <nav ref={rootRef} className="he-nav-mega-panel-preview" aria-label="Product sections">
        <button className="nav34-toggle" type="button" aria-expanded="false" aria-controls="nav-mega-panel-preview-nav34-panel">Browse product <svg className="nav34-chev" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        <div className="nav34-panel" hidden id="nav-mega-panel-preview-nav34-panel">
          <div className="nav34-col">
            <p className="nav34-head" id="nav-mega-panel-preview-nav34-h1">Learn</p>
            <ul className="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h1">
              <li><a onClick={(event) => event.preventDefault()} className="nav34-link" href="https://example.com">Overview</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav34-link" href="https://example.com">Guides</a></li>
            </ul>
          </div>
          <div className="nav34-col">
            <p className="nav34-head" id="nav-mega-panel-preview-nav34-h2">Build</p>
            <ul className="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h2">
              <li><a onClick={(event) => event.preventDefault()} className="nav34-link" href="https://example.com">API reference</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav34-link" href="https://example.com">Templates</a></li>
            </ul>
          </div>
          <div className="nav34-col">
            <p className="nav34-head" id="nav-mega-panel-preview-nav34-h3">Support</p>
            <ul className="nav34-list" aria-labelledby="nav-mega-panel-preview-nav34-h3">
              <li><a onClick={(event) => event.preventDefault()} className="nav34-link" href="https://example.com">Contact</a></li>
              <li><a onClick={(event) => event.preventDefault()} className="nav34-link" href="https://example.com">Status</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
