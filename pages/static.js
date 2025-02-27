import React from "react";

function Static() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Austin Loh" />
        <meta property="og:image" content="/austin-loh.png" />
        <meta
          property="og:description"
          content="Hi, I'm Austin, a Software Engineer based out of Melbourne Australia."
        />
        <meta property="og:url" content="/" />

        <meta property="og:type" content="Article" />
        <meta name="author" content="Austin Loh" />
      </Head>
      <div className="w-full h-screen flex justify-center items-center">
        Static Site Generation Page
      </div>
    </>
  );
}

export default Static;
