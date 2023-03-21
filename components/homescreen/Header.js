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
    <div className="w-full py-5 px-5 flex flex-row justify-between max-w-6xl mx-auto xl:px-0">
      <div className="bg-[#ECFF01] inline-block h-[104px] w-[104px] group hover:bg-black transition duration-500 ease-in-out">
        <div className="flex w-full h-full items-center justify-center">
          <p className="font-ocb text-[24px] group-hover:text-white text-black">
            al.
          </p>
        </div>
      </div>

      <div className="hidden md:flex space-x-8 flex-row flex-1 justify-end">
        {sections.map((section, index) => {
          return (
            <div key={index} className="Button1Container">
              <p className="Button1Text">{section.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
