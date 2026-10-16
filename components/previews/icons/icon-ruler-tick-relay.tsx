import { iconRulerTickRelay } from "@/data/icons/icon-ruler-tick-relay";

export default function IconRulerTickRelay() {
  return (
    <>
      <style>{iconRulerTickRelay.css}</style>
      <button className="he-icon-ruler-tick-relay" type="button">
        <svg className="hi28-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="3.6" y="9" width="16.8" height="6" rx="1.5" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <g stroke="var(--text-2)" strokeWidth="1.4" strokeLinecap="round">
            <path d="M6.2 9.6v2.4" />
            <path d="M8.6 9.6v1.7" />
            <path d="M11 9.6v2.4" />
            <path d="M13.4 9.6v1.7" />
            <path d="M15.8 9.6v2.4" />
            <path d="M18.2 9.6v1.7" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
            <path className="hi28-t" style={{ ["--i" as string]: "0" }} d="M8.6 9.4v1.9" />
            <path className="hi28-t" style={{ ["--i" as string]: "1" }} d="M13.4 9.4v1.9" />
            <path className="hi28-t" style={{ ["--i" as string]: "2" }} d="M18.2 9.4v1.9" />
            <path className="hi28-t" style={{ ["--i" as string]: "3" }} d="M6.2 9.4v.1" />
          </g>
        </svg>
      </button>
    </>
  );
}
