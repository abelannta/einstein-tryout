import { useEffect, useState } from "react";
import { Basepage } from "../../basePage";
import { ListNomor } from "../../components/listNomor";
import { Navigation } from "../../components/navigation";
import { Pertanyaan } from "../../components/pertanyaan";
import { soalDummy } from "@/lib/tryout/soal";
import { JawabanStateProps } from "@/lib/props/tryout";
import { getSoalTryout, postSubmitTryout } from "@/lib/tryout";
import { toast } from "react-hot-toast";
import { setCookie, parseCookies } from "nookies";
import { TimeRundown } from "./components/timeRundown";
import { useRouter } from "next/router";

export const Tryout = (props: any) => {
  const { tryoutId, data } = props;
  const cookies = parseCookies();
  const router = useRouter();
  const [soal, setSoal] = useState(soalDummy);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [jawaban, setJawaban] = useState<JawabanStateProps[]>([]);
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    const res = postSubmitTryout(tryoutId, jawaban)
      .then((res) => {
        router.replace("/tryout/" + tryoutId + "/submited");
      })
      .catch((err) => {
        throw err;
      });
    toast.promise(res, {
      loading: "Loading...",
      success: "Berhasil Submit Jawaban!",
      error: "Submit Jawaban Gagal",
    });
  };

  const loopingStateJawaban = (length: number, data: any) => {
    let jawabanArr = [];

    for (let i = 0; i < length; i++) {
      jawabanArr.push({
        soal_id: data[i].soal_id.toString(),
        answer: "",
      });
    }

    setJawaban(jawabanArr);
  };

  const storingJawaban = (index: number, e: any) => {
    const value = e.target.value;

    setJawaban((prev) => {
      const newArr = prev.slice();
      newArr[index].answer = value;

      return newArr;
    });

    setCookie(null, "draft", JSON.stringify(jawaban), {
      maxAge: 3600,
      secure: true,
    });
  };

  useEffect(() => {
    // @ts-ignore
    loopingStateJawaban(data.length, data);

    if (cookies.draft) {
      const draft = JSON.parse(cookies.draft);
      setJawaban(draft);
    }
  }, []);

  return (
    <>
      <Basepage>
        <div className="bg-white text-black">
          <div className="py-44 container mx-auto">
            <div className="flex justify-between items-center text-lg md:text-2xl font-bold mb-5">
              <h3>
                Kuis ({currentPage + 1}/{data.length})
              </h3>
              <TimeRundown milisecs={360000} />
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
                <Pertanyaan
                  soal={data}
                  currentPage={currentPage}
                  storingJawaban={storingJawaban}
                  jawaban={jawaban}
                >
                  <Navigation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    length={data.length}
                  />
                </Pertanyaan>
              </div>
              <div className="hidden md:block md:col-span-2">
                <ListNomor
                  length={data.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  jawaban={jawaban}
                >
                  <label
                    htmlFor="submit"
                    className="btn w-full bg-background text-bold"
                  >
                    Submit
                  </label>
                </ListNomor>
              </div>
            </div>
          </div>
        </div>
      </Basepage>
      <input type="checkbox" id="submit" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Apakah anda sudah yakin dengan semua jawaban?
          </h3>
          <div className="modal-action">
            <label htmlFor="submit" className="btn bg-background text-bold">
              Cancel
            </label>
            <label
              onClick={() => handleSubmit()}
              htmlFor="submit"
              className="btn bg-background text-bold"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="list-number" className="modal-toggle" />
      <label
        htmlFor="list-number"
        className="modal modal-bottom sm:modal-middle"
      >
        <label className="modal-box relative">
          <ListNomor
            length={data.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            jawaban={jawaban}
          >
            <label
              htmlFor="submit"
              className="btn w-full bg-background text-bold"
            >
              Submit
            </label>
          </ListNomor>
        </label>
      </label>
    </>
  );
};
