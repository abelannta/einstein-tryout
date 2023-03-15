import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { tryoutId } = context.query;

  // Pass data to the page via props
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
