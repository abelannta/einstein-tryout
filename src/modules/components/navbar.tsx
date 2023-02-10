import Link from "next/link";

export const Navbar = () => {
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
        <Link href="/auth/register">
          <div className="hidden md:flex btn rounded-xl bg-transparent text-black border-0 hover:text-bold">
            Sign Up
          </div>
        </Link>
        <Link href="/auth/login">
          <div className="btn rounded-xl bg-background text-bold">Sign in</div>
        </Link>
      </div>
    </div>
  );
};
