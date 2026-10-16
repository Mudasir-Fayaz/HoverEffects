import { inputPrefixDivider } from "@/data/inputs/input-prefix-divider";

export default function InputPrefixDivider() {
  return (
    <>
      <style>{inputPrefixDivider.css}</style>
      <div className="field he-input-prefix-divider">
        <label className="inp23-label" htmlFor="input-prefix-divider-inp23-input">Monthly budget</label>
        <div className="inp23-wrap">
          <span className="inp23-prefix" aria-hidden="true">£</span>
          <i className="inp23-div" aria-hidden="true"></i>
          <input className="inp23-control" id="input-prefix-divider-inp23-input" type="text" inputMode="decimal" placeholder="0.00" aria-describedby="input-prefix-divider-inp23-help" />
        </div>
        <p className="inp23-help" id="input-prefix-divider-inp23-help">Hard limits trigger an alert at 80%.</p>
      </div>
    </>
  );
}
