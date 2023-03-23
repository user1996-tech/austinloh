import Image from "next/image";
import { router } from "next/router";

const TechonologiesItem = ({ tech }) => {
  return (
    <div
      className="flex justify-center items-center cursor-pointer relative group"
      onClick={() => {
        window.open(tech.url, "_blank");
      }}
    >
      <Image
        src={tech.image}
        className="h-10 w-10 object-contain"
        alt={tech.alt}
        height={200}
        width={200}
      />
      <div className="absolute z-50 bottom-[-32px] left-[50%] bg-gray-200 py-1 px-3 rounded-md hidden group-hover:block duration-500 ease-in-out">
        <p className="p">{tech.alt}</p>
      </div>
    </div>
  );
};

export default TechonologiesItem;
