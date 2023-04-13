import tryout from "@/public/assets/tryout.png";
import Image from "next/legacy/image";

export const MainTryout = () => {
  return (
    <div className="py-56 flex items-center relative container">
      <div className="bg-primary -z-10 rounded-full w-3/4 aspect-square absolute -bottom-1/6 -right-1/4"></div>
      <div className="flex items-center">
        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-2 order-2 md:order-1 md:col-span-1 flex flex-col justify-center">
            <h1 className="leading-normal text-2xl md:text-4xl font-bold">
              Siap Hadapi <span className="text-bold">Ujian</span> dengan
              <br />
              <span className="text-bold">Tryout</span> Dari Kami
            </h1>
            <ul className="list-disc list-outside pt-5 text-lg md:text-2xl marker:text-bold">
              <li>Materi yang lengkap</li>
              <li>Pembahasan oleh mentor berpengalaman</li>
              <li>Simulasi seperti UTBK</li>
            </ul>
          </div>
          <div className="col-span-2 order-1 md:order-2 md:col-span-1 flex justify-center max-w-2xl">
            <Image src={tryout} />
          </div>
        </div>
      </div>
    </div>
  );
};
