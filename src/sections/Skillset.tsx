import { SkillCard } from "../components/Card";
import { SectionHeader } from "../components/Typography";

import imgCoding from "../images/coding.png";

const skillsets = [
  {
    skill: {
      name: "Skill 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "Skill 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "Skill 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "Skill 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.",
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "Skill 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.",
      level: 2,
    },
    image: imgCoding,
  },
];

const Skillset = (): JSX.Element => {
  return (
    <div id="skillset" className="z-40">
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
