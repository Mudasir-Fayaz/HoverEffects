import { inputDoubleOutline } from "@/data/inputs/input-double-outline";

export default function InputDoubleOutline() {
  return (
    <>
      <style>{inputDoubleOutline.css}</style>
      <div className="field he-input-double-outline">
        <label className="inp03-label" htmlFor="input-double-outline-inp03-input">Project key</label>
        <div className="inp03-wrap">
          <input className="inp03-control" id="input-double-outline-inp03-input" type="text" placeholder="PROJ" aria-describedby="input-double-outline-inp03-help" />
        </div>
        <p className="inp03-help" id="input-double-outline-inp03-help">Used as the prefix for every issue.</p>
      </div>
    </>
  );
}
