import React from "react";
import standee from "/assets/img/standee.jpg";
import bengaluru from "/assets/img/bengaluru.jpg";
import stage from "/assets/img/stage.jpg";
import group from "/assets/img/group.jpg";
import Feature from "./Feature";

function SectionThree() {
  return (
    <div id="features" className="min-h-screen bg-black py-20 border-b border-white/5">
      <div className="text-center mb-16 px-5">
        <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
          Our Services
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto">
          Nothing less than Excellence
        </h1>
      </div>
      
      <div className="flex flex-col gap-10">
        <Feature 
          img={group}
          heading="Exclusive Interviews with Industry Icons"
          description={
            <>
              We bring you exclusive interviews with renowned personalities who are shaping the future of the web3 and crypto space. From thought leaders to innovators, we delve deep into their insights, experiences, and visions for the decentralized future. Get inspired by conversations with luminaries such as{" "}
              <a href="https://x.com/MarioNawfal" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Mario Nawfal</a>,{" "}
              <a href="https://x.com/AjeetK" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Ajeet Khurana</a>,{" "}
              <a href="https://x.com/smtgpt" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">Sumit Gupta</a>, and more.
            </>
          }
          linkText="Explore our interviews"
          linkUrl="https://www.youtube.com/@cryptowaley"
          reverse={false}
        />
        
        <Feature 
          img={stage}
          heading="On-Ground Coverage of Web3 and Crypto Events"
          description="We're your eyes and ears on the ground, providing comprehensive coverage of every significant web3 and crypto meetup, conference, and tech seminar. Stay updated with firsthand accounts, event highlights, and exclusive behind-the-scenes content."
          linkText="Check out our event coverage"
          linkUrl="https://www.youtube.com/@cryptowaley"
          reverse={true}
        />
        
        <Feature 
          img={bengaluru}
          heading="Beyond Borders: Nationwide Coverage"
          description="CryptoWaley Media Channel goes beyond boundaries, extending our reach to every corner of the nation. From the bustling streets of Delhi to the vibrant tech hubs of Bengaluru and beyond, we ensure that no city is left uncovered."
          linkText="Explore our nationwide coverage"
          linkUrl="https://www.youtube.com/@cryptowaley"
          reverse={false}
        />
      </div>
    </div>
  );
}

export default SectionThree;
