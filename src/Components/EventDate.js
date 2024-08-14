import { useEffect, useState } from "react";

export default function EventDate({ targetDate }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const strippedCurrentDate = new Date(currentDate.setHours(0, 0, 0, 0));
    const strippedTargetDate = new Date(
      new Date(targetDate).setHours(0, 0, 0, 0)
    );

    if (strippedTargetDate > strippedCurrentDate) {
      const upcomingDate = new Date(targetDate).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      setDate(upcomingDate);
    } else {
      const todayDate = currentDate.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      setDate(todayDate);
    }
  }, [targetDate]);

  return (
    <h2 className="text-white text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-bold">
      {date}
    </h2>
  );
}
