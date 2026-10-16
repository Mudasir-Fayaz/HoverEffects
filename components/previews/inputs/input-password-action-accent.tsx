"use client";

import { inputPasswordActionAccent } from "@/data/inputs/input-password-action-accent";
import { useEffect, useRef } from "react";

export default function InputPasswordActionAccent() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const control = root.querySelector(".inp33-control") as HTMLInputElement | null;
    const toggle = root.querySelector(".inp33-toggle") as HTMLButtonElement | null;
    const label = root.querySelector(".inp33-toggle-label") as HTMLElement | null;
    if (!control || !toggle) return;

    const handleClick = () => {
      const show = control.type === "password";
      const start = control.selectionStart;
      const end = control.selectionEnd;
      control.type = show ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(show));
      if (label) {
        label.textContent = show ? "Hide password" : "Show password";
      }
      control.focus();
      if (start !== null && end !== null) {
        try {
          control.setSelectionRange(start, end);
        } catch {}
      }
    };
    toggle.addEventListener("click", handleClick);
    return () => {
      toggle.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <style>{inputPasswordActionAccent.css}</style>
      <div ref={rootRef} className="field he-input-password-action-accent">
        <label className="inp33-label" htmlFor="input-password-action-accent-inp33-input">New password</label>
        <div className="inp33-wrap">
          <input className="inp33-control" id="input-password-action-accent-inp33-input" type="password" defaultValue="Orbit-42-Lantern" aria-describedby="input-password-action-accent-inp33-help" />
          <button className="inp33-toggle" type="button" aria-pressed="false" aria-controls="input-password-action-accent-inp33-input">
            <svg className="inp33-eye" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.8 8S4.4 3.8 8 3.8 14.2 8 14.2 8 11.6 12.2 8 12.2 1.8 8 1.8 8z" stroke="currentColor" strokeWidth="1.4" /><circle cx="8" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.4" /></svg>
            <span className="inp33-toggle-label">Show password</span>
          </button>
        </div>
        <p className="inp33-help" id="input-password-action-accent-inp33-help">At least 12 characters with one number and one symbol.</p>
      </div>
    </>
  );
}
