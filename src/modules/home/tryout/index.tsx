import { Basepage } from "@/modules/basePage";

export const TryoutHome = () => {
  return (
    <>
      <div className="bg-[#003566] rounded-full w-1/2 aspect-square absolute -z-10 -top-0 right-10"></div>
      <Basepage>
        <div className="h-screen container flex items-center gap-20 text-white">
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-bold leading-normal">
              Siap Hadapi <span className="text-bold">Ujian</span> dengan
              <br />
              <span className="text-bold">Tryout</span> Dari Kami
            </div>
            <ul className="list-disc list-outside pt-5 text-2xl marker:text-bold">
              <li>Materi yang lengkap</li>
              <li>Pembahasan oleh mentor berpengalaman</li>
              <li>Simulasi seperti UTBK</li>
            </ul>
          </div>
        </div>
      </Basepage>
    </>
  );
};
