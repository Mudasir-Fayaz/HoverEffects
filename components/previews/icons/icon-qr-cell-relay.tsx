import { iconQrCellRelay } from "@/data/icons/icon-qr-cell-relay";

export default function IconQrCellRelay() {
  return (
    <>
      <style>{iconQrCellRelay.css}</style>
      <button className="he-icon-qr-cell-relay" type="button">
        <svg className="hi23-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" strokeWidth="1.6">
            <rect x="4.4" y="4.4" width="5.6" height="5.6" rx="1" />
            <rect x="14" y="4.4" width="5.6" height="5.6" rx="1" />
            <rect x="4.4" y="14" width="5.6" height="5.6" rx="1" />
          </g>
          <g fill="var(--text-2)">
            <rect x="6.6" y="6.6" width="1.2" height="1.2" />
            <rect x="16.2" y="6.6" width="1.2" height="1.2" />
            <rect x="6.6" y="16.2" width="1.2" height="1.2" />
            <rect x="14" y="14" width="1.2" height="1.2" opacity=".6" />
            <rect x="18.4" y="14" width="1.2" height="1.2" opacity=".6" />
            <rect x="14" y="18.4" width="1.2" height="1.2" opacity=".6" />
          </g>
          <g fill="var(--accent)">
            <rect className="hi23-c" style={{ ["--i" as string]: "0" }} x="14" y="11.2" width="1.6" height="1.6" rx=".4" />
            <rect className="hi23-c" style={{ ["--i" as string]: "1" }} x="18" y="14" width="1" height="1.6" rx=".4" />
            <rect className="hi23-c" style={{ ["--i" as string]: "2" }} x="14" y="18" width="1.6" height="1" rx=".4" />
          </g>
        </svg>
      </button>
    </>
  );
}
