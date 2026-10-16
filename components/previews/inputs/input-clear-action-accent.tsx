"use client";

import { inputClearActionAccent } from "@/data/inputs/input-clear-action-accent";
import { useEffect, useRef } from "react";

export default function InputClearActionAccent() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const control = root.querySelector(".inp32-control") as HTMLInputElement | null;
    const clear = root.querySelector(".inp32-clear") as HTMLButtonElement | null;
    if (!control || !clear) return;

    const sync = () => {
      clear.disabled = control.value.length === 0;
    };
    const handleClick = () => {
      control.value = "";
      control.dispatchEvent(new Event("input", { bubbles: true }));
      sync();
      control.focus();
    };
    const handleInput = () => sync();
    clear.addEventListener("click", handleClick);
    control.addEventListener("input", handleInput);
    sync();
    return () => {
      clear.removeEventListener("click", handleClick);
      control.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <>
      <style>{inputClearActionAccent.css}</style>
      <div ref={rootRef} className="field he-input-clear-action-accent">
        <label className="inp32-label" htmlFor="input-clear-action-accent-inp32-input">Filter query</label>
        <div className="inp32-wrap">
          <input className="inp32-control" id="input-clear-action-accent-inp32-input" type="search" defaultValue="status: open" aria-describedby="input-clear-action-accent-inp32-help" />
          <button className="inp32-clear" type="button" aria-label="Clear the filter query">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4.5 4.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </button>
        </div>
        <p className="inp32-help" id="input-clear-action-accent-inp32-help">Clearing empties the real value and keeps focus in the field.</p>
      </div>
    </>
  );
}
