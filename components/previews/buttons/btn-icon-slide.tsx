import { iconSlideButton } from "@/data/buttons/icon-slide";

export default function BtnIconSlide() {
  return (
    <>
      <style>{iconSlideButton.css}</style>
      <button type="button" className="btn-icon-slide">
        <span className="he-label">Message</span>
        <span className="he-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
            <path d="m3.4 7.4 7.5 5a2 2 0 0 0 2.2 0l7.5-5" />
          </svg>
        </span>
      </button>
    </>
  );
}
