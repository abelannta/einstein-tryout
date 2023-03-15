import { getTryouts, postTakeTryout } from "@/lib/tryout";
import { Basepage } from "@/modules/basePage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Moment from "react-moment";
import tryoutDef from "@/public/assets/UTBK.png";

export const ScheduleTryout = () => {
  const [tryouts, setTryouts] = useState([]);

  const getListTryout = () => {
    const res = getTryouts()
      .then((res) => {
        setTryouts(res);
      })
      .catch((err) => toast.error(err.message));
  };

  const handleTakeTryout = (to_slug: string) => {
    const res = postTakeTryout(to_slug, 1)
      .then((res) => {
        toast.success("Berhasil Mendaftar Tryout!");
      })
      .catch((err) => {
        toast.error(err.response.data.detail);
      });
  };

  useEffect(() => {
    getListTryout();
  }, []);

  return (
    <>
      <Basepage>
        <div className="bg-white">
          <div className="py-44 container">
            <h1 className="text-4xl font-bold text-center text-black mb-12">
              Jadwal Tryout
            </h1>
            <div className="grid grid-cols-12 gap-5 gap-y-8">
              {tryouts?.map((item: any, i: number) => (
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
                        {item.to_title}
                      </h4>
                      <p className="text-base font-light text-bold">
                        <Moment format="LL">{item.startsAt}</Moment>
                      </p>
                      <p className="text-base font-light text-white mt-5 text-center">
                        {item.to_summary}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleTakeTryout(item.to_slug)}
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
