import { inputInsetOutline } from "@/data/inputs/input-inset-outline";

export default function InputInsetOutline() {
  return (
    <>
      <style>{inputInsetOutline.css}</style>
      <div className="field he-input-inset-outline">
        <label className="inp02-label" htmlFor="input-inset-outline-inp02-input">Workspace name</label>
        <div className="inp02-wrap">
          <input className="inp02-control" id="input-inset-outline-inp02-input" type="text" placeholder="northwind" aria-describedby="input-inset-outline-inp02-help" />
          <i className="inp02-inset" aria-hidden="true"></i>
        </div>
        <p className="inp02-help" id="input-inset-outline-inp02-help">Lowercase letters and hyphens only.</p>
      </div>
    </>
  );
}
