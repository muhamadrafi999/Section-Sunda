import Video from "../assets/images/foto-vidio.png";
import TopRightFlower from "../assets/images/top-right-flower.png";
import BottomRightFlower from "../assets/images/bottom-right-flower.png";
import BottomLeftFlower from "../assets/images/bottom-left-flower.png";

function LiveFootageComp() {
  return (
    <section className="bg-[#F7F0DE] py-16">

      <div className="w-[390px] mx-auto flex flex-col items-center">

        <h1 className="font-title text-[42px] text-[#7B3B3B]">
          Live Streaming
        </h1>

        <p className="font-body text-[20px] text-[#7B3B3B] mt-2 mb-5">
          Tambahkan kalimat
        </p>

        <div className="relative w-[315px]">

          <img
            src={Video}
            alt=""
            className="w-full rounded-md"
          />

          <img
            src={TopRightFlower}
            alt=""
            className="absolute top-1 -right-5 w-[88px] animate-top-flower"
          />

          <img
            src={BottomRightFlower}
            alt=""
            className="absolute bottom-0 -right-7 w-[88px] animate-bottom-flower"
          />

        </div>

        <div className="flex flex-col items-center mt-16">

          <h1 className="font-title text-[42px] text-[#7B3B3B]">
            Our Footage
          </h1>

          <p className="font-body text-[20px] text-[#7B3B3B] mt-2 mb-5">
            Tambahkan kalimat
          </p>

          <div className="relative w-[315px]">

            <img
              src={Video}
              alt=""
              className="w-full rounded-md"
            />

            <img
              src={BottomLeftFlower}
              alt=""
              className="absolute -bottom-7 -left-7 w-[95px] animate-top-flower"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default LiveFootageComp;