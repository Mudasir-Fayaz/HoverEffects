import { arrowThroughButton } from "@/data/buttons/arrow-through";

export default function BtnArrowThrough() {
  return (
    <>
      <style>{arrowThroughButton.css}</style>
      <button type="button" className="btn-arrow-through">
        <span className="he-label">Continue</span>
        <span className="he-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width={17}
            height={17}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h13" />
            <path d="m12.5 5.5 6.5 6.5-6.5 6.5" />
          </svg>
        </span>
      </button>
    </>
  );
}
