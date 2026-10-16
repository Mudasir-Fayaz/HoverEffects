import { layerShadowButton } from "@/data/buttons/layer-shadow";

export default function BtnLayerShadow() {
  return (
    <>
      <style>{layerShadowButton.css}</style>
      <button type="button" className="btn-layer-shadow">
        Deploy now
      </button>
    </>
  );
}