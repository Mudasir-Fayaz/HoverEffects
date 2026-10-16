import { colorShadowButton } from "@/data/buttons/color-shadow";

export default function BtnColorShadow() {
  return (
    <>
      <style>{colorShadowButton.css}</style>
      <button type="button" className="btn-color-shadow">
        Launch app
      </button>
    </>
  );
}