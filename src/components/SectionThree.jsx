import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";
import Feature from "./Feature";

function SectionThree() {
  return (
    <div className="main min-h-[100vh]">
      <div className="heading text-[3.5rem] font-bold ml-32 mt-[15vh]">
        <h1 >Nothing less than excellent</h1>
      </div>
      
      <Feature 
        img = {cw}
        heading = "Detailed analytics"
        para0 = "See the full picture of all your projects in one place and take action immediately."
        para1 = "Our extensive tool will help you maximize the profits and scale your business."
      />
      <Feature 
        img = {cw}
        heading = "Projects overview"
        para0 = "Track and manage and manage all projects very easy without back and forth."
        para1 = "Discover who is working on what and see your team members performance."
      />
      <Feature 
        img = {cw}
        heading = "Leads sources"
        para0 = "Discover where all your converted leads are coming from and take action into the right direction."
        para1 = "Grow your audience using the channel that drives most of traffic."
      />
    </div>
  );
}

export default SectionThree;
