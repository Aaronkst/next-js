import type { NextPage } from "next";
import { useRef } from "react";
import NavigationBar from "../components/Navigation";
import Main from "../sections/Main";
import Skillset from "../sections/Skillset";
import Projects from "../sections/Project";
import Contact from "../sections/Contact";

const Home: NextPage = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollIntoView = () => {
    ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavigationBar />
      <Main scroll={scrollIntoView} />
      <Skillset ref={ref} />
      <Projects />
    </>
  );
};

export default Home;
