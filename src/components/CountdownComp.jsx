import { useEffect, useState } from "react";

import BgOverlay from "../assets/images/bg-overlay-6.png";
import Tree from "../assets/images/el-tree-6.png";
import FlowerLeft from "../assets/images/el-flower-22.png";
import FlowerRight from "../assets/images/el-flower-22-rotated.png";
import Pattern from "../assets/images/el-pattern-3.png";

function CountdownComp() {
  const weddingDate = new Date("2026-08-11T09:00:00+07:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,  
    minutes: 0,
    seconds: 0,
  });

  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        setIsWeddingDay(true);
        return;
      }

      setIsWeddingDay(false);

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddCalendar = () => {
    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=Wedding+Bryan+%26+Anne" +
      "&dates=20270115T090000Z/20270115T120000Z" +
      "&details=Wedding+Invitation+Bryan+%26+Anne" +
      "&location=Indonesia";
    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#F7F0DE] pt-24 pb-6 flex justify-center overflow-hidden">
      <div className="relative w-97.5 h-135 flex justify-center">
        <img
          src={Pattern}
          alt=""
          className="absolute -top-11.25 left-1/2 -translate-x-1/2 w-62.5 z-30"
        />
        <img
          src={BgOverlay}
          alt=""
          className="absolute top-7.5 left-1/2 -translate-x-1/2 w-86.25 z-10"
        />
        <div className="absolute top-17 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <h2 className="font-title text-[27px] text-[#7B3B3B] text-center leading-tight">
            Hari yang
            <br />
            Ditunggu
          </h2>
          {isWeddingDay ? (
            <div className="mt-5 flex flex-col items-center justify-center text-center">
              <div className="text-[35px]">
                💍
              </div>
              <h3 className="mt-2 font-title text-[26px] text-[#7B3B3B]">
                The Wedding Day
              </h3>
              <p className="mt-2 font-body text-[18px] text-[#6C4A3D]">
                Has Arrived!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-24 gap-y-6 mt-7">
              <div className="text-center">
                <h3 className="font-body text-[22px] text-[#6C4A3D]">
                  {timeLeft.days}
                </h3>
                <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                  Hari
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-body text-[22px] text-[#6C4A3D]">
                  {timeLeft.hours}
                </h3>
                <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                  Jam
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-body text-[22px] text-[#6C4A3D]">
                  {timeLeft.minutes}
                </h3>
                <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                  Menit
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-body text-[22px] text-[#6C4A3D]">
                  {timeLeft.seconds}
                </h3>
                <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                  Detik
                </p>
              </div>
            </div>
          )}
          <button
            onClick={handleAddCalendar}
            className="mt-6 w-36.25 h-7 rounded-full bg-[#7D2424] text-white font-body text-[12px] hover:scale-105 duration-300 cursor-pointer"
          >
            Tambah ke Kalender
          </button>
        </div>
        <img
          src={Tree}
          alt=""
          className="absolute right-73.75 bottom-36.25 w-43.75 z-20 animate-left-flower"
        />
        <img
          src={FlowerLeft}
          alt=""
          className="absolute right-71.25 bottom-26.25 w-42.5 z-30 animate-left-flower"
        />
        <img
          src={FlowerRight}
          alt=""
          className="absolute left-71.25 bottom-26.25 w-42.5 z-30 animate-left-flower"
        />
      </div>
    </section>
  );
}

export default CountdownComp;