import NextEvent from "./NextEvent";

export default function NextEventsList({ nextEvents }) {
  return (
    <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
      {nextEvents.length > 0 ? (
        nextEvents.map((activity, index) => {
          return (
            <NextEvent
              key={index}
              team={activity.team}
              activity={activity.activityName}
            />
          );
        })
      ) : (
        <div className="text-xl lg:text-4xl md:text-3xl sm:text-2xl text-black font-bold rounded-3xl bg-white px-3 py-1 sm:px-3 sm:py-2 md:px-[0.9rem] md:py-[0.6rem] lg:px-4 lg:py-3 flex gap-5 items-center">
          Yakında Etkinlik Yok
        </div>
      )}
    </div>
  );
}
