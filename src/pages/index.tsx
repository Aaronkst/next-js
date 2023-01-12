import type { NextPage } from "next";
import { useRef } from "react";
import NavigationBar from "../components/Navigation";
import Main from "../views/Main";
import Skillset from "../views/Skillset";
import Projects from "../views/Project";
import Contact from "../views/Contact";

const Home: NextPage = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollIntoView = () => {
    ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="root" className="text-sofia">
      <NavigationBar />
      <Main scroll={scrollIntoView} />
      <Skillset ref={ref} />
      <Projects />
    </div>
  );
};

export default Home;
