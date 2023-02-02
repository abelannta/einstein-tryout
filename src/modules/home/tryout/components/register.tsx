import RegisterTryout from "@/public/assets/registerTO.png";
import Image from "next/legacy/image";

export const RegisterTryoutHome = () => {
  return (
    <div className="py-44 relative container">
      <div className="bg-[#003566] -z-10 rounded-full w-3/4 aspect-square absolute -top-1/4 -left-1/4"></div>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-5 justify-center max-w-lg">
          <h1 className="leading-snug text-4xl font-bold">
            Ayo <span className="text-bold">Daftarkan</span> Dirimu Sekarang
            Juga
          </h1>
          <p className="text-lg">
            Daftarkan dirimu di tryout yang kami sediakan. Kamu bebas memilih
            tryout sesuai dengan tanggal yang kamu inginkan.
          </p>
          <button className="btn p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
            Daftar
          </button>
        </div>
        <div className="flex justify-center max-w-2xl">
          <Image src={RegisterTryout} />
        </div>
      </div>
    </div>
  );
};
