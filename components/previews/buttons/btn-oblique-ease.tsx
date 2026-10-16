import { btnObliqueEase } from "@/data/buttons/btn-oblique-ease";

export default function BtnObliqueEase() {
  return (
    <>
      <style>{btnObliqueEase.css}</style>
      <button className="he-btn-oblique-ease" type="button">
        <span className="label">Preview mode</span>
      </button>
    </>
  );
}
