import { MdInsertChart } from "react-icons/md";
import { HiDocumentReport, HiDocumentSearch } from "react-icons/hi";

export const SIDEBAR_LINK = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <MdInsertChart className="h-5 w-5" />,
    hasChild: false,
    childOpen: false,
  },
  {
    title: "Data Peserta",
    url: "/admin/data-peserta",
    icon: <HiDocumentSearch className="h-5 w-5" />,
    hasChild: false,
    childOpen: false,
  },
  {
    title: "Kelola Akun",
    url: "/adipura/kbppl-adipura/kelola-akun",
    icon: <HiDocumentReport className="h-5 w-5" />,
    hasChild: false,
    childOpen: false,
  },
];
