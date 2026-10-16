import { animatedBeamButton } from "@/data/buttons/animated-beam";

export default function BtnAnimatedBeam() {
  return (
    <>
      <style>{animatedBeamButton.css}</style>
      <button type="button" className="btn-animated-beam">
        <span className="he-dots" aria-hidden="true" />
        <span className="he-label">Explore the kit</span>
      </button>
    </>
  );
}