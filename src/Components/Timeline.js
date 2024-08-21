import Countdown from "./Countdown";
import EventDate from "./EventDate";
import Timelines from "../Services/timelineService";
import NextEventsList from "./NextEventsList";

export default function Timeline() {
  const { nextEventDate, nextEventActivities } = Timelines;
  return (
    <div className="flex flex-col lg:gap-10 md:gap-8 sm:gap-6 gap-5 justify-center items-center w-full">
      <EventDate targetDate={nextEventDate} />
      <Countdown targetDate={nextEventDate} />
      <NextEventsList nextEvents={nextEventActivities} />
    </div>
  );
}
