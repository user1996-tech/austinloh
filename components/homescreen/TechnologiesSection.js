import { technologies } from "../../global";
import TechonologiesItem from "./TechonologiesItem";

const TechnologiesSection = ({ technologiesRef }) => {
  return (
    <div
      id="technologies"
      className="w-full pl-5 pr-5 md:pl-[100px] md:pr-0 space-y-5 pt-[100px] pb-5"
      ref={technologiesRef}
    >
      <div className="">
        <p className="h2">Technologies</p>
      </div>

      <div className="flex flex-row space-x-5">
        {technologies.map((tech, index) => {
          return <TechonologiesItem key={index} tech={tech} />;
        })}
      </div>
    </div>
  );
};

export default TechnologiesSection;
