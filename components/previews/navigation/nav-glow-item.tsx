export default function NavGlowItem() {
  return (
    <div className="flex gap-1">
      {["Home", "About", "Contact"].map((l) => (
        <span
          key={l}
          className="text-slate-500 text-sm font-medium px-3 py-1.5
            rounded-md cursor-pointer transition-all duration-300
            hover:text-indigo-500 hover:bg-indigo-50
            hover:shadow-[0_0_15px_rgba(99,102,241,.15)]"
        >
          {l}
        </span>
      ))}
    </div>
  );
}
