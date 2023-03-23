import Image from "next/image";
import ButtonStyle2 from "./ButtonStyle2";
import { router } from "next/router";

const WorkItem = ({ techs, label, url, texts, image }) => {
  return (
    <div className="space-y-5 flex-1 flex flex-col lg:flex-row space-x-0 lg:space-x-10">
      <div
        className={`w-full h-[400px] lg:h-[500px] flex-1 cursor-pointer
        `}
        onClick={() => {
          router.push(url);
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

        <ButtonStyle2
          label="See the live website"
          onClick={() => {
            router.push(url);
          }}
        />
      </div>
    </div>
  );
};

export default WorkItem;
