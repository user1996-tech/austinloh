import React from "react";
import Image from "next/image";

const techs = [
  { alt: "Sanity.io", image: "/logos/sanityio.png", url: "" },
  { alt: "Next.js", image: "/logos/nextjs.png", url: "" },
  { alt: "React.js", image: "/logos/react.png", url: "" },
  // { alt: "React Native", image: "/logos/reactnative.png", url: "" },
  // { alt: "Firebase", image: "/logos/firebase.png", url: "" },
  // { alt: "Github", image: "/logos/github.png", url: "" },
  // { alt: "PHP", image: "/logos/php.png", url: "" },
  // { alt: "MySql", image: "/logos/mysql.png", url: "" },
];

const TechnologiesSection = () => {
  return (
    <div className="w-full pl-5 pr-5 md:pl-[100px] md:pr-0 space-y-7 pt-[100px] pb-5">
      <div className="">
        <p className="h2">Technologies</p>
      </div>

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
  );
};

export default TechnologiesSection;
