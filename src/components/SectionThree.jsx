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
        heading = "Detailed analytics"
        para0 = "See the full picture of all your projects in one place and take action immediately."
        para1 = "Our extensive tool will help you maximize the profits and scale your business."
      />
      <Feature 
        img = {stage}
        heading = "Projects overview"
        para0 = "Track and manage and manage all projects very easy without back and forth."
        para1 = "Discover who is working on what and see your team members performance."
      />
      <Feature 
        img = {bengaluru}
        heading = "Leads sources"
        para0 = "Discover where all your converted leads are coming from and take action into the right direction."
        para1 = "Grow your audience using the channel that drives most of traffic."
      />
    </div>
  );
}

export default SectionThree;
