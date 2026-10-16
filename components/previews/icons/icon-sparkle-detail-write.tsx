import { iconSparkleDetailWrite } from "@/data/icons/icon-sparkle-detail-write";

export default function IconSparkleDetailWrite() {
  return (
    <>
      <style>{iconSparkleDetailWrite.css}</style>
      <button className="he-icon-sparkle-detail-write" type="button">
        <svg className="hi18-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 3.6l1.9 5.3 5.3 1.9-5.3 1.9-1.9 5.3-1.9-5.3-5.3-1.9 5.3-1.9z" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <g stroke="var(--text-2)" strokeWidth="1.5" strokeLinecap="round" opacity=".45">
            <path d="M12 1.4v1.5" />
            <path d="M12 21.1v1.5" />
            <path d="M1.4 12h1.5" />
            <path d="M21.1 12h1.5" />
          </g>
          <g stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round">
            <path className="hi18-ray hi18-y1" d="M12 1.4v1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi18-ray hi18-y2" d="M21.1 12h1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi18-ray hi18-y3" d="M12 21.1v1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi18-ray hi18-y4" d="M1.4 12h1.5" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
        </svg>
      </button>
    </>
  );
}
