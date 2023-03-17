import { getTakenTryouts } from "@/lib/tryout";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Moment from "react-moment";

export const Kegiatanku = () => {
  const [takenTryouts, setTakenTryouts] = useState([]);

  const getListTakenTryouts = () => {
    const res = getTakenTryouts()
      .then((res) => setTakenTryouts(res))
      .catch((err) => toast.error("Terjadi Kesalahan Dalam Fetch Data"));
  };

  useEffect(() => {
    getListTakenTryouts();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {takenTryouts.map((item: any, i: number) => (
        <div className="bg-bold rounded-xl p-5" key={i}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
                {i + 1}
              </div>
              <div className="flex flex-col">
                <div className="text-md md:text-xl font-bold">
                  {item.to_details.to_title}
                </div>
                <div className="text-gray-600">
                  <Moment format="LLLL">{item.to_details.startsAt}</Moment>
                </div>
              </div>
            </div>
            <Link href={`/tryout/${item.to_details.to_slug}/prelude`}>
              <button className="text-sm md:text-lg p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
                Lihat
              </button>
            </Link>
          </div>
        </div>
      ))}
      {takenTryouts.length === 0 && (
        <div className="flex items-center justify-center">
          <h3 className="text-xl font-light">Tidak ada data ditemukan</h3>
        </div>
      )}
    </div>
  );
};
