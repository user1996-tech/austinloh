import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/homescreen/Header";
import { links } from "../global";
import { router } from "next/router";

const about = () => {
  const travelDistance = 200;
  const [travel, setTravel] = useState(travelDistance);

  return (
    <div className="">
      <Head>
        <title>About</title>
      </Head>
      <Head>
        <meta name="title" property="og:title" content="Austin Loh - About" />
        <meta name="image" property="og:image" content="/austin-loh.png" />
        <meta
          name="description"
          property="og:description"
          content="Hi, I'm Austin, a Software Engineer based out of Melbourne Australia."
        />
        <meta property="og:url" content="/about" />

        <meta property="og:type" content="Article" />
        <meta name="author" content="Austin Loh" />
      </Head>

      <div className="min-h-screen">
        <div className="h-full w-full min-h-screen flex flex-col">
          <Header hidden />
          <div className="w-full lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col lg:flex-row px-[60px] py-8 space-y-[100px] lg:space-y-0 justify-between">
            {/* First Section */}
            <div className="w-full lg:w-[65%] space-y-5 h-full px-5">
              <div className="">
                <p className="h2">Hello there</p>
              </div>

              <div className="">
                <p className="h3">My name is Austin Loh. </p>
                <p className="h3">I build things.</p>
              </div>

              <div className="space-y-5">
                <p className="p2">
                  I'm an electrical and software engineer based out of Reykjavik
                  Iceland. My experience ranges from UI/UX design to Full Stack
                  Development for both mobile and the web.
                </p>
                <p className="p2">
                  As a software developer I am possionate about code that brings
                  interesting ideas to life. I believe in nailing the bigger
                  picture first, understanding intent and motive first, and then
                  only doubling down on the details.
                </p>
                <p className="p2">
                  You can find me in the water catching waves, dodging surfers
                  along the coast or tapping out white belts in the gym outside
                  of work hours.
                </p>
              </div>
            </div>

            {/* Second Section */}
            <div className="w-full lg:w-[30%] space-y-5 pb-[70px] px-5">
              <div className="">
                <p className="h2">Get In Touch</p>
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

                {/* <p className="p">+(61) 432685451</p> */}
                <p className="p">+(354) 8830064</p>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
