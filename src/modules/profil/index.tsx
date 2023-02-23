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
import { EditModal } from "./components/editModal";

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
          <div className="py-24 md:py-44 container mx-auto">
            <div className="text-2xl md:text-4xl font-bold">Profil</div>
            <div className="grid grid-cols-4 gap-20 mt-10 md:mt-20">
              <div className="col-span-4 md:col-span-1">
                <div className="flex justify-center items-center">
                  <div className="rounded-full w-[200px] md:w-full aspect-square mb-10 overflow-hidden border border-gray-300">
                    <Image src={fotoProfil} alt="Foto Profil" />
                  </div>
                </div>
                <div className="text-lg md:text-2xl font-bold">Abel Ananta</div>
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
                <label
                  htmlFor="edit-modal"
                  className="btn w-full mt-10 bg-background text-bold"
                >
                  Edit Profil
                </label>
              </div>
              <div className="col-span-4 md:col-span-3">
                <div className="tabs mb-10">
                  <Link
                    href="/profil"
                    onClick={() => setTabs(TabsStatus.Overview)}
                    className={`tab tab-sm md:tab-lg tab-lifted ${
                      tabs === TabsStatus.Overview ? "tab-active" : ""
                    }`}
                  >
                    Overview
                  </Link>
                  <Link
                    href={{ query: { tabs: "kegiatan" } }}
                    className={`tab tab-sm md:tab-lg tab-lifted ${
                      tabs === TabsStatus.Kegiatan ? "tab-active" : ""
                    }`}
                  >
                    Kegiatanku
                  </Link>
                  <Link
                    href={{ query: { tabs: "riwayat" } }}
                    className={`tab tab-sm md:tab-lg tab-lifted ${
                      tabs === TabsStatus.Riwayat ? "tab-active" : ""
                    }`}
                  >
                    Riwayat
                  </Link>
                  <Link
                    href={{ query: { tabs: "progres" } }}
                    className={`tab tab-sm md:tab-lg tab-lifted ${
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
      <EditModal />
    </>
  );
};
