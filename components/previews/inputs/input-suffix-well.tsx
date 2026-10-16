import { inputSuffixWell } from "@/data/inputs/input-suffix-well";

export default function InputSuffixWell() {
  return (
    <>
      <style>{inputSuffixWell.css}</style>
      <div className="field he-input-suffix-well">
        <label className="inp24-label" htmlFor="input-suffix-well-inp24-input">Subdomain</label>
        <div className="inp24-wrap">
          <input className="inp24-control" id="input-suffix-well-inp24-input" type="text" placeholder="northwind" aria-describedby="input-suffix-well-inp24-help" />
          <span className="inp24-suffix"><i className="inp24-tint" aria-hidden="true"></i><span className="inp24-text">.example.com</span></span>
        </div>
        <p className="inp24-help" id="input-suffix-well-inp24-help">Subdomains propagate within ten minutes.</p>
      </div>
    </>
  );
}
