import { iconPixelResolve } from "@/data/icons/icon-pixel-resolve";

export default function IconPixelResolve() {
  return (
    <>
      <style>{iconPixelResolve.css}</style>
      <button className="he-icon-pixel-resolve" type="button">
        <svg className="hi03-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="var(--accent)">
            <rect className="hi03-p" style={{ ["--i" as string]: "0" }} x="5" y="5" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "1" }} x="10" y="5" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "2" }} x="15" y="5" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "3" }} x="5" y="10" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "4" }} x="10" y="10" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "5" }} x="15" y="10" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "6" }} x="5" y="15" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "7" }} x="10" y="15" width="4" height="4" rx="1" />
            <rect className="hi03-p" style={{ ["--i" as string]: "8" }} x="15" y="15" width="4" height="4" rx="1" />
          </g>
        </svg>
      </button>
    </>
  );
}
