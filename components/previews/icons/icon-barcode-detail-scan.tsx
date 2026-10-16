import { iconBarcodeDetailScan } from "@/data/icons/icon-barcode-detail-scan";

export default function IconBarcodeDetailScan() {
  return (
    <>
      <style>{iconBarcodeDetailScan.css}</style>
      <button className="he-icon-barcode-detail-scan" type="button">
        <svg className="hi22-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="icon-barcode-detail-scan-hi22-clip">
              <rect x="4" y="7" width="16" height="10" rx="1.5" />
            </clipPath>
          </defs>
          <rect x="4" y="7" width="16" height="10" rx="1.5" fill="var(--surface-2)" stroke="var(--line-strong)" />
          <g fill="var(--text-2)" opacity=".75">
            <rect x="5.8" y="8.6" width="1" height="6.8" />
            <rect x="7.6" y="8.6" width="1.6" height="6.8" />
            <rect x="10" y="8.6" width="1" height="6.8" />
            <rect x="11.8" y="8.6" width="1.4" height="6.8" />
            <rect x="13.9" y="8.6" width="1" height="6.8" />
            <rect x="15.6" y="8.6" width="1.6" height="6.8" />
            <rect x="18" y="8.6" width="1" height="6.8" />
          </g>
          <rect className="hi22-scan" x="4.4" y="7.4" width="1.2" height="9.2" fill="var(--accent)" clipPath="url(#icon-barcode-detail-scan-hi22-clip)" opacity="0" />
        </svg>
      </button>
    </>
  );
}
