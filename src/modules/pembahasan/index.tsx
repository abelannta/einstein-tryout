import { Basepage } from "../basePage";
import { AuthorPembahasan } from "./components/author";
import { VideoPembahasan } from "./components/video";

export const Pembahasan = () => {
  return (
    <>
      <Basepage>
        <div className="bg-white text-black">
          <div className="py-44 container mx-auto">
            <div>
              <div className="text-4xl font-bold mb-10">Pembahasan</div>
              <div className="text-lg">
                Halaman ini menjelaskan tentang soal per soal dari tryout 1 yang
                dijelaskan oleh mentor yang berpengalaman.
              </div>
            </div>
            <VideoPembahasan />
            <AuthorPembahasan />
          </div>
        </div>
      </Basepage>
    </>
  );
};
