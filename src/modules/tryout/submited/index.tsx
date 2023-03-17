import { Basepage } from "@/modules/basePage";
import Link from "next/link";

export const SubmitedTryout = () => {
  return (
    <>
      <Basepage>
        <div className="bg-white min-h-screen">
          <div className="py-44 container max-w-4xl">
            <div className="flex flex-col items-center justify-center bg-primary rounded-xl p-8">
              <h2 className="text-xl font-bold text-bold">
                Terima kasih telah mengikuti Tryout!
              </h2>
              <p className="text-base font-light text-center py-3">
                Jawaban anda telah berhasil disubmit ke dalam sistem. Hasil
                tryout dapat dilihat pada halaman profil maksimal 2 hari setelah
                melakukan tryout
              </p>
              <Link href="/profil">
                <button className="btn btn-secondary text-black mt-5">
                  Kembali ke Profil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
