import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
  const metaDetails = {
    title: "SSR - test",
    image: "/austin-loh.png",
    description: "Something something something",
    type: "website",
    url: "www.austinloh.com/ssr",
  };
  return {
    props: { metaDetails },
  };
};

function ssg({ metaDetails }) {
  return (
    <>
      <Head>
        <meta name="title" property="og:title" content={metaDetails.title} />
        <meta name="image" property="og:image" content={metaDetails.image} />
        <meta
          name="description"
          property="og:description"
          content={metaDetails.description}
        />
        <meta property="og:url" content={metaDetails.url} />

        <meta property="og:type" content={metaDetails.type} />
        <meta name="author" content="Austin Loh" />
      </Head>
      <div className="w-full h-screen flex justify-center items-center">
        Static Site Generation Page
      </div>
    </>
  );
}

export default ssg;
