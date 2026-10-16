import { iconSegmentRelay } from "@/data/icons/icon-segment-relay";

export default function IconSegmentRelay() {
  return (
    <>
      <style>{iconSegmentRelay.css}</style>
      <button className="he-icon-segment-relay" type="button">
        <svg className="hi02-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M5 5.2h14" />
            <path d="M5 12h14" />
            <path d="M5 18.8h9" />
          </g>
          <g className="hi02-boost hi02-b1" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"><path d="M5 5.2h14" /></g>
          <g className="hi02-boost hi02-b2" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14" /></g>
          <g className="hi02-boost hi02-b3" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"><path d="M5 18.8h9" /></g>
        </svg>
      </button>
    </>
  );
}
