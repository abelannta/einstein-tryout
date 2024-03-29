import Link from "next/link";

export const Check = () => {
  return (
    <div className="bg-primary py-10 md:py-20 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center">
        <div className="font-bold text-2xl md:text-4xl">
          Kunjungi Halaman <span className="text-bold">Tryout</span> Kami
        </div>
        <Link href="/tryout">
          <button className="btn bg-background rounded-md text-bold w-[178px] py-2 mt-5">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};
