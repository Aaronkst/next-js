import type { NextPage } from "next";
import NavigationBar from "../components/Navigation";
import Main from "../sections/Main";
import Skillset from "../sections/Skillset";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <NavigationBar />
      <Main />
      <Skillset />
    </>
  );
};

export default Home;
