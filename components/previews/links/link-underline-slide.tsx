import { textUnderline } from "@/data/links/text-underline";

export default function LinkUnderlineSlide() {
  return (
    <>
      <style>{textUnderline.css}</style>
      <a className="he-link-underline-slide" href="https://example.com">
        Read the documentation
      </a>
    </>
  );
}