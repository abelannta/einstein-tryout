import Link from "next/link";
import Image from "next/legacy/image";
import { parseCookies } from "nookies";

export const Navbar = () => {
  const cookies = parseCookies();

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
        <a className="btn btn-ghost normal-case text-xl">
          Nine
          <span className="text-bold">Intelligence</span>
        </a>
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
            <Link href="#paket">Paket</Link>
          </li>

          <li>
            <Link href="/materi">Materi</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {cookies.accessToken ? (
          <>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="flex items-center cursor-pointer btn btn-ghost capitalize"
              >
                <p className="text-base text-black">Abel Ananta</p>
                <div className="rounded-full w-10 h-10 bg-gray-400 ml-3"></div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <h3 className="font-bold text-lg py-3 px-2">Ruang Siswa</h3>
                <Link legacyBehavior href="/profil">
                  <li>
                    <a>Profil</a>
                  </li>
                </Link>
                <Link legacyBehavior href="/profil?tabs=kegiatan">
                  <li>
                    <a>Kegiatanku</a>
                  </li>
                </Link>
                <Link legacyBehavior href="/profil?tabs=riwayat">
                  <li>
                    <a>Riwayat</a>
                  </li>
                </Link>
                <Link legacyBehavior href="/profil?tabs=progres">
                  <li>
                    <a>Progres</a>
                  </li>
                </Link>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link href="/auth/register">
              <div className="hidden md:flex btn rounded-xl bg-transparent text-black border-0 hover:text-bold">
                Sign Up
              </div>
            </Link>
            <Link href="/auth/login">
              <div className="btn rounded-xl bg-background text-bold">
                Sign in
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
