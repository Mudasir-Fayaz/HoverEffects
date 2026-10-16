import { textHighlight } from "@/data/links/text-highlight";

export default function LinkHighlightBg() {
  return (
    <>
      <style>{textHighlight.css}</style>
      <a className="he-link-highlight-bg" href="https://example.com">
        View the changelog
      </a>
    </>
  );
}