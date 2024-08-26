export default function NextEvent({ team, activity }) {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black rounded-3xl bg-white/70 backdrop-blur-lg px-3 py-2 sm:px-3 sm:py-2 md:px-[0.9rem] md:py-[0.6rem] lg:px-4 lg:py-3 flex items-center justify-between w-full max-w-6xl border border-l-purple-200 border-r-purple-200 border-t-[#EABFFF] border-b-[#EABFFF]">
      <p className="font-bold flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">{team}</p>
      <span className="mx-2 flex-shrink-0">|</span>
      <p className="flex-1 text-right whitespace-nowrap overflow-hidden text-ellipsis">{activity}</p>
    </div>
  );
}