import { Basepage } from "@/modules/basePage";
import { BenefitTryout } from "./components/benefit";
import { MainTryout } from "./components/main";
import { RegisterTryoutHome } from "./components/register";

export const TryoutHome = () => {
  return (
    <>
      <Basepage footer={true}>
        <MainTryout />
        <BenefitTryout />
        <RegisterTryoutHome />
      </Basepage>
    </>
  );
};
