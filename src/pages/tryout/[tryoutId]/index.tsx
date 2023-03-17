import { GetServerSidePropsContext } from "next";
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

  // Pass data to the page via props
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
