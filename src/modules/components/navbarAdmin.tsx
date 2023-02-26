import Link from "next/link";
import { TbStack2 } from "react-icons/tb";
import UserNavbar from "./userNavbar";

const NavigationBarAdmin = () => {
  return (
    <>
      <nav className="z-50 relative bg-white px-5 py-3 w-full">
        <div className="z-50 flex flex-wrap justify-between w-full items-center">
          <Link href="/" legacyBehavior>
            <button className="hover:translate-x-1 duration-300 flex items-center space-x-2 text-primary-500 ">
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                <p className="normal-case text-xl">
                  Nine
                  <span className="text-bold">Intelligence</span>
                </p>
              </span>
            </button>
          </Link>
          <div className="flex z-50 items-center ">
            <UserNavbar />
          </div>
        </div>
      </nav>

      {/* Shadow */}
      <div className="lg:pl-64 pl-[60px]">
        <nav className="absolute top-0 z-0 bg-white h-[54px] w-full shadow-md" />
      </div>
    </>
  );
};

export default NavigationBarAdmin;
