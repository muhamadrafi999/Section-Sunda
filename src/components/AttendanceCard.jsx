import Rectangle from "../assets/images/Rectangle.png";
import LeftFlower from "../assets/images/LeftFlower.png";
import RightFlower from "../assets/images/RightFlower.png";

function AttendanceCard() {
  return (
    <div className="min-h-screen bg-[#F7F0DE] flex items-center justify-center">
        
      <div className="relative w-[470px]">

        {/* Background */}
        <img
          src={Rectangle}
          alt="Rectangle"
          className="w-full"
        />

        {/* Isi */}
        <div className="absolute inset-0 flex flex-col items-center">

          {/* Judul */}
          <h1 className="font-title text-[34px] text-[#7C3D3D] mt-[58px]">
            Konfirmasi Kehadiran
          </h1>

          {/* Tanggal */}
          <p className="font-body text-[15px] text-[#5C4B42] mt-[58px]">
            20 Januari
          </p>

          {/* Status */}
          <h2 className="font-body text-[20px] font-semibold text-[#682828] mt-2">
            Hadir
          </h2>

          {/* Pesan */}
          <p className="font-body text-[17px] text-[#5C4B42] mt-2">
            Horee, terimakasih sudah mau hadir
          </p>

          <p className="font-body text-[17px] text-[#5C4B42]">
            mari bertemu disana ;
          </p>

          {/* Tombol */}
          <button
            className="
              mt-6
              w-[175px]
              h-[35px]
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

        {/* Bunga kiri */}
        <img
          src={LeftFlower}
          alt="Left Flower"
          className="
            absolute
            bottom-0
            -left-8
            w-[82px]
          "
        />

        {/* Bunga kanan */}
        <img
          src={RightFlower}
          alt="Right Flower"
          className="
            absolute
            bottom-0
            -right-8
            w-[82px]
          "
        />

      </div>

    </div>
  );
}

export default AttendanceCard;