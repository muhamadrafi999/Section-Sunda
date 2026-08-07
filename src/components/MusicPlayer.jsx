import { useEffect, useRef } from "react";
import {
  HiSpeakerWave,
  HiSpeakerXMark,
} from "react-icons/hi2";

import { useMusic } from "../context/MusicContext";

import BackgroundMusic from "../assets/music/Maher_Zain-Rahmatun_LiAlameen.mp3";

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
      audioRef.current
        .play()
        .catch((error) => console.log(error));
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
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="
          fixed
          bottom-6
          right-6
          z-9999
          w-15
          h-15
          rounded-full
          bg-[#7D2424]
          text-white
          shadow-xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
          cursor-pointer
        "
      >
        <div
          className={`flex items-center justify-center ${
            isPlaying ? "animate-spin-slow" : ""
          }`}
        >
          {isPlaying ? (
            <HiSpeakerWave size={28} />
          ) : (
            <HiSpeakerXMark size={28} />
          )}
        </div>
      </button>
    </>
  );
}

export default MusicPlayer;