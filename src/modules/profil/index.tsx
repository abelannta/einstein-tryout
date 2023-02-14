import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Basepage } from "../basePage";
import { BiBuildingHouse, BiMap, BiMailSend } from "react-icons/bi";
import { OverviewProfile } from "./components/overview";
import { Kegiatanku } from "./components/kegiatanku";
import { Riwayat } from "./components/riwayat";
import fotoProfil from "@/public/assets/pepe.webp";
import Image from "next/legacy/image";
import { Progres } from "./components/progres";

enum TabsStatus {
  Overview = "",
  Kegiatan = "kegiatan",
  Riwayat = "riwayat",
  Progres = "progres",
}

export const Profile = () => {
  const [tabs, setTabs] = useState<TabsStatus>(TabsStatus.Overview);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && router.query.tabs) {
      if (router.query?.tabs === TabsStatus.Kegiatan) {
        setTabs(TabsStatus.Kegiatan);
      } else if (router.query?.tabs === TabsStatus.Riwayat) {
        setTabs(TabsStatus.Riwayat);
      } else if (router.query?.tabs === TabsStatus.Overview) {
        setTabs(TabsStatus.Overview);
      } else if (router.query?.tabs === TabsStatus.Progres) {
        setTabs(TabsStatus.Progres);
      }
    } else {
      setTabs(TabsStatus.Overview);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <Basepage>
        <div className="bg-white text-black">
          <div className="py-44 container mx-auto">
            <div className="text-4xl font-bold">Profil</div>
            <div className="grid grid-cols-4 gap-20 mt-20">
              <div className="col-span-1">
                <div className="rounded-full w-full aspect-square mb-10 overflow-hidden border border-gray-300">
                  <Image src={fotoProfil} alt="Foto Profil" />
                </div>
                <div className="text-2xl font-bold">Abel Ananta</div>
                <div className="mt-7">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <BiBuildingHouse className="mr-3" />
                      <p>Universitas Negeri Malang</p>
                    </div>
                    <div className="flex items-center">
                      <BiMap className="mr-3" />
                      <p>Malang</p>
                    </div>
                    <div className="flex items-center">
                      <BiMailSend className="mr-3" />
                      <p>abelananta9@gmail.com</p>
                    </div>
                  </div>
                </div>
                <button className="bg-background rounded-xl text-bold w-full p-3 mt-7">
                  Edit profil
                </button>
              </div>
              <div className="col-span-3">
                <div className="tabs mb-10">
                  <Link
                    href="/profil"
                    onClick={() => setTabs(TabsStatus.Overview)}
                    className={`tab tab-lg tab-lifted ${
                      tabs === TabsStatus.Overview ? "tab-active" : ""
                    }`}
                  >
                    Overview
                  </Link>
                  <Link
                    href={{ query: { tabs: "kegiatan" } }}
                    className={`tab tab-lg tab-lifted ${
                      tabs === TabsStatus.Kegiatan ? "tab-active" : ""
                    }`}
                  >
                    Kegiatanku
                  </Link>
                  <Link
                    href={{ query: { tabs: "riwayat" } }}
                    className={`tab tab-lg tab-lifted ${
                      tabs === TabsStatus.Riwayat ? "tab-active" : ""
                    }`}
                  >
                    Riwayat
                  </Link>
                  <Link
                    href={{ query: { tabs: "progres" } }}
                    className={`tab tab-lg tab-lifted ${
                      tabs === TabsStatus.Progres ? "tab-active" : ""
                    }`}
                  >
                    Progres
                  </Link>
                </div>
                {tabs === TabsStatus.Overview ? (
                  <OverviewProfile />
                ) : tabs === TabsStatus.Kegiatan ? (
                  <Kegiatanku />
                ) : tabs === TabsStatus.Riwayat ? (
                  <Riwayat />
                ) : tabs === TabsStatus.Progres ? (
                  <Progres />
                ) : (
                  <OverviewProfile />
                )}
              </div>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
