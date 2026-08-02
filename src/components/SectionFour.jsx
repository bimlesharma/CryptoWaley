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
      className="px-5 md:px-10 lg:px-20 py-20 min-h-screen flex flex-col items-center bg-black bg-gradient-to-br from-black via-black to-[rgba(47,40,255,0.2)]"
    >
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
          See Us In Action
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Community &amp; Coverage
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From full event productions to viral moments, see how CryptoWaley connects with the community.
        </p>
      </div>

      {/* Intro Video */}
      <div className="relative w-full max-w-4xl mx-auto mb-20">
        {/* Glow behind video */}
        <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-3xl" />
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm p-2">
          <video
            src={intro}
            controls={false}
            className="w-full h-auto rounded-2xl object-cover bg-black"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Native Twitter Embeds */}
      <div
        id="testimonial"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="flex justify-center w-full">
          <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
            <a href="https://twitter.com/x/status/1739587132102938719"></a>
          </blockquote>
        </div>
        <div className="flex justify-center w-full">
          <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
            <a href="https://twitter.com/x/status/1766504362074157188"></a>
          </blockquote>
        </div>
        <div className="flex justify-center w-full">
          <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
            <a href="https://twitter.com/x/status/1774421020679852270"></a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
