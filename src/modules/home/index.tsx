import homeImg from "@/public/assets/home1.png";
import homeCard1 from "@/public/assets/home3.png";
import homeCard2 from "@/public/assets/home2.png";
import Image from "next/image";
import { BasePage } from "../basePage";

const Home = () => {
  return (
    <>
      <div className="bg-[#003566] rounded-full w-3/4 aspect-square absolute -z-10 -top-1/4 -left-1/4"></div>
      <BasePage>
        <div className="py-44 pt-56 grid grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-bold">
              Tempat <span className="text-bold">Belajar</span> dan{" "}
              <span className="text-bold">Berlatih</span> Untuk Masuk Kampus
              Impianmu
            </div>
            <div className="text-xl font-medium py-3">
              Jika mimpimu adalah memasuki uninversitas top di Indonesia,
              belajar disini merupakan suatu kewajiban. Ayo belajar bersama
              disini!
            </div>
            <button className="btn btn-black rounded-md text-bold w-[178px] py-2 mt-5">
              Get Started
            </button>
          </div>
          <div className="">
            <Image src={homeImg} alt="Thesis" />
          </div>
        </div>
        <div className="py-44 text-black">
          <div className="bg-bold rounded-xl w-full p-20">
            <div className="grid grid-cols-2 gap-16">
              <div>
                <div className="grid grid-cols-2 pb-10 gap-10">
                  <div>
                    <Image src={homeCard1} alt="..." />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-bold mb-5">Beragam</div>
                    <div className="text-xl">
                      Kalian akan menemukan soal yang beragam. Tidak perlu takut
                      untuk belajar banyak soal ya!
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 pt-10 gap-10">
                  <div className="flex flex-col justify-center">
                    <div className="text-2xl font-bold mb-5">
                      Tingkat kesulitan yang sesuai
                    </div>
                    <div className="text-xl">
                      Soal yang disediakan sudah mengikuti tingkat kesulitan
                      ujian masuk universitas yang terbaru!
                    </div>
                  </div>
                  <div>
                    <Image src={homeCard2} alt="..." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-3xl font-bold">
                  Bank soal yang sudah mengikuti perkembangan zaman
                </div>
                <div className="text-xl py-3">
                  Jika kalian tertarik dengan bank soal kami, maka
                  berlanggananlah dan mulai mengerjakan soal untuk kampus
                  impianmu
                </div>
                <button className="btn btn-black rounded-md text-bold w-[178px] py-2 mt-5">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Home;
