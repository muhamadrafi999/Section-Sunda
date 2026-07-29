import Paper from "../assets/images/bg-overlay-5.png";
import LeftFlower from "../assets/images/el-flower-19.png";
import RightFlower from "../assets/images/el-flower-bucket-8.png";

function VerseComp() {
  return (
    <section className="bg-[#F7F0DE] py-24 flex justify-center overflow-hidden">

      <div className="relative w-[430px] h-[470px]">

        <img
          src={LeftFlower}
          alt=""
          className="absolute right-35 bottom-22 w-110 z-10"
        />

        <img
          src={Paper}
          alt=""
          className="absolute left-10 top-16 w-150 z-20"
        />

        <div className="absolute left-[118px] top-[105px] w-[290px] z-30 flex flex-col items-center">

          <p className="font-body text-[15px] leading-[1.85] text-[#5C4036] text-center">
            Dan di antara tanda-tanda (Kebesaran)-Nya ialah Dia
            menciptakan pasangan-pasangan untukmu dari jenismu
            sendiri, agar kamu cenderung dan merasa tenteram
            kepadanya, dan Dia menjadikan di antaramu rasa kasih
            dan sayang. Sungguh, pada demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir.
          </p>

          <p className="font-body text-[16px] text-[#5C4036] mt-6">
            (QS. Ar-Rum ayat 21)
          </p>

        </div>

        <img
          src={RightFlower}
          alt=""
          className="absolute left-95 bottom-15 w-40 z-40"
        />

      </div>

    </section>
  );
}

export default VerseComp;