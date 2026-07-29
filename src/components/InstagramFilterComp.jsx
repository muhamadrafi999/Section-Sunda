import InstagramFilter from "../assets/images/instagram-filter.jpeg";
import BgBush from "../assets/images/bg-bush.png";
import BgPohon from "../assets/images/bg-pohon.png";
import RightTallFlower from "../assets/images/right-tall-flower.png";
import BottomLeftFlower from "../assets/images/bottom-left-flowerr.png";

function InstagramFilterComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center">

      <div className="w-[390px] flex flex-col items-center">

        <h1 className="font-title text-[42px] text-[#7B3B3B] text-center">
          Instagram Wedding Filter
        </h1>

        <div className="relative w-[220px] h-[335px] mt-10">

          <img
            src={BgPohon}
            alt=""
            className="absolute -left-[78px] bottom-1 w-[220px] z-0"
          />

          <img
            src={BgBush}
            alt=""
            className="absolute -right-[60px] bottom-0 w-[180px] z-0"
          />

          <img
            src={BottomLeftFlower}
            alt=""
            className="absolute -left-6 bottom-0 w-10 z-10"
          />

          <img
            src={InstagramFilter}
            alt=""
            className="relative w-full h-full object-cover z-10 rounded-sm"
          />

          <img
            src={RightTallFlower}
            alt=""
            className="absolute -right-7 bottom-0 w-[74px] z-20 animate-tall-flower"
          />

        </div>

        <button className="mt-10 w-[230px] h-[42px] rounded-full bg-[#7D2424] text-white font-body text-[19px]">
          Gunakan
        </button>

      </div>

    </section>
  );
}

export default InstagramFilterComp;