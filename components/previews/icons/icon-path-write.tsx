import { iconPathWrite } from "@/data/icons/icon-path-write";

export default function IconPathWrite() {
  return (
    <>
      <style>{iconPathWrite.css}</style>
      <button className="he-icon-path-write" type="button">
        <svg className="hi01-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M5 12.5l4.2 4.2L19 6.9" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path className="hi01-accent" d="M5 12.5l4.2 4.2L19 6.9" pathLength="100" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
      </button>
    </>
  );
}
