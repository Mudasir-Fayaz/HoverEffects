import { iconClockDetailSettle } from "@/data/icons/icon-clock-detail-settle";

export default function IconClockDetailSettle() {
  return (
    <>
      <style>{iconClockDetailSettle.css}</style>
      <button className="he-icon-clock-detail-settle" type="button">
        <svg className="hi30-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.8" stroke="var(--line-strong)" strokeWidth="1.7" />
          <path d="M12 3v1.7M12 19.3V21M3 12h1.7M19.3 12H21" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
          <g className="hi30-hand">
            <path d="M12 12V6.6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
          </g>
          <path d="M12 12l4 2.6" stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.3" fill="var(--text-2)" />
        </svg>
      </button>
    </>
  );
}
