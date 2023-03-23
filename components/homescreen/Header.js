import { router } from "next/router";
import { links } from "../../global";

const Header = ({ hidden, technologiesRef, recentworksRef, contactRef }) => {
  const sections = [
    {
      label: "About",
      onClick: () => {
        router.push(links.about);
      },
    },
    {
      label: "Technologies",
      onClick: () => {
        window.scroll({
          top:
            technologiesRef.current.getBoundingClientRect().top +
            window.scrollY,
          behavior: "smooth",
        });
      },
    },
    {
      label: "Recent Works",
      onClick: () => {
        window.scroll({
          top:
            recentworksRef.current.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      },
    },
    {
      label: "Contact",
      onClick: () => {
        window.scroll({
          top: contactRef.current.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      },
    },
  ];

  return (
    <div className="w-full flex flex-row justify-between relative h-[144px]">
      <div
        className="bg-[#ECFF01] inline-block h-[104px] w-[104px] group hover:bg-black transition duration-500 ease-in-out absolute top-5 left-5 cursor-pointer"
        onClick={() => {
          router.push(links.home);
        }}
      >
        <div className="flex w-full h-full items-center justify-center">
          <p className="font-ocb text-[24px] group-hover:text-white text-black">
            al.
          </p>
        </div>
      </div>

      {!hidden && (
        <div className="w-full max-w-6xl mx-auto flex py-5">
          <div className="w-full h-full">
            <div className="hidden md:flex space-x-8 flex-row flex-1 justify-end items-end h-full pr-10">
              {sections.map((section, index) => {
                return (
                  <div
                    key={index}
                    className="Button1Container"
                    onClick={section.onClick}
                  >
                    <p className="Button1Text">{section.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
