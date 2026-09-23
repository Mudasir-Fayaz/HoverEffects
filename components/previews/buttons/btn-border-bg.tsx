export default function BtnBorderBg() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-indigo-400 bg-[#18181b] border-b-2 border-indigo-400 overflow-hidden transition-colors duration-500 cursor-pointer hover:text-white">
      <span className="relative z-10">Hover Me</span>
      <span className="absolute inset-0 bg-indigo-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover:translate-y-0" />
    </button>
  );
}
