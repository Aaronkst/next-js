import Image, { StaticImageData } from "next/image";

type ISkillDesc = {
  title: string;
  text: string;
};

type ISkillCard = {
  skill: {
    name: string;
    description: Array<ISkillDesc>;
    level: number;
  };
  image: string | StaticImageData;
};

const SkillCard = ({ skill, image }: ISkillCard): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row w-full rounded-lg bg-white shadow-lg h-80">
        <div className="hidden lg:block flex-none">
          <Image
            className="rounded-t-lg lg:rounded-none lg:rounded-l-lg"
            src={image}
            width={150}
            height={150}
            alt=""
          />
        </div>

        <div className="p-6 w-full flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {skill.name}
          </h5>
          <p className="text-gray-700 text-base mb-2">
            {skill.description.map((description, index) => {
              return (
                <p key={index}>
                  <em className="text-indigo-600 font-bold flex items-center">
                    {description.title}
                  </em>
                  <span className="block">{description.text}</span>
                  <br />
                </p>
              );
            })}
          </p>
          <p className="text-gray-600 mb-2">
            Rating: <strong>{skill.level}/10</strong>
          </p>
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
