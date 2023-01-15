import React from "react";
import Image from "next/image";
import books from "@/public/assets/books.png";

const LoginPage = (props: any) => {
  const { text } = props;

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <div className="bg-sky-500">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white w-4/6 rounded-xl h-fit text-black">
            <div className="grid grid-cols-3 gap-4 shadow-lg">
              <div className="col-span-1 bg-primary shadow-xl text-center rounded-xl p-10 py-16 text-white flex items-center flex-col justify-center">
                <h1 className="font-bold text-2xl mb-5">
                  EINSTEIN SMART TRYOUT
                </h1>
                <Image src={books} alt="Books" />
                <p className="text-white mt-10">
                  Aplikasi pintar untuk peminat tryout soal-soal ujian masuk
                  perguruan tinggi populer di Indonesia dengan fitur yang
                  aplikatif dan adaptif.
                </p>
              </div>
              <div className="col-span-2">
                <div className="p-10 py-16">
                  <h1 className="font-bold text-2xl text-primary mb-24">
                    LOGIN
                  </h1>
                  <form
                    onSubmit={(e) => HandleSubmit(e)}
                    className="text-primary"
                  >
                    <div className="flex flex-col">
                      <label className="py-2 font-semibold text-base">
                        Username
                      </label>
                      <input
                        type="text"
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
                    <a className="link">here</a>
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
