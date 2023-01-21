import { JawabanStateProps } from "..";

interface listNomorProps {
  length: number;
  currentPage: number;
  setCurrentPage: (e: any) => void;
  jawaban: JawabanStateProps[];
}

export const ListNomor = (props: listNomorProps) => {
  const { length, currentPage, setCurrentPage, jawaban } = props;

  const handleNumberClick = (e: number) => {
    setCurrentPage(e);
  };

  const loopingNumber = () => {
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push(
        <button
          key={i}
          className={`border border-gray-300 flex justify-center items-center p-3 rounded-xl ${
            i === currentPage ? `border-background font-bold` : ""
          } ${jawaban[i]?.jawabanId != "" ? "bg-background text-bold" : ""}`}
          onClick={() => handleNumberClick(i)}
        >
          {i + 1}
        </button>
      );
    }

    return list;
  };

  return (
    <div className="border border-gray-300 p-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-5">Daftar Soal</h2>
      <div className="grid grid-cols-5 gap-3 mb-10">{loopingNumber()}</div>
      <button className="p-3 w-full flex justify-center bg-background text-bold font-bold rounded-xl">
        Submit
      </button>
    </div>
  );
};
