import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const ButtonStyle1 = ({ label, onClick }) => {
  const travelDistance = 100;
  const [travel, setTravel] = useState(travelDistance);
  return (
    <div
      className="inline-block relative overflow-hidden cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => {
        setTravel(0);
      }}
      onMouseLeave={() => {
        setTravel(travelDistance);
      }}
    >
      <motion.div
        animate={{
          x: -travel,
          transitionDelay: 0.3,
          transition: { duration: 0.3 },
        }}
        className="absolute bg-[#ECFF01] w-full h-full z-[-10]"
      />
      <div className="flex flex-row items-center justify-center space-x-2">
        <div className="bg-[#ECFF01] py-1 px-1">
          <ChevronRightIcon className=" h-[18px]" />
        </div>
        <p className="pr-3 Button2Text">{label}</p>
      </div>
    </div>
  );
};

export default ButtonStyle1;
