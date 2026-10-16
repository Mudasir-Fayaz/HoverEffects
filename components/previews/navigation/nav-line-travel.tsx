import { navLineTravel } from "@/data/navigation/nav-line-travel";

export default function NavLineTravel() {
  return (
    <>
      <style>{navLineTravel.css}</style>
      <nav className="nav-line-travel" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
      </nav>
    </>
  );
}
