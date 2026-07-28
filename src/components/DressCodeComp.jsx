import ManyLeftFlower from "../assets/images/many-left-flowerr.png";
import YellowRedFlower from "../assets/images/yellow-red-flowerr.png";
import CasualDressMen from "../assets/images/casual-dress-men.png";
import CasualDressWoman from "../assets/images/casual-dress-woman.png";

function DressCodeComp() {
  return (
    <section className="bg-[#F7F0DE] py-24 flex justify-center overflow-hidden">
      <div className="relative w-125 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B]">
          Dress Code
        </h1>
        <p className="font-body text-[20px] text-[#7B3B3B] mt-2 mb-10">
          Tambahkan kalimat
        </p>
        <div className="flex gap-6">
          <div className="w-45 h-76.25 rounded-3xl bg-[#EEDDCB] shadow-[0_0_10px_rgba(0,0,0,0.18)] flex flex-col items-center pt-6">
            <h2 className="font-body text-[23px] text-[#6B4A3E]">
              Pria
            </h2>
            <div className="w-17 h-17 rounded-full bg-white flex items-center justify-center mt-5">
              <img src={CasualDressMen} alt="" className="w-10" />
            </div>
            <p className="font-body text-[18px] text-[#6B4A3E] mt-3">
              Casual
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-8">
              <div className="w-8 h-10 rounded-full bg-[#7A2B2B]"></div>
              <div className="w-8 h-10 rounded-full bg-[#6E8056]"></div>
              <div className="w-8 h-10 rounded-full bg-[#FFF8EA] border border-[#E5D7C6]"></div>
              <div className="w-8 h-10 rounded-full bg-black"></div>
            </div>
          </div>
          <div className="w-45 h-76.25 rounded-3xl bg-[#EEDDCB] shadow-[0_0_10px_rgba(0,0,0,0.18)] flex flex-col items-center pt-6">
            <h2 className="font-body text-[23px] text-[#6B4A3E]">
              Wanita
            </h2>
            <div className="w-17 h-17 rounded-full bg-white flex items-center justify-center mt-5">
              <img src={CasualDressWoman} alt="" className="w-10" />
            </div>
            <p className="font-body text-[18px] text-[#6B4A3E] mt-3">
              Casual
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 mt-8">
              <div className="w-8 h-10 rounded-full bg-[#7A2B2B]"></div>
              <div className="w-8 h-10 rounded-full bg-[#6E8056]"></div>
              <div className="w-8 h-10 rounded-full bg-[#FFF8EA] border border-[#E5D7C6]"></div>
              <div className="w-8 h-10 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
        <img
          src={ManyLeftFlower}
          alt=""
          className="absolute left-0 bottom-0 w-34 animate-left-bush"
        />
        <img
          src={YellowRedFlower}
          alt=""
          className="absolute right-0 bottom-0 w-30 animate-right-flower"
        />
      </div>
    </section>
  );
}

export default DressCodeComp;