import { useState } from "react";

import Pou1 from "../assets/images/Pou1.png";
import Pou2 from "../assets/images/Pou2.png";
import Pou3 from "../assets/images/Pou3.png";
import Pou4 from "../assets/images/Pou4.png";

function PortraitComp() {
  const [selectedImage, setSelectedImage] = useState(Pou4);

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
            src={selectedImage}
            alt=""
            className="w-47.5 h-65 rounded-[28px] object-cover transition-all duration-500"
          />
          <div className="flex flex-col gap-4">
            <img
              src={Pou1}
              alt=""
              onClick={() => setSelectedImage(Pou1)}
              className={`w-22.5 h-30.5 rounded-[22px] object-cover cursor-pointer duration-300 hover:scale-105
              ${
                selectedImage === Pou1
                  ? "ring-3 ring-[#7B3B3B]"
                  : ""
              }`}
            />
            <img
              src={Pou3}
              alt=""
              onClick={() => setSelectedImage(Pou3)}
              className={`w-22.5 h-30.5 rounded-[22px] object-cover cursor-pointer duration-300 hover:scale-105
              ${
                selectedImage === Pou3
                  ? "ring-3 ring-[#7B3B3B]"
                  : ""
              }`}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src={Pou4}
            alt=""
            onClick={() => setSelectedImage(Pou4)}
            className={`w-22.5 h-27.5 rounded-[22px] object-cover cursor-pointer duration-300 hover:scale-105
            ${
              selectedImage === Pou4
                ? "ring-3 ring-[#7B3B3B]"
                : ""
            }`}
          />
          <img
            src={Pou1}
            alt=""
            onClick={() => setSelectedImage(Pou1)}
            className={`w-22.5 h-27.5 rounded-[22px] object-cover cursor-pointer duration-300 hover:scale-105
            ${
              selectedImage === Pou1
                ? "ring-3 ring-[#7B3B3B]"
                : ""
            }`}
          />
          <img
            src={Pou2}
            alt=""
            onClick={() => setSelectedImage(Pou2)}
            className={`w-22.5 h-27.5 rounded-[22px] object-cover cursor-pointer duration-300 hover:scale-105
            ${
              selectedImage === Pou2
                ? "ring-3 ring-[#7B3B3B]"
                : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default PortraitComp;