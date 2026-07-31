import FrameBg from "../assets/images/bg-overlay-4.png";
import LeafRight from "../assets/images/el-flower-24.png";
import RedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";
import BlueFlower from "../assets/images/blue-flower.png";
import Flower from "../assets/images/el-flower-22.png";

function WeddingGiftComp() {
  return (
    <section className="bg-[#F7F0DE] py-10 flex justify-center overflow-hidden">
        <div className="relative w-97.5 h-190">
            <img
                src={LeafRight}
                alt=""
                className="absolute -right-5.5 top-15 w-36.25 z-30 animate-right-flower"
            />
            <img
                src={RedFlower}
                alt=""
                className="absolute -left-4.5 top-19.75 w-16.25 z-30 animate-left-flower"
            />
            <img
                src={RedFlower}
                alt=""
                className="absolute left-1.75 top-33.25 w-11.25 z-30 animate-left-flower"
            />
            <img
                src={SunFlower}
                alt=""
                className="absolute left-2.5 top-27.5 w-14.75 z-40 animate-left-flower"
            />
            <img
                src={BlueFlower}
                alt=""
                className="absolute left-8.75 top-22.5 w-10 z-40 animate-left-flower"
            />
            <img
                src={Flower}
                alt=""
                className="absolute right-70 top-5 w-52.5 z-20 animate-left-flower"
            />
            <div className="absolute top-17.5 left-1/2 -translate-x-1/2 w-84.5 h-160">
                <img
                    src={FrameBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-t-[170px] rounded-b-[18px]"
                />
                <div className="absolute inset-0 flex flex-col items-center pt-13.75 z-20">
                    <h2 className="font-title text-[30px] text-[#7B3030]">
                        Wedding Gift
                    </h2>
                    <div className="mt-8 w-75 rounded-xl bg-[#7B2A2A] px-3 py-3 flex flex-col items-center">
                        <select className="w-71.25 h-9 rounded-lg bg-white px-3 text-[#6A4540] font-body text-[12px] outline-none">
                            <option>BANK BCA</option>
                        </select>
                        <div className="mt-4 w-71.25 rounded-lg bg-white px-4 py-4">
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
                        <p className="mt-6 w-71.25 font-body text-[12px] text-white">
                            silakan isi formulir dibawah ini
                        </p>
                        <input
                            placeholder="Chindy & pasangan"
                            className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <input
                            placeholder="Nama Aku Owner"
                            className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <input
                            placeholder="Pesan"
                            className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <input
                            placeholder="Jumlah"
                            className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                        />
                        <button className="mt-3 w-71.25 h-8.5 rounded-full bg-white font-body text-[14px] text-[#6A4540]">
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