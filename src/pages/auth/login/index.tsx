import LoginPage from "@/modules/auth/login";
import nookies from "nookies";

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);

  if (!cookies.accessToken) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/",
    },
  };
};

export default LoginPage;
