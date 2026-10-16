"use client";

import { inputCharacterCountEmphasis } from "@/data/inputs/input-character-count-emphasis";
import { useEffect, useRef } from "react";

export default function InputCharacterCountEmphasis() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const control = root.querySelector(".inp31-control") as HTMLTextAreaElement | null;
    const counter = root.querySelector(".inp31-count") as HTMLElement | null;
    if (!control || !counter) return;
    const limit = Number(control.getAttribute("maxlength")) || 140;
    const update = () => {
      counter.textContent = control.value.length + " / " + limit;
    };
    control.addEventListener("input", update);
    update();
    return () => {
      control.removeEventListener("input", update);
    };
  }, []);

  return (
    <>
      <style>{inputCharacterCountEmphasis.css}</style>
      <div ref={rootRef} className="field he-input-character-count-emphasis">
        <label className="inp31-label" htmlFor="input-character-count-emphasis-inp31-input">Release summary</label>
        <div className="inp31-wrap">
          <textarea className="inp31-control" id="input-character-count-emphasis-inp31-input" rows={3} maxLength={140} placeholder="One or two sentences for the changelog." aria-describedby="input-character-count-emphasis-inp31-help input-character-count-emphasis-inp31-count"></textarea>
        </div>
        <p className="inp31-help" id="input-character-count-emphasis-inp31-help">Shown at the top of the release page.</p>
        <p className="inp31-count" id="input-character-count-emphasis-inp31-count">0 / 140</p>
      </div>
    </>
  );
}
