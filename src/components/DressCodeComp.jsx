import ManyLeftFlower from "../assets/images/many-left-flowerr.png";
import YellowRedFlower from "../assets/images/yellow-red-flowerr.png";
import CasualDressMen from "../assets/images/casual-dress-men.png";
import CasualDressWoman from "../assets/images/casual-dress-woman.png";

function DressCodeComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">
      <div className="relative w-97.5 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B]">
          Dress Code
        </h1>
        <p className="font-body text-[20px] text-[#7B3B3B] mt-2 mb-10">
          Tambahkan kalimat
        </p>
        <div className="flex gap-4">
          <div className="w-40 h-[315px] rounded-3xl bg-[#EEDDCB] shadow-[0_0_12px_rgba(0,0,0,.18)] px-6 py-6 flex flex-col">

            <div className="flex flex-col items-center">
              <h2 className="font-body text-[22px] text-[#6B4A3E]">
                Pria
              </h2>
              <div className="w-17 h-17 rounded-full bg-white flex items-center justify-center mt-5">
                <img
                  src={CasualDressMen}
                  alt=""
                  className="w-10 h-auto object-contain"
                />
              </div>
              <p className="font-body text-[18px] text-[#6B4A3E] mt-3 mb-5">
                Casual
              </p>
            </div>
            <div className="mt-auto pb-2 flex justify-center">
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <div className="w-8 h-10 rounded-full bg-[#7A2B2B]"></div>
                <div className="w-8 h-10 rounded-full bg-[#6E8056]"></div>
                <div className="w-8 h-10 rounded-full bg-[#FFF8EA] border border-[#DDD2C5]"></div>
                <div className="w-8 h-10 rounded-full bg-black"></div>
              </div>
            </div>
          </div>
          <div className="w-40 h-[315px] rounded-3xl bg-[#EEDDCB] shadow-[0_0_12px_rgba(0,0,0,.18)] px-6 py-6 flex flex-col">
            <div className="flex flex-col items-center">
              <h2 className="font-body text-[22px] text-[#6B4A3E]">
                Wanita
              </h2>
              <div className="w-17 h-17 rounded-full bg-white flex items-center justify-center mt-5">
                <img
                  src={CasualDressWoman}
                  alt=""
                  className="w-10 h-auto object-contain"
                />
              </div>
              <p className="font-body text-[18px] text-[#6B4A3E] mt-3 mb-5">
                Casual
              </p>
            </div>
            <div className="mt-auto pb-2 flex justify-center">
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <div className="w-8 h-10 rounded-full bg-[#7A2B2B]"></div>
                <div className="w-8 h-10 rounded-full bg-[#6E8056]"></div>
                <div className="w-8 h-10 rounded-full bg-[#FFF8EA] border border-[#DDD2C5]"></div>
                <div className="w-8 h-10 rounded-full bg-black"></div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ManyLeftFlower}
          alt=""
          className="absolute -left-2 -bottom-1.5 w-30 animate-left-bush"
        />
        <img
          src={YellowRedFlower}
          alt=""
          className="absolute -right-2.5 bottom-0 w-26.25 animate-right-flower"
        />
      </div>
    </section>
  );
}

export default DressCodeComp;