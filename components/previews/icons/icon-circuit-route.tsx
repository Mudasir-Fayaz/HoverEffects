import { iconCircuitRoute } from "@/data/icons/icon-circuit-route";

export default function IconCircuitRoute() {
  return (
    <>
      <style>{iconCircuitRoute.css}</style>
      <button className="he-icon-circuit-route" type="button">
        <svg className="hi24-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 18.6v-4.2M12 14.4H6.4V9.2M12 14.4h5.6V9.2" stroke="var(--text-2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path className="hi24-seg hi24-s1" d="M12 18.6v-4.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi24-seg hi24-s2" d="M12 14.4H6.4V9.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
            <path className="hi24-seg hi24-s3" d="M12 14.4h5.6V9.2" pathLength="100" strokeDasharray="100" strokeDashoffset="100" />
          </g>
          <g fill="var(--line-strong)">
            <circle cx="6.4" cy="8" r="1.5" />
            <circle cx="17.6" cy="8" r="1.5" />
            <circle cx="12" cy="19.8" r="1.5" />
          </g>
          <circle cx="12" cy="14.4" r="1.3" fill="var(--accent-2)" />
        </svg>
      </button>
    </>
  );
}
