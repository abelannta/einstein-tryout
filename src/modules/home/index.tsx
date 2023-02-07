import { Basepage } from "../basePage";
import { BookType } from "./components/bookType";
import { Check } from "./components/check";
import { Feature } from "./components/feature";
import { Plan } from "./components/plan";
import { Welcome } from "./components/welcome";

const Home = () => {
  return (
    <>
      <div className="bg-primary rounded-full w-3/4 aspect-square absolute -z-10 -top-1/4 -left-1/4"></div>
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
