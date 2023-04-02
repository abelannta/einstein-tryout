import { GET_BANKSOAL } from "@/lib/urlApi";
import { BankSoalRegister } from "@/modules/bankSoal";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(GET_BANKSOAL);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default BankSoalRegister;
