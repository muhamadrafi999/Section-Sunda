import BgOverlay from "../assets/images/bg-overlay-7.png";
import TreeLeft from "../assets/images/el-tree-5-rotated.png";
import TreeRight from "../assets/images/bg-pohon.png";
import Bush from "../assets/images/el-bush-1.png";
import Flower1 from "../assets/images/el-flower-bucket-9.png";
import Flower2 from "../assets/images/el-flower-bucket-9-rotated.png";
import Flower3 from "../assets/images/el-flower-13.png";
import Flower4 from "../assets/images/el-flower-bucket-18.png";
import Flower5 from "../assets/images/el-flower-22.png";
import Flower6 from "../assets/images/el-flower-27.png";

function ClosingComp() {
  return (
    <section className="relative w-full min-h-170 overflow-hidden bg-[#F7F0DE] py-20">
        <img
            src={BgOverlay}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
        />
        <img
            src={TreeLeft}
            alt="TreeLeft"
            className="absolute top-24 -left-65 w-120 z-10 animate-left-flower"
        />
        <img
            src={TreeRight}
            alt="TreeRight"
            className="absolute top-24 -right-65 w-120 z-10 animate-left-flower"
        />
        <div className="relative z-20 flex flex-col items-center mt-50">
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
        <img
            src={Bush}
            alt=""
            className="absolute -left-47 bottom-0 w-107.5 z-50"
        />
        <img
            src={Flower1}
            alt=""
            className="absolute left-13 bottom-0 w-26.25 z-60 animate-left-bush"
        />
        <img
            src={Flower2}
            alt=""
            className="absolute right-13 bottom-0 w-26.25 z-60 animate-left-bush"
        />
        <img
            src={Flower3}
            alt=""
            className="absolute right-22 bottom-0 w-20 z-60 animate-left-bush"
        />
        <img
            src={Flower4}
            alt=""
            className="absolute right-0 bottom-0 w-25 z-60 animate-left-bush"
        />
        <img
            src={Flower5}
            alt=""
            className="absolute right-77 bottom-0 w-32.5 z-60 animate-left-bush"
        />
        <img
            src={Flower6}
            alt=""
            className="absolute left-10 bottom-0 w-15 z-60 animate-left-bush"
        />
        <img
            src={Bush}
            alt=""
            className="absolute -right-47 bottom-0 w-107.5 scale-x-[-1] z-50"
        />
    </section>
  );
}

export default ClosingComp;