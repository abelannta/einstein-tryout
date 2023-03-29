import { twMerge } from "tailwind-merge";

interface PertanyaanReviewProps {
  soal: any;
  currentPage: number;
  children: any;
}

export const PertanyaanReview = (props: PertanyaanReviewProps) => {
  const { soal, currentPage, children } = props;

  return (
    <div>
      <div className="bg-paper p-5 md:p-10 rounded-xl mb-10 shadow-md">
        <p className="text-md md:text-xl select-none">
          {soal[currentPage].soal_detail.content}
        </p>
      </div>
      <div className="mb-5 text-md md:text-xl">
        {soal[currentPage].soal_detail.answers.map((item: any, idx: number) => (
          <button
            key={idx}
            value={item}
            className={twMerge(
              `flex items-center border border-gray-300 p-5 mb-3 rounded-xl w-full ${
                soal[currentPage].user_ans === item
                  ? "bg-red-200 border-background border-2 shadow-md"
                  : ""
              } ${
                item === soal[currentPage].soal_detail.correctAns
                  ? "bg-green-200"
                  : ""
              }`
            )}
          >
            <div
              className={`bg-white flex justify-center items-center border border-gray-300 rounded-full w-8 aspect-square font-bold`}
            >
              {idx === 0
                ? "A"
                : idx === 1
                ? "B"
                : idx === 2
                ? "C"
                : idx === 3
                ? "D"
                : "E"}
            </div>
            <div className="ml-4">{item}</div>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
};
