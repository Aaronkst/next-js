import type { NextPage } from "next";
import NavigationBar from "../components/Navigation";
import Main from "../components/Main";
import Card from "../components/Card";

const skillsets = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <Main />
      {skillsets.map((skill, index) => {
        return (
          <div className="mt-5" key={index}>
            <Card skill={skill} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
