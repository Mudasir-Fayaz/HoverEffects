import { inputIconStroke } from "@/data/inputs/input-icon-stroke";

export default function InputIconStroke() {
  return (
    <>
      <style>{inputIconStroke.css}</style>
      <div className="field he-input-icon-stroke">
        <label className="inp21-label" htmlFor="input-icon-stroke-inp21-input">Search docs</label>
        <div className="inp21-wrap">
          <span className="inp21-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" opacity=".5" /><path d="m10.6 10.6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5" /><path className="inp21-draw" d="M7 2.4a4.6 4.6 0 0 1 4.6 4.6" pathLength="100" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </span>
          <input className="inp21-control" id="input-icon-stroke-inp21-input" type="search" placeholder="Component, token, pattern…" aria-describedby="input-icon-stroke-inp21-help" />
        </div>
        <p className="inp21-help" id="input-icon-stroke-inp21-help">Searches the internal handbook.</p>
      </div>
    </>
  );
}
