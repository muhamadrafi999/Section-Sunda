import FrameBg from "../assets/images/bg-overlay-4.png";
import LeafRight from "../assets/images/el-flower-24.png";
import RedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";
import BlueFlower from "../assets/images/blue-flower.png";
import Flower from "../assets/images/el-flower-22.png";

function WeddingGiftComp() {
  return (
    <section className="bg-[#F7F0DE] py-10 flex justify-center overflow-hidden">
        <div className="relative w-[390px] h-[760px]">
            <img
                src={LeafRight}
                alt=""
                className="absolute right-[-22px] top-[60px] w-[145px] z-30 animate-right-flower"
            />
            <img
                src={RedFlower}
                alt=""
                className="absolute left-[-18px] top-[79px] w-[65px] z-30 animate-left-flower"
            />
            <img
                src={RedFlower}
                alt=""
                className="absolute left-[7px] top-[133px] w-[45px] z-30 animate-left-flower"
            />
            <img
                src={SunFlower}
                alt=""
                className="absolute left-[10px] top-[110px] w-[59px] z-40 animate-left-flower"
            />
            <img
                src={BlueFlower}
                alt=""
                className="absolute left-[35px] top-[90px] w-[40px] z-40 animate-left-flower"
            />
            <img
                src={Flower}
                alt=""
                className="absolute right-[280px] top-[20px] w-[210px] z-20 animate-left-flower"
            />
            <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[338px] h-[640px]">
                <img
                    src={FrameBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-t-[170px] rounded-b-[18px]"
                />
                <div className="absolute inset-0 flex flex-col items-center pt-[55px] z-20">
                    <h2 className="font-title text-[30px] text-[#7B3030]">
                        Wedding Gift
                    </h2>
                    <div className="mt-8 w-[300px] rounded-[12px] bg-[#7B2A2A] px-3 py-3 flex flex-col items-center">
                        <select className="w-[285px] h-[36px] rounded-[8px] bg-white px-3 text-[#6A4540] font-body text-[12px] outline-none">
                            <option>BANK BCA</option>
                        </select>
                        <div className="mt-4 w-[285px] rounded-[8px] bg-white px-4 py-4">
                            <p className="font-body text-[12px] text-[#6A4540]">
                                Nomor Akun
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                                <p className="font-body text-[14px] text-[#6A4540]">
                                    083751800779
                                </p>
                                <button className="text-[12px]">
                                    📋
                                </button>
                            </div>
                            <p className="mt-5 font-body text-[12px] text-[#6A4540]">
                                Nama Akun
                            </p>
                            <p className="mt-2 font-body text-[15px] text-[#6A4540]">
                                Muhammad Fanny Al Farizi
                            </p>
                        </div>
                        <p className="mt-6 w-[285px] font-body text-[12px] text-white">
                            silakan isi formulir dibawah ini
                        </p>
                        <input
                            placeholder="Chindy & pasangan"
                            className="mt-3 w-[285px] h-[32px] rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <input
                            placeholder="Nama Aku Owner"
                            className="mt-3 w-[285px] h-[32px] rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <input
                            placeholder="Pesan"
                            className="mt-3 w-[285px] h-[32px] rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <input
                            placeholder="Jumlah"
                            className="mt-3 w-[285px] h-[32px] rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <button className="mt-3 w-[285px] h-[34px] rounded-full bg-white font-body text-[14px] text-[#6A4540]">
                            Selanjutnya ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default WeddingGiftComp;