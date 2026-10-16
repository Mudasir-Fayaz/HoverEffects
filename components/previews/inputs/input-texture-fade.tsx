import { inputTextureFade } from "@/data/inputs/input-texture-fade";

export default function InputTextureFade() {
  return (
    <>
      <style>{inputTextureFade.css}</style>
      <div className="field he-input-texture-fade">
        <label className="inp16-label" htmlFor="input-texture-fade-inp16-input">Search assets</label>
        <div className="inp16-wrap">
          <input className="inp16-control" id="input-texture-fade-inp16-input" type="text" placeholder="logo, banner, icon…" aria-describedby="input-texture-fade-inp16-help" />
          <i className="inp16-texture" aria-hidden="true"></i>
        </div>
        <p className="inp16-help" id="input-texture-fade-inp16-help">Searches names and descriptions.</p>
      </div>
    </>
  );
}
