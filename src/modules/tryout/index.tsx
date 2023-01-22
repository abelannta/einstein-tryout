import { useEffect, useState } from "react";
import { Basepage } from "../basePage";
import { ListNomor } from "./components/listNomor";
import { Navigation } from "./components/navigation";
import { Pertanyaan } from "./components/pertanyaan";
import { soalDummy } from "@/lib/tryout/soal";

export interface JawabanStateProps {
  soalId: string;
  jawabanId: string;
}

export const Tryout = () => {
  const [soal, setSoal] = useState(soalDummy);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [jawaban, setJawaban] = useState<JawabanStateProps[]>([]);

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

  const storingJawaban = (index: number, e: any) => {
    const value = e.target.value;

    setJawaban((prev) => {
      const newArr = prev.slice();
      newArr[index].jawabanId = value;

      return newArr;
    });

    localStorage.setItem("draft", JSON.stringify(jawaban));
  };

  useEffect(() => {
    // @ts-ignore
    const draft = JSON.parse(localStorage.getItem("draft"));
    loopingStateJawaban(soal.length);

    if (draft) {
      setJawaban(draft);
    }
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
                  currentPage={currentPage}
                  storingJawaban={storingJawaban}
                  jawaban={jawaban}
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
                  jawaban={jawaban}
                />
              </div>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
