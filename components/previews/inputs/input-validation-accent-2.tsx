import { inputValidationAccent2 } from "@/data/inputs/input-validation-accent-2";

export default function InputValidationAccent() {
  return (
    <>
      <style>{inputValidationAccent2.css}</style>
      <div className="field he-input-validation-accent-2">
        <label className="inp27-label" htmlFor="input-validation-accent-2-inp27-bad">Work email</label>
        <div className="inp27-wrap inp27-wrap-bad">
          <input className="inp27-control" id="input-validation-accent-2-inp27-bad" type="email" defaultValue="mira@" aria-invalid="true" aria-describedby="input-validation-accent-2-inp27-bad-msg" />
          <svg className="inp27-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M8 5.2v3.4M8 10.9h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
        <p className="inp27-msg" id="input-validation-accent-2-inp27-bad-msg">This address is incomplete — add the domain, e.g. mira@studio.com.</p>

        <label className="inp27-label inp27-label-gap" htmlFor="input-validation-accent-2-inp27-good">Backup email</label>
        <div className="inp27-wrap inp27-wrap-good">
          <input className="inp27-control" id="input-validation-accent-2-inp27-good" type="email" defaultValue="mira@studio.com" aria-describedby="input-validation-accent-2-inp27-good-msg" />
          <svg className="inp27-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="m5.4 8.2 1.8 1.8 3.4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <p className="inp27-msg" id="input-validation-accent-2-inp27-good-msg">Address looks complete.</p>
      </div>
    </>
  );
}
