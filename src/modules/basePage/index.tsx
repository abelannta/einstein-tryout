import { JsxChild } from "typescript";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const BasePage = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className=" text-white">{children}</div>
      <Footer />
    </>
  );
};
