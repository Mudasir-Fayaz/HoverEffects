import { hoverShadowButton } from "@/data/buttons/hover-shadow";

export default function BtnHoverShadow() {
  return (
    <>
      <style>{hoverShadowButton.css}</style>
      <button type="button" className="btn-hover-shadow">
        Start the build
      </button>
    </>
  );
}