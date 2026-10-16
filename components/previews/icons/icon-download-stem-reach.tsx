import { iconDownloadStemReach } from "@/data/icons/icon-download-stem-reach";

export default function IconDownloadStemReach() {
  return (
    <>
      <style>{iconDownloadStemReach.css}</style>
      <button className="he-icon-download-stem-reach" type="button">
        <svg className="hi08-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g className="hi08-reach">
            <path d="M12 4.2v8.6" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8.4 9.6 12 13.2l3.6-3.6" stroke="var(--text-2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <path d="M4.6 17.2v1.6c0 .9.7 1.6 1.6 1.6h11.6c.9 0 1.6-.7 1.6-1.6v-1.6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
