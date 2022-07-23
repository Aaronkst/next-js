import { SkillCard } from "../components/Card";
import { SectionHeader } from "../components/Typography";

import imgCoding from "../images/coding.png";

const skillsets = [
  {
    skill: {
      name: "Backend",
      description: [
        {
          title: "Frameworks",
          text: "Nest JS, Express JS, Fastify JS, Sails JS, Node-red",
        },
        {
          title: "Tools & Utilities",
          text: "PM2, Docker, ORM, Jest, Redis, Swagger UI",
        },
      ],
      level: 9,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "Frontend",
      description: [
        {
          title: "Frameworks",
          text: "Next JS, React JS, Three JS, JQuery",
        },
        {
          title: "Tools & Utilities",
          text: "Material UI, Tailwind CSS, Bootstrap, Figma Prototyping",
        },
      ],

      level: 8,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "API & Server Security",
      description: [
        {
          title: "Methods",
          text: "JWT Authentication, CORS, Helmet, Password Encryption, Payload Validation, Data Models",
        },
        {
          title: "Tools & Utilities",
          text: "Material UI, Tailwind CSS, Bootstrap, Figma Prototyping",
        },
      ],
      level: 8,
    },
    image: imgCoding,
  },
  {
    skill: {
      name: "Database",
      description: [
        {
          title: "Types & Brands",
          text: "Mongodb, Firebase Firestore, Postgres SQL, MySQL",
        },
        {
          title: "Tools & Utilities",
          text: "TypeORM, Data Serialization, Document Models & Methods",
        },
      ],
      level: 9,
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
