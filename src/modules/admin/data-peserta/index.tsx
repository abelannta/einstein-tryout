import AdminBasePage from "@/modules/basePage/admin";
import { SIDEBAR_LINK } from "@/modules/components/menuAdmin";
import { useState } from "react";
import TablePelapor from "./components/tablePeserta";

const data = [
  {
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    langganan: "Pro",
  },
  {
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    langganan: "Pro",
  },
  {
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    langganan: "Pro",
  },
  {
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    langganan: "Pro",
  },
  {
    fullname: "Abel Ananta",
    email: "abelananta@gmail.com",
    createdAt: "19 Januari 2023",
    langganan: "Pro",
  },
];

export const DataPersertaAdmin = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AdminBasePage menu={SIDEBAR_LINK}>
      <div className="bg-white shadow-lg rounded-lg divide-y overflow-hidden">
        <TablePelapor data={data} loading={loading} />
      </div>
    </AdminBasePage>
  );
};
