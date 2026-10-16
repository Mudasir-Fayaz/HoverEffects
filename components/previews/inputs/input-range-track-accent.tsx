import { inputRangeTrackAccent } from "@/data/inputs/input-range-track-accent";

export default function InputRangeTrackAccent() {
  return (
    <>
      <style>{inputRangeTrackAccent.css}</style>
      <div className="field he-input-range-track-accent">
        <label className="inp29-label" htmlFor="input-range-track-accent-inp29-input">Retention window</label>
        <div className="inp29-wrap">
          <input className="inp29-control" id="input-range-track-accent-inp29-input" type="range" min="7" max="90" step="1" defaultValue="42" aria-describedby="input-range-track-accent-inp29-help" />
          <output className="inp29-value" htmlFor="input-range-track-accent-inp29-input">42 days</output>
        </div>
        <p className="inp29-help" id="input-range-track-accent-inp29-help">Sample setting for demonstration — drag to change the real value.</p>
      </div>
    </>
  );
}
