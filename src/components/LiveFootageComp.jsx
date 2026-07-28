import Video from "../assets/images/foto-vidio.png";
import TopRightFlower from "../assets/images/top-right-flower.png";
import BottomRightFlower from "../assets/images/bottom-right-flower.png";
import BottomLeftFlower from "../assets/images/bottom-left-flower.png";
// import {Video, TopRightFlower, BottomRightFlower, BottomLeftFlower } from "../assets/images"

function LiveFootageComp() {
  return (
    <section className="bg-[#F7F0DE] py-24">
      <div className="flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B]">
          Live Streaming
        </h1>
        <p className="font-body text-[20px] text-[#7B3B3B] mt-2 mb-4">
          Tambahkan kalimat
        </p>
        <div className="relative w-97.5">
          <img
            src={Video}
            alt="Video"
            className="w-full rounded-sm"
          />
          <img
            src={TopRightFlower}
            alt="Top Right Flower"
            className="absolute top-1 -right-6 w-28.75 animate-top-flower"
          />
          <img
            src={BottomRightFlower}
            alt="Bottom Right Flower"
            className="absolute bottom-0 -right-9 w-28 animate-bottom-flower"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-18">
        <h1 className="font-title text-[42px] text-[#7B3B3B]">
          Our Footage
        </h1>
        <p className="font-body text-[20px] text-[#7B3B3B] mt-2 mb-4">
          Tambahkan kalimat
        </p>
        <div className="relative w-97.5">
          <img
            src={Video}
            alt="Video"
            className="w-full rounded-sm"
          />
          <img
            src={BottomLeftFlower}
            alt="Bottom Left Flower"
            className="absolute -bottom-8 -left-8 w-30 animate-top-flower"
          />
        </div>
      </div>
    </section>
  );
}

export default LiveFootageComp;