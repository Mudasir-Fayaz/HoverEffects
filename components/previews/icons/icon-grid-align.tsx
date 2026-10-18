import { iconGridAlign } from "@/data/icons/icon-grid-align";

export default function IconGridAlign() {
  return (
    <>
      <style>{iconGridAlign.css}</style>
      <button className="he-icon-grid-align" type="button">
        <svg className="hi04-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <rect className="hi04-t hi04-t1" x="4" y="4" width="7" height="7" rx="1.6" />
          <rect className="hi04-t hi04-t2" x="13" y="4" width="7" height="7" rx="1.6" />
          <rect className="hi04-t hi04-t3" x="4" y="13" width="7" height="7" rx="1.6" />
          <rect className="hi04-t hi04-t4" x="13" y="13" width="7" height="7" rx="1.6" />
        </svg>
      </button>
    </>
  );
}
