import { SkillCard } from "../components/Card";
import { SectionHeader } from "../components/Typography";

import imgCoding from "../images/coding.png";

const skillsets = [
  {
    skill: {
      name: "skill 1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "skill 1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "skill 1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "skill 1",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "skill 1",
      description: "lorem ipsum lorem ipsum",
      level: 2,
    },
    image: imgCoding,
  },
];

const Skillset = (): JSX.Element => {
  return (
    <div id="skillset">
      <SectionHeader title="Skillset" />
      <div className="grid md:grid-cols-3 sm:grid-cols-none gap-4 my-9 mx-4">
        {skillsets.map((skillset, index) => {
          return (
            <div key={index} className="w-100">
              <SkillCard skill={skillset.skill} image={skillset.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skillset;
