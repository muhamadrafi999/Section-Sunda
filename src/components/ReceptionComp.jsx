import RightTree from "../assets/images/right-tree.png";
import BlueFlower from "../assets/images/blue-flower.png";
import BgBush from "../assets/images/bg-bush.png";
import TwoRedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";

function ReceptionComp() {
  return (
    <section className="bg-[#F7F0DE] py-24 flex justify-center overflow-hidden">
      <div className="relative w-107.5 h-130 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B] mt-14">
          Resepsi
        </h1>
        <p className="font-body text-[20px] font-semibold text-[#6B4A3E] mt-5">
          Senin 20 Januari 2025
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-1">
          11.00 - 01.00 wib
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-1">
          The St. Regis Jakarta
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-5">
          Kota Jakarta Selatan
        </p>
        <p className="font-body text-[17px] text-[#6B4A3E] leading-6 text-center">
          Rajawali Place, Jl. H. R. Rasuna Said
          <br />
          No.4 Blok Kav. B
        </p>
        <button className="mt-8 w-44 h-11 rounded-full bg-[#7D2424] text-white font-body text-[19px]">
          Lihat Peta
        </button>
        <img
          src={RightTree}
          alt=""
          className="absolute bottom-5 -right-30 w-62.5 z-0"
        />
        <img
          src={BgBush}
          alt=""
          className="absolute bottom-2 left-64 w-70 z-0"
        />
        <img
          src={BlueFlower}
          alt=""
          className="absolute bottom-1 right-20 w-14.5 z-10"
        />
        <img
          src={SunFlower}
          alt=""
          className="absolute bottom-3 right-5 w-20 z-20"
        />
        <img
          src={TwoRedFlower}
          alt=""
          className="absolute bottom-3 right-2 w-19.5 z-30"
        />
      </div>
    </section>
  );
}

export default ReceptionComp;