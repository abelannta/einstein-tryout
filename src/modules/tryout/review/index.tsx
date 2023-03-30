import { Basepage } from "@/modules/basePage";
import { ListNomorReview } from "@/modules/tryout/review/components/listNomorReview";
import { Navigation } from "@/modules/components/navigation";
import { PertanyaanReview } from "@/modules/tryout/review/components/pertanyaanReview";
import { useState } from "react";
import { typeList, mapelList } from "@/lib/tryout/type";

export const ReviewTryout = (props: any) => {
  const { tryoutId, data } = props;
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
    <>
      <Basepage>
        <div className="bg-white text-black">
          <div className="py-44 container mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-lg md:text-2xl font-bold mb-5">
                <h3>Review Tryout 1</h3>
              </div>
              <div className="flex gap-3">
                <div className="badge badge-lg badge-secondary text-primary">
                  {filterType(review[currentPage].soal_detail.type)}
                </div>
                <div className="badge badge-lg badge-secondary text-primary">
                  {filterMapel(review[currentPage].soal_detail.mapel)}
                </div>
              </div>
              <div className="block md:hidden">
                <label
                  htmlFor="list-number"
                  className="flex flex-col gap-1 w-5 h-5"
                >
                  <div className="w-full rounded-xl bg-black h-1"></div>
                  <div className="w-full rounded-xl bg-black h-1"></div>
                  <div className="w-full rounded-xl bg-black h-1"></div>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-10">
              <div className="col-span-6 md:col-span-4">
                <PertanyaanReview currentPage={currentPage} soal={review}>
                  <Navigation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    length={review.length}
                  />
                </PertanyaanReview>
              </div>
              <div className="hidden md:block md:col-span-2">
                <ListNomorReview
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  length={review.length}
                  review={review}
                />
                <div className="border border-gray-300 p-10 py-5 rounded-t-xl mt-10">
                  <div className="text-xl font-bold">Detail</div>
                </div>
                <div className="p-5 px-10 bg-background text-bold">
                  <div className="text-lg font-bold mb-2">Benar:</div>
                  <div className="text-lg font-bold">Salah:</div>
                </div>
                <div className="flex justify-between border border-gray-300 p-10 py-5 rounded-b-xl">
                  <div className="text-xl font-bold">Nilai</div>
                  <div className="text-xl font-bold text-bold">93</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Basepage>
      <label
        htmlFor="list-number"
        className="modal modal-bottom sm:modal-middle"
      >
        <label className="modal-box relative">
          <ListNomorReview
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            length={review.length}
            review={review}
          />
        </label>
      </label>
    </>
  );
};
