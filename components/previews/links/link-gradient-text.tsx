export default function LinkGradientText() {
  return (
    <span
      className="font-semibold text-slate-800 cursor-pointer
        hover:text-transparent hover:bg-clip-text
        hover:bg-linear-to-r hover:from-indigo-500 hover:to-pink-500
        transition-all duration-400"
    >
      Hover over me
    </span>
  );
}
