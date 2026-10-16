import { iconChainDetailSettle } from "@/data/icons/icon-chain-detail-settle";

export default function IconChainDetailSettle() {
  return (
    <>
      <style>{iconChainDetailSettle.css}</style>
      <button className="he-icon-chain-detail-settle" type="button">
        <svg className="hi20-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect x="3.6" y="8.2" width="13.4" height="7.6" rx="3.8" stroke="var(--accent-2)" strokeWidth="1.6" />
          <rect className="hi20-link2" x="10" y="9.6" width="13.4" height="7.6" rx="3.8" stroke="var(--text-2)" strokeWidth="1.6" />
        </svg>
      </button>
    </>
  );
}
