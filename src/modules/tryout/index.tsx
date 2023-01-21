import { Basepage } from "../basePage";
import { DaftarSoal } from "./components/daftarSoal";
import { Pertanyaan } from "./components/pertanyaan";

export const Tryout = () => {
  return (
    <>
      <Basepage>
        <div className="bg-white text-black">
          <div className="py-44 container mx-auto">
            <div className="flex justify-between items-center text-2xl font-bold mb-5">
              <h3>Kuis (1/20)</h3>
              <h3>90:00</h3>
            </div>
            <div className="grid grid-cols-6 gap-10">
              <div className="col-span-4">
                <Pertanyaan />
              </div>
              <div className="col-span-2">
                <DaftarSoal />
              </div>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
