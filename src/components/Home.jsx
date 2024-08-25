
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      
        if (location.state?.scrollToId) {
          const element = document.getElementById(location.state.scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [location]);
      

    return (
        <div id="home">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    );
};

export default Home;
