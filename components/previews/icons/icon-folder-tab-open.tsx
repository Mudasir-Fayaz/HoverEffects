import { iconFolderTabOpen } from "@/data/icons/icon-folder-tab-open";

export default function IconFolderTabOpen() {
  return (
    <>
      <style>{iconFolderTabOpen.css}</style>
      <button className="he-icon-folder-tab-open" type="button">
        <svg className="hi10-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M4.5 18.2V9.4c0-.9.7-1.6 1.6-1.6h12.2c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H6.1c-.9 0-1.6-.7-1.6-1.6z" fill="var(--surface-2)" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <g className="hi10-tab">
            <path d="M4.6 9.6V7.4c0-.6.5-1.1 1.1-1.1h3.9l1.9 2h3.1v1.3z" fill="var(--surface-2)" stroke="var(--accent-2)" strokeWidth="1.5" strokeLinejoin="round" />
          </g>
        </svg>
      </button>
    </>
  );
}
