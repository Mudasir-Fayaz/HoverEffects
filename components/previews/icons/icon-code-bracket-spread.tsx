import { iconCodeBracketSpread } from "@/data/icons/icon-code-bracket-spread";

export default function IconCodeBracketSpread() {
  return (
    <>
      <style>{iconCodeBracketSpread.css}</style>
      <button className="he-icon-code-bracket-spread" type="button">
        <svg className="hi06-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path className="hi06-l" d="M9.5 6.5 5 12l4.5 5.5" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path className="hi06-r" d="M14.5 6.5 19 12l-4.5 5.5" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.1" fill="var(--accent)" />
        </svg>
      </button>
    </>
  );
}
