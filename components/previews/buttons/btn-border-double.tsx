export default function BtnBorderDouble() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-indigo-400 bg-transparent border-2 border-transparent cursor-pointer transition-all duration-350 hover:text-white hover:border-indigo-400 hover:bg-indigo-400/10">
      Hover Me
      <span className="absolute -inset-1.5 border-2 border-dashed border-transparent pointer-events-none transition-all duration-350 group-hover:border-indigo-400" />
    </button>
  );
}
