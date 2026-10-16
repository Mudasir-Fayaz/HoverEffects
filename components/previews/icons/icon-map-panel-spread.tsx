import { iconMapPanelSpread } from "@/data/icons/icon-map-panel-spread";

export default function IconMapPanelSpread() {
  return (
    <>
      <style>{iconMapPanelSpread.css}</style>
      <button className="he-icon-map-panel-spread" type="button">
        <svg className="hi12-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi12-p1" x="4.2" y="7" width="5.2" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <rect x="9.6" y="7" width="4.8" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--text-2)" />
          <rect className="hi12-p3" x="14.6" y="7" width="5.2" height="10" rx="1.4" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <path d="M9.5 7.4v9.2M14.5 7.4v9.2" stroke="var(--accent-2)" strokeWidth="1.2" />
          <path d="M6.2 12.4 7.9 11v2.8z" fill="var(--accent)" />
          <circle cx="17.4" cy="12.6" r="1" fill="var(--accent)" />
        </svg>
      </button>
    </>
  );
}
