import { cornerCurtainFillButton } from "@/data/buttons/corner-curtain-fill";

export default function BtnCornerCurtainFill() {
  return (
    <>
      <style>{cornerCurtainFillButton.css}</style>
      <button type="button" className="btn-corner-curtain-fill">
        Save draft
      </button>
    </>
  );
}