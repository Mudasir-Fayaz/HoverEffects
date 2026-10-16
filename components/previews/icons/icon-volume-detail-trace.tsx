import { iconVolumeDetailTrace } from "@/data/icons/icon-volume-detail-trace";

export default function IconVolumeDetailTrace() {
  return (
    <>
      <style>{iconVolumeDetailTrace.css}</style>
      <button className="he-icon-volume-detail-trace" type="button">
        <svg className="hi17-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M11.4 5.4 6.8 9.2H3.6c-.4 0-.8.4-.8.8v4c0 .4.4.8.8.8h3.2l4.6 3.8z" fill="var(--surface-2)" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <g stroke="var(--text-2)" strokeWidth="1.7" strokeLinecap="round" opacity=".5">
            <path d="M14.6 9.4a3.7 3.7 0 0 1 0 5.2" />
            <path d="M17 7.2a6.8 6.8 0 0 1 0 9.6" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round">
            <path className="hi17-trace hi17-t1" d="M14.6 9.4a3.7 3.7 0 0 1 0 5.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi17-trace hi17-t2" d="M17 7.2a6.8 6.8 0 0 1 0 9.6" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
        </svg>
      </button>
    </>
  );
}
