import { iconCompassNeedleAlign } from "@/data/icons/icon-compass-needle-align";

export default function IconCompassNeedleAlign() {
  return (
    <>
      <style>{iconCompassNeedleAlign.css}</style>
      <button className="he-icon-compass-needle-align" type="button">
        <svg className="hi13-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="8.6" stroke="var(--line-strong)" strokeWidth="1.7" />
          <path d="M12 2.6v1.8M12 19.6v1.8M2.6 12h1.8M19.6 12h1.8" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
          <g className="hi13-needle">
            <path d="M12 6.6 13.5 12h-3z" fill="var(--accent)" />
            <path d="M12 17.4 13.5 12h-3z" fill="var(--text-2)" />
          </g>
          <circle cx="12" cy="12" r="1.3" fill="var(--text-2)" />
        </svg>
      </button>
    </>
  );
}
