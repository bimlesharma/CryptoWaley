import React from "react";
import TeamCard from "./TeamCard";
import rishabh from "/assets/img/rishabh.jpg";
import keshav from "/assets/img/keshav.jpeg";

function SectionSix() {
  return (
    <div id="team" className="min-h-screen bg-black py-24 flex flex-col justify-center">
      
      {/* Header */}
      <div className="text-center mb-16 px-5">
        <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
          Our Leadership
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto">
          Founding Partners
        </h1>
      </div>

      {/* Team Cards Grid */}
      <div className="max-w-5xl mx-auto px-5 w-full flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-16">
        <TeamCard 
          name="Rishabh Singhal"
          role="CEO of CryptoWaley"
          description={
            <>
              Driving the vision and strategy for India's leading Web3 media channel. Also serves as an Ambassador for{" "}
              <a href="https://x.com/QBlockchain" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                QBlockchain
              </a>.
            </>
          }
          image={rishabh}
          twitterUrl="https://twitter.com/rishabhsrishi"
          linkedinUrl={null} // Add LinkedIn if available later
        />
        
        <TeamCard 
          name="Keshav Agarwal"
          role="Blockchain & Crypto Advocate"
          description="Brings diverse knowledge of financial markets to the ecosystem. Regular speaker at the Management Education and Research Institute."
          image={keshav}
          twitterUrl={null} // Add Twitter if available later
          linkedinUrl="https://www.linkedin.com/in/keshavism/"
        />
      </div>
      
    </div>
  );
}

export default SectionSix;
