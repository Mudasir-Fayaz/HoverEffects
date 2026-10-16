import { fillDiagonalButton } from "@/data/buttons/fill-diagonal";

export default function BtnFillDiagonal() {
  return (
    <>
      <style>{fillDiagonalButton.css}</style>
      <button type="button" className="btn-fill-diagonal">
        <span className="he-label">Discover</span>
      </button>
    </>
  );
}
