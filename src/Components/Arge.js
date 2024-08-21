export default function Arge({ arge }) {
  return (
    <div className="flex items-center gap-10 text-white font-bold text-base lg:text-2xl md:text-xl sm:text-lg w-full">
      <img src={arge.logoUrl} alt="arge logo" className="rounded-full w-40" />
      <div className="bg-white/30 backdrop-blur-lg rounded-[3rem] flex flex-col px-6 py-3 border border-l-purple-200 border-r-purple-200 border-t-[#EABFFF] border-b-[#EABFFF] w-full">
        <p>{arge.name}</p>
        <p className="text-[#ffffff80]">{arge.projectCount}</p>
      </div>
    </div>
  );
}
