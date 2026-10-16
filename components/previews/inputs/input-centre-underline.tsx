import { inputCentreUnderline } from "@/data/inputs/input-centre-underline";

export default function InputCentreUnderline() {
  return (
    <>
      <style>{inputCentreUnderline.css}</style>
      <div className="field he-input-centre-underline">
        <label className="inp04-label" htmlFor="input-centre-underline-inp04-input">Search terms</label>
        <div className="inp04-wrap">
          <input className="inp04-control" id="input-centre-underline-inp04-input" type="text" placeholder="glaze recipes" aria-describedby="input-centre-underline-inp04-help" />
          <i className="inp04-u" aria-hidden="true"></i>
        </div>
        <p className="inp04-help" id="input-centre-underline-inp04-help">Matches titles, notes and tags.</p>
      </div>
    </>
  );
}
