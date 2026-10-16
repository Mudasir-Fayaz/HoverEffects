import { iconCalendarDetailTrace } from "@/data/icons/icon-calendar-detail-trace";

export default function IconCalendarDetailTrace() {
  return (
    <>
      <style>{iconCalendarDetailTrace.css}</style>
      <button className="he-icon-calendar-detail-trace" type="button">
        <svg className="hi29-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="4" y="5.4" width="16" height="14.6" rx="2" stroke="var(--text-2)" strokeWidth="1.7" />
          <path d="M4 9.4h16" stroke="var(--line-strong)" strokeWidth="1.5" />
          <path d="M8.4 3.6v3M15.6 3.6v3" stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="6.8" y="12" width="4.6" height="4.6" rx="1.1" fill="var(--accent-soft)" stroke="var(--accent-2)" strokeWidth="1.2" />
          <path className="hi29-trace" d="M7.9 12h2.4a1.1 1.1 0 0 1 1.1 1.1v2.4a1.1 1.1 0 0 1-1.1 1.1H7.9a1.1 1.1 0 0 1-1.1-1.1v-2.4a1.1 1.1 0 0 1 1.1-1.1z" pathLength="100" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
      </button>
    </>
  );
}
