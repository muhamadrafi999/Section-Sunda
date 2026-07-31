import BgOverlay from "../assets/images/bg-overlay-6.png";
import Tree from "../assets/images/el-tree-6.png";
import FlowerLeft from "../assets/images/el-flower-22.png";
import FlowerRight from "../assets/images/el-flower-22-rotated.png";
import Pattern from "../assets/images/el-pattern-3.png";

function CountdownComp() {
  return (
    <section className="bg-[#F7F0DE] pt-24 pb-6 flex justify-center overflow-hidden">
      <div className="relative w-[390px] h-[540px] flex justify-center">

        <img
          src={Pattern}
          alt=""
          className="absolute top-[-45px] left-1/2 -translate-x-1/2 w-[250px] z-30"
        />

        <img
          src={BgOverlay}
          alt=""
          className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[345px] z-10"
        />

        <div className="absolute top-[68px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">

          <h2 className="font-title text-[27px] text-[#7B3B3B] text-center leading-tight">
            Hari yang
            <br />
            Ditunggu
          </h2>

          <div className="grid grid-cols-2 gap-x-24 gap-y-6 mt-7">

            <div className="text-center">
              <h3 className="font-body text-[22px] text-[#6C4A3D]">0</h3>
              <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                Hari
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-body text-[22px] text-[#6C4A3D]">0</h3>
              <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                Jam
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-body text-[22px] text-[#6C4A3D]">0</h3>
              <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                Menit
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-body text-[22px] text-[#6C4A3D]">0</h3>
              <p className="font-title text-[18px] text-[#7B3B3B] leading-none">
                Detik
              </p>
            </div>

          </div>

          <button className="mt-6 w-[145px] h-[28px] rounded-full bg-[#7D2424] text-white font-body text-[12px]">
            Tambah ke Kalender
          </button>

        </div>

        <img
          src={Tree}
          alt=""
          className="absolute right-[295px] bottom-[145px] w-[175px] z-20 animate-left-flower"
        />

        <img
          src={FlowerLeft}
          alt=""
          className="absolute right-[285px] bottom-[105px] w-[170px] z-30 animate-left-flower"
        />

        <img
          src={FlowerRight}
          alt=""
          className="absolute left-[285px] bottom-[105px] w-[170px] z-30 animate-left-flower"
        />

      </div>
    </section>
  );
}

export default CountdownComp;