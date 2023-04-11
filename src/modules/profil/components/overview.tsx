import { BsFillBarChartFill, BsFillCheckCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { StatsUser } from "./stats";
import { useEffect, useState } from "react";
import { getHistory } from "@/lib/profil";
import toast from "react-hot-toast";
import { postPayment } from "@/lib/payment";
import { parseCookies } from "nookies";
const midtransClient = require("midtrans-client");

const LineChart = dynamic(() => import("@/modules/components/lineChart"), {
  ssr: false,
});

export const OverviewProfile = () => {
  const cookies = parseCookies();
  const [riwayat, setRiwayat] = useState([]);
  const [dataChart, setDataChart] = useState<any>([]);
  const [paymentData, setPaymentData] = useState({
    order_id: 1,
    user_id: "",
    order_details: {
      item_id: 1,
      price: 500000,
      item_name: "Pro",
      quantity: 1,
    },
    customer_details: {
      first_name: "Abel",
      last_name: "Ananta",
      email: "abelananta@example.com",
      phone: "08213123123",
    },
    billing_address: {
      first_name: "Abel",
      last_name: "Ananta",
      address: "Jl Nemo",
      city: "Malang",
      postal_code: 64123,
    },
    shipping_address: {
      first_name: "Abel",
      last_name: "Ananta",
      address: "Jl Nemo",
      city: "Malang",
      postal_code: 64123,
    },
  });
  let snap = new midtransClient.Snap();

  const getListRiwayat = () => {
    const res = getHistory()
      .then((res) => {
        setRiwayat(res);
        listingChart(res);
      })
      .catch((err) => toast.error("Terjadi Kesalahan Dalam Fetch Data"));
  };

  const listingChart = (res: any) => {
    let currentData = [];

    for (let i = 0; i < res.length; i++) {
      currentData.push({
        date: res[i].to_details.startsAt,
        value: res[i].to_hasil.score,
      });
    }
    currentData.sort((a: any, b: any) => a.date - b.date);
    setDataChart(currentData);
  };

  const handlePayment = () => {
    const res = postPayment(paymentData)
      .then((res) => {
        snap.apiConfig.clientKey = "SB-Mid-client-voj-AlYKbn9OYAqx";
        console.log(snap);
        console.log(res);
        snap.pay(res.token);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (cookies.userData) {
      const userParse = JSON.parse(cookies.userData);
      setPaymentData((prev) => ({ ...prev, user_id: userParse.user_id }));
    }

    getListRiwayat();
  }, []);

  return (
    <>
      <div className="border p-10 rounded-xl">
        <h2 className="text-lg md:text-2xl font-bold pb-5">Rangkuman</h2>
        <StatsUser />
      </div>
      <div className="border p-10 rounded-xl mt-8">
        <h2 className="text-lg md:text-2xl font-bold pb-5">
          Statistik Progres
        </h2>
        {dataChart.length > 0 && <LineChart userData={dataChart} />}
      </div>
      <button className="btn mt-10" onClick={handlePayment}>
        Payment
      </button>
    </>
  );
};
