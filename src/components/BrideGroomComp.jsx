import Frame from "../assets/images/frame-3.png";
import Bride from "../assets/images/picture-bride.png";
import Groom from "../assets/images/picture-groom.png";
import FlowerBride from "../assets/images/el-flower-14.png";
import FlowerGroom from "../assets/images/el-flower-13.png";
import { FaInstagram } from "react-icons/fa";

function BrideGroomComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">
      <div className="relative w-[390px] flex flex-col items-center">

        <div className="relative w-[250px] h-[370px]">
          <img src={Frame} alt="" className="absolute inset-0 w-full h-full z-20" />
          <img src={Bride} alt="" className="absolute left-1/2 top-[18px] -translate-x-1/2 w-[205px] h-[320px] rounded-t-[120px] rounded-b-[120px] object-cover z-10" />
          <img src={FlowerBride} alt="" className="absolute right-[160px] bottom-[88px] w-[150px] z-30" />
        </div>

        <h1 className="font-title text-[34px] text-[#6C2E37] mt-5">
          Anne Jaya Cantika
        </h1>

        <p className="font-body text-[14px] text-[#6B4A3E] mt-3">
          Putri ketiga dari Bapak Sanjaya dan Ibu Ratu
        </p>

        <button className="mt-5 w-[118px] h-[28px] rounded-full bg-[#7D2424] text-white text-[12px] font-body flex items-center justify-center gap-2">
          <FaInstagram className="text-[11px]" />
          Anne.J.Cantika
        </button>

        <h2 className="font-title text-[48px] text-[#6C2E37] mt-16">
          &
        </h2>

        <div className="relative w-[250px] h-[370px] mt-14">
          <img src={Frame} alt="" className="absolute inset-0 w-full h-full z-20" />
          <img src={Groom} alt="" className="absolute left-1/2 top-[18px] -translate-x-1/2 w-[205px] h-[320px] rounded-t-[120px] rounded-b-[120px] object-cover z-10" />
          <img src={FlowerGroom} alt="" className="absolute left-[120px] bottom-[20px] w-[200px] z-30" />
        </div>

        <h1 className="font-title text-[34px] text-[#6C2E37] mt-5">
          Bryan Putra
        </h1>

        <p className="font-body text-[14px] text-[#6B4A3E] mt-3">
          Putra ketiga dari Bapak Damar dan Ibu Cici
        </p>

        <button className="mt-5 w-[105px] h-[28px] rounded-full bg-[#7D2424] text-white text-[12px] font-body flex items-center justify-center gap-2">
          <FaInstagram className="text-[11px]" />
          Bryan. P
        </button>

      </div>
    </section>
  );
}

export default BrideGroomComp;