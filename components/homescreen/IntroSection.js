import React from "react";
import ButtonStyle1 from "./ButtonStyle2";

const IntroSection = () => {
  return (
    <div className="w-full mx-auto max-w-sm md:max-w-xl lg:max-w-3xl space-y-7 pt-[100px] pb-[60px]">
      <div className="">
        <p className="h2">Intro</p>
      </div>

      <div className="">
        <p className="h1 text-left">
          Hi, I'm Austin, a Software Engineer based out of Melbourne Australia.
        </p>
      </div>

      <ButtonStyle1 label="About me" />
    </div>
  );
};

export default IntroSection;
