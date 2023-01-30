import { useState } from "react";
import { pembahasanDummy } from "@/lib/tryout/pembahasan";
import { Basepage } from "@/modules/basePage";
import { Pertanyaan } from "../components/pertanyaan";
import { Navigation } from "@/modules/components/navigation";
import { ListNomor } from "../components/listNomor";

export const BankSoalReview = () => {
  const [review, setReview] = useState(pembahasanDummy);
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <Basepage>
      <div className="bg-white text-blank">
        <div className="py-44 container mx-auto">
          <div className="text-2xl font-bold mb-5">
            <h3>
              Review Bank Soal Biologi ({currentPage + 1}/ {review.data.length})
            </h3>
          </div>
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-4">
              <Pertanyaan soal={review.data} currentPage={currentPage}>
                <Navigation
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  length={review.data.length}
                />
              </Pertanyaan>
            </div>
            <div className="col-span-2">
              <ListNomor
                length={review.data.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                review={review.data}
              />
              <div className="border border-gray-300 p-10 py-5 rounded-t-xl mt-10">
                <div className="text-2xl font-bold">Detail</div>
              </div>
              <div className="p-5 bg-background text-bold">
                <div className="text-xl font-bold mb-2">
                  Benar: {review.totalCorrect}
                </div>
                <div className="text-xl font-bold">
                  Salah: {review.data.length - review.totalCorrect}
                </div>
              </div>
              <div className="flex justify-between border border-gray-300 p-10 py-5 rounded-b-xl">
                <div className="text-2xl font-bold">Nilai</div>
                <div className="text-2xl font-bold text-bold">93</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Basepage>
  );
};
