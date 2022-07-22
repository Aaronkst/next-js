import Image, { StaticImageData } from "next/image";

type ISkillCard = {
  skill: {
    name: string;
    description: string;
    level: number;
  };
  image: string | StaticImageData;
};

const SkillCard = ({ skill, image }: ISkillCard): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
        <div className="hidden md:block flex-none">
          <Image
            className="rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image}
            width={200}
            height={200}
            alt=""
          />
        </div>

        <div className="p-6 w-full flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {skill.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">{skill.description}</p>
          <p className="text-gray-600 mb-2">Level</p>
          <div className="w-full bg-gray-200 h-2 rounded-lg">
            <div
              className="bg-blue-600 h-2 rounded-lg"
              style={{ width: `${skill.level * 10}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillCard };
