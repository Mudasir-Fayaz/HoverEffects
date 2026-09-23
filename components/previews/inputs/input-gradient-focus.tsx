export default function InputGradientFocus() {
  return (
    <div
      className="relative rounded-xl p-px bg-slate-200
        focus-within:bg-linear-to-r focus-within:from-indigo-500 focus-within:to-sky-500
        transition-all duration-300 w-full"
    >
      <input
        type="text"
        placeholder="Type something..."
        className="w-full px-4 py-2.5 rounded-[11px] outline-none bg-white
          text-slate-700 placeholder:text-slate-400 text-sm"
      />
    </div>
  );
}

