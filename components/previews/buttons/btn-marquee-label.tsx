export default function BtnMarqueeLabel() {
  return (
    <button className="group relative font-semibold text-white bg-indigo-500 border-none cursor-pointer overflow-hidden h-[48px]">
      <span className="flex items-center justify-center h-full px-6 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] bg-indigo-500 group-hover:-translate-y-full">Primary</span>
      <span className="absolute inset-x-0 top-full flex items-center justify-center h-full px-6 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] bg-indigo-500 group-hover:-translate-y-full">Secondary</span>
    </button>
  );
}
