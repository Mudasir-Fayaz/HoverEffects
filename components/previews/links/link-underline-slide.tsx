export default function LinkUnderlineSlide() {
  return (
    <span className="relative text-slate-800 font-medium cursor-pointer group/link">
      Hover over me
      <span
        className="absolute -bottom-0.5 left-0 h-0.5 w-0
          bg-indigo-500 group-hover/link:w-full transition-all duration-300"
      />
    </span>
  );
}
