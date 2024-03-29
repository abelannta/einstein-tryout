import Image from "next/legacy/image";
import homeCard1 from "@/public/assets/home3.png";
import homeCard2 from "@/public/assets/home2.png";
import Link from "next/link";

export const Feature = () => {
  return (
    <div className="container mx-auto py-44 text-black">
      <div className="bg-bold rounded-xl w-full px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="hidden md:block relative md:border-r-2 md:border-b-2 p-10 py-20">
                <div className="absolute hidden md:block rounded-full bg-black text-bold font-bold text-2xl w-10 h-10 top-16 -right-5">
                  <div className="flex h-full items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <Image className="" src={homeCard1} alt="..." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border-l-2 md:border-0 relative p-10 pr-0 md:p-0">
                <div className="absolute block md:hidden rounded-full bg-black text-bold font-bold text-2xl w-10 h-10 top-8 -left-5">
                  <div className="flex h-full items-center justify-center">
                    1
                  </div>
                </div>
                <div className="text-2xl font-bold mb-5">Beragam</div>
                <div className="text-xl">
                  Kalian akan menemukan soal yang beragam. Tidak perlu takut
                  untuk belajar banyak soal ya!
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative flex flex-col justify-center border-l-2 p-10 py-20 pr-0">
                <div className="absolute rounded-full bg-black text-bold font-bold text-2xl w-10 h-10 top-8 -left-5">
                  <div className="flex h-full items-center justify-center">
                    2
                  </div>
                </div>
                <div className="text-2xl font-bold mb-5">
                  Tingkat kesulitan yang sesuai
                </div>
                <div className="text-xl">
                  Soal yang disediakan sudah mengikuti tingkat kesulitan ujian
                  masuk universitas yang terbaru!
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex justify-center h-full items-center">
                  <Image src={homeCard2} alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 mt-10 md:m-0 flex flex-col justify-center">
            <div className="text-3xl font-bold">
              Bank soal yang sudah mengikuti perkembangan zaman
            </div>
            <div className="text-xl py-3">
              Jika kalian tertarik dengan bank soal kami, maka berlanggananlah
              dan mulai mengerjakan soal untuk kampus impianmu
            </div>
            <Link href="/bank-soal">
              <button className="btn bg-background rounded-md text-bold w-[178px] py-2 mt-5">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
