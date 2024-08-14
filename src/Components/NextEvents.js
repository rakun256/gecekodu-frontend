import NextEvent from "./NextEvent";

export default function NextEvents({ nextEvents }) {
  return (
    <div className="flex flex-col lg:gap-5 md:gap-4 gap-3">
      {nextEvents.map((activity, index) => {
        console.log(activity.team, activity.activityName);
        return (
          <NextEvent
            key={index}
            team={activity.team}
            activity={activity.activityName}
          />
        );
      })}
    </div>
  );
}
