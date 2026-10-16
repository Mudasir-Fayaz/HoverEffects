import { dotBgButton } from "@/data/buttons/dot-bg";

export default function BtnDotBg() {
  return (
    <>
      <style>{dotBgButton.css}</style>
      <button type="button" className="btn-dot-bg">
        View analytics
      </button>
    </>
  );
}