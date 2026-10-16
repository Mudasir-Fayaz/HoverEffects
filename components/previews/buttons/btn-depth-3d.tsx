import { depth3dButton } from "@/data/buttons/depth-3d";

export default function BtnDepth3d() {
  return (
    <>
      <style>{depth3dButton.css}</style>
      <button type="button" className="btn-3d-depth">
        Tap to continue
      </button>
    </>
  );
}