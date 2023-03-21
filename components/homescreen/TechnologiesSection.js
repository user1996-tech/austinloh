import React from "react";
import Image from "next/image";

const techs = [
  { alt: "Sanity.io", image: "/logos/sanityio.png", url: "" },
  { alt: "Next.js", image: "/logos/nextjs.png", url: "" },
  { alt: "React.js", image: "/logos/react.png", url: "" },
  { alt: "React Native", image: "/logos/reactnative.png", url: "" },
  { alt: "Firebase", image: "/logos/firebase.png", url: "" },
  { alt: "Github", image: "/logos/github.png", url: "" },
  { alt: "PHP", image: "/logos/php.png", url: "" },
  { alt: "MySql", image: "/logos/mysql.png", url: "" },
];

const TechnologiesSection = () => {
  return (
    <div className="w-full mx-auto max-w-sm md:max-w-xl lg:max-w-3xl space-y-7 pt-[100px] pb-[0px]">
      <div className="">
        <p className="h2">Technologies</p>
      </div>

      <div className="grid grid-flow-row grid-cols-7">
        {techs.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center cursor-pointer
            "
            >
              {/* <p className="text-center ">{tech.alt}</p> */}
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
