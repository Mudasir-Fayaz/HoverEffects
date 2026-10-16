import { iconSwapButton } from "@/data/buttons/icon-swap";

export default function BtnIconSwap() {
  return (
    <>
      <style>{iconSwapButton.css}</style>
      <button type="button" className="btn-icon-swap">
        <span className="he-track">
          <span className="he-label">Buy now</span>
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
              <circle cx="9" cy="20.5" r="1.4" />
              <circle cx="18" cy="20.5" r="1.4" />
              <path d="M2.5 2.5h2.2l2.2 11.1a1.6 1.6 0 0 0 1.57 1.24h8.9a1.6 1.6 0 0 0 1.57-1.24L20.6 6.4H5.6" />
            </svg>
          </span>
        </span>
      </button>
    </>
  );
}
