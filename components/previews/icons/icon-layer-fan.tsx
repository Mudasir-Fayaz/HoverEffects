import { iconLayerFan } from "@/data/icons/icon-layer-fan";

export default function IconLayerFan() {
  return (
    <>
      <style>{iconLayerFan.css}</style>
      <button className="he-icon-layer-fan" type="button">
        <svg className="hi05-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi05-rear hi05-r1" x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <rect className="hi05-rear hi05-r2" x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <rect x="7.5" y="5.5" width="9" height="12.5" rx="1.6" fill="var(--surface-2)" stroke="var(--text-2)" />
          <path d="M10.2 10h3.6M10.2 12.4h2.6" stroke="var(--text-2)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
