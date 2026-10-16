import { navDoubleUnderline } from "@/data/navigation/nav-double-underline";

export default function NavDoubleUnderline() {
  return (
    <>
      <style>{navDoubleUnderline.css}</style>
      <nav className="nav-double-underline" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
      </nav>
    </>
  );
}
