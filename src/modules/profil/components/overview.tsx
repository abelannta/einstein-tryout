import { BsFillBarChartFill, BsFillCheckCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { StatsUser } from "./stats";

const LineChart = dynamic(() => import("@/modules/components/lineChart"), {
  ssr: false,
});

export const OverviewProfile = () => {
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
        <LineChart />
      </div>
    </>
  );
};
