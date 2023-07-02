import React, { useState } from "react";
import { videoData } from '../../utils/videoData'
import "./style.css";
import { AiOutlinePlus } from 'react-icons/ai'
import menu from "../../asets/nav/menu.svg";


const Regitser = ({ setOpen }) => {


  return (
    <div className="btn_register">
      <button className="reg_click" onClick={() => {
        setOpen(true)
      }}>Hoziroq kurslarimizga ro‘yhatdan o‘ting!</button>

      <div className="video_reg">
        {
          videoData?.map((value, inx) => <video key={inx} src={value.videoBaner} autoPlay controls muted loop></video>)
        }
      </div>
    </div>
  );
};
export default Regitser;
