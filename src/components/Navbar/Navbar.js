import React, { memo, useState, useEffect } from "react";


import "./navbar.css";
import logo from "../../asets/nav/Vector.png";
import menu from "../../asets/nav/menu.svg";
import user from "../../asets/nav/user.svg";
import { Register } from "../pages/Register/Register";

import phone from '../../asets/nav/phone2.png'

export const Navbar = () => {
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
          <button>
            <img src={menu} alt="" />
            <span>Biz bilan aloqa</span>
            <img src={phone} alt="" />
          </button>
        </div>
        {/* <div className="profil">
          <button onClick={() => setOpen(true)}>
            Profil
            <img src={user} alt="" />
          </button>
        </div> */}
      </nav>
      <div className="register_modol" style={open ? { display: "flex" } : {}}>
        <Register setOpen={setOpen} />
      </div>
    </>
  );
};

export default memo(Navbar);
