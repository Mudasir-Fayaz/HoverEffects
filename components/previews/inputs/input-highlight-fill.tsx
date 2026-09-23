export default function InputHighlightFill() {
  return (
    <input
      type="text"
      placeholder="Type something..."
      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none
        bg-white text-slate-700 placeholder:text-slate-400 text-sm
        transition-all duration-300
        hover:bg-indigo-50/40 hover:border-indigo-200
        focus:bg-indigo-50/60 focus:border-indigo-400"
    />
  );
}
