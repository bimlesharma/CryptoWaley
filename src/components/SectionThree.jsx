import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";
import standee from "/assets/img/standee.jpg";
import bengaluru from "/assets/img/bengaluru.jpg";
import stage from "/assets/img/stage.jpg";
import group from "/assets/img/group.jpg";
import Feature from "./Feature";

function SectionThree() {
  return (
    <div id="features" className="main min-h-[100vh] py-10">
      <div className="heading text-4xl md:text-5xl lg:text-[3.5rem] flex justify-center px-6 text-cente font-bold">
        <h1 >Nothing less than excellent</h1>
      </div>
      
      <Feature 
        img = {group}
        heading = "Exclusive Interviews with Industry Icons"
        para0 = "We bring you exclusive interviews with renowned personalities who are shaping the future of the web3 and crypto space. From thought leaders to innovators, we delve deep into their insights, experiences, and visions for the decentralized future. Get inspired by conversations with luminaries such as Mario Nawfal, Ajeet Khurana, Sumit Gupta, and more."
        para1 = "Explore our interviews → "        
      />
      <Feature 
        img = {stage}
        heading = "On-Ground Coverage of Web3 and Crypto Events"
        para0 = "We're your eyes and ears on the ground, providing comprehensive coverage of every significant web3 and crypto meetup, conference, and tech seminar. Stay updated with firsthand accounts, event highlights, keynote summaries, and exclusive behind-the-scenes content. Whether it's a local gathering or a global summit, we're there to bring you the pulse of the decentralized movement.        "
        para1 = "Check out our event coverage →"      
      />
      <Feature 
        img = {bengaluru}
        heading = "Beyond Borders: Nationwide Coverage"
        para0 = "CryptoWaley Media Channel goes beyond boundaries, extending our reach to every corner of the nation. From the bustling streets of Delhi to the vibrant tech hubs of Bengaluru and beyond, we ensure that no city is left uncovered. Experience firsthand accounts, interviews, and insights from the web3 revolution happening across metro cities, empowering you with a panoramic view of India's crypto landscape.        "
        para1 = "Explore our nationwide coverage →"      
      />
    </div>
  );
}

export default SectionThree;
