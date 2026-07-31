import Paper from "../assets/images/bg-overlay-5.png";
import LeftFlower from "../assets/images/el-flower-19.png";
import RightFlower from "../assets/images/el-flower-bucket-8.png";

function VerseComp() {
  return (
    <section className="bg-[#F7F0DE] pt-10 pb-2 flex justify-center overflow-hidden">
      <div className="relative w-97.5 h-97.5">
        <img
          src={LeftFlower}
          alt=""
          className="absolute -left-23.75 top-8.75 w-62.5 z-10 animate-left-bush"
        />
        <img
          src={Paper}
          alt=""
          className="absolute left-1/2 top-7.5 -translate-x-1/2 w-91.25 z-20"
        />
        <div className="absolute left-1/2 top-16.25 -translate-x-1/2 w-58.75 z-30">
          <p className="font-body text-[13px] leading-[1.65] text-[#5C4036] text-center">
            Dan di antara tanda-tanda (Kebesaran)-Nya ialah Dia
            menciptakan pasangan-pasangan untukmu dari
            jenismu sendiri, agar kamu cenderung dan merasa
            tenteram kepadanya, dan Dia menjadikan di antaramu
            rasa kasih dan sayang. Sungguh, pada demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah)
            bagi kaum yang berpikir.
          </p>
          <p className="font-body text-[14px] text-[#5C4036] text-center mt-2">
            (QS. Ar-Rum ayat 21)
          </p>
        </div>
        <img
          src={RightFlower}
          alt=""
          className="absolute right-0 bottom-17.5 w-32.5 z-40 animate-right-flower"
        />
      </div>
    </section>
  );
}

export default VerseComp;