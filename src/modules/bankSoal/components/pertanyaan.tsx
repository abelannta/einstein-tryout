import { JawabanStateProps } from "@/lib/props/tryout";

interface PertanyaanProps {
  soal: any;
  currentPage: number;
  children: any;
}

export const Pertanyaan = (props: PertanyaanProps) => {
  const { soal, currentPage, children } = props;

  return (
    <div>
      <div className="bg-bold p-10 rounded-xl mb-10">
        <p className="text-xl">{soal[currentPage].pertanyaan}</p>
      </div>
      <div className="mb-5">
        {soal[currentPage].data.map((item: any, idx: number) => (
          <button
            key={idx}
            value={item.value}
            className={`flex items-center border border-gray-300 p-5 mb-3 rounded-xl w-full ${
              soal[currentPage].userAnswer == item.value
                ? "border-background"
                : ""
            }`}
          >
            <div
              className={`flex justify-center items-center border border-gray-300 rounded-full w-8 aspect-square ${
                item.correct === true ? "bg-green-600" : ""
              }`}
            >
              {idx === 0 ? "A" : idx === 1 ? "B" : idx === 2 ? "C" : "D"}
            </div>
            <div className="ml-4">{item.value}</div>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
};
