import Image, { StaticImageData } from "next/image";
import { SectionHeader } from "../components/Typography";

import imgAddTech from "../images/projects/addtech.png";
import imgNpm from "../images/projects/npm.png";

import ScrollAnimation from "react-animate-on-scroll";

type IProject = {
  name: string;
  description: string;
  href: string;
  image: StaticImageData;
};

const projects = [
  {
    name: "addTech | Digital Solutions",
    description:
      "A start up business that provides various digital marketing solutions, software solutions and graphical solutions.",
    href: "https://addtech.site",
    image: imgAddTech,
  },
  {
    name: "NPM Package | Local Caching",
    description: "A simple local caching system.",
    href: "https://www.npmjs.com/package/@aaron_kst/local-cache",
    image: imgNpm,
  },
];

const Projects = (): JSX.Element => {
  const projectList = projects.map((project: IProject, index: number) => {
    return (
      <ScrollAnimation
        key={index}
        animateIn={index % 2 === 0 ? "fly-in-left" : "fly-in-right"}
        animateOnce={true}
        className="w-full"
      >
        <div
          className={
            index % 2 === 0
              ? "bg-white md:bg-transparent border-b-4 border-indigo-700 mt-8 mx-2 md:flex md:border-none rounded-lg drop-shadow-lg md:drop-shadow-none md:flex-row-reverse"
              : "bg-white md:bg-transparent border-b-4 border-indigo-700 mt-8 mx-2 md:flex md:border-none rounded-lg drop-shadow-lg md:drop-shadow-none"
          }
        >
          <div className="md:w-1/3 md:drop-shadow-lg">
            <Image
              priority
              src={project.image}
              alt="Image Description"
              layout="responsive"
              className="rounded-t-lg md:rounded-lg"
              onContextMenu={(e) => {
                e.preventDefault();
                return false;
              }}
            />
          </div>
          <div className="md:w-2/3 flex items-center">
            <div
              className={
                index % 2 === 0
                  ? "p-3 md:p-5 my-5 md:my-0 border-b-1 border-indigo-700 md:border-b-0 w-full"
                  : "p-3 md:p-5 my-5 md:my-0 border-b-1 border-indigo-700 md:border-b-0 w-full"
              }
            >
              <h2 className="text-xl font-bold mb-4">{project.name}</h2>
              <p className="uppercase text-pink-600 font-bold mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project &rarr;
                </a>
              </p>
              <p className="text-gray-500 mb-6">{project.description}</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  });

  return (
    <div id="projects" className="z-40 py-9 md:px-12 bg-gray-800">
      <div className="lg:w-8/12 py-9 lg:-mt-48 mx-auto bg-white rounded-xl shadow-lg">
        <SectionHeader title="Projects" />
        <div className="flex flex-col pb-10 items-center lg:px-5">
          {projectList}
        </div>
      </div>
    </div>
  );
};

export default Projects;
