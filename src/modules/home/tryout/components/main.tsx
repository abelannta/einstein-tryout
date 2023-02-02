import tryout from "@/public/assets/tryout.png";
import Image from "next/legacy/image";

export const MainTryout = () => {
  return (
    <div className="min-h-screen relative flex items-center overflow-hidden">
      <div className="bg-[#003566] -z-10 rounded-full w-3/4 aspect-square absolute -bottom-1/4 -right-1/4"></div>
      <div className="container">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h1 className="leading-normal text-4xl font-bold">
              Siap Hadapi <span className="text-bold">Ujian</span> dengan
              <br />
              <span className="text-bold">Tryout</span> Dari Kami
            </h1>
            <ul className="list-disc list-outside pt-5 text-2xl marker:text-bold">
              <li>Materi yang lengkap</li>
              <li>Pembahasan oleh mentor berpengalaman</li>
              <li>Simulasi seperti UTBK</li>
            </ul>
          </div>
          <div className="flex justify-center max-w-2xl">
            <Image src={tryout} />
          </div>
        </div>
      </div>
    </div>
  );
};
