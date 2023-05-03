import { useState } from "react";
import { pembahasanDummy } from "@/lib/tryout/pembahasan";
import { Basepage } from "@/modules/basePage";
import { Navigation } from "@/modules/components/navigation";
import { mapelList, typeList } from "@/lib/tryout/type";
import { PertanyaanBankSoalRev } from "./components/pertanyaanBankSoalRev";
import { ListNomorBankSoalRev } from "./components/listNomorBankSoalRev";

export const BankSoalReview = (props: any) => {
  const { bsId, data } = props;
  const [review, setReview] = useState(data);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const filterType = (type: number) => {
    const filter = typeList
      .filter((item) => item.id === type)
      .map((item, i) => <p key={i}>{item.name}</p>);

    return filter;
  };

  const filterMapel = (mapel: number) => {
    const filter = mapelList
      .filter((item) => item.id === mapel)
      .map((item, i) => <p key={i}>{item.name}</p>);

    return filter;
  };

  return (
    <Basepage>
      <div className="bg-white text-black">
        <div className="py-44 container mx-auto">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center text-lg md:text-2xl font-bold">
              <h3>Review Bank Soal</h3>
            </div>
            <div className="hidden md:flex gap-3">
              <div className="badge badge-lg badge-secondary text-primary">
                {filterType(review[currentPage].soal_detail.type)}
              </div>
              <div className="badge badge-lg badge-secondary text-primary">
                {filterMapel(review[currentPage].soal_detail.mapel)}
              </div>
            </div>
            <div className="block md:hidden">
              <label
                htmlFor="list-number-review"
                className="flex flex-col gap-1 w-5 h-5"
              >
                <div className="w-full rounded-xl bg-black h-1"></div>
                <div className="w-full rounded-xl bg-black h-1"></div>
                <div className="w-full rounded-xl bg-black h-1"></div>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-4">
              <PertanyaanBankSoalRev currentPage={currentPage} soal={review}>
                <Navigation
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  length={review.length}
                />
              </PertanyaanBankSoalRev>
            </div>
            <div className="col-span-2">
              <ListNomorBankSoalRev
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                length={review.length}
                review={review}
              />
              <div className="border border-gray-300 p-10 py-5 rounded-t-xl mt-10">
                <div className="text-2xl font-bold">Detail</div>
              </div>
              <div className="p-5 bg-background text-bold">
                <div className="text-xl font-bold mb-2">Benar:</div>
                <div className="text-xl font-bold">Salah:</div>
              </div>
              <div className="flex justify-between border border-gray-300 p-10 py-5 rounded-b-xl">
                <div className="text-2xl font-bold">Nilai</div>
                <div className="text-2xl font-bold text-bold">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Basepage>
  );
};
