import React from 'react';
import logosvg from "/assets/img/logo.svg";

function SectionOne() {
  return (
    <div id="head" className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-black bg-gradient-to-br from-black via-black to-[rgba(47,40,255,0.4)] px-6 md:px-10 lg:px-20 overflow-hidden pt-20">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Left Text Content */}
      <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center z-10 pt-10 md:pt-0">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6 w-max">
          Welcome to CryptoWaley
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
          Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Crypto Community</span> with Insights & Innovation
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          Cryptowaley is your gateway to the vibrant world of cryptocurrency and blockchain. Explore the latest meetups, insightful news, and groundbreaking projects with us. Join our community to revolutionize the way you engage with digital finance.
        </p>
        <div>
          <a 
            href="https://www.youtube.com/@cryptowaley" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Watch us on YouTube
          </a>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center items-center mt-16 md:mt-0 z-10">
        <div className="relative w-3/4 max-w-md animate-[float_6s_ease-in-out_infinite]">
          {/* Outer glow for the logo */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          <img 
            src={logosvg} 
            alt="CryptoWaley Logo" 
            className="relative w-full h-auto drop-shadow-[0_0_15px_rgba(47,40,255,0.8)]"
          />
        </div>
      </div>

    </div>
  );
}

export default SectionOne;
