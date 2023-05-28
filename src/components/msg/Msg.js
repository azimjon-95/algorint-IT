import React, { useState, useEffect } from "react";
import "./style.css";
import dsp from '../../asets/footer/ss.jpg'



function Msg({ openMsg, setOpenMsg, setOpen }) {

  const [backToTopButton, setBackToTopButton] = useState()

  const ism = localStorage.getItem("usern").toUpperCase()



  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);


  return (
    <div onClick={() => {
      setOpen(false)
      setOpenMsg(false)
    }} className={openMsg ? "Background" : "MsgNone"}>
      <div className="callCenterMsg">
        <div className="callCenter">
          <div className="callCenter_img">
            <img src={dsp} alt="" />
          </div>

          <p>{ism} sizning so'rovingiz qabul qilindi, tez orada siz bilan bog'lanamiz.</p>
        </div>
      </div>
    </div>
  );
}

export default Msg;
