import { btnFramePhase } from "@/data/buttons/btn-frame-phase";

export default function BtnFramePhase() {
  return (
    <>
      <style>{btnFramePhase.css}</style>
      <button className="he-btn-frame-phase" type="button">
        <span className="surface" aria-hidden="true">
          <span className="phase phase-top p1 deco" style={{ ["--i" as string]: "0" }}></span>
          <span className="phase phase-top p2 deco" style={{ ["--i" as string]: "1" }}></span>
          <span className="phase phase-top p3 deco" style={{ ["--i" as string]: "2" }}></span>
          <span className="phase phase-bottom p1 deco" style={{ ["--i" as string]: "3" }}></span>
          <span className="phase phase-bottom p2 deco" style={{ ["--i" as string]: "4" }}></span>
          <span className="phase phase-bottom p3 deco" style={{ ["--i" as string]: "5" }}></span>
        </span>
        <span className="label">Sync changes</span>
      </button>
    </>
  );
}
