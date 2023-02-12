export const BookType = () => {
  return (
    <div className="bg-bold text-white">
      <div className="container mx-auto py-44">
        <div className="flex flex-col items-center text-black mb-20">
          <div className="text-4xl font-bold mb-8 text-center">
            Pilihan Media yang Menarik
          </div>
          <div className="text-xl max-w-xl text-center">
            Terdapat beberapa pilihan media untuk materi yang kami sediakan.
            Diantaranya adalah materi secara fisik dan digital.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-background rounded-xl p-10 text-center">
            <div className="text-2xl font-bold mb-10">Fisik</div>
            <div className="text-xl">
              Pada bagian ini kami menyediakan pembelian materi secara fisik
              (buku dsb.) dan pembayarannya dapat melalui perantara yang telah
              disediakan
            </div>
          </div>
          <div className="bg-background rounded-xl p-10 text-center">
            <div className="text-2xl font-bold mb-10">Digital</div>
            <div className="text-xl">
              Pada bagian ini kami juga menyediakan materi berbentuk digital
              yang dapat kalian akses lengkap apabila sudah melakukan pembelian
              paket.
            </div>
          </div>
          <div className="bg-background rounded-xl p-10 text-center">
            <div className="text-2xl font-bold mb-10">
              Beragam jenis sumber belajar kami miliki
            </div>
            <div className="text-xl">
              Terdapat banyak pilihan tryout yang dapat membantu kamu belajar
              apa yang kamu inginkan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
