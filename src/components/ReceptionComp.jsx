import RightTree from "../assets/images/right-tree.png";
import BlueFlower from "../assets/images/blue-flower.png";
import BgBush from "../assets/images/bg-bush.png";
import TwoRedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";

function ReceptionComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">

      <div className="relative w-[390px] h-[540px] flex flex-col items-center">

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

        <button className="mt-9 w-[185px] h-[44px] rounded-full bg-[#7D2424] text-white font-body text-[18px]">
          Lihat Peta
        </button>

        <img
          src={RightTree}
          alt=""
          className="absolute right-[-115px] bottom-2 w-[250px] z-0 animate-left-bush"
        />

        <img
          src={BgBush}
          alt=""
          className="absolute right-[12px] bottom-[6px] w-[220px] z-0"
        />

        <img
          src={BlueFlower}
          alt=""
          className="absolute right-[78px] bottom-[12px] w-[56px] z-10 animate-left-bush"
        />

        <img
          src={SunFlower}
          alt=""
          className="absolute right-[14px] bottom-[16px] w-[82px] z-20 animate-left-bush"
        />

        <img
          src={TwoRedFlower}
          alt=""
          className="absolute right-[8px] bottom-[10px] w-[82px] z-30 animate-left-bush"
        />

      </div>

    </section>
  );
}

export default ReceptionComp;