import React, { useEffect } from "react";
import intro from "/assets/intro.mp4";

const SectionFour = () => {
  useEffect(() => {
    // Load Twitter's official widget script to render embedded tweets
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="about"
      className="px-5 md:px-10 lg:px-20 py-12 main min-h-[100vh] flex flex-col justify-center items-center text-white bg-black bg-gradient-to-r from-black via-black to-[rgba(47,40,255,0.5)]"
    >
      <h1 className="leading-none md:text-[3rem] text-4xl font-bold text-center">
        Trusted by the world's largest companies
      </h1>

      {/* Intro Video */}
      <div className="video flex justify-center w-full md:w-[60vw] my-10 rounded-2xl bg-blue-50/5 p-1">
        <video
          src={intro}
          controls={false}
          className="h-full rounded-2xl bg-slate-400"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Native Twitter Embeds */}
      <div
        id="testimonial"
        className="tweets flex items-center lg:items-start flex-col mx-10 lg:flex-row lg:gap-5 w-full justify-center"
      >
        <div className="w-full lg:w-1/3 flex justify-center">
          <blockquote className="twitter-tweet" data-theme="light">
            <a href="https://twitter.com/x/status/1739587132102938719"></a>
          </blockquote>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <blockquote className="twitter-tweet" data-theme="light">
            <a href="https://twitter.com/x/status/1766504362074157188"></a>
          </blockquote>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <blockquote className="twitter-tweet" data-theme="light">
            <a href="https://twitter.com/x/status/1774421020679852270"></a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
