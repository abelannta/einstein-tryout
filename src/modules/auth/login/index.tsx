import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import login from "@/public/assets/login.png";
import Link from "next/link";
import toast from "react-hot-toast";
import { setCookie } from "nookies";
import { getProfile, getToken } from "@/lib/auth";

const LoginPage = (props: any) => {
  const { text } = props;
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const HandleSubmit = (e: any, username: string, password: string) => {
    e.preventDefault();
    const loginPromise = getToken(username, password)
      .then((res) => {
        setCookie(null, "accessToken", res.token, {
          maxAge: 3600,
          path: "/",
          secure: true,
        });
        const setUserProfile = async () => {
          await getProfile(res.token)
            .then((res) => {
              setCookie(null, "userData", JSON.stringify(res), {
                maxAge: 3600,
                path: "/",
                secure: true,
              });
              router.replace("/profil");
            })
            .catch((err) => console.error(err));
        };
        setUserProfile();
      })
      .catch((err) => {
        throw err;
      });
    toast.promise(loginPromise, {
      loading: "Loading...",
      success: "Login berhasil!",
      error: "Email atau Kata Sandi anda salah!",
    });
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-fit py-20 md:h-screen md:py-0">
          <div className="bg-white md:w-4/6 rounded-xl h-fit text-black">
            <div className="grid grid-cols-3 gap-4 shadow-lg">
              <div className="hidden md:grid md:col-span-1 bg-primary shadow-xl text-center rounded-xl p-10 py-16 text-white items-center flex-col justify-center">
                <h1 className="font-bold text-2xl mb-5 text-white">
                  Nine
                  <span className="text-bold">Intelligence</span>
                </h1>
                <Image src={login} alt="Books" />
                <p className="text-white mt-10">
                  Aplikasi pintar untuk peminat tryout soal-soal ujian masuk
                  perguruan tinggi populer di Indonesia dengan fitur yang
                  aplikatif dan adaptif.
                </p>
              </div>
              <div className="col-span-3 md:col-span-2">
                <div className="p-5 py-10 md:p-10 md:py-16">
                  <h1 className="font-bold text-3xl text-primary mb-10">
                    Login
                  </h1>
                  <form
                    onSubmit={(e) =>
                      HandleSubmit(e, loginData.username, loginData.password)
                    }
                    className="text-primary"
                  >
                    <div className="flex flex-col">
                      <label className="py-2 font-semibold text-base">
                        Username
                      </label>
                      <input
                        type="text"
                        id="email"
                        onChange={(e) =>
                          setLoginData((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }))
                        }
                        placeholder="Email or Phone Number"
                        className="input input-bordered input-primary w-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="py-2 font-semibold text-base">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        onChange={(e) =>
                          setLoginData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        placeholder="Password"
                        className="input input-bordered input-primary w-full"
                      />
                    </div>
                    <div className="form-control mt-4 flex flex-row justify-between">
                      <label className="cursor-pointer flex">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-success checkbox-primary checkbox-sm mr-2"
                        />
                        <span className="label-text">Remember me</span>
                      </label>
                      <span className="label-text link">Reset Password?</span>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-md text-white w-full py-2 mt-14 mb-10"
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="text-center">
                    Don&apos;t have an account yet? Make a new account{" "}
                    <Link href="/auth/register" className="link">
                      here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
