import React from "react";
import ButtonStyle1 from "./ButtonStyle2";

const IntroSection = () => {
  return (
    <div className="w-full space-y-7 pt-[100px] pb-[60px] px-5 md:px-[100px] h-full flex-1">
      <div className="">
        <p className="h2">Intro</p>
      </div>

      <div className="">
        <p className="h1 text-left">
          Hi, I'm Austin, a Software Engineer based out of
        </p>
        <p className="h1 text-left">Melbourne Australia.</p>
      </div>

      <ButtonStyle1 label="About me" />
    </div>
  );
};

export default IntroSection;
