import InstagramFilter from "../assets/images/instagram-filter.jpeg";
import BgBush from "../assets/images/bg-bush.png";
import BgPohon from "../assets/images/bg-pohon.png";
import RightTallFlower from "../assets/images/right-tall-flower.png";
import BottomLeftFlower from "../assets/images/bottom-left-flowerr.png";

function InstagramFilterComp() {
  return (
    <section className="bg-[#F7F0DE] py-24 flex justify-center">
      <div className="w-107.5 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B] mb-12">
          Instagram Wedding Filter
        </h1>
        <div className="relative w-58.75 h-88.75">
          <img
            src={BgPohon}
            alt=""
            className="absolute -left-22 bottom-1 w-60 z-0"
          />
          <img
            src={BgBush}
            alt=""
            className="absolute -right-17.5 bottom-0 w-50 z-0"
          />
          <img
            src={BottomLeftFlower}
            alt=""
            className="absolute -left-8 bottom-0 w-11 z-10"
          />
          <img
            src={InstagramFilter}
            alt=""
            className="relative w-full h-full object-cover z-10"
          />
          <img
            src={RightTallFlower}
            alt=""
            className="absolute -right-8 bottom-0 w-20 z-20 animate-tall-flower"
          />
        </div>
        <button className="mt-10 w-61.25 h-10.5 rounded-full bg-[#7D2424] text-white font-body text-[20px]">
          Gunakan
        </button>
      </div>
    </section>
  );
}

export default InstagramFilterComp;