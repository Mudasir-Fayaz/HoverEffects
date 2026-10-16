import { iconCopyPageOffset } from "@/data/icons/icon-copy-page-offset";

export default function IconCopyPageOffset() {
  return (
    <>
      <style>{iconCopyPageOffset.css}</style>
      <button className="he-icon-copy-page-offset" type="button">
        <svg className="hi07-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi07-rear" x="8" y="4.6" width="10" height="13" rx="2" stroke="var(--line-strong)" fill="var(--surface-2)" />
          <rect x="5" y="6.9" width="10" height="13" rx="2" fill="var(--surface-2)" stroke="var(--text-2)" />
          <path d="M7.6 10.4h4.8M7.6 13h3.4" stroke="var(--text-2)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
