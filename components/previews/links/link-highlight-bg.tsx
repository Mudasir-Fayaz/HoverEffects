export default function LinkHighlightBg() {
  return (
    <span
      className="relative text-slate-800 font-medium cursor-pointer
        px-1 py-0.5 group/hl hover:text-indigo-500 transition-colors duration-300"
    >
      <span
        className="absolute inset-0 bg-indigo-500/10 rounded
          scale-x-0 origin-right group-hover/hl:scale-x-100
          group-hover/hl:origin-left transition-transform duration-300"
      />
      <span className="relative">Hover over me</span>
    </span>
  );
}
