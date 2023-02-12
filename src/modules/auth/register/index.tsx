import React from "react";
import Image from "next/image";
import register from "@/public/assets/register.png";
import Link from "next/link";

const RegisterPage = (props: any) => {
  const { text } = props;

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");
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
                <Image src={register} alt="Books" />
                <p className="text-white mt-10">
                  Aplikasi pintar untuk peminat tryout soal-soal ujian masuk
                  perguruan tinggi populer di Indonesia dengan fitur yang
                  aplikatif dan adaptif.
                </p>
              </div>
              <div className="col-span-3 md:col-span-2">
                <div className="p-5 py-10 md:p-10 md:py-16">
                  <h1 className="font-bold text-3xl text-primary mb-10">
                    Register
                  </h1>
                  <form
                    onSubmit={(e) => HandleSubmit(e)}
                    className="text-primary"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-5">
                      <div className="flex flex-col">
                        <label className="py-2 font-semibold text-base">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          className="input input-bordered input-primary w-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="py-2 font-semibold text-base">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="input input-bordered input-primary w-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="py-2 font-semibold text-base">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          className="input input-bordered input-primary w-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="py-2 font-semibold text-base">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Phone Number"
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
                      <div className="flex flex-col">
                        <label className="py-2 font-semibold text-base">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="input input-bordered input-primary w-full"
                        />
                      </div>
                    </div>
                    <div className="mt-7">
                      <div className="form-control mt-4 flex flex-row justify-between">
                        <label className="cursor-pointer flex">
                          <input
                            type="checkbox"
                            id="subscribe-agree"
                            className="checkbox checkbox-primary checkbox-sm mr-2"
                          />
                          <span className="label-text">
                            Yes, I want to receive Einstein Smart Tryout emails
                          </span>
                        </label>
                      </div>
                      <div className="form-control mt-4 flex flex-row justify-between">
                        <label className="cursor-pointer flex">
                          <input
                            type="checkbox"
                            id="terms-agree"
                            className="checkbox checkbox-primary checkbox-sm mr-2"
                          />
                          <span className="label-text">
                            I agree to all the Term, Privacy Policy, and Fees{" "}
                          </span>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-xl text-bold w-full py-2 mt-7 mb-10"
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="link">
                      Log in
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

export default RegisterPage;
