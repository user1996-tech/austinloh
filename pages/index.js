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
        <title>Austin Loh - meta 3</title>
      </Head>
      <Head>
        <meta name="title" property="og:title" content="Testing og:title hh" />
        <meta property="og:type" content="" />
        <meta name="image" property="og:image" content="/linkedin.png" />
        <meta
          name="description"
          property="og:description"
          content="Testing og:description"
        />
        <meta name="author" content="Testing author" />

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="austinloh.com" />
        <meta property="twitter:url" content="austinloh.com" />
        <meta name="twitter:title" content="Testing og:title hh" />
        <meta name="twitter:description" content="Testing og:description" />
        <meta name="twitter:image" content="/linkedin.png" /> */}
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
