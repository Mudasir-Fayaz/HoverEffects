import { inputDateIconFrame } from "@/data/inputs/input-date-icon-frame";

export default function InputDateIconFrame() {
  return (
    <>
      <style>{inputDateIconFrame.css}</style>
      <div className="field he-input-date-icon-frame">
        <label className="inp28-label" htmlFor="input-date-icon-frame-inp28-input">Campaign start</label>
        <div className="inp28-wrap">
          <input className="inp28-control" id="input-date-icon-frame-inp28-input" type="date" defaultValue="2026-04-06" aria-describedby="input-date-icon-frame-inp28-help" />
          <i className="inp28-frame" aria-hidden="true"></i>
        </div>
        <p className="inp28-help" id="input-date-icon-frame-inp28-help">Uses your browser’s native date picker.</p>
      </div>
    </>
  );
}
