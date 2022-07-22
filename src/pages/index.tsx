import type { NextPage } from "next";
import NavigationBar from "../components/Navigation";
import Main from "../sections/Main";
import Skillset from "../sections/Skillset";
import Projects from "../sections/Project";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <NavigationBar />
      <Main />
      <Skillset />
      <Projects />
    </>
  );
};

export default Home;
