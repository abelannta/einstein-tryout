import RegisterPage from "@/modules/auth/register";
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

export default RegisterPage;
