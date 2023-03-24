import { ScheduleTryout } from "@/modules/tryout/schedule";
import { GetServerSidePropsContext } from "next";
import { GET_TRYOUTS } from "@/lib/urlApi";
import nookies from "nookies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(GET_TRYOUTS);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { data } };
}

export default ScheduleTryout;
