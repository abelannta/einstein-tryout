import { Basepage } from "@/modules/basePage";
import Link from "next/link";

const ListMateriContent = [
  {
    id: 1,
    title: "Bakteri dan Virus",
  },
  {
    id: 2,
    title: "Sel",
  },
  {
    id: 3,
    title: "Sel Reproduksi",
  },
];

export const SubMateriLandingPage = () => {
  return (
    <>
      <Basepage footer={true}>
        <div className="py-44 container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-5">Biologi</h2>
            <p className="text-lg">
              Terdapat banyak materi yang telah dikelompokkan sesuai mata Materi
              biologi disini bisa terbilang cukup lengkap. Kalian dapat membeli
              materi ini secara langsung ataupun dapat melalui media digital
              dengan cara berlangganan.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {ListMateriContent.map((item, idx) => (
              <ListMateri key={idx} title={item.title} id={item.id} />
            ))}
          </div>
        </div>
      </Basepage>
    </>
  );
};

const ListMateri = (props: { title: string; id: number }) => {
  return (
    <div className="bg-bold rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
            {props.id}
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-black">{props.title}</div>
          </div>
        </div>
        <Link href="/materi/biologi/bakteri-dan-virus">
          <button className="btn p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};
