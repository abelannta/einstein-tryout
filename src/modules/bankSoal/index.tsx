import { Basepage } from "../basePage";
import Image from "next/image";
import tryoutDef from "@/public/assets/UTBK.png";
import Moment from "react-moment";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { postTakeBankSoal } from "@/lib/bankSoal";

export const BankSoalRegister = (props: any) => {
  const { data } = props;
  const [bankSoal, setBankSoal] = useState(data);

  const handleTakeBankSoal = (to_slug: string) => {
    const res = postTakeBankSoal(to_slug, 1)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        throw err;
      });
    toast.promise(res, {
      loading: "Loading...",
      success: "Berhasil Mendaftar Bank Soal!",
      error: "Gagal Menambahkan Bank Soal!",
    });
  };

  return (
    <>
      <Basepage footer={true}>
        <div className="bg-white min-h-screen">
          <div className="py-44 container">
            <h1 className="text-4xl font-bold text-center text-black mb-12">
              Bank Soal
            </h1>
            <div className="grid grid-cols-12 gap-5 gap-y-8">
              {bankSoal?.map((item: any, i: number) => (
                <div className="col-span-4" key={i}>
                  <div className="bg-primary rounded-xl p-7">
                    <div className="w-full aspect-video bg-gray-400 rounded-xl overflow-hidden">
                      <Image
                        src={tryoutDef}
                        alt="Gambar Tryout"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col mt-5 items-center">
                      <h4 className="text-xl font-semibold text-bold">
                        {item.bs_title}
                      </h4>
                      <p className="text-base font-light text-white mt-5 text-center">
                        {item.bs_summary}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleTakeBankSoal(item.bs_slug)}
                      className="btn btn-secondary text-black mt-5 w-full"
                    >
                      Daftar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
