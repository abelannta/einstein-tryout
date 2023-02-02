import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

interface BasepageProps {
  children: React.ReactNode;
  footer?: boolean;
}

export const Basepage = (props: BasepageProps) => {
  const { children, footer } = props;

  return (
    <>
      <Navbar />
      <div className=" text-white">{children}</div>
      {footer && <Footer />}
    </>
  );
};
