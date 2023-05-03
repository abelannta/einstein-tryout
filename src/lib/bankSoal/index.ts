import axios from "axios";
import { parseCookies } from "nookies";
import {
  GET_BANKSOAL,
  GET_TAKEN_BANKSOAL,
  POST_TAKE_BANKSOAL,
} from "../urlApi";

const cookies = parseCookies();
const token = cookies.accessToken;

export const getTakenBankSoal = async () => {
  const res = await axios.get(GET_TAKEN_BANKSOAL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};

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

export const postSubmitBankSoal = async (bsId: string, jawaban: any) => {
  console.log(jawaban);
  const res = await axios.post(
    GET_BANKSOAL + bsId + "/submit",
    {
      user_answers: jawaban,
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
