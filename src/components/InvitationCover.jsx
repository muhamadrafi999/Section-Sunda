import { useMusic } from "../context/MusicContext";

import Bg from "../assets/images/bg-overlay-4.png";
import LeftTree from "../assets/images/el-tree-4.png";
import RightTree from "../assets/images/el-tree-4-rotated.png";
import LeftBush from "../assets/images/el-bush-1.png";
import RightBush from "../assets/images/el-bush-1.png";
import BucketFlower from "../assets/images/el-flower-bucket-9.png";
import Flower22 from "../assets/images/el-flower-22.png";
import Flower17Left from "../assets/images/el-flower-17.png";
import Flower17Right from "../assets/images/el-flower-17.png";
import Flower13 from "../assets/images/el-flower-13.png";
import ManyFlower from "../assets/images/many-left-flowerr.png";

function InvitationCover({ onOpen }) {
  const { openInvitation } = useMusic();

  const handleOpenInvitation = () => {
    openInvitation();

    if (onOpen) {
      onOpen();
    }
  };

  return (
    <section className="relative w-full h-full overflow-hidden bg-[#F7F0DE]">
      <img
        src={Bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={LeftTree}
        alt=""
        className="absolute right-185 top-0 w-65"
      />
      <img
        src={RightTree}
        alt=""
        className="absolute left-197 top-30 w-55"
      />
      <img
        src={LeftBush}
        alt=""
        className="absolute bottom-0 right-140 w-125"
      />
      <img
        src={RightBush}
        alt=""
        className="absolute bottom-0 left-135 w-137.5 scale-x-[-1]"
      />
      <img
        src={BucketFlower}
        alt=""
        className="absolute bottom-0 left-0 w-43.75"
      />
      <img
        src={Flower22}
        alt=""
        className="absolute bottom-0 left-16.25 w-30"
      />
      <img
        src={Flower17Left}
        alt=""
        className="absolute bottom-0 left-28.75 w-27.5"
      />
      <img
        src={ManyFlower}
        alt=""
        className="absolute bottom-0 right-0 w-46.25"
      />
      <img
        src={Flower17Right}
        alt=""
        className="absolute bottom-0 right-22.5 w-23.75"
      />
      <img
        src={Flower13}
        alt=""
        className="absolute bottom-0 right-8.75 w-27.5"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-body text-[26px] text-[#733434]">
          Wedding Invitation
        </p>
        <h1 className="mt-4 font-title text-[74px] leading-none text-[#5B2D38]">
          Bryan & Anne
        </h1>
        <p className="mt-5 font-body text-[18px] text-[#733434]">
          #PromDateToLifeMate
        </p>
        <button
          onClick={handleOpenInvitation}
          className="lg:hidden mt-12 w-47.5 h-11.5 rounded-full bg-[#7B2A2A] text-white font-body text-[15px] shadow-lg hover:scale-105 duration-300"
        >
          Buka Undangan
        </button>
      </div>
    </section>
  );
}

export default InvitationCover;