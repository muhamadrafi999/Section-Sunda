import Frame from "../assets/images/frame-3.png";
import Bride from "../assets/images/picture-bride.png";
import Groom from "../assets/images/picture-groom.png";
import FlowerBride from "../assets/images/el-flower-14.png";
import FlowerGroom from "../assets/images/el-flower-13.png";
import { FaInstagram } from "react-icons/fa";

function BrideGroomComp() {
  const openInstagram = (username) => {
    window.open(`https://instagram.com/${username}`, "_blank");
  };
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">
      <div className="relative w-97.5 flex flex-col items-center">
        <div className="relative w-62.5 h-92.5">
          <img
            src={Frame}
            alt=""
            className="absolute inset-0 w-full h-full z-20"
          />
          <img
            src={Bride}
            alt=""
            className="absolute left-1/2 top-4.5 -translate-x-1/2 w-51.25 h-80 rounded-t-[120px] rounded-b-[120px] object-cover z-10"
          />
          <img
            src={FlowerBride}
            alt=""
            className="absolute right-40 bottom-22 w-37.5 z-30"
          />
        </div>
        <h1 className="font-title text-[34px] text-[#6C2E37] mt-5">
          Anne Jaya Cantika
        </h1>
        <p className="font-body text-[14px] text-[#6B4A3E] mt-3">
          Putri ketiga dari Bapak Sanjaya dan Ibu Ratu
        </p>
        <button
          onClick={() => openInstagram("Anne.J.Cantika")}
          className="mt-5 w-29.5 h-7 rounded-full bg-[#7D2424] text-white text-[12px] font-body flex items-center justify-center gap-2 hover:scale-105 duration-300 cursor-pointer"
        >
          <FaInstagram className="text-[11px]" />
          Anne.J.Cantika
        </button>
        <h2 className="font-title text-[48px] text-[#6C2E37] mt-16">
          &
        </h2>
        <div className="relative w-62.5 h-92.5 mt-14">
          <img
            src={Frame}
            alt=""
            className="absolute inset-0 w-full h-full z-20"
          />
          <img
            src={Groom}
            alt=""
            className="absolute left-1/2 top-4.5 -translate-x-1/2 w-51.25 h-80 rounded-t-[120px] rounded-b-[120px] object-cover z-10"
          />
          <img
            src={FlowerGroom}
            alt=""
            className="absolute left-30 bottom-5 w-50 z-30"
          />
        </div>
        <h1 className="font-title text-[34px] text-[#6C2E37] mt-5">
          Bryan Putra
        </h1>
        <p className="font-body text-[14px] text-[#6B4A3E] mt-3">
          Putra ketiga dari Bapak Damar dan Ibu Cici
        </p>
        <button
          onClick={() => openInstagram("Bryan.P")}
          className="mt-5 w-26.25 h-7 rounded-full bg-[#7D2424] text-white text-[12px] font-body flex items-center justify-center gap-2 hover:scale-105 duration-300 cursor-pointer"
        >
          <FaInstagram className="text-[11px]" />
          Bryan.P
        </button>
      </div>
    </section>
  );
}

export default BrideGroomComp;