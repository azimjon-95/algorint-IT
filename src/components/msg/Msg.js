import React, { useState, useEffect } from "react";
import "./msg.css";
// import Inc from "../../assets/icons/insta.png";
import { FiPhoneCall } from "react-icons/fi";


function Msg() {
  const [open, setOpen] = useState(false);
  const [backToTopButton, setBackToTopButton] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);


  return (

    <div>
      {backToTopButton && (
        <div className="msg">
          <a href="tel:+998973701818"
            className="msg_btn msg_show"
          >
            <FiPhoneCall />
          </a>
        </div>
      )}
    </div>


  );
}

export default Msg;
