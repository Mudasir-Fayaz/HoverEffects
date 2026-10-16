import { iconCubeStackSettle } from "@/data/icons/icon-cube-stack-settle";

export default function IconCubeStackSettle() {
  return (
    <>
      <style>{iconCubeStackSettle.css}</style>
      <button className="he-icon-cube-stack-settle" type="button">
        <svg className="hi26-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g transform="translate(12 7.6)"><g className="hi26-cube" style={{ ["--tx" as string]: "1.6px", ["--ty" as string]: "-1.3px" }}>
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" />
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".8" />
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" />
          </g></g>
          <g transform="translate(8.6 13.4)"><g className="hi26-cube" style={{ ["--tx" as string]: "-1.5px", ["--ty" as string]: "1.1px" }}>
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" opacity=".85" />
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".7" />
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" opacity=".9" />
          </g></g>
          <g transform="translate(15.4 13.4)"><g className="hi26-cube" style={{ ["--tx" as string]: "1.8px", ["--ty" as string]: "1.4px" }}>
            <path d="M0-3.2 2.8 0 0 3.2-2.8 0z" fill="var(--accent-2)" opacity=".85" />
            <path d="M-2.8 0 0 3.2v4.2l-2.8-2.7z" fill="var(--accent)" opacity=".7" />
            <path d="M2.8 0 0 3.2v4.2l2.8-2.7z" fill="var(--line-strong)" opacity=".9" />
          </g></g>
        </svg>
      </button>
    </>
  );
}
