import { iconFingerprintRoute } from "@/data/icons/icon-fingerprint-route";

export default function IconFingerprintRoute() {
  return (
    <>
      <style>{iconFingerprintRoute.css}</style>
      <button className="he-icon-fingerprint-route" type="button">
        <svg className="hi32-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g stroke="var(--text-2)" strokeWidth="1.5" strokeLinecap="round" opacity=".55">
            <path d="M5.8 15.6a8 8 0 0 1 12.4 0" />
            <path d="M8.2 15.6a5.2 5.2 0 0 1 7.6 0" />
            <path d="M10.6 15.6a2.4 2.4 0 0 1 2.8 0" />
          </g>
          <path className="hi32-route" d="M5.8 15.6a8 8 0 0 1 12.4 0" pathLength="100" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" />
          <circle cx="12" cy="17.6" r="1.2" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}
