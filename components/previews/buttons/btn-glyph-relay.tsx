import { btnGlyphRelay } from "@/data/buttons/btn-glyph-relay";

export default function BtnGlyphRelay() {
  return (
    <>
      <style>{btnGlyphRelay.css}</style>
      <button className="he-btn-glyph-relay" type="button">
        <span className="glyphs" aria-hidden="true"><span className="glyph" style={{ ["--i" as string]: "0" }}>D</span><span className="glyph" style={{ ["--i" as string]: "1" }}>e</span><span className="glyph" style={{ ["--i" as string]: "2" }}>p</span><span className="glyph" style={{ ["--i" as string]: "3" }}>l</span><span className="glyph" style={{ ["--i" as string]: "4" }}>o</span><span className="glyph" style={{ ["--i" as string]: "5" }}>y</span></span>
        <span className="visually-hidden">Deploy</span>
      </button>
    </>
  );
}
