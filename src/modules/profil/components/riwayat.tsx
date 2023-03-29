import { getHistory } from "@/lib/profil";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Moment from "react-moment";

export const Riwayat = () => {
  const [riwayat, setRiwayat] = useState([]);
  const getListRiwayat = () => {
    const res = getHistory()
      .then((res) => {
        setRiwayat(res);
        console.log(res);
      })
      .catch((err) => toast.error("Terjadi Kesalahan Dalam Fetch Data"));
  };

  useEffect(() => {
    getListRiwayat();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        {riwayat.map((item: any, i: number) => (
          <div className="bg-bold rounded-xl p-5" key={i}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="text-md md:text-xl font-bold">
                    {item.to_details.to_title}
                  </div>
                  <div className="text-gray-600">
                    <Moment format="dddd, DD MMMM YYYY">
                      {item.to_details.createdAt}
                    </Moment>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-md md:text-lg font-bold mr-5">
                  Nilai: {item.to_hasil.score}
                </div>
                <Link href={`/tryout/${item.to_details.to_slug}/review`}>
                  <button className="text-md md:text-lg p-3 flex justify-center bg-background text-bold font-bold rounded-xl">
                    Pembahasan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {riwayat.length === 0 && (
          <div className="flex items-center justify-center">
            <h3 className="text-xl font-light">Tidak ada data ditemukan</h3>
          </div>
        )}
      </div>
    </>
  );
};
