import { navLineTrack } from "@/data/navigation/nav-line-track";

export default function NavLineTrack() {
  return (
    <>
      <style>{navLineTrack.css}</style>
      <nav className="nav-line-track" aria-label="Demo navigation">
        <a href="https://example.com" aria-current="page">Home</a>
        <a href="https://example.com">Gallery</a>
        <a href="https://example.com">Portfolio</a>
        <a href="https://example.com">Clients</a>
        <a href="https://example.com">Contact</a>
        <span className="he-line" aria-hidden="true" />
      </nav>
    </>
  );
}
