import { navLeadingStripeWash } from "@/data/navigation/nav-leading-stripe-wash";

export default function NavLeadingStripeWash() {
  return (
    <>
      <style>{navLeadingStripeWash.css}</style>
      <nav className="he-nav-leading-stripe-wash" aria-label="Example section">
        <ul className="nav21-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav21-link" href="https://example.com" aria-current="page"><i className="nav21-wash" aria-hidden="true"></i><i className="nav21-stripe" aria-hidden="true"></i><span className="nav21-label">Overview</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav21-link" href="https://example.com"><i className="nav21-wash" aria-hidden="true"></i><i className="nav21-stripe" aria-hidden="true"></i><span className="nav21-label">Guide</span></a></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav21-link" href="https://example.com"><i className="nav21-wash" aria-hidden="true"></i><i className="nav21-stripe" aria-hidden="true"></i><span className="nav21-label">Details</span></a></li>
        </ul>
      </nav>
    </>
  );
}
