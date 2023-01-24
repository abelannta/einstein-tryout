import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const Basepage = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className=" text-black">{children}</div>
      <Footer />
    </>
  );
};
