import { useEffect, useState } from "react";

import Pattern from "../assets/images/el-pattern-3.png";
import FrameBg from "../assets/images/bg-overlay-4.png";
import { Alert, AlertDescription } from "../components/ui/alert";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwlt07CjQbBMQecjpc1s-pzmwgYYhL6rur7dgKnbSFjBc_tE1jTnuGaaSVXQDzA0Z-p/exec";

function WishComp() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    show: false,
    message: "",
  });

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

  const getWishTimestamp = (wish) => {
    const timestamp =
      wish.Timestamp ||
      wish.timestamp ||
      wish.CreatedAt ||
      wish.createdAt ||
      wish.Date ||
      wish.date ||
      wish.Time ||
      wish.time ||
      null;

    if (!timestamp) {
      return null;
    }

    const time = new Date(timestamp).getTime();

    return Number.isNaN(time) ? null : time;
  };

  const sortWishes = (wishList) => {
    return [...wishList].sort((a, b) => {
      const timeA = getWishTimestamp(a);
      const timeB = getWishTimestamp(b);

      if (timeA !== null && timeB !== null) {
        return timeB - timeA;
      }

      if (timeA !== null && timeB === null) {
        return -1;
      }

      if (timeA === null && timeB !== null) {
        return 1;
      }

      const idA = Number(a.id);
      const idB = Number(b.id);

      if (!Number.isNaN(idA) && !Number.isNaN(idB)) {
        return idB - idA;
      }

      return 0;
    });
  };

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
        .map((wish, index) => {
          const timestamp =
            wish.Timestamp ||
            wish.timestamp ||
            wish.CreatedAt ||
            wish.createdAt ||
            wish.Date ||
            wish.date ||
            wish.Time ||
            wish.time ||
            null;

          return {
            id: wish.ID || wish.id || `api-${index}`,
            name: wish.Name || wish.name,
            message: wish.Message || wish.message,
            timestamp,
          };
        });

      setWishes((prev) => {
        const defaultNames = ["Bibah", "Sissy", "Halma", "Salsa"];

        const defaultWishes = prev.filter((wish) =>
          defaultNames.includes(wish.name)
        );

        const previousApiWishes = prev.filter(
          (wish) => !defaultNames.includes(wish.name)
        );

        const mergedWishes = formattedWishes.map((apiWish) => {
          const oldWish = previousApiWishes.find(
            (old) => String(old.id) === String(apiWish.id)
          );

          return {
            ...apiWish,
            timestamp: apiWish.timestamp || oldWish?.timestamp || null,
          };
        });

        const apiIds = new Set(
          mergedWishes.map((wish) => String(wish.id))
        );

        const localWishesNotInApi = previousApiWishes.filter(
          (wish) => !apiIds.has(String(wish.id))
        );

        return sortWishes([
          ...mergedWishes,
          ...localWishesNotInApi,
          ...defaultWishes,
        ]);
      });
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
      setAlert({
        show: true,
        message: "Silakan isi nama dan ucapan.",
      });
      return;
    }

    setLoading(true);

    try {
      const submittedAt = new Date().toISOString();

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
        timestamp: submittedAt,
      };

      setWishes((prev) => {
        return sortWishes([newWish, ...prev]);
      });

      setName("");
      setMessage("");

      setAlert({
        show: true,
        message: "Ucapan berhasil dikirim!",
      });

      await fetchWishes();
    } catch (error) {
      console.error("Gagal mengirim wishes:", error);

      setAlert({
        show: true,
        message:
          "Ucapan gagal dikirim. Periksa koneksi API atau Google Apps Script.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F7F0DF]">
      {alert.show && (
        <div className="fixed top-5 left-1/2 z-9999 w-[calc(100%-32px)] max-w-99 -translate-x-1/2">
          <Alert className="relative bg-white shadow-lg">
            <AlertDescription className="pr-6 text-[#7B2A2A]">
              {alert.message}
            </AlertDescription>
            <button
              type="button"
              onClick={() =>
                setAlert({
                  show: false,
                  message: "",
                })
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[20px] leading-none text-[#7B2A2A]"
            >
              ×
            </button>
          </Alert>
        </div>
      )}
      <img
        src={Pattern}
        alt=""
        className="absolute bottom-165 left-1/2 -translate-x-1/2 w-71.25 z-30"
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center pt-36.25">
        <div className="absolute top-26.25 left-1/2 h-162.5 w-82.5 -translate-x-1/2 overflow-hidden rounded-t-[165px] rounded-b-[35px]">
          <img
            src={FrameBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative z-20 flex w-75 flex-col items-center">
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
            <div className="h-75 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#C9A6A6] scrollbar-track-transparent">
              <div className="flex flex-col gap-3">
                {wishes.map((wish, index) => (
                  <div
                    key={wish.id || wish.ID || index}
                    className="w-full shrink-0 rounded-[10px] bg-white px-3 py-3"
                  >
                    <h3 className="font-body text-[13px] font-semibold text-[#7B2A2A]">
                      {wish.name}
                    </h3>
                    <p className="mt-1 font-body text-[11px] leading-normal text-[#5C4036]">
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