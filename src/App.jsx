import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ChooseContainer from "./Components/Choose/ChooseContainer";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ChooseContainer />
    </Fragment>
  );
}

export default App;
