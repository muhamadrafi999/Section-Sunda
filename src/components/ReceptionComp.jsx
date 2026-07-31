import RightTree from "../assets/images/right-tree.png";
import BlueFlower from "../assets/images/blue-flower.png";
import BgBush from "../assets/images/bg-bush.png";
import TwoRedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";

function ReceptionComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">
      <div className="relative w-97.5 h-135 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B] mt-4">
          Resepsi
        </h1>
        <p className="font-body text-[22px] font-semibold text-[#6B4A3E] mt-6">
          Senin 20 Januari 2025
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-1">
          11.00 - 01.00 WIB
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-1">
          The St. Regis Jakarta
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-6">
          Kota Jakarta Selatan
        </p>
        <p className="font-body text-[17px] leading-7 text-[#6B4A3E] text-center mt-1">
          Rajawali Place,
          <br />
          Jl. H. R. Rasuna Said
          <br />
          No.4 Blok Kav. B
        </p>
        <button className="mt-9 w-46.25 h-11 rounded-full bg-[#7D2424] text-white font-body text-[18px]">
          Lihat Peta
        </button>
        <img
          src={RightTree}
          alt=""
          className="absolute -right-28.75 bottom-2 w-62.5 z-0 animate-left-bush"
        />
        <img
          src={BgBush}
          alt=""
          className="absolute right-3 bottom-1.5 w-55 z-0"
        />
        <img
          src={BlueFlower}
          alt=""
          className="absolute right-19.5 bottom-3 w-14 z-10 animate-left-bush"
        />
        <img
          src={SunFlower}
          alt=""
          className="absolute right-3.5 bottom-4 w-20.5 z-20 animate-left-bush"
        />
        <img
          src={TwoRedFlower}
          alt=""
          className="absolute right-2 bottom-2.5 w-20.5 z-30 animate-left-bush"
        />
      </div>
    </section>
  );
}

export default ReceptionComp;