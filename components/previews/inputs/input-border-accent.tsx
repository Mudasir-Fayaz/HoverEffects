import { inputBorderAccent } from "@/data/inputs/input-border-accent";

export default function InputBorderAccent() {
  return (
    <>
      <style>{inputBorderAccent.css}</style>
      <div className="field he-input-border-accent">
        <label className="inp01-label" htmlFor="input-border-accent-inp01-input">Account email</label>
        <div className="inp01-wrap">
          <input className="inp01-control" id="input-border-accent-inp01-input" type="email" placeholder="name@company.com" aria-describedby="input-border-accent-inp01-help" />
        </div>
        <p className="inp01-help" id="input-border-accent-inp01-help">We send the verification link to this address.</p>
      </div>
    </>
  );
}
