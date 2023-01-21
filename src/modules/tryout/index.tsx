import { useEffect, useState } from "react";
import { Basepage } from "../basePage";
import { ListNomor } from "./components/listNomor";
import { Navigation } from "./components/navigation";
import { Pertanyaan } from "./components/pertanyaan";

const soalDummy = [
  {
    id: "1",
    pertanyaan: "Apa kamu itu?",
    jawaban: [
      {
        id: "1",
        value: "Hantu",
      },
      {
        id: "2",
        value: "Manusia",
      },
      {
        id: "3",
        value: "Hewan",
      },
      {
        id: "4",
        value: "Tanaman",
      },
    ],
  },
  {
    id: "2",
    pertanyaan: "Siapa nama kamu?",
    jawaban: [
      {
        id: "1",
        value: "Asep",
      },
      {
        id: "2",
        value: "Ijat",
      },
      {
        id: "3",
        value: "Kuroku",
      },
      {
        id: "4",
        value: "Anas",
      },
    ],
  },
  {
    id: "3",
    pertanyaan: "Apa kamu itu?",
    jawaban: [
      {
        id: "1",
        value: "Hantu",
      },
      {
        id: "2",
        value: "Manusia",
      },
      {
        id: "3",
        value: "Hewan",
      },
      {
        id: "4",
        value: "Tanaman",
      },
    ],
  },
  {
    id: "4",
    pertanyaan: "Ibukota dari negara Thailand?",
    jawaban: [
      {
        id: "1",
        value: "Bangkok",
      },
      {
        id: "2",
        value: "Manila",
      },
      {
        id: "3",
        value: "Kuala Lumpur",
      },
      {
        id: "4",
        value: "Berlin",
      },
    ],
  },
  {
    id: "5",
    pertanyaan: "Warna yang paling menyerap panas adalah",
    jawaban: [
      {
        id: "1",
        value: "Merah",
      },
      {
        id: "2",
        value: "Hitam",
      },
      {
        id: "3",
        value: "Putih",
      },
      {
        id: "4",
        value: "Kuning",
      },
    ],
  },
];

export const Tryout = () => {
  const [soal, setSoal] = useState(soalDummy);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [jawaban, setJawaban] = useState<any[]>([]);

  const loopingStateJawaban = (length: number) => {
    let jawabanArr = [];

    for (let i = 0; i < length; i++) {
      jawabanArr.push({
        soalId: "",
        jawabanId: "",
      });
    }

    setJawaban(jawabanArr);
  };

  const storingJawaban = (index: number, jawabanId: string) => {
    setJawaban((prev) => {
      const newArr = prev.slice();
      newArr[index].jawabanId = jawabanId;

      return newArr;
    });
  };

  useEffect(() => {
    loopingStateJawaban(soal.length);
  }, []);

  return (
    <>
      <Basepage>
        <div className="bg-white text-black">
          <div className="py-44 container mx-auto">
            <div className="flex justify-between items-center text-2xl font-bold mb-5">
              <h3>
                Kuis ({currentPage + 1}/{soal.length})
              </h3>
              <h3>90:00</h3>
            </div>
            <div className="grid grid-cols-6 gap-10">
              <div className="col-span-4">
                <Pertanyaan
                  soal={soal}
                  setSoal={setSoal}
                  currentPage={currentPage}
                >
                  <Navigation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    length={soal.length}
                  />
                </Pertanyaan>
              </div>
              <div className="col-span-2">
                <ListNomor
                  length={soal.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
