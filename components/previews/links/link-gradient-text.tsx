import { textGradient } from "@/data/links/text-gradient";

export default function LinkGradientText() {
  return (
    <>
      <style>{textGradient.css}</style>
      <a className="he-link-gradient-text" href="https://example.com">
        <span className="he-link-text">Explore the gallery</span>
        <span className="he-gradient" aria-hidden="true">
          Explore the gallery
        </span>
      </a>
    </>
  );
}