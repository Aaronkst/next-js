import Image, { StaticImageData } from "next/image";

type Card = {
  skill: {
    name: string;
    description: string;
  };
  image: string | StaticImageData;
};

export default function Card({ skill, image }: Card) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {skill.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">{skill.description}</p>
          {/*<p className="text-gray-600 text-xs"></p>*/}
        </div>
      </div>
    </div>
  );
}
