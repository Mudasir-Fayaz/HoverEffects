export default function InputBorderGlow() {
  return (
    <input
      type="text"
      placeholder="Type something..."
      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none
        bg-white text-slate-700 placeholder:text-slate-400 text-sm
        transition-all duration-300
        hover:border-indigo-300
        focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,.15)]"
    />
  );
}
