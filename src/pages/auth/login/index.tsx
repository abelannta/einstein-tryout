import LoginPage from "@/modules/auth/login";

export const getServerSideProps = async (ctx: any) => {
  const text = "Hai";

  return {
    props: {
      text: text,
    },
  };
};

export default LoginPage;
