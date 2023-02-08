import { Basepage } from "../basePage";
import { BookType } from "./components/bookType";
import { Check } from "./components/check";
import { Feature } from "./components/feature";
import { Plan } from "./components/plan";
import { Welcome } from "./components/welcome";

const Home = () => {
  return (
    <>
      <Basepage footer={true}>
        <Welcome />
        <Feature />
        <Check />
        <Plan />
        <BookType />
      </Basepage>
    </>
  );
};

export default Home;
