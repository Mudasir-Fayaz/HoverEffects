export default function BtnTextSlide() {
  return (
    <button className="group relative px-6 py-2.5 font-semibold text-pink-400 bg-transparent border-2 border-pink-400 cursor-pointer overflow-hidden transition-all duration-300 hover:text-white hover:bg-pink-400">
      <span className="block transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[30px] group-hover:opacity-0">Hover Me</span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[30px] opacity-0 whitespace-nowrap transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[-50%] group-hover:opacity-100">Click Me</span>
    </button>
  );
}
