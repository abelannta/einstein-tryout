import { BsFillBarChartFill, BsFillCheckCircleFill } from "react-icons/bs";

export const OverviewProfile = () => {
  return (
    <>
      <div className="flex items-center bg-orange-100 text-orange-600 p-7 rounded-xl mb-5">
        <BsFillBarChartFill className="mr-5" />
        <div className="">1 Tryout belum diselesaikan</div>
      </div>
      <div className="flex items-center bg-emerald-100 text-emerald-600 p-7 rounded-xl">
        <BsFillCheckCircleFill className="mr-5" />
        <div className="">1 Tryout yang sudah diselesaikan</div>
      </div>
      <h2 className="text-3xl mt-10 font-bold">Statistik</h2>
    </>
  );
};
