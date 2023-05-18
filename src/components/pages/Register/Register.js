import React from "react";
import logo from "../../../asets/nav/Vector.png";
import "./register.css";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

export function Register({ setOpen }) {

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    kurs: ""
  });



  // const sendMsgToBot = async (e) => {
  //   e.preventDefault()
  // console.log("ok");
  // let myText = `<b>O'quvchi ro'yxatdan o'tdi</b>%0A%0A`;
  // myText += `Ismi: <h3>${formData.name}</h3>%0A`;
  // myText += `Tel: <b>${formData.number}</b>%0A`;
  // myText += `Email: <b>${formData.kurs}</b>%0A`;

  // console.log(myText);


  // let aaa = `👤<b> O'quvchi ro'yxatdan o'tdi</b>%0A%0A <b>Ismi</b>: ${formData.name}%0A%0A ☎️ Tel: ${formData.number}%0A ✉️ Email: ${formData.kurs}%0A `

  // let tokenBot = "6076160647:AAFaHQc9pUjLl013dxuYdNdFdqsdmGrecVk"; // Azimjon
  // let chatId = "39464759"; // Azimjon

  // // let tokenBot = "6189129353:AAGm-0xifsZE4DGO8XETTxnMP7rvZNWzWHo";  // Diyorbek
  // // let chatId = "1986279045"; // Diyorbek

  // let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${myText}&parse_mode=html`;
  // let api = new XMLHttpRequest();
  // api.open("GET", tempUrl, true);
  // api.send();
  // };

  const sendMsgToBot = async (e) => {
    e.preventDefault()
    let aaa = `👤<b> O'quvchi ro'yxatdan o'tdi</b>%0A%0A <b>Ismi</b>: ${formData.name}%0A%0A ☎️ Tel: ${formData.number}%0A ✉️ Kurs: ${formData.kurs}%0A `

    let tokenBot = "6230509348:AAHqIOcv8e6rUeikjKdc27-H1rMw1oLux0k"; // Azimjon
    let chatId = "39464759"; // Azimjon

    // let tokenBot = "6189129353:AAGm-0xifsZE4DGO8XETTxnMP7rvZNWzWHo";  // Diyorbek
    // let chatId = "1986279045"; // Diyorbek

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${aaa}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();
  }


  return (
    <div className="register">
      <form onSubmit={sendMsgToBot}>
        <button id="btnopen" type="button" onClick={() => setOpen(false)}>
          x
        </button>

        <div className="logo_r">
          <img src={logo} alt="" />
        </div>
        <input
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          type="text"
          placeholder="ism"
        />
        <PatternFormat
          required
          format="+998 (##) ### ####"
          allowEmptyFormatting
          mask="_"
          value={formData.number}
          onChange={(e) =>
            setFormData({ ...formData, number: e.target.value })
          }
        />

        <select
          value={formData.kurs}
          onChange={(e) =>
            setFormData({ ...formData, kurs: e.target.value })
          }
          name=""
          id=""
        >
          <option value="Kursni tanlang">Kursni tanlang</option>
          <option value="Dasturlash">Dasturlash</option>
          <option value="Rus-tili">Rus-tili</option>
          <option value="Ingliz-tili">Ingliz-tili</option>
          <option value="DTM">DTM</option>
        </select>
        <button >
          Login
        </button>
      </form>
    </div>
  );
}
