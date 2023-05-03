import { getTakenBankSoal } from "@/lib/bankSoal";
import { getTakenTryouts } from "@/lib/tryout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Moment from "react-moment";

enum KegiatankuEnum {
  Tryout = "",
  Banksoal = "banksoal",
}

export const Kegiatanku = () => {
  const [kegiatanku, setKegiatanku] = useState<KegiatankuEnum>(
    KegiatankuEnum.Tryout
  );
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.query.kegiatan) {
      if (router.query?.kegiatan === KegiatankuEnum.Tryout) {
        setKegiatanku(KegiatankuEnum.Tryout);
      } else if (router.query?.kegiatan === KegiatankuEnum.Banksoal) {
        setKegiatanku(KegiatankuEnum.Banksoal);
      }
    } else {
      setKegiatanku(KegiatankuEnum.Tryout);
    }
  }, [router.isReady, router.query]);

  return (
    <div className="flex flex-col gap-5">
      <div className="tabs mb-10">
        <Link
          scroll={false}
          href="/profil?tabs=kegiatan"
          onClick={() => setKegiatanku(KegiatankuEnum.Tryout)}
          className={`tab tab-sm md:tab-lg tab-lifted ${
            kegiatanku === KegiatankuEnum.Tryout ? "tab-active" : ""
          }`}
        >
          Tryout
        </Link>
        <Link
          scroll={false}
          href={{ query: { tabs: "kegiatan", kegiatan: "banksoal" } }}
          className={`tab tab-sm md:tab-lg tab-lifted ${
            kegiatanku === KegiatankuEnum.Banksoal ? "tab-active" : ""
          }`}
        >
          Bank Soal
        </Link>
      </div>
      {kegiatanku === KegiatankuEnum.Tryout ? (
        <TryoutSection />
      ) : kegiatanku === KegiatankuEnum.Banksoal ? (
        <BankSoalSection />
      ) : (
        <TryoutSection />
      )}
    </div>
  );
};

const TryoutSection = () => {
  const [takenTryouts, setTakenTryouts] = useState([]);

  const getListTakenTryouts = () => {
    const res = getTakenTryouts()
      .then((res) => {
        console.log(res);
        setTakenTryouts(res);
      })
      .catch((err) => toast.error("Terjadi Kesalahan Dalam Fetch Data"));
  };

  useEffect(() => {
    getListTakenTryouts();
  }, []);

  return (
    <>
      <div className="flex justify-end mb-5">
        <Link href={`/tryout/schedule`}>
          <button className="text-sm md:text-lg p-3 w-fit flex justify-center bg-background text-bold font-bold rounded-xl">
            Tambah Tryout
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-lg md:text-2xl font-bold">Ongoing</h4>
        {takenTryouts
          .filter((item: any) => item.details === "Ongoing")
          .map((item: any, i: number) => (
            <div className="bg-bold rounded-xl p-5" key={i}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="text-md md:text-xl font-bold">
                      {item.to_details.to_title}
                    </div>
                    <div className="text-gray-600">
                      <Moment format="LLLL">{item.to_details.startsAt}</Moment>
                    </div>
                  </div>
                </div>
                <Link href={`/tryout/${item.to_details.to_slug}/prelude`}>
                  <button className="text-sm md:text-lg p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
                    Lihat
                  </button>
                </Link>
              </div>
            </div>
          ))}
        {takenTryouts.filter((item: any) => item.details === "Ongoing")
          .length === 0 && (
          <div className="flex items-center justify-center">
            <h3 className="text-md md:text-xl font-light">
              Tidak ada data ditemukan
            </h3>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h4 className="text-lg md:text-2xl font-bold">Upcoming</h4>
        {takenTryouts
          .filter((item: any) => item.details === "Upcoming")
          .map((item: any, i: number) => (
            <div className="bg-bold rounded-xl p-5" key={i}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="text-md md:text-xl font-bold">
                      {item.to_details.to_title}
                    </div>
                    <div className="text-gray-600">
                      <Moment format="LLLL">{item.to_details.startsAt}</Moment>
                    </div>
                  </div>
                </div>
                <Link href={`/tryout/${item.to_details.to_slug}/prelude`}>
                  <button className="text-sm md:text-lg p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
                    Lihat
                  </button>
                </Link>
              </div>
            </div>
          ))}
        {takenTryouts.filter((item: any) => item.details === "Upcoming")
          .length === 0 && (
          <div className="flex items-center justify-center">
            <h3 className="text-md md:text-xl font-light">
              Tidak ada data ditemukan
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

const BankSoalSection = () => {
  const [takenBankSoal, setTakenBankSoal] = useState([]);

  const getListTakenTryouts = () => {
    const res = getTakenBankSoal()
      .then((res) => {
        console.log(res);
        setTakenBankSoal(res);
      })
      .catch((err) => toast.error("Terjadi Kesalahan Dalam Fetch Data"));
  };

  useEffect(() => {
    getListTakenTryouts();
  }, []);

  return (
    <>
      <div className="flex justify-end mb-5">
        <Link href={`/bank-soal`}>
          <button className="text-sm md:text-lg p-3 w-fit flex justify-center bg-background text-bold font-bold rounded-xl">
            Tambah Bank Soal
          </button>
        </Link>
      </div>
      {takenBankSoal.map((item: any, i: number) => (
        <div className="bg-bold rounded-xl p-5" key={i}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-md md:text-xl font-bold">
                  {item.bs_details.bs_title}
                </div>
                <div className="text-gray-600">
                  <Moment format="LLLL">{item.bs_details.createdAt}</Moment>
                </div>
              </div>
            </div>
            <Link href={`/bank-soal/${item.bs_details.bs_slug}/begin`}>
              <button className="text-sm md:text-lg p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
                Lihat
              </button>
            </Link>
          </div>
        </div>
      ))}
      {takenBankSoal.length === 0 && (
        <div className="flex items-center justify-center">
          <h3 className="text-xl font-light">Tidak ada data ditemukan</h3>
        </div>
      )}
    </>
  );
};
