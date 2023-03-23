import Head from "next/head";
import Header from "../components/homescreen/Header";
import IntroSection from "../components/homescreen/IntroSection";
import TechnologiesSection from "../components/homescreen/TechnologiesSection";
import RecentWorksSection from "../components/homescreen/RecentWorksSection";
import ContactSection from "../components/homescreen/ContactSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Austin Loh</title>
      </Head>

      <div className="min-h-screen relative">
        <div className="bg-white absolute h-full w-[30%] left-0 z-[-10]" />
        <div className="bg-[#f5f5f5] absolute h-full w-[70%] right-0 z-[-10]" />

        <div className="h-full w-full min-h-screen flex flex-col">
          <Header />
          <IntroSection />
          <TechnologiesSection />
        </div>
        <RecentWorksSection />
        <ContactSection />
      </div>
    </div>
  );
}
