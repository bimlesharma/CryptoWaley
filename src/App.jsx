import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Pricing from './components/Pricing'

function App () {

  return (
    <>
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
              {/* <SectionSeven /> */}
            </>
          } />
          <Route
          path='/blog'
          element={
            <div>
              <Blog/>
            </div>
          }>
          </Route>
          <Route
          path='/pricing'
          element={
            <div>
              <Pricing/>
            </div>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
      
    </>
  );
}

export default App;
