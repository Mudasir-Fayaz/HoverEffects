import { curtainFillButton } from "@/data/buttons/curtain-fill";

export default function BtnCurtainFill() {
  return (
    <>
      <style>{curtainFillButton.css}</style>
      <button type="button" className="btn-curtain-fill">
        Publish post
      </button>
    </>
  );
}