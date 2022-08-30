import Image, { StaticImageData } from "next/image";
import { SectionHeader } from "../components/Typography";

import imgAddTech from "../images/projects/addtech.png";
import imgNpm from "../images/projects/npm.png";

type IProject = {
  name: string;
  description: string;
  techstack: string;
  href: string;
  image: StaticImageData;
};

const projects = [
  {
    name: "addTech | Digital Solutions",
    description:
      "A start up business that provides various digital marketing solutions, software solutions and graphical solutions.",
    techstack: "React JS, Fastify JS (Node), AWS",
    href: "https://addtech.site",
    image: imgAddTech,
  },
  {
    name: "NPM Package | Local Caching",
    description: "A simple local caching system.",
    techstack: "Typescript",
    href: "https://www.npmjs.com/package/@aaron_kst/local-cache",
    image: imgNpm,
  },
];

const Projects = (): JSX.Element => {
  const projectList = projects.map((project: IProject, index: number) => {
    return (
      <section className="mb-32 mx-0 md:mx-5 text-gray-800" key={index}>
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="hidden lg:flex lg:items-center lg:justify-center grow-0 shrink-0 basis-auto lg:w-3/12">
              <Image src={project.image} alt="Trendy Pants and Shoes" />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-9/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
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
                <p className="text-gray-500 mb-6">
                  Tech Stack: <b>{project.techstack}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });

  return (
    <div id="projects" className="z-40 py-9 px-4 md:px-12 bg-gray-800">
      <SectionHeader title="Projects" white />
      {projectList}
    </div>
  );
};

export default Projects;
