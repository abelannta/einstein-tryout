import { BsFillBarChartFill, BsFillCheckCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { StatsUser } from "./stats";
import { useEffect, useState } from "react";
import { getHistory } from "@/lib/profil";
import toast from "react-hot-toast";

const LineChart = dynamic(() => import("@/modules/components/lineChart"), {
  ssr: false,
});

export const OverviewProfile = () => {
  const [riwayat, setRiwayat] = useState([]);
  const [dataChart, setDataChart] = useState<any>([]);

  const getListRiwayat = () => {
    const res = getHistory()
      .then((res) => {
        setRiwayat(res);
        listingChart(res);
      })
      .catch((err) => toast.error("Terjadi Kesalahan Dalam Fetch Data"));
  };

  const listingChart = (res: any) => {
    let currentData = [];

    for (let i = 0; i < res.length; i++) {
      currentData.push({
        date: res[i].to_details.startsAt,
        value: res[i].to_hasil.score,
      });
    }
    currentData.sort((a: any, b: any) => a.date - b.date);
    setDataChart(currentData);
  };

  useEffect(() => {
    getListRiwayat();
  }, []);

  return (
    <>
      <div className="border p-10 rounded-xl">
        <h2 className="text-lg md:text-2xl font-bold pb-5">Rangkuman</h2>
        <StatsUser />
      </div>
      <div className="border p-10 rounded-xl mt-8">
        <h2 className="text-lg md:text-2xl font-bold pb-5">
          Statistik Progres
        </h2>
        {dataChart.length > 0 && <LineChart userData={dataChart} />}
      </div>
    </>
  );
};
