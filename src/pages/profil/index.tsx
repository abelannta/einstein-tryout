import { Profile } from "@/modules/profil";
import nookies from "nookies";

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);

  if (!cookies.accessToken) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  return {
    props: {},
  };
};

export default Profile;
