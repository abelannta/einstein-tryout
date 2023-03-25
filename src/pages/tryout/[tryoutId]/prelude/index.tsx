import { PreludeTryout } from "@/modules/tryout/prelude/prelude";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { tryoutId } = ctx.query;
  const cookies = nookies.get(ctx);
  const currentTime = new Date();

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  return {
    props: { tryoutId, currentTime },
  };
};

export default PreludeTryout;
