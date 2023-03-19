import { BiTask, BiNotepad, BiTaskX } from "react-icons/bi";

export const StatsUser = () => {
  return (
    <>
      <div className="stats stats-vertical lg:stats-horizontal w-full shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiTask className="w-8 h-8" />
          </div>
          <div className="stat-title">Total Tryout</div>
          <div className="stat-value">10</div>
          <div className="stat-desc">All time</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiNotepad className="w-8 h-8" />
          </div>
          <div className="stat-title">Total Bank Soal</div>
          <div className="stat-value">20</div>
          <div className="stat-desc">All time</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiTaskX className="w-8 h-8" />
          </div>
          <div className="stat-title">Tryout Belum Selesai</div>
          <div className="stat-value">1</div>
          <div className="stat-desc"></div>
        </div>
      </div>
    </>
  );
};
