import { GET_BANKSOAL, GET_IS_SUBMITED_BANKSOAL } from "@/lib/urlApi";
import { BankSoalReview } from "@/modules/bankSoal/review";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = nookies.get(context);
  const { bsId } = context.query;

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  const check = await fetch(GET_IS_SUBMITED_BANKSOAL + bsId, {
    headers: {
      Authorization: `Bearer ${cookies.accessToken}`,
    },
  });
  const valid = await check.json();

  if (valid.detail === "You have submitted this bank soal!") {
    const res = await fetch(GET_BANKSOAL + bsId + "/pembahasan", {
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    });
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { bsId, data },
    };
  }

  return {
    notFound: true,
  };
};

export default BankSoalReview;
