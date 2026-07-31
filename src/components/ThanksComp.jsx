import Pattern from "../assets/images/el-pattern-2.png";
import Leaf from "../assets/images/el-flower-24.png";
import TwoRedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";
import BlueFlower from "../assets/images/blue-flower.png";

function ThanksComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">

      <div className="relative w-[390px] h-[600px]">

        <img
          src={Pattern}
          alt=""
          className="absolute -top-50 left-1/2 -translate-x-1/2 w-[330px] z-30"
        />

        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[350px] h-[445px] rounded-t-[190px] bg-[#742323] shadow-[0_12px_20px_rgba(0,0,0,0.18)] z-20">

          <div className="absolute left-1/2 top-[58px] -translate-x-1/2 w-[250px]">

            <h1 className="font-title text-[46px] text-white text-center">
              Terimakasih
            </h1>

            <p className="font-body text-[14px] leading-[1.8] text-white text-center mt-8">
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

          <img
            src={BlueFlower}
            alt=""
            className="absolute left-[3px] top-[88px] w-10 z-20 animate-left-bush"
          />

          <img
            src={SunFlower}
            alt=""
            className="absolute left-[3px] top-[108px] w-17 z-30 animate-left-bush"
          />

          <img
            src={TwoRedFlower}
            alt=""
            className="absolute left-[3px] top-[126px] w-13 z-40 animate-left-bush"
          />

          <img
            src={Leaf}
            alt=""
            className="absolute right-[-24px] bottom-0 w-25 z-50 animate-left-bush"
          />

        </div>

      </div>

    </section>
  );
}

export default ThanksComp;