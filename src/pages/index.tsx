import type { NextPage } from "next";
import { useRef } from "react";
import NavigationBar from "../components/Navigation";
import Main from "../views/Main";
import Skillset from "../views/Skillset";
import Projects from "../views/Project";
import Contact from "../views/Contact";

const Home: NextPage = (): JSX.Element => {
  return (
    <div
      id="root"
      className="relative !overflow-auto z-[0] h-screen"
      // style={{ backfaceVisibility: "hidden" }}
    >
      <NavigationBar />
      <Main />
      <Skillset />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
