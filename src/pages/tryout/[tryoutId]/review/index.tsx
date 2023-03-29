import { GET_IS_SUBMITED_TRYOUT, GET_TRYOUTS } from "@/lib/urlApi";
import { ReviewTryout } from "@/modules/tryout/review";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = nookies.get(context);
  const { tryoutId } = context.query;

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

  if (valid.detail === "You have submitted this tryout!") {
    const res = await fetch(GET_TRYOUTS + tryoutId + "/pembahasan", {
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
      props: { tryoutId, data },
    };
  }

  return {
    notFound: true,
  };
};

export default ReviewTryout;
