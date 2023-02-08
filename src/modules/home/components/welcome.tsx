import homeImg from "@/public/assets/home1.png";
import Image from "next/legacy/image";

export const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center relative container">
      <div className="bg-primary -z-10 rounded-full w-3/4 aspect-square absolute -bottom-1/6 -left-1/4"></div>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col justify-center text-white">
          <div className="text-4xl font-bold">
            Tempat <span className="text-bold">Belajar</span> dan{" "}
            <span className="text-bold">Berlatih</span> Untuk Masuk Kampus
            Impianmu
          </div>
          <div className="text-xl font-medium py-3">
            Jika mimpimu adalah memasuki uninversitas top di Indonesia, belajar
            disini merupakan suatu kewajiban. Ayo belajar bersama disini!
          </div>
          <button className="btn bg-background rounded-md text-bold w-[178px] py-2 mt-5">
            Get Started
          </button>
        </div>
        <div className="">
          <Image src={homeImg} alt="Thesis" />
        </div>
      </div>
    </div>
  );
};
