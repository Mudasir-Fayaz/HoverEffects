import { fillCenterButton } from "@/data/buttons/fill-center";

export default function BtnFillCenter() {
  return (
    <>
      <style>{fillCenterButton.css}</style>
      <button type="button" className="btn-fill-center">
        <span className="he-label">Continue</span>
      </button>
    </>
  );
}
