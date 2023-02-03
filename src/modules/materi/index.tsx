import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Basepage } from "../basePage";
import ReactMarkdown from "react-markdown";

const FetchMateri = {
  id: 1,
  course: "Biologi",
  title: "Bakteri dan Virus",
  description:
    "Bakteri dan virus adalah mikroorganisme yang umum menyebabkan penyakit infeksi pada manusia. Terkadang, kedua infeksi bisa menunjukkan tanda-tanda yang sama. Namun, bakteri dan virus memiliki perbedaan secara genetik sehingga penyakit yang ditimbulkan tidak bisa diobati dengan cara yang sama.",
  materi: [
    {
      id: 1,
      title: "Perbedaan Bakteri dan Virus",
      content:
        "Meskipun sama-sama merupakan mikroorganisme, virus dan bakteri memiliki ukuran, komponen genetik, dan cara hidup yang berbeda. Virus berukuran lebih kecil dari bakteri dan bersifat seperti parasit. Artinya, virus hanya mampu bertahan hidup jika ia “menumpang” di dalam tubuh makhluk hidup lain. Sementara itu, bakteri memiliki kemampuan adaptasi yang lebih tinggi di lingkungan luar.",
    },
    {
      id: 2,
      title: "Apa itu Bakteri",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis enim maxime cupiditate sunt repudiandae voluptate veniam laboriosam, porro ullam saepe praesentium sit odio libero, maiores eos beatae iste minima?",
    },
    {
      id: 3,
      title: "Apa itu Virus",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facilis enim maxime cupiditate sunt repudiandae voluptate veniam laboriosam, porro ullam saepe praesentium sit odio libero, maiores eos beatae iste minima?",
    },
    {
      id: 4,
      title: "Uvuvewewe",
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

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Basepage>
        <div className="py-44 container min-h-screen text-white">
          {currentPage === 0 ? (
            <>
              <div className="text-4xl font-bold mb-10">
                {FetchMateri.title}
              </div>
              <div className="text-lg">
                <ReactMarkdown>{FetchMateri.description}</ReactMarkdown>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between">
                <div className="text-4xl font-bold mb-10">
                  {FetchMateri.materi[currentPage - 1].title}
                </div>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="cursor-pointer">
                    <div className="flex flex-col w-8 h-8 gap-1">
                      <div className="w-full h-1 rounded-xl bg-white"></div>
                      <div className="w-full h-1 rounded-xl bg-white"></div>
                      <div className="w-full h-1 rounded-xl bg-white"></div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
                  >
                    {FetchMateri.materi.map((item, idx) => (
                      <li key={idx} onClick={() => setCurrentPage(item.id)}>
                        <a>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <button
                disabled={currentPage === 1 ? true : false}
                onClick={handlePrev}
                className={`btn bg-background text-bold font-bold rounded-xl ${
                  currentPage === 1 ? "text-gray-600 bg-gray-300" : ""
                }`}
              >
                {currentPage === 0 ? "Download" : "Previous"}
              </button>
              <div>
                <progress
                  className="progress progress-secondary w-56 mr-10"
                  value={(currentPage / FetchMateri.materi.length) * 100}
                  max="100"
                ></progress>
                <button
                  disabled={
                    currentPage === FetchMateri.materi.length ? true : false
                  }
                  className={`btn bg-background text-bold font-bold rounded-xl ${
                    currentPage === FetchMateri.materi.length
                      ? "text-gray-600 bg-gray-300"
                      : ""
                  }`}
                  onClick={handleNext}
                >
                  {currentPage === 0 ? "Mulai" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Basepage>
    </>
  );
};
