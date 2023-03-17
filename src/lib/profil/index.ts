import axios from "axios";
import { GET_HISTORY } from "../urlApi";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.accessToken;

export const getHistory = async () => {
  const res = await axios.get(GET_HISTORY, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
