import InstagramFilter from "../assets/images/instagram-filter.jpeg";
import BgBush from "../assets/images/bg-bush.png";
import BgPohon from "../assets/images/bg-pohon.png";
import RightTallFlower from "../assets/images/right-tall-flower.png";
import BottomLeftFlower from "../assets/images/bottom-left-flowerr.png";

function InstagramFilterComp() {
  const handleOpenFilter = () => {
    window.open(
      "https://www.instagram.com/ar/123456789012345/",
      "_blank"
    );
  };

  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center">
      <div className="w-97.5 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B] text-center">
          Instagram Wedding Filter
        </h1>
        <div className="relative w-55 h-83.75 mt-10">
          <img
            src={BgPohon}
            alt=""
            className="absolute -left-19.5 bottom-1 w-55 z-0 animate-left-flower"
          />
          <img
            src={BgBush}
            alt=""
            className="absolute -right-15 bottom-0 w-45 z-0"
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
            className="absolute -right-7 bottom-0 w-18.5 z-20 animate-tall-flower"
          />
        </div>
        <button
          onClick={handleOpenFilter}
          className="mt-10 w-57.5 h-10.5 rounded-full bg-[#7D2424] text-white font-body text-[19px] hover:scale-105 duration-300 cursor-pointer"
        >
          Gunakan
        </button>
      </div>
    </section>
  );
}

export default InstagramFilterComp;