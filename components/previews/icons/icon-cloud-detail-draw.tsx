import { iconCloudDetailDraw } from "@/data/icons/icon-cloud-detail-draw";

export default function IconCloudDetailDraw() {
  return (
    <>
      <style>{iconCloudDetailDraw.css}</style>
      <button className="he-icon-cloud-detail-draw" type="button">
        <svg className="hi09-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M17.5 18a4 4 0 0 0 0-8 5.6 5.6 0 0 0-10.6 1.6A3.6 3.6 0 0 0 8.2 18z" stroke="var(--text-2)" strokeWidth="1.8" strokeLinejoin="round" />
          <g stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" opacity=".55">
            <path d="M9.4 18v2.2" />
            <path d="M12 18v2.8" />
            <path d="M14.6 18v2" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
            <path className="hi09-draw hi09-d1" d="M9.4 18v2.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi09-draw hi09-d2" d="M12 18v2.8" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi09-draw hi09-d3" d="M14.6 18v2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
        </svg>
      </button>
    </>
  );
}
