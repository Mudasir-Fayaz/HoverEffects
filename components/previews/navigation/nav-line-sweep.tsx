import { navLineSweep } from "@/data/navigation/nav-line-sweep";

export default function NavLineSweep() {
  return (
    <>
      <style>{navLineSweep.css}</style>
      <nav className="nav-line-sweep" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
      </nav>
    </>
  );
}
