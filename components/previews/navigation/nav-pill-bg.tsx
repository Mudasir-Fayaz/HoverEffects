export default function NavPillBg() {
  const items = [
    { label: "Inbox", href: "#", current: true },
    { label: "Drafts", href: "#", current: false },
    { label: "Sent", href: "#", current: false },
  ];
  return (
    <nav aria-label="Demo navigation" className="flex gap-1 rounded-lg bg-slate-100 p-1">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={`rounded-md px-3 py-1.5 text-sm font-medium no-underline outline-none transition-all duration-300 hover:bg-white hover:text-indigo-600 hover:shadow-[0_1px_3px_rgba(15,23,42,.08)] focus-visible:text-indigo-600 focus-visible:bg-white ${
            item.current
              ? "bg-white text-indigo-600 shadow-[0_1px_3px_rgba(15,23,42,.08)]"
              : "text-slate-500"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
