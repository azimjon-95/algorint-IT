import React, { memo, useState, useEffect } from "react";

import "./navbar.css";
import logo from "../../asets/nav/Vector.png";
import menu from "../../asets/nav/menu.svg";
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

export const Navbar = ({ setOpen }) => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [mobilMenu, setMobilMenu] = useState(false);

  let auth = localStorage.getItem("x-auth")



  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false)
        setMobilMenu(false)
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };
  const scrollbottom = () => {
    window.scrollTo({
      top: 1420,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <>
          <div className="lincs">
            <button className="nav_btns" onClick={scrollUp}>

              Kurslar
            </button>
            <button className="nav_btns" onClick={scrollbottom}>

              Biz haqimizda
            </button>
            <a href="tel:+998973701818">
              Biz bilan aloqa
            </a>

            <button onClick={() => {
              setOpen(true)
              setMobilMenu(false)
            }} className="register-Nav">
              Ro'yhatdan o'tish
            </button>

            {mobilMenu ?
              <div onClick={() => setMobilMenu(false)} className="GrMenu"><AiOutlinePlus /></div> :
              <div onClick={() => setMobilMenu(true)} className="GrMenu"><img src={menu} alt="" /></div>
            }
          </div>
          {/* {auth ? (
            <Link to={"/admin"}>
              <div className="bottom__navigation">
                <div className="bottom__navigation_img">
                  <FaUserTie />
                </div>
              </div>

            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="register-person">
                Kirish
              </button>
            </Link>
          )} */}
        </>
      </nav>
      {/* <div className='hamburger_bar' style={mobilMenu && !backToTopButton ? { display: "block", transition: 'all 0.5s' } : { display: "none", transition: 'all 0.5s' }}> */}
      <div className={mobilMenu && !backToTopButton ? 'hamburger_bar' : "close"}>
        <div className="btns_nav">
          <button onClick={() => {
            scrollUp()
            setMobilMenu(false)
          }}> Kurslar</button>
          <button onClick={() => {
            scrollbottom()
            setMobilMenu(false)
          }}> Biz haqimizda</button>
          <button><a href="tel:+998973701818">Biz bilan aloqa</a></button>
        </div>
      </div>

      <div onClick={() => setMobilMenu(false)} style={mobilMenu && !backToTopButton ? { display: "block" } : { display: "none" }} className="back_none"></div>
    </>
  );
};

export default memo(Navbar);
