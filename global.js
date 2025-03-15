export const personalDetails = {
  email: "austinloh042@gmail.com",
  phoneNumber: "(+354) 8830064",
};

export const links = {
  home: "/",
  about: "/about",
  extlinkedin: "https://www.linkedin.com/in/austin-loh/",
  extc88: "https://c88-fawn.vercel.app/",
  // extarcticgreen: "https://arcticgreen.vercel.app/",
  extarcticgreen: "https://arcticgreen.com/",
  extbattleview: "https://battlefiew-90dd7.web.app/",
  extsassapp: "https://sass-app-cyan.vercel.app/",
  extaidocumentsass: "https://ai-document-saas.vercel.app/",
};

export const technologies = [
  {
    alt: "Sanity.io",
    image: "/logos/sanityio.png",
    url: "https://www.sanity.io/",
  },
  { alt: "Next.js", image: "/logos/nextjs.png", url: "https://nextjs.org/" },
  { alt: "React.js", image: "/logos/react.png", url: "https://react.dev/" },
  {
    alt: "React Native",
    image: "/logos/reactnative.png",
    url: "https://reactnative.dev/",
  },
  { alt: "Node.js", image: "/logos/nodejs2.png", url: "https://nodejs.org/en" },
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
  { alt: "Github", image: "/logos/github.png", url: "https://github.com/" },
  { alt: "PHP", image: "/logos/php.png", url: "https://www.php.net/" },
  { alt: "MySql", image: "/logos/mysql.png", url: "https://www.mysql.com/" },
];

export const buildCountries = ["United States"];

export const buildRegions = ["Santa Clara", "San Jose"];

export const addVisitEntry = async (collection) => {
  console.log("running addVisitEntry");
  await fetch("/api/addVisitEntry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection: collection }),
  })
    .then((res) => res.json())
    .then((data) => {});
};
