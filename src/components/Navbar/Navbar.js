import React, { memo, useState, useEffect } from "react";


import "./navbar.css";
import logo from "../../asets/nav/Vector.png";
import menu from "../../asets/nav/menu.svg";

import phone from '../../asets/nav/phone2.png'

export const Navbar = () => {
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

  const scrollUp = () => {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  };
  const scrollbottom = () => {
    window.scrollTo({
      top: 1670,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          {/* <p>ALGORITIM</p> */}
        </div>

        <div className="lincs">
          <button onClick={scrollUp}>
            <img src={menu} alt="" />
            Kurslar
          </button>
          <button onClick={scrollbottom}>
            <img src={menu} alt="" />
            Biz haqimizda
          </button>
          <a href="tel:+998973701818">
            <img src={menu} alt="" />
            <span>Biz bilan aloqa</span>
            <img src={phone} alt="" />
          </a>
        </div>

      </nav>

    </>
  );
};

export default memo(Navbar);
