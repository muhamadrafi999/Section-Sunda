import Rectangle from "../assets/images/Rectangle.png";
import LeftFlower from "../assets/images/LeftFlower.png";
import RightFlower from "../assets/images/RightFlower.png";

function AttendanceCard() {
  return (
    <div className="min-h-screen bg-[#F7F0DE] flex items-center justify-center">
      <div className="relative w-117.5">
        <img
          src={Rectangle}
          alt="Rectangle"
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center">
          <h1 className="font-title text-[34px] text-[#7C3D3D] mt-14.5">
            Konfirmasi Kehadiran
          </h1>
          <p className="font-body text-[15px] text-[#5C4B42] mt-14.5">
            20 Januari
          </p>
          <h2 className="font-body text-[20px] font-semibold text-[#682828] mt-2">
            Hadir
          </h2>
          <p className="font-body text-[17px] text-[#5C4B42] mt-2">
            Horee, terimakasih sudah mau hadir
          </p>
          <p className="font-body text-[17px] text-[#5C4B42]">
            mari bertemu disana ;
          </p>
          <button
            className="
              mt-6
              w-43.5
              h-8.75
              rounded-full
              bg-[#7D2424]
              text-white
              font-body
              text-[15px]
            "
          >
            Ubah
          </button>
        </div>
        <img
          src={LeftFlower}
          alt="Left Flower"
          className="
            absolute
            bottom-0
            -left-8
            w-20.5
          "
        />
        <img
          src={RightFlower}
          alt="Right Flower"
          className="
            absolute
            bottom-0
            -right-8
            w-20.5
          "
        />

      </div>
    </div>
  );
}

export default AttendanceCard;