import { iconThreadStitch } from "@/data/icons/icon-thread-stitch";

export default function IconThreadStitch() {
  return (
    <>
      <style>{iconThreadStitch.css}</style>
      <button className="he-icon-thread-stitch" type="button">
        <svg className="hi21-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4.6 12h14.8" stroke="var(--text-2)" strokeWidth="1.6" strokeDasharray="2.5 2.3" opacity=".7" />
          <path d="M4.6 8.6v6.8M19.4 8.6v6.8" stroke="var(--line-strong)" strokeWidth="1.5" strokeLinecap="round" />
          <path className="hi21-thread" d="M4.6 12h14.8" pathLength="100" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" />
          <circle cx="19.4" cy="12" r="1.4" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}
