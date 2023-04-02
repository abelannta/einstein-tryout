import axios from "axios";
import { parseCookies } from "nookies";
import { POST_TAKE_BANKSOAL } from "../urlApi";

const cookies = parseCookies();
const token = cookies.accessToken;

export const postTakeBankSoal = async (bs_slug: string, tipe: number) => {
  const res = await axios.post(
    POST_TAKE_BANKSOAL + "/" + bs_slug,
    {
      type: tipe,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
