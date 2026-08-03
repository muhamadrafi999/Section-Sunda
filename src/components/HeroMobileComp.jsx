import BgOverlay from "../assets/images/bg-overlay-4.png";
import Tree from "../assets/images/el-tree-4.png";
import TreeRotated from "../assets/images/el-tree-4-rotated.png";
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
    <section className="relative w-full h-232.5 overflow-hidden bg-[#F7F0DE]">
      <img src={BgOverlay} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <img src={Tree} alt="" className="absolute top-18 -left-10 w-39 z-10" />
      <img src={TreeRotated} alt="" className="absolute top-50 -right-11 w-39 z-10" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <p className="font-body text-[18px] text-[#6E4A42]">
          Wedding Invitation
        </p>
        <h1 className="font-title text-[35px] text-[#6C2E37] mt-2">
          Bryan & Anne
        </h1>
        <p className="font-body text-[18px] text-[#6E4A42] mt-2">
          #PromDateToLifeMate
        </p>
      </div>
      <div className="absolute top-80 left-1/2 -translate-x-1/2 w-63.75 h-97.5 z-20">
        <img
          src={Frame}
          alt=""
          className="absolute inset-0 w-full h-full z-20"
        />
        <img
          src={BrideGroom}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-4.5 w-52 h-86.25 rounded-t-[120px] rounded-b-[120px] object-cover z-10"
        />
        <img
          src={Flower17}
          alt=""
          className="absolute -left-23 bottom-1 w-50 z-30 animate-left-bush"
        />
        <img
          src={Flower13}
          alt=""
          className="absolute -left-19.5 bottom-4.5 w-40 z-40 animate-left-flower"
        />
        <img
          src={Flower28}
          alt=""
          className="absolute right-0.5 bottom-2.5 w-24 z-40 animate-tall-flower"
        />
        <img
          src={Flower30}
          alt=""
          className="absolute right-4.5 bottom-2 w-13 z-50 animate-right-flower"
        />
        <img
          src={TopRightFlower}
          alt=""
          className="absolute right-0 bottom-8.5 w-30 z-50 animate-top-flower"
        />
      </div>
      <img
        src={Bush}
        alt=""
        className="absolute -left-30 bottom-0 w-107.5 z-50"
      />
      <img
        src={Bush}
        alt=""
        className="absolute -right-30 bottom-0 w-107.5 scale-x-[-1] z-50"
      />
    </section>
  );
}

export default HeroMobileComp;