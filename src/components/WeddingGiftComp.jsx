import { useState } from "react";

import { FiCopy, FiX } from "react-icons/fi";

import { Alert, AlertDescription } from "./ui/alert";

import FrameBg from "../assets/images/bg-overlay-4.png";
import LeafRight from "../assets/images/el-flower-24.png";
import RedFlower from "../assets/images/two-red-flower.png";
import SunFlower from "../assets/images/sun-flower.png";
import BlueFlower from "../assets/images/blue-flower.png";
import Flower from "../assets/images/el-flower-22.png";
import QrisBca from "../assets/images/qr-bca.png";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwlt07CjQbBMQecjpc1s-pzmwgYYhL6rur7dgKnbSFjBc_tE1jTnuGaaSVXQDzA0Z-p/exec";

function WeddingGiftComp() {
  const [copied, setCopied] = useState(false);
  const [showQris, setShowQris] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [pendingQris, setPendingQris] = useState(false);

  const [form, setForm] = useState({
    name: "",
    owner: "",
    message: "",
    amount: "",
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("083751800779");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin nomor rekening:", error);

      setAlertMessage("Nomor rekening gagal disalin.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    const newName = form.name.trim();
    const newOwner = form.owner.trim();
    const newMessage = form.message.trim();
    const newAmount = form.amount.trim();

    if (!newName || !newOwner || !newMessage || !newAmount) {
      setAlertMessage("Silakan lengkapi semua data terlebih dahulu.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          table: "WeddingGift",
          name: newName,
          owner: newOwner,
          message: newMessage,
          amount: newAmount,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Server mengembalikan status ${response.status}.`
        );
      }

      const result = await response.json();

      console.log("Response WeddingGift:", result);

      if (!result.success) {
        throw new Error(
          result.message || "Wedding Gift gagal disimpan."
        );
      }

      setPendingQris(true);
      setAlertMessage("Wedding Gift berhasil dikirim!");

    } catch (error) {
      console.error("Gagal mengirim Wedding Gift:", error);

      setAlertMessage(
        `Wedding Gift gagal dikirim. ${
          error.message || "Terjadi kesalahan saat mengirim data."
        }`
      );

    } finally {
      setLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage("");

    if (pendingQris) {
      setPendingQris(false);
      setShowQris(true);
    }
  };

  const handleCloseQris = () => {
    setShowQris(false);

    setForm({
      name: "",
      owner: "",
      message: "",
      amount: "",
    });
  };

  return (
    <>
      {alertMessage && (
        <div className="fixed top-5 left-1/2 z-[9999] w-[calc(100%-32px)] max-w-[396px] -translate-x-1/2">
          <Alert className="relative bg-white shadow-lg">
            <AlertDescription className="pr-6 text-[#7B2A2A]">
              {alertMessage}
            </AlertDescription>
            <button
              type="button"
              onClick={handleCloseAlert}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[20px] leading-none text-[#7B2A2A]"
            >
              ×
            </button>
          </Alert>
        </div>
      )}
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
                <select
                  className="w-71.25 h-9 rounded-lg bg-white px-3 text-[#6A4540] font-body text-[12px] outline-none"
                  defaultValue="BCA"
                >
                  <option value="BCA">
                    BANK BCA
                  </option>
                </select>
                <div className="mt-3 w-71.25 rounded-lg bg-white px-4 py-4">
                  <p className="font-body text-[12px] text-[#6A4540]">
                    Nomor Akun
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="font-body text-[14px] text-[#6A4540]">
                      083751800779
                    </p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-[#6A4540] hover:scale-110 duration-200 cursor-pointer"
                    >
                      <FiCopy size={15} />
                    </button>
                  </div>
                  {copied && (
                    <p className="mt-2 text-[11px] text-green-600 font-body">
                      No Rekening berhasil disalin
                    </p>
                  )}
                  <p className="mt-3 font-body text-[12px] text-[#6A4540]">
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
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Chindy & pasangan"
                  className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                />
                <input
                  type="text"
                  name="owner"
                  value={form.owner}
                  onChange={handleChange}
                  placeholder="Nama Aku Owner"
                  className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                />
                <input
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Pesan"
                  className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                />
                <input
                  type="text"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="Jumlah"
                  className="mt-3 w-71.25 h-8 rounded-full bg-white px-4 font-body text-[12px] outline-none text-[#6A4540]"
                />
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={loading}
                  className="mt-3 w-71.25 h-8.5 rounded-full bg-white font-body text-[14px] text-[#6A4540] hover:scale-[1.02] duration-200 cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Mengirim..." : "Selanjutnya ›"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showQris && (
        <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center px-5">
          <div className="relative w-80 max-w-full rounded-2xl bg-white p-5 shadow-2xl">
            <button
              type="button"
              onClick={handleCloseQris}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#7B2A2A] text-white flex items-center justify-center hover:scale-110 duration-200 cursor-pointer"
              aria-label="Tutup QRIS"
            >
              <FiX size={18} />
            </button>
            <h3 className="text-center font-title text-[24px] text-[#7B3030]">
              QRIS BCA
            </h3>
            <p className="mt-1 text-center font-body text-[12px] text-[#6A4540]">
              Scan QR untuk melakukan pembayaran
            </p>
            <img
              src={QrisBca}
              alt="QRIS BCA"
              className="mt-5 w-full max-h-70 object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default WeddingGiftComp;