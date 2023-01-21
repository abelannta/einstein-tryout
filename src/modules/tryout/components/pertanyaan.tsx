import { useState } from "react";

interface PertanyaanProps {
  soal: any;
  setSoal: (e: any) => void;
  currentPage: number;
  children: any;
}

interface JawabanStateProps {
  soalId: string;
  jawabanId: string;
}

export const Pertanyaan = (props: PertanyaanProps) => {
  const { soal, setSoal, currentPage, children } = props;
  const [jawaban, setJawaban] = useState<JawabanStateProps[]>();

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="bg-bold p-10 rounded-xl mb-10">
        <p className="text-xl">{soal[currentPage].pertanyaan}</p>
      </div>
      <form onChange={handleChange} className="mb-5">
        {soal[currentPage].jawaban.map((item: any, idx: number) => (
          <div key={idx} className="border border-gray-300 p-5 mb-3 rounded-xl">
            <input
              type="radio"
              id={item.id}
              name="jawaban"
              className="mr-3"
              value={item.value}
            />
            <label htmlFor={item.id}>{item.value}</label>
          </div>
        ))}
      </form>
      {children}
    </div>
  );
};
