import { iconShieldSeamWrite } from "@/data/icons/icon-shield-seam-write";

export default function IconShieldSeamWrite() {
  return (
    <>
      <style>{iconShieldSeamWrite.css}</style>
      <button className="he-icon-shield-seam-write" type="button">
        <svg className="hi31-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 3.4 18.8 5.8v5c0 4.3-2.8 7.4-6.8 8.8-4-1.4-6.8-4.5-6.8-8.8v-5z" stroke="var(--text-2)" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 9.2 14.4 11.6 12 14 9.6 11.6z" stroke="var(--accent-2)" strokeWidth="1.5" strokeLinejoin="round" opacity=".65" />
          <path className="hi31-write" d="M12 9.2 14.4 11.6 12 14 9.6 11.6z" pathLength="100" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="100" />
        </svg>
      </button>
    </>
  );
}
