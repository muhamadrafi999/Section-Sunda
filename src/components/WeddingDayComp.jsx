import RightTreeRotated from "../assets/images/right-tree-rotated.png";
import Bush from "../assets/images/el-bush-1-rotated.png";
import RedFlower from "../assets/images/el-flower-26-rotated.png";
import YellowFlower from "../assets/images/el-flower-25-rotated.png";
import BlueFlower from "../assets/images/el-flower-20-rotated.png";

function AkadComp() {
  return (
    <section className="bg-[#F7F0DE] py-7 flex justify-center overflow-hidden">
      <div className="relative w-[390px] h-[840px] flex flex-col items-center">
        <h2 className="font-title text-[42px] text-[#7B3B3B]">
          It's Wedding Day
        </h2>
        <div className="mt-8 w-[310px] h-[115px] rounded-[22px] bg-[#EEDDCB] shadow-[0_2px_10px_rgba(0,0,0,0.18)] flex flex-col items-center justify-center">
          <p className="font-title text-[28px] text-[#7B3B3B] leading-none">
            Senin
          </p>
          <div className="flex items-center gap-5 mt-3">
            <p className="font-title text-[32px] text-[#7B3B3B]">
              Januari
            </p>
            <div className="w-[48px] h-[48px] rounded-xl border-2 border-[#8A5A4D] flex items-center justify-center">
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
        <button className="mt-7 w-[185px] h-[44px] rounded-full bg-[#7D2424] text-white font-body text-[18px] z-50">
            Lihat Peta
        </button>
        <img
            src={RightTreeRotated}
            alt=""
            className="absolute left-[-125px] bottom-[8px] w-[250px] z-0 animate-left-bush"
        />
        <img
            src={Bush}
            alt=""
            className="absolute left-[10px] bottom-[8px] w-[220px] z-10"
        />
        <img
            src={RedFlower}
            alt=""
            className="absolute left-[52px] bottom-[26px] w-[55px] z-30 animate-left-bush"
        />
        <img
            src={RedFlower}
            alt=""
            className="absolute left-[86px] bottom-[20px] w-[70px] z-30 animate-left-bush"
        />
        <img
            src={YellowFlower}
            alt=""
            className="absolute left-[96px] bottom-[20px] w-[54px] z-20 animate-left-bush"
        />
        <img
            src={BlueFlower}
            alt=""
            className="absolute left-[135px] bottom-[28px] w-[30px] z-40 animate-left-bush"
        />
      </div>
    </section>
  );
}

export default AkadComp;