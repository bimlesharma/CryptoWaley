import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Pricing from './components/Pricing';
import BlogListing from './components/blog/BlogListing';
import BlogPost from './components/blog/BlogPost';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if we are changing pages, not if we are just clicking section links on the home page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/blog"       element={<BlogListing />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/pricing"    element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
