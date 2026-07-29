import Rectangle from "../assets/images/Rectangle.png";
import LeftFlower from "../assets/images/LeftFlower.png";
import RightFlower from "../assets/images/RightFlower.png";

function AttendanceCard() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">

      <div className="relative w-[390px] flex justify-center">

        <div className="relative w-[345px]">

          <img
            src={Rectangle}
            alt=""
            className="w-full"
          />

          <div className="absolute inset-0 flex flex-col items-center">

            <h1 className="font-title text-[34px] text-[#7C3D3D] mt-[42px]">
              Konfirmasi Kehadiran
            </h1>

            <p className="font-body text-[15px] text-[#5C4B42] mt-[22px]">
              20 Januari
            </p>

            <h2 className="font-body text-[20px] font-semibold text-[#682828] mt-0">
              Hadir
            </h2>

            <p className="font-body text-[16px] text-[#5C4B42] mt-1">
              Horee, terimakasih sudah mau hadir
            </p>

            <p className="font-body text-[16px] text-[#5C4B42] leading-5">
              mari bertemu disana :)
            </p>

            <button className="mt-3 w-[170px] h-[36px] rounded-full bg-[#7D2424] text-white font-body text-[15px]">
              Ubah
            </button>

          </div>

          <img
            src={LeftFlower}
            alt=""
            className="absolute bottom-0 -left-8 w-[82px] animate-left-flower"
          />

          <img
            src={RightFlower}
            alt=""
            className="absolute bottom-0 -right-8 w-[82px] animate-right-flower"
          />

        </div>

      </div>

    </section>
  );
}

export default AttendanceCard;