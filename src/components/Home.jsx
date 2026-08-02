
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
        if (location.state?.scrollToId) {
          const element = document.getElementById(location.state.scrollToId);
          if (element) {
            // A small timeout ensures the DOM is fully painted before scrolling,
            // especially useful when navigating from a completely different page.
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth" });
            }, 50);
          }
        }
      }, [location.state?.scrollToId]);
      

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
