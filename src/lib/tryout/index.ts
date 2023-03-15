import axios from "axios";
import { GET_TRYOUTS, POST_TAKE_TRYOUT } from "../urlApi";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const token = cookies.accessToken;

// GET

export const getTryouts = async () => {
  const res = await axios.get(GET_TRYOUTS);

  return res.data;
};

export const getSoalTryout = async (to_slug: string) => {
  const res = await axios.get(GET_TRYOUTS + to_slug + "/soal");

  return res.data;
};

// POST

export const postTakeTryout = async (to_slug: string, tipe: number) => {
  const res = await axios.post(
    POST_TAKE_TRYOUT + "/" + to_slug,
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

  return res;
};

export const postSubmitTryout = async (to_slug: string, jawaban: any) => {
  console.log({
    user_answers: jawaban,
  });
  const res = await axios.post(
    GET_TRYOUTS + to_slug + "/submit",
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

  return res;
};
