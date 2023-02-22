import Link from "next/link";

export const Kegiatanku = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-bold rounded-xl p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
              1
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold">Tryout Biologi 1</div>
              <div className="text-gray-600">Senin, 1 Januari 1999</div>
            </div>
          </div>
          <Link href="/tryout/1">
            <button className="p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
              Mulai
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-bold rounded-xl p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
              2
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold">Tryout Biologi 2</div>
              <div className="text-gray-600">Senin, 2 Januari 1999</div>
            </div>
          </div>
          <Link href="/tryout/2">
            <button className="p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
              Mulai
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
