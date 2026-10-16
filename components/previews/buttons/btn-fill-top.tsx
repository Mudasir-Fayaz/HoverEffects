import { fillTopButton } from "@/data/buttons/fill-top";

export default function BtnFillTop() {
  return (
    <>
      <style>{fillTopButton.css}</style>
      <button type="button" className="btn-fill-top">
        <span className="he-label">Explore</span>
      </button>
    </>
  );
}
