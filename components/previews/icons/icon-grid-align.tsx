import { iconGridAlign } from "@/data/icons/icon-grid-align";

export default function IconGridAlign() {
  return (
    <>
      <style>{iconGridAlign.css}</style>
      <button className="he-icon-grid-align" type="button">
        <svg className="hi04-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g>
            <rect className="hi04-t" style={{ ["--dx" as string]: "1.6px", ["--dy" as string]: "1.1px" }} x="4" y="4" width="7" height="7" rx="1.6" fill="var(--accent-2)" />
            <rect className="hi04-t" style={{ ["--dx" as string]: "-1.4px", ["--dy" as string]: "1.5px" }} x="13" y="4" width="7" height="7" rx="1.6" fill="var(--line-strong)" />
            <rect className="hi04-t" style={{ ["--dx" as string]: "1.5px", ["--dy" as string]: "-1.4px" }} x="4" y="13" width="7" height="7" rx="1.6" fill="var(--line-strong)" />
            <rect className="hi04-t" style={{ ["--dx" as string]: "-1.6px", ["--dy" as string]: "-1.2px" }} x="13" y="13" width="7" height="7" rx="1.6" fill="var(--accent)" />
          </g>
        </svg>
      </button>
    </>
  );
}
