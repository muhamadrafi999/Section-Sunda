import { useEffect, useState } from "react";

import Pattern from "../assets/images/el-pattern-3.png";
import FrameBg from "../assets/images/bg-overlay-4.png";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwlt07CjQbBMQecjpc1s-pzmwgYYhL6rur7dgKnbSFjBc_tE1jTnuGaaSVXQDzA0Z-p/exec";

function WishComp() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [wishes, setWishes] = useState([
    {
      id: "default-1",
      name: "Bibah",
      message:
        'Selamat bergabung di klub "istri dulu baru main". Semoga jadi istri yang sabar, penuh cinta, dan selalu diberi kebahagiaan dalam setiap langkah rumah tangganya.',
    },
    {
      id: "default-2",
      name: "Sissy",
      message:
        "Akhirnya sah juga! Semoga menjadi keluarga yang penuh cinta, saling menguatkan, dan selalu diberkahi hingga tua nanti.",
    },
    {
      id: "default-3",
      name: "Halma",
      message:
        "Selamat menempuh hidup baru. Semoga Allah selalu memberikan kebahagiaan, kesehatan, dan keberkahan dalam rumah tangga kalian.",
    },
    {
      id: "default-4",
      name: "Salsa",
      message:
        "Selamat menempuh hidup baru! Semoga kalian selalu jadi tim terbaik dalam segala hal... dalam tawa, tangis, dan semua perjalanan hidup ke depan. Semoga rumah tangganya penuh cinta, sehat, dan rezeki yang berkah Aamiin.",
    },
  ]);

  const fetchWishes = async () => {
    try {
      const response = await fetch(`${API_URL}?table=Wishes`);

      if (!response.ok) {
        throw new Error("Gagal mengambil data dari server.");
      }

      const data = await response.json();

      let apiWishes = [];

      if (Array.isArray(data)) {
        apiWishes = data;
      } else if (Array.isArray(data.data)) {
        apiWishes = data.data;
      }

      const formattedWishes = apiWishes
        .filter((wish) => wish.Name || wish.name)
        .map((wish, index) => ({
          id: wish.ID || wish.id || `api-${index}`,
          name: wish.Name || wish.name,
          message: wish.Message || wish.message,
        }));

      if (formattedWishes.length > 0) {
        setWishes((prev) => {
          const defaultNames = ["Bibah", "Sissy", "Halma", "Salsa"];

          const defaultWishes = prev.filter((wish) =>
            defaultNames.includes(wish.name)
          );

          return [...formattedWishes, ...defaultWishes];
        });
      }
    } catch (error) {
      console.error("Gagal mengambil wishes:", error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async () => {
    const newName = name.trim();
    const newMessage = message.trim();

    if (!newName || !newMessage) {
      alert("Silakan isi nama dan ucapan.");
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
          table: "Wishes",
          name: newName,
          message: newMessage,
        }),
      });

      const result = await response.json();

      console.log("Response dari Apps Script:", result);

      if (!result.success) {
        throw new Error(result.message || "Data gagal disimpan.");
      }

      const newWish = {
        id: result.id || Date.now(),
        name: newName,
        message: newMessage,
      };

      setWishes((prev) => [newWish, ...prev]);

      setName("");
      setMessage("");

      alert("Ucapan berhasil dikirim!");

      await fetchWishes();
    } catch (error) {
      console.error("Gagal mengirim wishes:", error);

      alert(
        "Ucapan gagal dikirim. Periksa koneksi API atau Google Apps Script."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F7F0DF]">
      <img
        src={Pattern}
        alt=""
        className="absolute bottom-165 left-1/2 -translate-x-1/2 w-71.25 z-30"
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center pt-[145px]">
        <div className="absolute top-[105px] left-1/2 h-[650px] w-[330px] -translate-x-1/2 overflow-hidden rounded-t-[165px] rounded-b-[35px]">
          <img
            src={FrameBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative z-20 flex w-[300px] flex-col items-center">
          <h2 className="font-title text-[30px] text-[#7B3030]">
            Harapan dan Ucapan
          </h2>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-7 h-7 w-full rounded-[10px] bg-[#7B2A2A] px-4 text-[11px] text-white placeholder:text-white outline-none font-body"
          />
          <textarea
            placeholder="Berikan Ucapan..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-3 h-20.5 w-full rounded-[10px] border-[6px] border-[#7B2A2A] bg-white p-3 resize-none outline-none font-body text-[11px] text-[#5C4036]"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-3 h-8 w-full rounded-full bg-[#7B2A2A] text-white font-body text-[12px] cursor-pointer disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
          <div className="mt-4 mb-2 w-full rounded-[15px] bg-[#7B2A2A] px-3 py-3">
            <div className="h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#C9A6A6] scrollbar-track-transparent">
              <div className="flex flex-col gap-3">
                {wishes.map((wish, index) => (
                  <div
                    key={wish.id || wish.ID || index}
                    className="w-full shrink-0 rounded-[10px] bg-white px-3 py-3"
                  >
                    <h3 className="font-body text-[13px] font-semibold text-[#7B2A2A]">
                      {wish.name}
                    </h3>
                    <p className="mt-1 font-body text-[11px] leading-[1.5] text-[#5C4036]">
                      {wish.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishComp;