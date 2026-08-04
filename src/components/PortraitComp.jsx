import { useState } from "react";
import Pou1 from "../assets/images/Pou1.png";
import Pou2 from "../assets/images/Pou2.png";
import Pou3 from "../assets/images/Pou3.png";
import Pou4 from "../assets/images/Pou4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PortraitComp() {
  const images = [
    Pou4,
    Pou1,
    Pou3,
    Pou4,
    Pou1,
    Pou2,
  ];

  const [openGallery, setOpenGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openImage = (index) => {
    setActiveIndex(index);
    setOpenGallery(true);
  };

  return (
    <>
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
              onClick={() => openImage(0)}
              className="w-47.5 h-65 rounded-[28px] object-cover cursor-pointer hover:scale-[1.02] duration-300"
            />
            <div className="flex flex-col gap-4">
              <img
                src={Pou1}
                alt=""
                onClick={() => openImage(1)}
                className="w-22.5 h-30.5 rounded-[22px] object-cover cursor-pointer hover:scale-[1.02] duration-300"
              />
              <img
                src={Pou3}
                alt=""
                onClick={() => openImage(2)}
                className="w-22.5 h-30.5 rounded-[22px] object-cover cursor-pointer hover:scale-[1.02] duration-300"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <img
              src={Pou4}
              alt=""
              onClick={() => openImage(3)}
              className="w-22.5 h-27.5 rounded-[22px] object-cover cursor-pointer hover:scale-[1.02] duration-300"
            />
            <img
              src={Pou1}
              alt=""
              onClick={() => openImage(4)}
              className="w-22.5 h-27.5 rounded-[22px] object-cover cursor-pointer hover:scale-[1.02] duration-300"
            />
            <img
              src={Pou2}
              alt=""
              onClick={() => openImage(5)}
              className="w-22.5 h-27.5 rounded-[22px] object-cover cursor-pointer hover:scale-[1.02] duration-300"
            />
          </div>
        </div>
      </section>
      {openGallery && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90"
          onClick={() => setOpenGallery(false)}
        >
          <button
            onClick={() => setOpenGallery(false)}
            className="absolute top-6 right-6 z-[10000] text-white text-5xl hover:scale-110 duration-300"
          >
            ×
          </button>
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              initialSlide={activeIndex}
              navigation
              pagination={{ clickable: true }}
              keyboard
              modules={[Navigation, Pagination, Keyboard]}
              className="w-full h-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={image}
                      alt=""
                      className="block max-w-[90vw] max-h-[90vh] object-contain select-none"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default PortraitComp;