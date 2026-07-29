import BgOverlay from "../assets/images/bg-overlay-4.png";
import Tree from "../assets/images/el-tree-4.png";
import Bush from "../assets/images/el-bush-1.png";
import Frame from "../assets/images/frame-3.png";
import BrideGroom from "../assets/images/picture-bride-groom-1.jpeg";
import Flower30 from "../assets/images/el-flower-30.png";
import Flower28 from "../assets/images/el-flower-28.png";
import TopRightFlower from "../assets/images/top-right-flower.png";
import Flower13 from "../assets/images/el-flower-13.png";
import Flower17 from "../assets/images/el-flower-17.png";

function HeroMobileComp() {
  return (
    <section className="relative w-full h-[930px] overflow-hidden bg-[#F7F0DE]">
      <img src={BgOverlay} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <img src={Tree} alt="" className="absolute -top-0 -left-8 w-48 z-10" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <p className="font-body text-[18px] text-[#6E4A42]">
          Wedding Invitation
        </p>
        <h1 className="font-title text-[44px] text-[#6C2E37] mt-2">
          Bryan & Anne
        </h1>
        <p className="font-body text-[18px] text-[#6E4A42] mt-2">
          #PromDateToLifeMate
        </p>
      </div>
      <div className="absolute top-[235px] left-1/2 -translate-x-1/2 w-[255px] h-[390px] z-20">
        <img src={Frame} alt="" className="absolute inset-0 w-full h-full z-20" />
        <img
          src={BrideGroom}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-[18px] w-[208px] h-[345px] object-cover rounded-t-[120px] rounded-b-[120px] z-10"
        />
        <img
          src={Flower17}
          alt=""
          className="absolute -left-22 bottom-1 w-50 z-30"
        />
        <img
          src={Flower13}
          alt=""
          className="absolute -left-22 bottom-4 w-40 z-40"
        />
        <img
          src={Flower28}
          alt=""
          className="absolute right-0 bottom-2 w-24 z-50"
        />
        <img
          src={Flower30}
          alt=""
          className="absolute right-5 bottom-2 w-13 z-40"
        />
        <img
          src={TopRightFlower}
          alt=""
          className="absolute right-0 bottom-8 w-30 z-50"
        />
      </div>
            <img
        src={Bush}
        alt=""
        className="absolute -left-6 bottom-0 w-200 z-50"
      />
      <img
        src={Bush}
        alt=""
        className="absolute -right-6 bottom-0 w-200 scale-x-[-1] z-50"
      />
    </section>
  );
}

export default HeroMobileComp;