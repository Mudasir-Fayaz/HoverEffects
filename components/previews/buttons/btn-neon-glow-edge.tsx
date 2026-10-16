import { neonGlowEdgeButton } from "@/data/buttons/neon-glow-edge";

export default function BtnNeonGlowEdge() {
  return (
    <>
      <style>{neonGlowEdgeButton.css}</style>
      <button type="button" className="btn-neon-glow-edge">
        Power on
      </button>
    </>
  );
}