export default function NavUnderlineSlider() {
  return (
    <div className="flex gap-4">
      {["Home", "About", "Contact"].map((l) => (
        <span
          key={l}
          className="relative text-slate-500 text-sm font-medium
            pb-1 cursor-pointer transition-colors duration-300
            hover:text-indigo-500 group/nav"
        >
          {l}
          <span
            className="absolute bottom-0 left-0 h-0.5 w-0
              bg-indigo-500 group-hover/nav:w-full transition-all duration-300"
          />
        </span>
      ))}
    </div>
  );
}
