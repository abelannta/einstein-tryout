import { Basepage } from "@/modules/basePage";
import Link from "next/link";
import { BsCalendarEvent, BsClockHistory } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { typeList, mapelList } from "@/lib/tryout/type";
import moment from "moment";
import dynamic from "next/dynamic";

const PreludeCountDown = dynamic(
  () => import("@/modules/tryout/prelude/components/countdown"),
  {
    ssr: false,
  }
);

export const PreludeTryout = (props: any) => {
  const { tryoutId, currentTime, detailData, soalData } = props;

  const countMapel = Object.entries(
    soalData.reduce((item: any, currentValue: any) => {
      item[currentValue.mapel] = item[currentValue.mapel]
        ? item[currentValue.mapel] + 1
        : 1;

      return item;
    }, {})
  ).map(([mapel, count]) => ({ mapel: parseInt(mapel), count }));

  const getCount = (mapel: number) => {
    const count: any = countMapel
      .filter((item) => item.mapel === mapel)
      .map((item, i) => item.count);

    if (count > 0) {
      return count;
    }

    return 0;
  };

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
                <h4 className="text-md font-light">{detailData?.to_title}</h4>
                <h4 className="text-md font-light">
                  {`${moment(detailData?.startsAt).format(
                    "DD MMMM YYYY, hh:mm"
                  )} WIB s/d ${moment(detailData?.endsAt).format(
                    "DD MMMM YYYY, hh:mm"
                  )} WIB`}
                </h4>
              </div>
              <div className="flex justify-between items-center py-5">
                <div className="flex items-center gap-3">
                  <BsCalendarEvent className="w-5 h-5 text-bold" />
                  <h3 className="text-lg font-light">TO dimulai</h3>
                </div>
                <h3 className="text-lg font-light text-bold">
                  <PreludeCountDown startAt={detailData?.startsAt} />
                </h3>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-400 pt-5">
                <div className="flex justify-between items-center col-span-1 pr-5">
                  <div className="flex items-center gap-3">
                    <BsClockHistory className="w-5 h-5 text-bold" />
                    <h3 className="text-lg font-light">Durasi Pengerjaan</h3>
                  </div>
                  <h3 className="text-lg font-light text-bold">60 menit</h3>
                </div>
                <div className="flex justify-between items-center col-span-1 pl-5">
                  <div className="flex items-center gap-3">
                    <HiOutlineClipboardDocumentList className="w-6 h-6 text-bold" />
                    <h3 className="text-lg font-light">Jumlah Soal</h3>
                  </div>
                  <h3 className="text-lg font-light text-bold">{`${soalData?.length} Soal`}</h3>
                </div>
              </div>
            </div>
            <div className="border border-black rounded-xl p-8 text-primary my-10">
              <div className="flex flex-col gap-5 w-full">
                {typeList.map((item, i) => (
                  <div className="w-full" key={i}>
                    <div className="flex items-center">
                      <div className="border-2 rounded-full border-bold w-3 h-3"></div>
                      <h3 className="text-lg font-semibold ml-2">
                        {item.name}
                      </h3>
                    </div>
                    <ul className="list-disc list-outside marker:text-bold divide-y divide-slate-400 ml-10">
                      {mapelList
                        .filter((mapel) => mapel.type === item.id)
                        .map((item, i) => (
                          <div
                            className="flex justify-between items-center"
                            key={i}
                          >
                            <li className="text-md font-light py-2">
                              {item.name}
                            </li>
                            <div className="flex justify-between pl-5 w-28">
                              <HiOutlineClipboardDocumentList className="w-6 h-6 mr-3" />
                              <h4 className="text-md font-light">{`${getCount(
                                item.id
                              )} Soal`}</h4>
                            </div>
                          </div>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn btn-primary w-full"
              disabled={currentTime > detailData?.startsAt ? false : true}
            >
              <Link
                href={`/tryout/${tryoutId}/begin`}
                className="w-full h-full flex items-center justify-center"
              >
                Mulai
              </Link>
            </button>
          </div>
        </div>
      </Basepage>
    </>
  );
};
