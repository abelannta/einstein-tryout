import { useState } from "react";
import { useRouter } from "next/router";
import { Basepage } from "../basePage";

const FetchMateri = {
  id: 1,
  course: "Biologi",
  title: "Bakteri dan Virus",
  description:
    "Bakteri dan virus adalah mikroorganisme yang umum menyebabkan penyakit infeksi pada manusia. Terkadang, kedua infeksi bisa menunjukkan tanda-tanda yang sama. Namun, bakteri dan virus memiliki perbedaan secara genetik sehingga penyakit yang ditimbulkan tidak bisa diobati dengan cara yang sama. Memangnya, apa saja perbedaan keduanya dan manakah yang lebih berbahaya antara bakteri dan virus?",
  materi: [
    {
      title: "Perbedaan Bakteri dan Virus",
      content:
        "Meskipun sama-sama merupakan mikroorganisme, virus dan bakteri memiliki ukuran, komponen genetik, dan cara hidup yang berbeda. Virus berukuran lebih kecil dari bakteri dan bersifat seperti parasit. Artinya, virus hanya mampu bertahan hidup jika ia “menumpang” di dalam tubuh makhluk hidup lain. Sementara itu, bakteri memiliki kemampuan adaptasi yang lebih tinggi di lingkungan luar.",
    },
    {
      title: "Apa itu Bakteri",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis enim maxime cupiditate sunt repudiandae voluptate veniam laboriosam, porro ullam saepe praesentium sit odio libero, maiores eos beatae iste minima?",
    },
  ],
};

export const Materi = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Basepage>
        <div className="py-44 container min-h-screen">
          {currentPage === 0 ? (
            <>
              <div className="text-4xl font-bold mb-10">
                {FetchMateri.title}
              </div>
              <div className="text-lg">{FetchMateri.description}</div>
            </>
          ) : (
            <>
              <div className="text-4xl font-bold mb-10">
                {FetchMateri.materi[currentPage - 1].title}
              </div>
              <div className="text-lg">
                {FetchMateri.materi[currentPage - 1].content}
              </div>
            </>
          )}
        </div>
        <div className="container">
          <div className="fixed bottom-10 w-full container">
            <div className="flex justify-between">
              <button className="btn bg-background text-bold">Download</button>
              <button
                className="btn bg-background text-bold"
                onClick={handleNext}
              >
                Mulai
              </button>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
