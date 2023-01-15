import { JsxChild } from "typescript";
import { Navbar } from "../components/navbar";

export const BasePage = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto text-white">{children}</div>
    </>
  );
};
