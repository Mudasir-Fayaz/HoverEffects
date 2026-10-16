import { borderBgButton } from "@/data/buttons/border-bg";

export default function BtnBorderBg() {
  return (
    <>
      <style>{borderBgButton.css}</style>
      <button type="button" className="btn-border-bg">
        <span className="he-label">Get started</span>
      </button>
    </>
  );
}