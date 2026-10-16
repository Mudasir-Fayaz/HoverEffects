import { iconBookPageRiffle } from "@/data/icons/icon-book-page-riffle";

export default function IconBookPageRiffle() {
  return (
    <>
      <style>{iconBookPageRiffle.css}</style>
      <button className="he-icon-book-page-riffle" type="button">
        <svg className="hi11-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 7.1c-.9-.7-2.1-1.1-3.6-1.1H6.2c-.8 0-1.5.7-1.5 1.5v9.2c0 .8.7 1.5 1.5 1.5h2.2c1.5 0 2.7.4 3.6 1.1.9-.7 2.1-1.1 3.6-1.1h2.2c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5h-2.2c-1.5 0-2.7.4-3.6 1.1z" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 7.4v11.8" stroke="var(--text-2)" strokeWidth="1.3" opacity=".7" />
          <g stroke="var(--accent-2)" strokeWidth="1.6" strokeLinecap="round">
            <path className="hi11-e" style={{ ["--i" as string]: "0" }} d="M18.7 10.1h2" />
            <path className="hi11-e" style={{ ["--i" as string]: "1" }} d="M18.7 12.3h2" />
            <path className="hi11-e" style={{ ["--i" as string]: "2" }} d="M18.7 14.5h2" />
          </g>
        </svg>
      </button>
    </>
  );
}
