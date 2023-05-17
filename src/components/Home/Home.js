import React, { useState, useEffect } from "react";

import { Navbar } from "../Navbar/Navbar";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Main from '../Main/Main'
import Footer from "../Footer/Footer";
import Features from "../Features/Features";
import Corusel from "../corusel/Corusel";
import Kurslar from "../Kurslar/Kurslar";
import Contact from "../contact/Contact";


export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);


  return (
    <>
      <div className="main">
        <Navbar />
        <Main />
        <Kurslar />
        <Corusel />
      </div>
      <Features />
      <Contact />
      <Footer />
    </>
  );
};
export default React.memo(Home);
