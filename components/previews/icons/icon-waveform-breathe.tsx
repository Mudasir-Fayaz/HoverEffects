import { iconWaveformBreathe } from "@/data/icons/icon-waveform-breathe";

export default function IconWaveformBreathe() {
  return (
    <>
      <style>{iconWaveformBreathe.css}</style>
      <button className="he-icon-waveform-breathe" type="button">
        <svg className="hi15-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M3.6 12h16.8" stroke="var(--line-strong)" strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
          <g fill="var(--accent-2)">
            <rect className="hi15-b" style={{ ["--s" as string]: ".55", ["--d" as string]: "0ms" }} x="4.9" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".75", ["--d" as string]: "40ms" }} x="7.7" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".95", ["--d" as string]: "80ms" }} x="10.5" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: "1", ["--d" as string]: "120ms" }} x="13.3" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".95", ["--d" as string]: "80ms" }} x="16.1" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".75", ["--d" as string]: "40ms" }} x="18.9" y="7" width="1.7" height="10" rx=".85" />
            <rect className="hi15-b" style={{ ["--s" as string]: ".55", ["--d" as string]: "0ms" }} x="21.7" y="7" width="1.7" height="10" rx=".85" />
          </g>
        </svg>
      </button>
    </>
  );
}
