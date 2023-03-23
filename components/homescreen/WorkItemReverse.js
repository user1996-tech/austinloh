import Image from "next/image";
import ButtonStyle2 from "./ButtonStyle2";
import TechonologiesItem from "./TechonologiesItem";
import TechnologiesItem from "./TechonologiesItem";

const WorkItemReverse = ({ techs, label, url, texts, image }) => {
  return (
    <div className="space-y-5 flex-1 flex flex-col lg:flex-row space-x-0 lg:space-x-10">
      <div className="space-y-5 flex-1 hidden lg:block">
        <div className="">
          <p className="h1">{label}</p>
        </div>

        <div className="space-y-2 lg:space-y-4">
          {texts.map((text) => {
            return <p className="p">{text}</p>;
          })}
        </div>

        <div className="space-y-1">
          <p className="p">Tech stack used:</p>
          <div className="flex flex-row space-x-5">
            {techs.map((tech, index) => {
              return <TechonologiesItem key={index} tech={tech} />;
            })}
          </div>
        </div>

        <div className="pt-3">
          <ButtonStyle2
            label="See the live website"
            onClick={() => {
              window.open(url, "_blank");
            }}
          />
        </div>
      </div>

      <div
        className={`w-full h-[400px] flex-1 cursor-pointer
        `}
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <Image
          src={image}
          width={700}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-5 flex-1 block lg:hidden">
        <div className="">
          <p className="h1">{label}</p>
        </div>

        <div className="space-y-2 lg:space-y-4">
          {texts.map((text) => {
            return <p className="p">{text}</p>;
          })}
        </div>

        <div className="space-y-1">
          <p className="p">Tech stack used:</p>
          <div className="flex flex-row space-x-5">
            {techs.map((tech, index) => {
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

        <div className="pt-3">
          <ButtonStyle2
            label="See the live website"
            onClick={() => {
              window.open(url, "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItemReverse;
