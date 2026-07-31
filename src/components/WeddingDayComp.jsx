import RightTreeRotated from "../assets/images/right-tree-rotated.png";
import Bush from "../assets/images/el-bush-1-rotated.png";
import RedFlower from "../assets/images/el-flower-26-rotated.png";
import YellowFlower from "../assets/images/el-flower-25-rotated.png";
import BlueFlower from "../assets/images/el-flower-20-rotated.png";

function AkadComp() {
  return (
    <section className="bg-[#F7F0DE] py-7 flex justify-center overflow-hidden">
      <div className="relative w-97.5 h-210 flex flex-col items-center">
        <h2 className="font-title text-[42px] text-[#7B3B3B]">
          It's Wedding Day
        </h2>
        <div className="mt-8 w-77.5 h-28.75 rounded-[22px] bg-[#EEDDCB] shadow-[0_2px_10px_rgba(0,0,0,0.18)] flex flex-col items-center justify-center">
          <p className="font-title text-[28px] text-[#7B3B3B] leading-none">
            Senin
          </p>
          <div className="flex items-center gap-5 mt-3">
            <p className="font-title text-[32px] text-[#7B3B3B]">
              Januari
            </p>
            <div className="w-12 h-12 rounded-xl border-2 border-[#8A5A4D] flex items-center justify-center">
              <span className="font-title text-[28px] text-[#7B3B3B]">
                20
              </span>
            </div>
            <p className="font-title text-[32px] text-[#7B3B3B]">
              2025
            </p>
          </div>
        </div>
        <h1 className="font-title text-[42px] text-[#7B3B3B] mt-20">
            Akad Nikah
        </h1>
        <p className="font-body text-[21px] font-semibold text-[#6B4A3E] mt-6">
          Senin 20 Januari 2025
        </p>
        <p className="font-body text-[18px] text-[#6B4A3E] mt-1">
          09.00 - 10.00 WIB
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
        <button className="mt-7 w-46.25 h-11 rounded-full bg-[#7D2424] text-white font-body text-[18px] z-50">
          Lihat Peta
        </button>
        <img
          src={RightTreeRotated}
          alt=""
          className="absolute -left-31.25 bottom-2 w-62.5 z-0 animate-left-bush"
        />
        <img
          src={Bush}
          alt=""
          className="absolute left-2.5 bottom-2 w-55 z-10"
        />
        <img
          src={RedFlower}
          alt=""
          className="absolute left-13 bottom-6.5 w-13.75 z-30 animate-left-bush"
        />
        <img
          src={RedFlower}
          alt=""
          className="absolute left-21.5 bottom-5 w-17.5 z-30 animate-left-bush"
        />
        <img
          src={YellowFlower}
          alt=""
          className="absolute left-24 bottom-5 w-13.5 z-20 animate-left-bush"
        />
        <img
          src={BlueFlower}
          alt=""
          className="absolute left-33.75 bottom-7 w-7.5 z-40 animate-left-bush"
        />
      </div>
    </section>
  );
}

export default AkadComp;