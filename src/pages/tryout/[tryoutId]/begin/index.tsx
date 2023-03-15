import { Tryout } from "@/modules/tryout/begin";
import { GetServerSidePropsContext } from "next";
import { GET_TRYOUTS } from "@/lib/urlApi";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { tryoutId } = context.query;

  const res = await fetch(GET_TRYOUTS + tryoutId + "/soal");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { tryoutId, data } };
}

export default Tryout;
