import { useEffect, useRef } from "react";
import { useMusic } from "../context/MusicContext";
import BackgroundMusic from "../assets/music/Maher_Zain-Rahmatun_LiAlameen.mp3";
import VinylRecord from "../assets/images/vinyl-record.png";
import Tonearm from "../assets/images/tonearm.png";

function MusicPlayer() {
  const audioRef = useRef(null);

  const {
    isPlaying,
    toggleMusic,
    isInvitationOpened,
    isDesktop,
  } = useMusic();

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("Audio belum dapat diputar:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (!isDesktop && !isInvitationOpened) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={BackgroundMusic}
        loop
        preload="auto"
      />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Matikan background music"
            : "Nyalakan background music"
        }
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          w-15
          h-15
          cursor-pointer
          transition-transform
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        <div className="relative w-full h-full">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              w-14
              h-14
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <img
              src={VinylRecord}
              alt=""
              className={`
                w-full
                h-full
                object-contain
                ${
                  isPlaying
                    ? "animate-[spin_2.5s_linear_infinite]"
                    : ""
                }
              `}
            />
          </div>
          <img
            src={Tonearm}
            alt=""
            className={`
              absolute
              -right-3
              -top-1
              w-10
              h-15
              object-contain
              origin-top-right
              transition-transform
              duration-500
              ease-in-out
              ${
                isPlaying
                  ? "rotate-5"
                  : "rotate-[-8deg]"
              }
            `}
          />
        </div>
      </button>
    </>
  );
}

export default MusicPlayer;