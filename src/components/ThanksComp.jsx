import Pattern from "../assets/images/el-pattern-2.png";
import Leaf from "../assets/images/el-flower-24.png";
import TwoRedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";
import BlueFlower from "../assets/images/blue-flower.png";

function ThanksComp() {
  return (
    <section className="bg-[#F7F0DE] flex justify-center py-12 overflow-hidden">

      <div className="relative w-[390px] h-[610px]">

        <img
          src={Pattern}
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[390px] z-10"
        />

        <div className="absolute left-1/2 top-[90px] -translate-x-1/2 w-[390px] h-[420px] bg-[#742323] rounded-t-[220px] z-20 shadow-[0_10px_20px_rgba(0,0,0,0.18)]">

          <img
            src={BlueFlower}
            alt=""
            className="absolute -left-2 top-[55px] w-11 z-30"
          />

          <img
            src={SunFlower}
            alt=""
            className="absolute left-4 top-[72px] w-14 z-40"
          />

          <img
            src={TwoRedFlower}
            alt=""
            className="absolute left-10 top-[88px] w-16 z-50"
          />

          <img
            src={Leaf}
            alt=""
            className="absolute -right-9 bottom-0 w-36 z-40"
          />

          <div className="absolute top-[95px] left-1/2 -translate-x-1/2 w-[300px]">

            <h1 className="font-title text-[44px] text-white text-center">
              Terimakasih
            </h1>

            <p className="font-body text-[15px] leading-[1.9] text-white text-center mt-10">
              Kami mengucapkan terimakasih kepada
              Bapak/Ibu/Saudara yang telah menghadiri
              seluruh rangkaian acara pernikahan kami.
              Semoga waktu yang diberikan oleh
              Bapak/Ibu/Saudara menjadi berkah dan
              manfaat yang kelak dibalas oleh Tuhan
              Yang Maha Esa. Terima kasih atas seluruh
              ucapan yang diberikan. Semoga kami
              menjadi pasangan yang berbahagia dunia
              dan akhirat :)
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ThanksComp;