import WorkItem from "./WorkItem";
import WorkItemReverse from "./WorkItemReverse";
import { links } from "../../global";

const Recentworks = ({ recentworksRef }) => {
  return (
    // <div className="w-full mx-auto max-w-sm md:max-w-xl lg:max-w-3xl space-y-7 pt-[100px] pb-[0px]">
    <div
      className="w-full px-5 md:px-[100px] space-y-7 pt-[100px] "
      ref={recentworksRef}
      id="recentworks"
    >
      <div className="">
        <p className="h2">Recent Works</p>
      </div>

      <div className="space-y-[100px] ">
        <WorkItemReverse
          image="/works/3.png"
          label="Arctic Green Redesign"
          url={links.extarcticgreen}
          techs={[
            { alt: "Sanity.io", image: "/logos/sanityio.png", url: "" },
            { alt: "Next.js", image: "/logos/nextjs.png", url: "" },
            { alt: "React.js", image: "/logos/react.png", url: "" },
            {
              alt: "Node.js",
              image: "/logos/nodejs2.png",
              url: "https://nodejs.org/en",
            },
            {
              alt: "tailwindcss",
              image: "/logos/tailwindcss2.png",
              url: "https://tailwindcss.com/",
            },
            {
              alt: "Firebase",
              image: "/logos/firebase.png",
              url: "https://firebase.google.com/",
            },
            { alt: "Github", image: "/logos/github.png", url: "" },
          ]}
          texts={[
            "Redesign of Arctic Green Energy's company website. Featuring an improved design, a mobile first apporach, blazing fast loading times, analytics and content management system.",
          ]}
        />

        <WorkItem
          image="/works/5.png"
          label="MMA Gym Website Redesign"
          url={links.extc88}
          techs={[
            { alt: "Next.js", image: "/logos/nextjs.png", url: "" },
            { alt: "React.js", image: "/logos/react.png", url: "" },
            {
              alt: "tailwindcss",
              image: "/logos/tailwindcss2.png",
              url: "https://tailwindcss.com/",
            },
            { alt: "Github", image: "/logos/github.png", url: "" },
          ]}
          texts={[
            "Expanding from an existing design our focus was to improve the Mobile experience for our customers where most of our online traffic was coming from. Our main focus was to accurately represent the world class standards of our gym with our online presence.",
          ]}
        />

        <WorkItemReverse
          image="/works/6.png"
          label="Chat With Anyone App"
          url={links.extsassapp}
          techs={[
            { alt: "Next.js", image: "/logos/nextjs.png", url: "" },
            {
              alt: "Stripe",
              image: "/logos/stripe.png",
              url: "https://stripe.com",
            },
            {
              alt: "tailwindcss",
              image: "/logos/tailwindcss2.png",
              url: "https://tailwindcss.com/",
            },
            {
              alt: "Firebase",
              image: "/logos/firebase.png",
              url: "https://firebase.google.com/",
            },
            { alt: "Github", image: "/logos/github.png", url: "" },
          ]}
          texts={[
            " Multilingual messaging platform breaking down language barriers by letting users chat naturally in their native tongue while AI translation seamlessly converts messages to each recipient's preferred language. This innovative solution enables truly global communication without language limitations, allowing diverse teams and international friends to connect effortlessly in real-time.",
          ]}
        />

        <WorkItem
          image="/works/7.png"
          label="PDF Document Analyzer app"
          url={links.extaidocumentsass}
          techs={[
            { alt: "Next.js", image: "/logos/nextjs.png", url: "" },
            { alt: "React.js", image: "/logos/react.png", url: "" },
            {
              alt: "tailwindcss",
              image: "/logos/tailwindcss2.png",
              url: "https://tailwindcss.com/",
            },
            { alt: "Github", image: "/logos/github.png", url: "" },
            {
              alt: "Pinecone",
              image: "/logos/pinecone.png",
              url: "https://www.pinecone.io/",
            },
            {
              alt: "LangChain",
              image: "/logos/langchain.png",
              url: "https://www.langchain.com/",
            },
          ]}
          texts={[
            "Web application transforms document interaction by allowing users to upload PDFs that are instantly analyzed by AI, creating an interactive experience where users can chat directly with their documents. This intelligent solution eliminates the need for manual searching through lengthy files, enabling users to simply ask questions and receive accurate, contextual responses drawn directly from their uploaded content.",
          ]}
        />

        {/* <WorkItemReverse
          image="/works/1.png"
          label="Battleview"
          url={links.extbattleview}
          techs={[
            { alt: "React.js", image: "/logos/react.png", url: "" },
            { alt: "Firebase", image: "/logos/firebase.png", url: "" },
            {
              alt: "Node.js",
              image: "/logos/nodejs2.png",
              url: "https://nodejs.org/en",
            },
            { alt: "Github", image: "/logos/github.png", url: "" },
          ]}
          texts={[
            "Weapon comparison site for top First-Person Shooter games like Call of Duty Warzone and Battlefield 2042. Created as a mockup to show a potential client what the look and functionality of the site could be during the proposal stages.",
            "Able to filter by game, gun class, damage output, this allows users to choose the perfect weapon that suits their play style. Attachments can also be added to weapons in different combinations, to reveal their true stats.",
            "Modelled with Webflow, built with React, hosted on Firebase, stored on Firestore and tracked with Github.",
          ]}
        /> */}

        {/* <WorkItem
          image="/works/2.png"
          label="Covid-19 Tracker"
          url={links.extcovidtracker}
          techs={[
            { alt: "Firebase", image: "/logos/firebase.png", url: "" },
            { alt: "React.js", image: "/logos/react.png", url: "" },
            { alt: "Github", image: "/logos/github.png", url: "" },
          ]}
          texts={[
            "Track current COVID-19 cases worldwide and in every country. Based on real-time data from Diesease.sh, view live, recovered and closed cases around the world.",
            "Modelled with Figma, built with React, hosted on Firebase and tracked with Git.",
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Recentworks;
