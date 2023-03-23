import { useState } from "react";
import { router } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { links } from "../../global";

const ContactSection = ({ contactRef }) => {
  const travelDistance = 200;
  const [travel, setTravel] = useState(travelDistance);

  return (
    <div
      className="w-full px-5 md:px-[100px] space-y-7 pt-[100px] pb-[70px]"
      ref={contactRef}
      id="contact"
    >
      <div className="">
        <p className="h2">Contact</p>
      </div>

      <div className="space-y-2">
        <div
          className="inline-block relative overflow-hidden"
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
          <div>
            <p className="emailLink">austinloh042@gmail.com</p>
          </div>
        </div>

        <p className="p">+(61) 432685451</p>

        <div
          className="h-[40px] w-[40px] cursor-pointer pt-3"
          onClick={() => {
            router.push(links.extlinkedin);
          }}
        >
          <Image
            src="/linkedin.png"
            height={100}
            width={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
