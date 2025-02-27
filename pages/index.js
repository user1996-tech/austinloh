import { useRef } from "react";
import Head from "next/head";
import Header from "../components/homescreen/Header";
import IntroSection from "../components/homescreen/IntroSection";
import TechnologiesSection from "../components/homescreen/TechnologiesSection";
import RecentWorksSection from "../components/homescreen/RecentWorksSection";
import ContactSection from "../components/homescreen/ContactSection";

export default function Home() {
  const technologiesRef = useRef(null);
  const recentworksRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Austin Loh</title>
        <meta property="og:title" content="Austin Loh" key="title" />
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
        <meta property="og:site_name" content="https://austinloh.com"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:image" content="/og.jpg"></meta>
        <meta
          property="description"
          content="I'm an electrical and software engineer based out of Reykjavik
                  Iceland. My experience ranges from UI/UX design to Full Stack
                  Development for both mobile and the web. As a software developer I am possionate about code that brings
                  interesting ideas to life. I believe in nailing the bigger
                  picture first, understanding intent and motive first, and then
                  only doubling down on the details."
        />
        <meta
          property="twitter:description"
          content="I'm an electrical and software engineer based out of Reykjavik
                  Iceland. My experience ranges from UI/UX design to Full Stack
                  Development for both mobile and the web. As a software developer I am possionate about code that brings
                  interesting ideas to life. I believe in nailing the bigger
                  picture first, understanding intent and motive first, and then
                  only doubling down on the details."
        ></meta>
      </Head>

      <div className="min-h-screen relative">
        <div className="bg-white absolute h-full w-[30%] left-0 z-[-10]" />
        <div className="bg-[#f5f5f5] absolute h-full w-[70%] right-0 z-[-10]" />

        <div className="h-full w-full min-h-screen flex flex-col">
          <Header
            technologiesRef={technologiesRef}
            recentworksRef={recentworksRef}
            contactRef={contactRef}
          />
          <IntroSection />
          <TechnologiesSection technologiesRef={technologiesRef} />
        </div>
        <RecentWorksSection recentworksRef={recentworksRef} />
        <ContactSection contactRef={contactRef} />
      </div>
    </div>
  );
}
