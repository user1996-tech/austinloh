import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/homescreen/Header";
import {
  buildCountries,
  buildRegions,
  links,
  personalDetails,
} from "../global";
import { router } from "next/router";
import moment from "moment-timezone";
import { adminDb } from "../firebase/firebase-admin";

export const getServerSideProps = async ({ req }) => {
  let data = {};
  // const dbRef = collection(adminDb, "visitors");
  // get ip from headers here
  // const ip = generateRandomIP();
  const currentTime = moment().utc().format();
  const currentTimeStamp = Date.now();
  const mobile = req.headers["user-agent"].match(
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
    ? true
    : false;

  let platform = "";
  if (req.headers["user-agent"].match(/Windows/i)) {
    platform = "Windows";
  } else if (req.headers["user-agent"].match(/Macintosh/i)) {
    platform = "Mac";
  } else if (req.headers["user-agent"].match(/Linux/i)) {
    platform = "Linux";
  }

  const country = req?.headers["x-vercel-ip-country"]
    ? req.headers["x-vercel-ip-country"]
    : "";
  const city = req?.headers["x-vercel-ip-city"]
    ? req.headers["x-vercel-ip-city"]
    : "";
  const region = req?.headers["x-vercel-ip-country-region"]
    ? req.headers["x-vercel-ip-country-region"]
    : "";
  const longitude = req?.headers["x-vercel-ip-longitude"]
    ? req.headers["x-vercel-ip-longitude"]
    : "";
  const latitude = req?.headers["x-vercel-ip-latitude"]
    ? req.headers["x-vercel-ip-latitude"]
    : "";

  let ip = req.headers["x-real-ip"];
  if (!ip) {
    const forwardedFor = req.headers["x-forwarded-for"];
    if (Array.isArray(forwardedFor)) {
      ip = forwardedFor.at(0);
    } else {
      ip = forwardedFor?.split(",").at(0) ?? "Unknown";
    }
  }

  data = {
    project: "About",
    createdAt: currentTimeStamp,
    ip: ip,
    dateTime: currentTime,
    country: country,
    city: city,
    region: region,
    longitude: longitude,
    latitude: latitude,
    mobile: mobile,
    platform: platform,
  };

  if (req.headers["host"] != "localhost:3000") {
    if (
      !(
        buildCountries.includes(country) &&
        buildRegions.includes(decodeURI(city))
      )
    ) {
      const res = await adminDb.collection("visitors").add(data);
    }
  }

  return {
    props: {},
  };
};

const about = () => {
  const travelDistance = 200;
  const [travel, setTravel] = useState(travelDistance);

  return (
    <div className="">
      <Head>
        <title>About</title>
        <meta property="og:title" content="Austin Loh - About" key="title" />
        <meta property="og:image" content="/og.jpg" key="image" />
        <meta
          property="og:description"
          content="I'm an electrical and software engineer based out of Reykjavik
                  Iceland. My experience ranges from UI/UX design to Full Stack
                  Development for both mobile and the web. As a software developer I am possionate about code that brings
                  interesting ideas to life. I believe in nailing the bigger
                  picture first, understanding intent and motive first, and then
                  only doubling down on the details."
          key="description"
        />
        <meta property="og:url" content="https://austinloh.com" key="url" />
        <meta property="og:type" content="website" key="type" />
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
                    <p className="emailLink">{personalDetails.email}</p>
                  </div>
                </div>

                <p className="p">{personalDetails.phoneNumber}</p>

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
