import { GET_IS_SUBMITED_BANKSOAL, GET_BANKSOAL } from "@/lib/urlApi";
import { BankSoal } from "@/modules/bankSoal/begin";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { bsId } = context.query;
  const cookies = nookies.get(context);

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

  if (valid.detail !== "You have submitted this bank soal!") {
    const [detailRes, soalRes] = await Promise.all([
      fetch(GET_BANKSOAL + bsId),
      fetch(GET_BANKSOAL + bsId + "/soal"),
    ]);
    const [detailData, soalData] = await Promise.all([
      detailRes.json(),
      soalRes.json(),
    ]);

    if (!detailData) {
      return {
        notFound: true,
      };
    }

    // Pass data to the page via props
    return { props: { bsId, detailData, soalData, valid } };
  } else {
    return {
      redirect: {
        destination: `/bank-soal/${bsId}/review`,
        permanent: false,
      },
    };
  }
}

export default BankSoal;
