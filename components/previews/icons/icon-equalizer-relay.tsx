import { iconEqualizerRelay } from "@/data/icons/icon-equalizer-relay";

export default function IconEqualizerRelay() {
  return (
    <>
      <style>{iconEqualizerRelay.css}</style>
      <button className="he-icon-equalizer-relay" type="button">
        <svg className="hi16-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="var(--line-strong)" opacity=".5">
            <rect x="5.2" y="6" width="3" height="3.4" rx="1" /><rect x="5.2" y="10.4" width="3" height="3.4" rx="1" /><rect x="5.2" y="14.8" width="3" height="3.4" rx="1" />
            <rect x="10.5" y="6" width="3" height="3.4" rx="1" /><rect x="10.5" y="10.4" width="3" height="3.4" rx="1" /><rect x="10.5" y="14.8" width="3" height="3.4" rx="1" />
            <rect x="15.8" y="6" width="3" height="3.4" rx="1" /><rect x="15.8" y="10.4" width="3" height="3.4" rx="1" /><rect x="15.8" y="14.8" width="3" height="3.4" rx="1" />
          </g>
          <g className="hi16-g hi16-g1" fill="var(--accent)">
            <rect x="5.2" y="6" width="3" height="3.4" rx="1" /><rect x="5.2" y="10.4" width="3" height="3.4" rx="1" /><rect x="5.2" y="14.8" width="3" height="3.4" rx="1" />
          </g>
          <g className="hi16-g hi16-g2" fill="var(--accent)">
            <rect x="10.5" y="6" width="3" height="3.4" rx="1" /><rect x="10.5" y="10.4" width="3" height="3.4" rx="1" /><rect x="10.5" y="14.8" width="3" height="3.4" rx="1" />
          </g>
          <g className="hi16-g hi16-g3" fill="var(--accent)">
            <rect x="15.8" y="6" width="3" height="3.4" rx="1" /><rect x="15.8" y="10.4" width="3" height="3.4" rx="1" /><rect x="15.8" y="14.8" width="3" height="3.4" rx="1" />
          </g>
        </svg>
      </button>
    </>
  );
}
