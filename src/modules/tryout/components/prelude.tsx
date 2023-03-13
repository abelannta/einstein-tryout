import { Basepage } from "@/modules/basePage";
import { BsCalendarEvent, BsClockHistory } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export const PreludeTryout = () => {
  return (
    <>
      <Basepage>
        <div className="bg-white">
          <div className="py-44 container max-w-5xl">
            <div className="bg-primary rounded-xl p-8 divide-y divide-slate-400 mb-10">
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
                  <BsCalendarEvent className="w-5 h-5" />
                  <h3 className="text-lg font-light">TO dimulai</h3>
                </div>
                <h3 className="text-lg font-light text-bold">
                  0 hari, 0 jam, 0 menit
                </h3>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-400 pt-5">
                <div className="flex justify-between items-center col-span-1 pr-5">
                  <div className="flex items-center gap-3">
                    <BsClockHistory className="w-5 h-5" />
                    <h3 className="text-lg font-light">TO dimulai</h3>
                  </div>
                  <h3 className="text-lg font-light text-bold">60 menit</h3>
                </div>
                <div className="flex justify-between items-center col-span-1 pl-5">
                  <div className="flex items-center gap-3">
                    <HiOutlineClipboardDocumentList className="w-6 h-6" />
                    <h3 className="text-lg font-light">TO dimulai</h3>
                  </div>
                  <h3 className="text-lg font-light text-bold">20 soal</h3>
                </div>
              </div>
            </div>
            <div className="border border-black rounded-xl p-8 text-primary">
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="border-2 rounded-full border-bold w-5 h-5"></div>
                    <h3 className="text-lg font-semibold ml-2">
                      Tes Potensi Skolastik
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-400">
                    <div className="flex items-center ml-5 relative">
                      <div className="before:block before:absolute before:-left-4 before:my-auto before:rounded-full before:bg-bold before:w-3 before:h-3"></div>
                      <h4 className="text-md font-light py-1 ml-2">
                        Kemampuan Penalaran Umum
                      </h4>
                    </div>
                    <div className="flex items-center ml-5 relative">
                      <div className="before:block before:absolute before:-left-4 before:my-auto before:rounded-full before:bg-bold before:w-3 before:h-3"></div>
                      <h4 className="text-md font-light py-1 ml-2">
                        Kemampuan Penalaran Umum
                      </h4>
                    </div>
                    <div className="flex items-center ml-5 relative">
                      <div className="before:block before:absolute before:-left-4 before:my-auto before:rounded-full before:bg-bold before:w-3 before:h-3"></div>
                      <h4 className="text-md font-light py-1 ml-2">
                        Kemampuan Penalaran Umum
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
