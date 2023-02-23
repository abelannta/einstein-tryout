import Link from "next/link";

export const Progres = () => {
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
              <div className="text-gray-600">Bakteri dan Virus</div>
            </div>
          </div>
          <div className="flex items-center">
            <progress
              className="progress progress-primary w-56 mr-5"
              value={75}
              max="100"
            ></progress>
            <Link href="/materi/biologi/bakteri-dan-virus">
              <button className="text-md md:text-lg p-3 flex justify-center bg-background text-bold font-bold rounded-xl">
                Lanjutkan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
