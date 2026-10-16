export default function NavUnderlineSlider() {
  const items = [
    { label: "Overview", current: true },
    { label: "Activity", current: false },
    { label: "Settings", current: false },
  ];
  return (
    <nav aria-label="Demo navigation" className="flex gap-6">
      {items.map((item) => (
        <a
          key={item.label}
          href="https://example.com"
          aria-current={item.current ? "page" : undefined}
          className={`group/navslide relative pb-1.5 text-sm font-medium no-underline outline-none transition-colors duration-300 hover:text-indigo-600 focus-visible:text-indigo-600 ${
            item.current ? "text-indigo-600" : "text-slate-500"
          }`}
        >
          {item.label}
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-500 transition-[width] duration-300 ease-out group-hover/navslide:w-full group-focus-visible/navslide:w-full ${
              item.current ? "w-full" : "w-0"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
