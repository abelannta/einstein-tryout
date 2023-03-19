import axios from "axios";
import { GET_HISTORY, PUT_PROFILE } from "../urlApi";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.accessToken;

export const getHistory = async () => {
  const res = await axios.get(GET_HISTORY, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

interface putProfilProps {
  user_name: string;
  user_email: string;
  password: string;
  phone: string;
  address: string;
  pp_link: string;
  gender: string;
}

export const putProfil = async (data: putProfilProps) => {
  const res = await axios.post(PUT_PROFILE, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};
