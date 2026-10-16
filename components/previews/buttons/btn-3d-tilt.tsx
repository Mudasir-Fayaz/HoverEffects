import { threeDTiltButton } from "@/data/buttons/3d-tilt";

export default function Btn3dTilt() {
  return (
    <>
      <style>{threeDTiltButton.css}</style>
      <button type="button" className="btn-3d-tilt">
        3D Button
      </button>
    </>
  );
}
