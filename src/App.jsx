import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ChooseContainer from "./Components/Choose/ChooseContainer";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ChooseContainer />
      <Meals />
    </Fragment>
  );
}

export default App;
