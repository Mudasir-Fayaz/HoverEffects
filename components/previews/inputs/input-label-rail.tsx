import { inputLabelRail } from "@/data/inputs/input-label-rail";

export default function InputLabelRail() {
  return (
    <>
      <style>{inputLabelRail.css}</style>
      <div className="field he-input-label-rail">
        <label className="inp19-label" htmlFor="input-label-rail-inp19-input"><i className="inp19-rail" aria-hidden="true"></i>Team plan seats</label>
        <div className="inp19-wrap">
          <input className="inp19-control" id="input-label-rail-inp19-input" type="number" min="1" max="250" defaultValue="12" aria-describedby="input-label-rail-inp19-help" />
        </div>
        <p className="inp19-help" id="input-label-rail-inp19-help">Billing scales with active seats only.</p>
      </div>
    </>
  );
}
