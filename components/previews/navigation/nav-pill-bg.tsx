export default function NavPillBg() {
  return (
    <div className="flex gap-1 p-1 bg-slate-100 rounded-lg">
      {["Home", "About", "Contact"].map((l) => (
        <span
          key={l}
          className="text-slate-500 text-sm font-medium px-3 py-1.5
            rounded-md cursor-pointer transition-all duration-300
            hover:text-indigo-500 hover:bg-white
            hover:shadow-[0_1px_3px_rgba(0,0,0,.08)]"
        >
          {l}
        </span>
      ))}
    </div>
  );
}
