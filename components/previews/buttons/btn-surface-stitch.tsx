import { btnSurfaceStitch } from "@/data/buttons/btn-surface-stitch";

export default function BtnSurfaceStitch() {
  return (
    <>
      <style>{btnSurfaceStitch.css}</style>
      <button className="he-btn-surface-stitch" type="button">
        <span className="surface" aria-hidden="true">
          <span className="stitch-row deco"><span className="stitch deco" style={{ ["--i" as string]: "0" }}></span><span className="stitch deco" style={{ ["--i" as string]: "1" }}></span><span className="stitch deco" style={{ ["--i" as string]: "2" }}></span><span className="stitch deco" style={{ ["--i" as string]: "3" }}></span><span className="stitch deco" style={{ ["--i" as string]: "4" }}></span><span className="stitch deco" style={{ ["--i" as string]: "5" }}></span><span className="stitch deco" style={{ ["--i" as string]: "6" }}></span></span>
        </span>
        <span className="label">Commit changes</span>
      </button>
    </>
  );
}
