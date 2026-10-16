import { iconTopButton } from "@/data/buttons/icon-top";

export default function BtnIconTop() {
  return (
    <>
      <style>{iconTopButton.css}</style>
      <button type="button" className="btn-icon-top">
        <span className="he-top" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19.2 13.9c1.5-1.45 3-3.2 3-5.4A5.5 5.5 0 0 0 16.7 3c-1.76 0-3 .5-4.7 2.1C10.3 3.5 9.06 3 7.3 3A5.5 5.5 0 0 0 1.8 8.5c0 2.2 1.5 3.95 3 5.4l7.2 7.1z" />
          </svg>
        </span>
        <span className="he-label">Favorite</span>
      </button>
    </>
  );
}
