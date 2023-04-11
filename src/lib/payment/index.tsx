import axios from "axios";
import { POST_PAYMENT } from "../urlApi";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.accessToken;

export const postPayment = async (data: any) => {
  const res = await axios.post(POST_PAYMENT, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
