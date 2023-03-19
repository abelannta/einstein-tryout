import { JawabanStateProps } from "@/lib/props/tryout";

interface PertanyaanProps {
  soal: any;
  currentPage: number;
  children: any;
  jawaban: JawabanStateProps[];
  storingJawaban: (index: number, e: any) => void;
}

export const Pertanyaan = (props: PertanyaanProps) => {
  const { soal, currentPage, children, storingJawaban, jawaban } = props;

  return (
    <div>
      <div className="bg-paper p-5 md:p-10 rounded-xl mb-10 shadow-md">
        <p className="text-md md:text-xl select-none">
          {soal[currentPage].content}
        </p>
      </div>
      <div className="mb-5 text-md md:text-xl">
        {soal[currentPage].answers.map((item: any, idx: number) => (
          <button
            key={idx}
            onClick={(e) => storingJawaban(currentPage, e)}
            value={item}
            className={`flex items-center border border-gray-300 p-5 mb-3 rounded-xl w-full ${
              jawaban[currentPage]?.answer === item
                ? "bg-primary text-bold"
                : ""
            }`}
          >
            <div
              className={`flex justify-center items-center border border-gray-300 rounded-full w-8 aspect-square font-bold ${
                jawaban[currentPage]?.answer === item
                  ? "bg-bold text-primary border-bold"
                  : ""
              }`}
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
