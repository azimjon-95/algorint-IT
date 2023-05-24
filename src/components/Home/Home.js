import React, { useState } from "react";

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
import Msg from "../msg/Msg";


export const Home = () => {
  const [open, setOpen] = useState(false);




  return (
    <>
      <div className="main">
        <Navbar setOpen={setOpen} />
        <Main />
        <Kurslar open={open} setOpen={setOpen} />
        <Corusel />
      </div>
      <Features />
      <Contact />
      <Footer />

      <Msg />
    </>
  );
};
export default React.memo(Home);
