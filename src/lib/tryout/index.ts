import axios from "axios";
import {
  GET_IS_SUBMITED_TRYOUT,
  GET_TAKEN_TRYOUTS,
  GET_TRYOUTS,
  POST_TAKE_TRYOUT,
} from "../urlApi";
import { parseCookies } from "nookies";
import { JawabanStateProps } from "../props/tryout";

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

export const getTakenTryouts = async () => {
  const res = await axios.get(GET_TAKEN_TRYOUTS, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};

export const getIsSubmitedTryout = async () => {
  const res = await axios.get(GET_IS_SUBMITED_TRYOUT, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};

export const getReviewTryout = async (to_slug: string) => {
  const res = await axios.get(GET_TRYOUTS + to_slug + "/pembahasan", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

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

  return res.data;
};

export const postSubmitTryout = async (to_slug: string, jawaban: any) => {
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

  return res.data;
};

export const postStartTryout = async (to_slug: string) => {
  const res = await axios.post(
    GET_TRYOUTS + to_slug + "/start",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

export const postUpdateDraft = async (
  jawaban: JawabanStateProps[],
  to_slug: string
) => {
  console.log(jawaban);
  const res = await axios.post(
    GET_TRYOUTS + to_slug + "/ongoing",
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
