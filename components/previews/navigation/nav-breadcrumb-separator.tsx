import { navBreadcrumbSeparator } from "@/data/navigation/nav-breadcrumb-separator";

export default function NavBreadcrumbSeparator() {
  return (
    <>
      <style>{navBreadcrumbSeparator.css}</style>
      <nav className="he-nav-breadcrumb-separator" aria-label="Breadcrumb">
        <ol className="nav30-list">
          <li><a onClick={(event) => event.preventDefault()} className="nav30-link" href="https://example.com">Home</a><i className="nav30-sep" aria-hidden="true">/</i></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav30-link" href="https://example.com">Library</a><i className="nav30-sep" aria-hidden="true">/</i></li>
          <li><a onClick={(event) => event.preventDefault()} className="nav30-link" href="https://example.com" aria-current="page">Details</a></li>
        </ol>
      </nav>
    </>
  );
}
