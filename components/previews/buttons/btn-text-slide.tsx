import { textSlideButton } from "@/data/buttons/text-slide";

export default function BtnTextSlide() {
  return (
    <>
      <style>{textSlideButton.css}</style>
      <button type="button" className="btn-text-slide">
        <span className="he-slide">
          <span>Send invite</span>
          <span>Invited</span>
        </span>
      </button>
    </>
  );
}