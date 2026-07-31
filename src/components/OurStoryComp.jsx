import BgOverlay from "../assets/images/bg-overlay-7.png";
import Pattern from "../assets/images/el-pattern-2.png";
import Frame from "../assets/images/frame-8.png";
import BrideGroom from "../assets/images/picture-bride-groom-4.png";

function OurStoryComp() {
  return (
    <section className="relative bg-[#F7F0DE] py-8 flex justify-center overflow-hidden">
      <img src={BgOverlay} alt="" className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative w-[390px] h-[640px]">

        <img
          src={Pattern}
          alt=""
          className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[400px] z-30"
        />

        <img
          src={Frame}
          alt=""
          className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[322px] z-10"
        />

        <div className="absolute top-[194px] left-1/2 -translate-x-1/2 w-[322px] z-20 flex flex-col items-center">

          <h2 className="font-body text-[24px] text-[#5B4136]">
            Our Story
          </h2>

          <img
            src={BrideGroom}
            alt=""
            className="mt-7 w-[240px] h-[168px] rounded-[22px] object-cover"
          />

          <div className="mt-7 w-[255px] rounded-[22px] bg-[#8B4343] px-5 py-0">

            <p className="font-body text-[10px] leading-[1.8] text-center text-white">
              "Jantungku berdebar kencang saat aku menunggunya di depan
              kafe. Dia datang, tersenyum manis, dan semua kegugupanku
              langsung hilang. Kami mengobrol tentang segala hal, dari
              film favorit hingga impian masa depan. Tawa kami memenuhi
              kafe, dan waktu terasa berlalu begitu cepat. Saat kencan
              berakhir, kami berdua merasa ada sesuatu yang istimewa di
              antara kami. Kencan pertama itu sederhana, tapi sangat
              berkesan."
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurStoryComp;