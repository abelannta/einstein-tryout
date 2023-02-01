import { JawabanStateProps } from "@/lib/props/tryout";

interface listNomorProps {
  length: number;
  currentPage: number;
  setCurrentPage: (e: any) => void;
  review: any;
}

export const ListNomor = (props: listNomorProps) => {
  const { length, currentPage, setCurrentPage, review } = props;

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
          } ${review[i]?.isCorrect === true ? "bg-emerald-600" : "bg-red-600"}`}
          onClick={() => handleNumberClick(i)}
        >
          {i + 1}
        </button>
      );
    }

    return list;
  };

  return (
    <>
      <div className="border border-gray-300 p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-5">Daftar Soal</h2>
        <div className="grid grid-cols-5 gap-3 mb-10">{loopingNumber()}</div>
        <label
          htmlFor="my-modal-6"
          className="btn w-full bg-background text-bold"
        >
          Pembahasan
        </label>
      </div>
    </>
  );
};
