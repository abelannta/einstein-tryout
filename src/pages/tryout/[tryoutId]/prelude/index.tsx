import { GET_TRYOUTS } from "@/lib/urlApi";
import { PreludeTryout } from "@/modules/tryout/prelude/prelude";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { tryoutId } = ctx.query;
  const cookies = nookies.get(ctx);
  const date = new Date();
  const currentTime = date.toISOString();

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  const [detailRes, soalRes] = await Promise.all([
    fetch(GET_TRYOUTS + tryoutId),
    fetch(GET_TRYOUTS + tryoutId + "/soal"),
  ]);
  const [detailData, soalData] = await Promise.all([
    detailRes.json(),
    soalRes.json(),
  ]);

  return {
    props: { tryoutId, currentTime, detailData, soalData },
  };
};

export default PreludeTryout;
