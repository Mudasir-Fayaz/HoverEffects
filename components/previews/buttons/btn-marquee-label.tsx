import { marqueeLabelButton } from "@/data/buttons/marquee-label";

export default function BtnMarqueeLabel() {
  return (
    <>
      <style>{marqueeLabelButton.css}</style>
      <button type="button" className="btn-marquee-label">
        <span className="he-marquee">
          <span>Pricing</span>
          <span>Plans</span>
        </span>
      </button>
    </>
  );
}