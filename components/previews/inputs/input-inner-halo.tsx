import { inputInnerHalo } from "@/data/inputs/input-inner-halo";

export default function InputInnerHalo() {
  return (
    <>
      <style>{inputInnerHalo.css}</style>
      <div className="field he-input-inner-halo">
        <label className="inp17-label" htmlFor="input-inner-halo-inp17-input">Seed phrase</label>
        <div className="inp17-wrap">
          <input className="inp17-control" id="input-inner-halo-inp17-input" type="text" placeholder="Enter recovery words" aria-describedby="input-inner-halo-inp17-help" />
          <i className="inp17-halo" aria-hidden="true"></i>
        </div>
        <p className="inp17-help" id="input-inner-halo-inp17-help">Never shared with the server.</p>
      </div>
    </>
  );
}
