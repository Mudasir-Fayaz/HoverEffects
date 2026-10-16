import { btnTonalQuilt } from "@/data/buttons/btn-tonal-quilt";

export default function BtnTonalQuilt() {
  return (
    <>
      <style>{btnTonalQuilt.css}</style>
      <button className="he-btn-tonal-quilt" type="button">
        <span className="surface" aria-hidden="true">
          <span className="quilt deco">
            <span className="quad quad-tl deco" style={{ ["--i" as string]: "0", ["--o" as string]: ".12" }}></span>
            <span className="quad quad-tr deco" style={{ ["--i" as string]: "1", ["--o" as string]: ".16" }}></span>
            <span className="quad quad-bl deco" style={{ ["--i" as string]: "2", ["--o" as string]: ".14" }}></span>
            <span className="quad quad-br deco" style={{ ["--i" as string]: "3", ["--o" as string]: ".2" }}></span>
          </span>
        </span>
        <span className="label">Organize files</span>
      </button>
    </>
  );
}
