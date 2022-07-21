import type { NextPage } from "next";
import NavigationBar from "../components/Navigation";
import Main from "../components/Main";
import Card from "../components/Card";

const skillsets = [
  {
    skill: {
      name: "skill 1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    image: "link to image",
  },
  {
    skill: {
      name: "skill 1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    image: "link to image",
  },
  {
    skill: {
      name: "skill 1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    image: "link to image",
  },
  {
    skill: {
      name: "skill 1",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    image: "link to image",
  },
  {
    skill: { name: "skill 1", description: "lorem ipsum" },
    image: "link to image",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <Main />
      <div className="grid md:grid-cols-3 sm:grid-cols-none gap-4 my-9 mx-3">
        {skillsets.map((skillset, index) => {
          return (
            <div key={index} className="w-100">
              <Card skill={skillset.skill} image={skillset.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
