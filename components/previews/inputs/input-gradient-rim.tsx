import { inputGradientRim } from "@/data/inputs/input-gradient-rim";

export default function InputGradientRim() {
  return (
    <>
      <style>{inputGradientRim.css}</style>
      <div className="field he-input-gradient-rim">
        <label className="inp11-label" htmlFor="input-gradient-rim-inp11-input">Workspace domain</label>
        <div className="inp11-wrap">
          <input className="inp11-control" id="input-gradient-rim-inp11-input" type="text" placeholder="northwind.app" aria-describedby="input-gradient-rim-inp11-help" />
          <i className="inp11-rim" aria-hidden="true"></i>
        </div>
        <p className="inp11-help" id="input-gradient-rim-inp11-help">Custom domains require a paid plan.</p>
      </div>
    </>
  );
}
