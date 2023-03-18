import axios from "axios";
import { GET_PROFILE, POST_AUTH_LOGIN, POST_AUTH_REGISTER } from "./urlApi";

export const getToken = async (username: string, password: string) => {
  const res = await axios.post(
    POST_AUTH_LOGIN,
    {
      username: username,
      password: password,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const getProfile = async (token: string) => {
  const res = await axios.get(GET_PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const postRegisterUser = async (
  name: string,
  email: string,
  password: string,
  phone: string
) => {
  const res = await axios.post(
    POST_AUTH_REGISTER,
    {
      user_name: name,
      user_email: email,
      password: password,
      phone: phone,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
