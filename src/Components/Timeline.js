import Countdown from "./Countdown";
import CurrDate from "./CurrentDate";
import Timelines from "../Services/timelineService";
import NextEvents from "./NextEvents";

export default function Timeline() {
  const { nextEventDate, nextEventActivities } = Timelines;
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <CurrDate targetDate={nextEventDate} />
      <Countdown targetDate={nextEventDate} />
      <NextEvents nextEvents={nextEventActivities} />
    </div>
  );
}
