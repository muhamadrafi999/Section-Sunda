import { useState } from "react";

import Rectangle from "../assets/images/Rectangle.png";
import LeftFlower from "../assets/images/LeftFlower.png";
import RightFlower from "../assets/images/RightFlower.png";

import { supabase } from "../lib/supabase";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwlt07CjQbBMQecjpc1s-pzmwgYYhL6rur7dgKnbSFjBc_tE1jTnuGaaSVXQDzA0Z-p/exec";

function AttendanceCard() {
  const [form, setForm] = useState({
    name: "",
    status: "Hadir",
    guest_count: 1,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [submittedData, setSubmittedData] = useState({
    name: "",
    status: "Hadir",
    guest_count: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const message = form.message.trim();
    const guestCount = Number(form.guest_count);

    if (!name) {
      alert("Nama wajib diisi.");
      return;
    }

    if (!message) {
      alert("Ucapan wajib diisi.");
      return;
    }

    if (form.guest_count === "") {
      alert("Jumlah tamu wajib diisi.");
      return;
    }

    if (!Number.isInteger(guestCount) || guestCount < 0) {
      alert("Jumlah tamu harus berupa angka 0 atau lebih.");
      return;
    }

    setLoading(true);

    try {
      // ==========================================
      // 1. SIMPAN FULL DATA KE SUPABASE
      // ==========================================

      const { data, error } = await supabase
        .from("rsvp_responses")
        .insert([
          {
            name: name,
            status: form.status,
            guest_count: guestCount,
            message: message,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("RSVP berhasil disimpan ke Supabase:", data);

      // ==========================================
      // 2. KIRIM NAMA + MESSAGE KE GOOGLE SHEET
      // ==========================================

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            table: "Wishes",
            name: name,
            message: message,
          }),
        });

        const result = await response.json();

        console.log("Response Google Apps Script:", result);

        if (!result.success) {
          throw new Error(
            result.message || "Data Wishes gagal disimpan."
          );
        }

        // ==========================================
        // 3. KIRIM DATA KE WISHCOMP SECARA LANGSUNG
        // ==========================================

        window.dispatchEvent(
          new CustomEvent("attendanceWishAdded", {
            detail: {
              id: result.id || Date.now(),
              name: name,
              message: message,
            },
          })
        );

        console.log("Nama dan ucapan berhasil masuk ke Wishes.");
      } catch (wishError) {
        console.error(
          "Gagal mengirim nama dan ucapan ke Google Sheet:",
          wishError
        );

        alert(
          "RSVP berhasil disimpan ke Supabase, tetapi ucapan belum masuk ke daftar Harapan dan Ucapan."
        );
      }

      // ==========================================
      // 4. SIMPAN DATA UNTUK TAMPILAN CONFIRMATION
      // ==========================================

      setSubmittedData({
        name: name,
        status: form.status,
        guest_count: guestCount,
        message: message,
      });

      setIsSubmitted(true);

      alert("Konfirmasi kehadiran berhasil dikirim!");
    } catch (error) {
      console.error("Gagal menyimpan RSVP:", error);

      alert(
        `Konfirmasi kehadiran gagal dikirim.\n\n${
          error.message || "Terjadi kesalahan pada Supabase."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setForm({
      name: submittedData.name,
      status: submittedData.status,
      guest_count: submittedData.guest_count,
      message: submittedData.message,
    });

    setIsSubmitted(false);
  };

  return (
    <section className="bg-[#F7F0DE] py-16 flex justify-center overflow-hidden">
      <div className="relative w-97.5 flex justify-center">
        <div className="relative w-86.25">
          <img
            src={Rectangle}
            alt=""
            className="w-full"
          />
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="absolute inset-0 flex flex-col items-center"
            >
              <h1 className="font-title text-[34px] text-[#7C3D3D] mt-10.5">
                Konfirmasi Kehadiran
              </h1>
              <p className="font-body text-[15px] text-[#5C4B42] mt-1">
                20 Januari
              </p>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama"
                required
                className="mt-2 w-70 h-9 rounded-full bg-white px-4 outline-none font-body text-[13px] text-[#5C4B42]"
              />
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                required
                className="mt-2 w-70 h-9 rounded-full bg-white px-4 outline-none font-body text-[13px] text-[#5C4B42]"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
              <input
                type="number"
                name="guest_count"
                value={form.guest_count}
                onChange={handleChange}
                min="0"
                step="1"
                required
                placeholder="Jumlah Tamu"
                className="mt-2 w-70 h-9 rounded-full bg-white px-4 outline-none font-body text-[13px] text-[#5C4B42]"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ucapan"
                required
                className="mt-2 w-70 h-20 rounded-[15px] bg-white px-4 py-3 resize-none outline-none font-body text-[13px] text-[#5C4B42]"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-2 mb-1 w-70 h-9 rounded-full bg-[#7D2424] text-white font-body text-[15px] cursor-pointer disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center">
              <h1 className="font-title text-[34px] text-[#7C3D3D] mt-10.5">
                Konfirmasi Kehadiran
              </h1>
              <p className="font-body text-[15px] text-[#5C4B42] mt-2">
                20 Januari
              </p>
              <h2 className="font-body text-[20px] font-semibold text-[#682828] mt-0">
                {submittedData.status}
              </h2>
              <p className="font-body text-[16px] text-[#5C4B42] mt-1 text-center px-5">
                Horee, terimakasih sudah mau hadir
              </p>
              <p className="font-body text-[16px] text-[#5C4B42] leading-5 text-center px-5">
                mari bertemu disana :)
              </p>
              <p className="font-body text-[15px] text-[#682828] mt-2 text-center px-5">
                {submittedData.name}
              </p>
              <p className="font-body text-[14px] text-[#5C4B42] mt-1 text-center px-5 line-clamp-2">
                "{submittedData.message}"
              </p>
              <button
                type="button"
                onClick={handleEdit}
                className=" mb-2 w-42.5 h-9 rounded-full bg-[#7D2424] text-white font-body text-[15px] cursor-pointer"
              >
                Ubah
              </button>
            </div>
          )}
          <img
            src={LeftFlower}
            alt=""
            className="absolute bottom-0 -left-8 w-20.5 animate-left-flower"
          />
          <img
            src={RightFlower}
            alt=""
            className="absolute bottom-0 -right-8 w-20.5 animate-right-flower"
          />
        </div>
      </div>
    </section>
  );
}

export default AttendanceCard;