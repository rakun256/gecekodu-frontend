import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isAnimate, setIsAnimate] = useState(false);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const hour12 = 12 * hour;

  //   const startCountdownTimer = (date) => {
  //     updateCountdown(date);
  //     countdownTimer = setInterval(() => {
  //       updateCountdown(date);
  //     }, 1000);
  //   };

  useEffect(() => {
    let countdownTimer;

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const countdownTime = new Date(targetDate).getTime() - currentTime;

      if (countdownTime <= 0) {
        clearInterval(countdownTimer);
        setIsAnimate(true);
        setTimeout(() => {
          setIsAnimate(false);
        }, hour12);
        return;
      } else setIsAnimate(false);

      const newDay = Math.floor(countdownTime / day);
      const newHour = Math.floor((countdownTime % day) / hour);
      const newMinute = Math.floor((countdownTime % hour) / minute);
      const newSecond = Math.floor((countdownTime % minute) / second);

      setTimeLeft({
        days: newDay,
        hours: newHour,
        minutes: newMinute,
        seconds: newSecond,
      });
    };

    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownTimer);
  }, [targetDate]);

  //   useEffect(() => {
  //     // Set the countdown date here, e.g., 1 day from now
  //     const targetDate = new Date().getTime() + day;
  //     startCountdownTimer(targetDate);

  //     return () => clearInterval(countdownTimer);
  //   }, []);

  return (
    <div
      className={`text-xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-bold rounded-3xl bg-[#006D1F] px-3 py-1 sm:px-3 sm:py-2 md:px-[0.9rem] md:py-[0.6rem] lg:px-4 lg:py-3 flex justify-center items-center gap-3  ${
        isAnimate ? " animate-dance" : ""
      }`}
    >
      <div
        className={`flex gap-2 delay-1s ${isAnimate ? "animate-updown" : ""}`}
      >
        <p className="">{timeLeft.days}</p>
        <p>gun</p>
      </div>

      <div
        className={`flex gap-2 delay-2s ${isAnimate ? "animate-updown" : ""}`}
      >
        <p>{timeLeft.hours}</p>
        <p>saat</p>
      </div>

      <div
        className={`flex gap-2 delay-3s ${isAnimate ? "animate-updown" : ""}`}
      >
        <p>{timeLeft.minutes}</p>
        <p>dakika</p>
      </div>

      <div
        className={`flex gap-2 delay-4s ${isAnimate ? "animate-updown" : ""}`}
      >
        <p>{timeLeft.seconds}</p>
        <p>saniye</p>
      </div>
    </div>
  );
}
