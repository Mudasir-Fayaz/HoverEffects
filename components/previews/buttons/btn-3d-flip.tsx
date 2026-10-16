"use client";

import { useEffect, useRef, useState } from "react";
import { threeDFlipButton } from "@/data/buttons/3d-flip";

export default function Btn3dFlip() {
  const [flipped, setFlipped] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    },
    [],
  );

  const handleClick = () => {
    if (flipped) return;
    setFlipped(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlipped(false), 1500);
  };

  return (
    <>
      <style>{threeDFlipButton.css}</style>
      <button
        type="button"
        className={flipped ? "btn-3d-flip he-flipped" : "btn-3d-flip"}
        onClick={handleClick}
      >
        Submit
      </button>
    </>
  );
}
