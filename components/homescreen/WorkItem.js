import Image from "next/image";
import ButtonStyle2 from "./ButtonStyle2";
import TechnologiesItem from "./TechonologiesItem";
import { addVisitEntry } from "../../global";

const WorkItem = ({ techs, label, url, texts, image, collection }) => {
  return (
    <div className="space-y-5 flex-1 flex flex-col lg:flex-row space-x-0 lg:space-x-10">
      <div
        className={`w-full h-[400px] lg:h-[500px] flex-1 cursor-pointer
        `}
        onClick={async () => {
          const result = await addVisitEntry(collection);
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

      <div className="space-y-5 flex-1">
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
              return <TechnologiesItem key={index} tech={tech} />;
            })}
          </div>
        </div>

        <div className="pt-3">
          <ButtonStyle2
            label="See the live website"
            onClick={async () => {
              const result = await addVisitEntry(collection);
              window.open(url, "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
