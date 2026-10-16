"use client";

import { useEffect, useRef, useState } from "react";
import { clickConfirmButton } from "@/data/buttons/click-confirm";

export default function BtnClickConfirm() {
  const [active, setActive] = useState<"success" | "error" | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    },
    [],
  );

  const run = (kind: "success" | "error") => {
    setActive(kind);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(null), 1300);
  };

  return (
    <>
      <style>{clickConfirmButton.css}</style>
      <span className="he-click-group">
        <button
          type="button"
          className={active === "success" ? "btn-click-confirm he-success he-active" : "btn-click-confirm he-success"}
          onClick={() => run("success")}
        >
          <span className="he-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width={17}
              height={17}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6.5 9.5 17 4 11.5" />
            </svg>
          </span>
          <span className="he-status" aria-hidden="true">
            Success!
          </span>
          <span className="he-label">Submit</span>
        </button>
        <button
          type="button"
          className={active === "error" ? "btn-click-confirm he-error he-active" : "btn-click-confirm he-error"}
          onClick={() => run("error")}
        >
          <span className="he-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width={17}
              height={17}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
          <span className="he-status" aria-hidden="true">
            Error!
          </span>
          <span className="he-label">Retry</span>
        </button>
      </span>
    </>
  );
}
