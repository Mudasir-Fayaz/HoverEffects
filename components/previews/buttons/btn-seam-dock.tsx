import { btnSeamDock } from "@/data/buttons/btn-seam-dock";

export default function BtnSeamDock() {
  return (
    <>
      <style>{btnSeamDock.css}</style>
      <button className="he-btn-seam-dock" type="button">
        <span className="surface" aria-hidden="true">
          <span className="seam seam-left deco"></span>
          <span className="seam seam-right deco"></span>
          <span className="seam seam-top seam-top-a deco"></span>
          <span className="seam seam-top seam-top-b deco"></span>
          <span className="seam seam-bottom seam-bottom-a deco"></span>
          <span className="seam seam-bottom seam-bottom-b deco"></span>
        </span>
        <span className="label">Save draft</span>
      </button>
    </>
  );
}
