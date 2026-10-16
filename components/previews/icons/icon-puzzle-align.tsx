import { iconPuzzleAlign } from "@/data/icons/icon-puzzle-align";

export default function IconPuzzleAlign() {
  return (
    <>
      <style>{iconPuzzleAlign.css}</style>
      <button className="he-icon-puzzle-align" type="button">
        <svg className="hi19-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.4 8h9.1v3.1a1.9 1.9 0 1 1 0 3.8V18H3.4z" fill="var(--surface-2)" stroke="var(--accent-2)" strokeWidth="1.6" strokeLinejoin="round" />
          <path className="hi19-piece" d="M20.6 8h-9.1v3.1a1.9 1.9 0 1 0 0 3.8V18h9.1z" fill="var(--surface-2)" stroke="var(--text-2)" strokeWidth="1.6" strokeLinejoin="round" transform="translate(2px, 0)" />
        </svg>
      </button>
    </>
  );
}
