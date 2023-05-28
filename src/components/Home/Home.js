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
import Call from "../msg/Call";
import Msg from "../msg/Msg";


export const Home = () => {
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);



  return (
    <>
      <div className="main">
        <Navbar setOpen={setOpen} />
        <Main />
        <Kurslar setOpenMsg={setOpenMsg} open={open} setOpen={setOpen} />
        <Corusel />
      </div>
      <Features />
      <Contact setOpenMsg={setOpenMsg} />
      <Footer />
      <Call />
      <Msg openMsg={openMsg} setOpenMsg={setOpenMsg} setOpen={setOpen} />
    </>
  );
};
export default React.memo(Home);
