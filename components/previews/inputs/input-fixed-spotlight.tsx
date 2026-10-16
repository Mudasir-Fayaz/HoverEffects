import { inputFixedSpotlight } from "@/data/inputs/input-fixed-spotlight";

export default function InputFixedSpotlight() {
  return (
    <>
      <style>{inputFixedSpotlight.css}</style>
      <div className="field he-input-fixed-spotlight">
        <label className="inp15-label" htmlFor="input-fixed-spotlight-inp15-input">Card number</label>
        <div className="inp15-wrap">
          <input className="inp15-control" id="input-fixed-spotlight-inp15-input" type="text" placeholder="0000 0000 0000 0000" aria-describedby="input-fixed-spotlight-inp15-help" />
          <i className="inp15-spot" aria-hidden="true"></i>
        </div>
        <p className="inp15-help" id="input-fixed-spotlight-inp15-help">Test mode — no real charges are made.</p>
      </div>
    </>
  );
}
