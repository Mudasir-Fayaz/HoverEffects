import { navDiagonalLine } from "@/data/navigation/nav-diagonal-line";

export default function NavDiagonalLine() {
  return (
    <>
      <style>{navDiagonalLine.css}</style>
      <nav className="nav-diagonal-line" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
      </nav>
    </>
  );
}
