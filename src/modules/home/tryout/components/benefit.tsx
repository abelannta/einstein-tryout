import Tryout1 from "@/public/assets/tryout1.png";
import Tryout2 from "@/public/assets/tryout2.png";
import Tryout3 from "@/public/assets/tryout3.png";
import Tryout4 from "@/public/assets/tryout4.png";
import Image from "next/legacy/image";

const TryoutLandingPageContent = [
  {
    id: 1,
    title: "Pembahasan Oleh Mentor",
    description:
      "Tryout yang kalian kerjakan akan mendapatkan pembahasan dari mentor yang berpengalaman",
    img: Tryout1,
  },
  {
    id: 2,
    title: "Support Penuh Dari Mentor",
    description:
      "Para siswa yang terdaftar disini akan dibantu oleh mentor sehingga termotivasi untuk selalu berkembang lebih jauh",
    img: Tryout2,
  },
  {
    id: 3,
    title: "Percaya Diri Lolos PTN",
    description:
      "Setelah kalian sering latihan disini, kalian tentunya akan lebih pintar dan semakin percaya diri untuk lolos ke PTN pilihanmu",
    img: Tryout3,
  },
  {
    id: 4,
    title: "Tryout Sesuai Dengan Kurikulum",
    description:
      "Tryout yang kami sediakan sudah menggunakan tryout terbaru sesuai dengan kurikulum",
    img: Tryout4,
  },
];

export const BenefitTryout = () => {
  return (
    <div className="py-44 container">
      <div className="flex flex-col items-center mb-28">
        <div className="text-4xl font-bold mb-5">
          Pilihan Jitu Hadapi Ujian Masuk Kampus
        </div>
        <div className="text-lg max-w-xl text-center">
          Tryout yang kami sediakan sudah mengikuti keluaran terbaru, jadi
          kalian tidak perlu khawatir lagi untuk belajar disini. Dijamin, kalian
          akan menjadi lebih terbiasa dengan tryout sulit!
        </div>
      </div>
      {TryoutLandingPageContent.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 mb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  items-center h-full"
        >
          <div
            className={`order-2 ${
              item.id % 2 == 0 ? `md:order-1` : `md:order-2`
            } w-full flex justify-center`}
          >
            <div className="w-4/5">
              <div className="text-3xl font-bold pb-3">{item.title}</div>
              <div className="text-lg">{item.description}</div>
            </div>
          </div>
          <div
            className={`order-1 ${
              item.id % 2 == 0 ? `md:order-2` : `md:order-1`
            } flex justify-center`}
          >
            <div className="w-4/5 flex justify-center max-w-md">
              <Image src={item.img} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
