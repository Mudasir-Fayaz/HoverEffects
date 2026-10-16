export default function NavGlowItem() {
  const items = [
    { label: "Docs", current: true },
    { label: "Guides", current: false },
    { label: "API", current: false },
  ];
  return (
    <nav aria-label="Demo navigation" className="flex gap-1">
      {items.map((item) => (
        <a
          key={item.label}
          href="https://example.com"
          aria-current={item.current ? "page" : undefined}
          className={`rounded-md px-3 py-1.5 text-sm font-medium no-underline outline-none transition-all duration-300 hover:bg-indigo-500/8 hover:text-indigo-600 hover:ring-1 hover:ring-inset hover:ring-indigo-500/25 focus-visible:bg-indigo-500/8 focus-visible:text-indigo-600 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-indigo-500/25 ${
            item.current
              ? "bg-indigo-500/8 text-indigo-600 ring-1 ring-inset ring-indigo-500/25"
              : "text-slate-500"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
