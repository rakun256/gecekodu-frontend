import { useEffect, useState } from "react";

export default function CurrentDate({ targetDate }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const upcomingDate = new Date(targetDate).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setDate(upcomingDate);
  }, [targetDate]);

  return (
    <h2 className="text-white text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-bold">
      {date}
    </h2>
  );
}
