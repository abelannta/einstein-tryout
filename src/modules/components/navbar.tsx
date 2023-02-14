import Link from "next/link";
import Image from "next/legacy/image";
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import fotoProfil from "@/public/assets/pepe.webp";

export const Navbar = () => {
  const cookies = parseCookies();
  const router = useRouter();

  const handleLogout = () => {
    destroyCookie(null, "accessToken");
    router.push("/auth/login");
  };

  return (
    <div className="navbar fixed bg-base-100 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/bank-soal">Bank Soal</Link>
            </li>
            <li>
              <Link href="/tryout">Tryout</Link>
            </li>
            <li>
              <Link href="#paket">Paket</Link>
            </li>
            <li>
              <Link href="/materi">Materi</Link>
            </li>
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl">
          Nine
          <span className="text-bold">Intelligence</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/bank-soal">Bank Soal</Link>
          </li>
          <li>
            <Link href="/tryout">Tryout</Link>
          </li>
          <li>
            <Link href="/paket">Paket</Link>
          </li>
          <li>
            <Link href="/materi">Materi</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* {cookies.accessToken ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="flex items-center cursor-pointer btn btn-ghost capitalize"
              >
                <p className="text-base text-black">Abel Ananta</p>
                <div className="rounded-full w-10 h-10 ml-3 overflow-hidden">
                  <Image src={fotoProfil} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-bold text-lg py-3 px-2">Ruang Siswa</li>
                <li>
                  <Link href="/profil">Profil</Link>
                </li>
                <li>
                  <Link href="/profil?tabs=kegiatan">Kegiatanku</Link>
                </li>
                <li>
                  <Link href="/profil?tabs=riwayat">Riwayat</Link>
                </li>
                <li>
                  <Link href="/profil?tabs=progres">Progres</Link>
                </li>
                <div className="btn btn-ghost" onClick={handleLogout}>
                  <a>Logout</a>
                </div>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link href="/auth/register">
              <button className="hidden md:flex btn rounded-xl bg-transparent text-black border-0 hover:text-bold">
                Sign Up
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="btn rounded-xl bg-background text-bold">
                Sign in
              </button>
            </Link>
          </>
        )} */}
      </div>
    </div>
  );
};
