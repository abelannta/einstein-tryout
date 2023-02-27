import Link from "next/link";

export const Riwayat = () => {
  return (
    <>
      <div className="bg-bold rounded-xl p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
              1
            </div>
            <div className="flex flex-col">
              <div className="text-md md:text-xl font-bold">
                Tryout Biologi 1
              </div>
              <div className="text-gray-600">Senin, 1 Januari 1999</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-md md:text-lg font-bold mr-5">Nilai: 90</div>
            <Link href="/pembahasan">
              <button className="text-md md:text-lg p-3 flex justify-center bg-background text-bold font-bold rounded-xl">
                Pembahasan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
