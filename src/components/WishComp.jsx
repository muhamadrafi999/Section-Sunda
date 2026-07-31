import Pattern from "../assets/images/el-pattern-3.png";
import FrameBg from "../assets/images/bg-overlay-4.png";

function WishComp() {
  return (
    <section className="bg-[#F7F0DE] py-10 flex justify-center overflow-hidden">
        <div className="relative w-97.5 h-217.5">
            <img
            src={Pattern}
            alt=""
            className="absolute top-1.25 left-1/2 -translate-x-1/2 w-71.25 z-30"
            />
            <div className="absolute top-18 left-1/2 -translate-x-1/2 w-84.5 h-190">
                <img
                    src={FrameBg}
                    alt=""
                    className="absolute left-2 top-2 w-80.5 h-186 object-cover rounded-b-[18px] rounded-t-[150px] z-10"
                />
                <div className="absolute inset-0 z-30 flex flex-col items-center pt-13.75">
                    <h2 className="font-title text-[23px] text-[#7A3131]">
                        Harapan dan Ucapan
                    </h2>
                    <input
                        type="text"
                        placeholder="Nama"
                        className="mt-10 w-68.75 h-7 rounded-[10px] bg-[#7B2A2A] px-4 text-[11px] text-white placeholder:text-white outline-none font-body"
                    />
                    <textarea
                        placeholder="Berikan Ucapan..."
                        className="mt-3 w-68.75 h-20.5 rounded-[10px] border-[6px] border-[#7B2A2A] bg-white p-3 resize-none outline-none font-body text-[11px] text-[#5C4036]"
                    />
                    <button className="mt-3 w-71.25 h-8.5 rounded-[10px] bg-[#7B2A2A] text-white text-[13px] font-body">
                        Kirim
                    </button>
                    <div className="mt-10 w-71.25 rounded-xl bg-[#7B2A2A] px-3 py-3 flex flex-col gap-3">
                        <div className="rounded-lg bg-white p-3">
                            <p className="font-body text-[11px] font-semibold text-[#5C4036]">
                                Bibah
                            </p>
                            <p className="mt-1 font-body text-[9px] leading-normal text-[#5C4036]">
                                Selamat bergabung di klub "istri dulu baru main". Semoga jadi
                                istri yang sabar, penuh cinta, dan selalu diberi kebahagiaan
                                dalam setiap langkah rumah tangganya.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-3">
                            <p className="font-body text-[11px] font-semibold text-[#5C4036]">
                                Sissy
                            </p>
                            <p className="mt-1 font-body text-[9px] leading-normal text-[#5C4036]">
                                Akhirnya sah juga! Semoga menjadi keluarga yang penuh cinta,
                                saling menguatkan, dan selalu diberkahi hingga tua nanti.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-3">
                            <p className="font-body text-[11px] font-semibold text-[#5C4036]">
                                Halma
                            </p>
                            <p className="mt-1 font-body text-[9px] leading-normal text-[#5C4036]">
                                Selamat menempuh hidup baru. Semoga Allah selalu memberikan
                                kebahagiaan, kesehatan, dan keberkahan dalam rumah tangga
                                kalian.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-3">
                            <p className="font-body text-[11px] font-semibold text-[#5C4036]">
                                Salsa
                            </p>
                            <p className="mt-1 font-body text-[9px] leading-normal text-[#5C4036]">
                                Selamat menempuh hidup baru! Semoga kalian selalu jadi tim terbaik
                                dalam segala hal... dalam tawa, tangis, dan semua perjalanan hidup ke 
                                dapan. Semoga rumah tangganya penuh cinta, sehat, dan rezeki yang berkah Aamiin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default WishComp;
            