import Image from "next/image";
import { technologies } from "../../global";

const TechnologiesSection = ({ technologiesRef }) => {
  return (
    <div
      id="technologies"
      className="w-full pl-5 pr-5 md:pl-[100px] md:pr-0 space-y-7 pt-[100px] pb-5"
      ref={technologiesRef}
    >
      <div className="">
        <p className="h2">Technologies</p>
      </div>

      <div className="flex flex-row space-x-5">
        {technologies.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center cursor-pointer
            "
            >
              <Image
                src={tech.image}
                className="h-10 w-10 object-contain"
                alt={tech.alt}
                height={200}
                width={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesSection;
