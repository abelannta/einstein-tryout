import { Basepage } from "@/modules/basePage";

export const MateriLandingPage = () => {
  return (
    <>
      <Basepage>
        <div className="py-44 container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-5">Materi</h2>
            <p className="text-lg">
              Terdapat banyak materi yang telah dikelompokkan sesuai mata
              pelajaran yang ada di Sekolah Menengah Atas. Kalian dapat memilih
              untuk mempelajari materi apa saja yang kalian inginkan.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <ListMateri />
            <ListMateri />
            <ListMateri />
            <ListMateri />
            <ListMateri />
          </div>
        </div>
      </Basepage>
    </>
  );
};

const ListMateri = () => {
  return (
    <div className="bg-bold rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
            1
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">Biologi</div>
          </div>
        </div>
        <button className="btn p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
          Detail
        </button>
      </div>
    </div>
  );
};
