import axios from "axios";
import { POST_AUTH_REGISTER } from "./urlApi";

export const postRegister = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post(
    POST_AUTH_REGISTER,
    {
      user_name: name,
      user_email: email,
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
