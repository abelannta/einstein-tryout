import { Basepage } from "@/modules/basePage";
import { useState } from "react";
import { BsCalendarEvent, BsClockHistory } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const prelude = {
  idTryout: 1,
  materi: [
    {
      idType: 1,
      type: "Tes Potensi Skolastik",
      mapel: [
        {
          idMapel: 1,
          mapel: "Kemampuan Penalaran Umum",
          total: 20,
        },
        {
          idMapel: 2,
          mapel: "Pengetahuan dan Pemahaman Umum",
          total: 20,
        },
        {
          idMapel: 3,
          mapel: "Kemampuan Memahami Bacaan dan Menulis",
          total: 15,
        },
        {
          idMapel: 4,
          mapel: "Pengetahuan Kuantitatif",
          total: 15,
        },
      ],
    },
    {
      idType: 2,
      type: "Tes Literasi",
      mapel: [
        {
          idMapel: 5,
          mapel: "Literasi dalam Bahasa Indonesia",
          total: 15,
        },
        {
          idMapel: 6,
          mapel: "Literasi dalam Bahasa Inggris",
          total: 15,
        },
        {
          idMapel: 7,
          mapel: "Penalaran Matematika",
          total: 20,
        },
      ],
    },
  ],
};

export const PreludeTryout = () => {
  const [content, setContent] = useState(prelude);

  return (
    <>
      <Basepage>
        <div className="bg-white">
          <div className="py-44 container max-w-5xl">
            <div className="bg-primary rounded-xl p-8 divide-y divide-slate-400">
              <div className="flex flex-col items-center justify-center gap-1 pb-5">
                <h2 className="text-xl font-bold text-bold mb-2">
                  Detail Tryout
                </h2>
                <h4 className="text-md font-light">
                  Tryout 1 NineIntelligence
                </h4>
                <h4 className="text-md font-light">
                  1 Januari 1999, 00.01 WIB s/d 1 Januari 1999, 23.59 WIB
                </h4>
              </div>
              <div className="flex justify-between items-center py-5">
                <div className="flex items-center gap-3">
                  <BsCalendarEvent className="w-5 h-5 text-bold" />
                  <h3 className="text-lg font-light">TO dimulai</h3>
                </div>
                <h3 className="text-lg font-light text-bold">
                  0 hari, 0 jam, 0 menit
                </h3>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-400 pt-5">
                <div className="flex justify-between items-center col-span-1 pr-5">
                  <div className="flex items-center gap-3">
                    <BsClockHistory className="w-5 h-5 text-bold" />
                    <h3 className="text-lg font-light">TO dimulai</h3>
                  </div>
                  <h3 className="text-lg font-light text-bold">60 menit</h3>
                </div>
                <div className="flex justify-between items-center col-span-1 pl-5">
                  <div className="flex items-center gap-3">
                    <HiOutlineClipboardDocumentList className="w-6 h-6 text-bold" />
                    <h3 className="text-lg font-light">TO dimulai</h3>
                  </div>
                  <h3 className="text-lg font-light text-bold">20 Soal</h3>
                </div>
              </div>
            </div>
            <div className="border border-black rounded-xl p-8 text-primary my-10">
              <div className="flex flex-col gap-5 w-full">
                {content.materi.map((item, i) => (
                  <div className="w-full" key={i}>
                    <div className="flex items-center">
                      <div className="border-2 rounded-full border-bold w-3 h-3"></div>
                      <h3 className="text-lg font-semibold ml-2">
                        {item.type}
                      </h3>
                    </div>
                    <ul className="list-disc list-outside marker:text-bold divide-y divide-slate-400 ml-10">
                      {item.mapel.map((item, i) => (
                        <div
                          className="flex justify-between items-center"
                          key={i}
                        >
                          <li className="text-md font-light py-2">
                            {item.mapel}
                          </li>
                          <div className="flex border-l border-slate-400 pl-5">
                            <HiOutlineClipboardDocumentList className="w-6 h-6 mr-3" />
                            <h4 className="text-md font-light">
                              {item.total} Soal
                            </h4>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-primary w-full">Mulai</button>
          </div>
        </div>
      </Basepage>
    </>
  );
};
