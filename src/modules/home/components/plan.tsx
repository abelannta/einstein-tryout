export const Plan = () => {
  return (
    <div className="container mx-auto py-44 text-white">
      <div className="flex flex-col items-center text-bold mb-20">
        <div className="text-4xl font-bold mb-8 text-center">
          Paket Simple, Hasil Maksimal
        </div>
        <div className="text-xl max-w-xl text-center">
          Pilihan paket yang terbilang simple mampu membantu pelajar dalam
          memilih paket mana yang dipilih dan segera melanjutkan ke sesi
          belajar.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-primary rounded-xl p-10">
          <div className="flex flex-col justify-between items-center">
            <div className="text-2xl font-bold">Starter</div>
            <div className="text-5xl font-extrabold text-bold py-16">Free</div>
            <div className="text-xl">
              Semua gratis hanya untuk 3 Bank Soal pertama, 3 Tryout Pertama,
              dan 3 Materi Pertama
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl p-10">
          <div className="flex flex-col justify-between items-center">
            <div className="text-2xl font-bold">Basic</div>
            <div className="text-5xl font-extrabold text-bold py-16">
              Rp.500K
            </div>
            <div className="text-xl">
              Paket yang berdurasi 6 bulan dan mendapatkan semua akses.
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl p-10">
          <div className="flex flex-col justify-between items-center">
            <div className="text-2xl font-bold">Pro</div>
            <div className="text-5xl font-extrabold text-bold py-16">
              Rp.1000K
            </div>
            <div className="text-xl">
              Paket yang berdurasi 12 bulan dan mendapatkan semua akses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
