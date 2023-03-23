import React from "react";

const sections = [
  {
    label: "About Me",
  },
  {
    label: "Technologies",
  },
  {
    label: "Recent Works",
  },
  {
    label: "Contact",
  },
];

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between relative h-[144px]">
      <div className="bg-[#ECFF01] inline-block h-[104px] w-[104px] group hover:bg-black transition duration-500 ease-in-out absolute top-5 left-5">
        <div className="flex w-full h-full items-center justify-center">
          <p className="font-ocb text-[24px] group-hover:text-white text-black">
            al.
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto flex py-5">
        <div className="w-full h-full">
          <div className="hidden md:flex space-x-8 flex-row flex-1 justify-end items-end h-full pr-10">
            {sections.map((section, index) => {
              return (
                <div key={index} className="Button1Container">
                  <p className="Button1Text">{section.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
