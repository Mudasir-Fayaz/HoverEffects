import { cornerBloomButton } from "@/data/buttons/corner-bloom";

export default function BtnCornerBloom() {
  return (
    <>
      <style>{cornerBloomButton.css}</style>
      <button type="button" className="btn-corner-bloom">
        <span className="he-label">Join waitlist</span>
      </button>
    </>
  );
}