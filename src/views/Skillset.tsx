import { forwardRef } from "react";

import { StaticImageData } from "next/image";

import { SkillCard } from "../components/Card";
import { SectionHeader } from "../components/Typography";

import imgDb from "../images/skills/db.png";
import imgDocker from "../images/skills/docker.png";
import imgGit from "../images/skills/git.png";
import imgNodeJs from "../images/skills/nodejs.png";
import imgPhp from "../images/skills/php.png";
import imgReact from "../images/skills/react.png";
import imgTest from "../images/skills/test.png";
import imgThreeJs from "../images/skills/threejs.png";
import imgUiux from "../images/skills/uiux.png";

type ISkillset = {
  skill: {
    name: string;
    level: number;
  };
  image: StaticImageData;
};

const skillsets = [
  {
    skill: {
      name: "Node JS",
      level: 9,
    },
    image: imgNodeJs,
  },
  {
    skill: {
      name: "React JS",
      level: 9,
    },
    image: imgReact,
  },
  {
    skill: {
      name: "Three JS",
      level: 7,
    },
    image: imgThreeJs,
  },
  {
    skill: {
      name: "Testing",
      level: 8,
    },
    image: imgTest,
  },
  {
    skill: {
      name: "Database",
      level: 8,
    },
    image: imgDb,
  },
  {
    skill: {
      name: "Version Control (Git)",
      level: 9,
    },
    image: imgGit,
  },
  {
    skill: {
      name: "UI/UX",
      level: 6,
    },
    image: imgUiux,
  },
  // {
  //   skill: {
  //     name: "DevOps ( Containerization & Security )",
  //     level: 6,
  //   },
  //   image: imgDocker,
  // },
  {
    skill: {
      name: "PHP",
      level: 6,
    },
    image: imgPhp,
  },
];

const Skillset = (): JSX.Element => {
  return (
    <div id="skillset" className="bg-gray-100 pt-16 lg:pb-48">
      <SectionHeader title="Skillset" />
      <div className="mx-5 flex flex-col gap-5 lg:flex-row lg:flex-nowrap lg:overflow-x-auto lg:py-5">
        {skillsets.map((skillset: ISkillset, index: number) => {
          return (
            <div key={index} className="lg:w-[400px] lg:flex-shrink-0">
              <SkillCard skill={skillset.skill} image={skillset.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skillset;