import Pou1 from "../assets/images/Pou1.png";
import Pou2 from "../assets/images/Pou2.png";
import Pou3 from "../assets/images/Pou3.png";
import Pou4 from "../assets/images/Pou4.png";

function PortraitComp() {
  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center">
      <div className="w-97.5 flex flex-col items-center">
        <h1 className="font-title text-[42px] text-[#7B3B3B]">
          Potrait Of Us
        </h1>
        <p className="font-body text-[20px] text-[#7B3B3B] mt-3 mb-10">
          Tambahkan kalimat
        </p>
        <div className="flex gap-4">
          <img
            src={Pou4}
            alt=""
            className="w-47.5 h-65 rounded-[28px] object-cover"
          />
          <div className="flex flex-col gap-4">
            <img
              src={Pou1}
              alt=""
              className="w-22.5 h-30.5 rounded-[22px] object-cover"
            />
            <img
              src={Pou3}
              alt=""
              className="w-22.5 h-30.5 rounded-[22px] object-cover"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src={Pou4}
            alt=""
            className="w-22.5 h-27.5 rounded-[22px] object-cover"
          />
          <img
            src={Pou1}
            alt=""
            className="w-22.5 h-27.5 rounded-[22px] object-cover"
          />
          <img
            src={Pou2}
            alt=""
            className="w-22.5 h-27.5 rounded-[22px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default PortraitComp;