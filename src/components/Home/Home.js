import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./home.css";
import "aos/dist/aos.css";
import Main from '../Main/Main'
import Footer from "../Footer/Footer";
import Features from "../Features/Features";
import Corusel from "../corusel/Corusel";
import Kurslar from "../Kurslar/Kurslar";
import Contact from "../contact/Contact";
import Call from "../msg/Call";
import Msg from "../msg/Msg";
import Register from "../Register/Register";


export const Home = () => {
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);


  // const [isOnline, setIsOnline] = useState(navigator.onLine);
  // useEffect(() => {
  //   function onlineHandler() {
  //     setIsOnline(true);
  //   }


  //   function offlineHandler() {
  //     setIsOnline(false);
  //   }

  //   window.addEventListener("online", onlineHandler);
  //   window.addEventListener("offline", offlineHandler);

  //   return () => {
  //     window.removeEventListener("online", onlineHandler);
  //     window.removeEventListener("offline", offlineHandler);
  //   };
  // }, []);

  return (
    <>
      <>

        <Navbar setOpen={setOpen} />
        <Main />
        <Register setOpen={setOpen} />
        <Kurslar setOpenMsg={setOpenMsg} open={open} setOpen={setOpen} />
        <Corusel />
        <Features />
        <Contact setOpenMsg={setOpenMsg} />
        <Footer />
        <Call />
        <Msg openMsg={openMsg} setOpenMsg={setOpenMsg} setOpen={setOpen} />
      </>

    </>
  );
};
export default React.memo(Home);
