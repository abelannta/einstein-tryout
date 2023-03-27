import { Tryout } from "@/modules/tryout/begin";
import { GetServerSidePropsContext } from "next";
import { GET_IS_SUBMITED_TRYOUT, GET_TRYOUTS } from "@/lib/urlApi";
import nookies from "nookies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { tryoutId } = context.query;
  const cookies = nookies.get(context);

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  const check = await fetch(GET_IS_SUBMITED_TRYOUT + tryoutId, {
    headers: {
      Authorization: `Bearer ${cookies.accessToken}`,
    },
  });
  const valid = await check.json();

  if (valid.detail !== "You have submitted this tryout!") {
    const [detailRes, soalRes, draftRes] = await Promise.all([
      fetch(GET_TRYOUTS + tryoutId),
      fetch(GET_TRYOUTS + tryoutId + "/soal"),
      fetch(GET_TRYOUTS + tryoutId + "/start/retrieve", {
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      }),
    ]);
    const [detailData, soalData, draftData] = await Promise.all([
      detailRes.json(),
      soalRes.json(),
      draftRes.json(),
    ]);

    if (!detailData) {
      return {
        notFound: true,
      };
    }

    // Pass data to the page via props
    return { props: { tryoutId, detailData, soalData, draftData, valid } };
  } else {
    return {
      redirect: {
        destination: `/tryout/${tryoutId}/submited`,
        permanent: false,
      },
    };
  }
}

export default Tryout;
