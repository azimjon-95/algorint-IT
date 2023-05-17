import React, { useState } from "react";
import "./style.css";
import dsp from '../../asets/footer/ss.jpg'


export const Contact = () => {
  const [formData, setFormData] = useState({
    number: "+998",
    savol: ""
  });



  const sendMsgToBot = async (e) => {
    let myText = `<b>O'quvchi ro'yxatdan o'tdi</b>%0A%0A`;
    myText += `Tel: <b>${formData.number}</b>%0A`;
    myText += `Ismi: <h3>${formData.savol}</h3>%0A`;



    let aaa = `👤<b> O'quvchi ro'yxatdan o'tdi</b>%0A%0A <b>Ismi</b>: ${formData.name}%0A%0A ☎️ Tel: ${formData.number}%0A ✉️ Email: ${formData.kurs}%0A `

    let tokenBot = "6076160647:AAFaHQc9pUjLl013dxuYdNdFdqsdmGrecVk"; // Azimjon
    let chatId = "39464759"; // Azimjon

    // let tokenBot = "6189129353:AAGm-0xifsZE4DGO8XETTxnMP7rvZNWzWHo";  // Diyorbek
    // let chatId = "1986279045"; // Diyorbek

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${myText}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();

  };
  return (
    <div className="Container_Contact">
      <div className="con_box">
        <img src={dsp} alt="" />
      </div>
      <div className="con_box">
        <h2>Savolingiz bormi?</h2>
        <p>Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz.</p>
        <div className="from">
          <input
            required
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            } type="number" name="" id="" />
          <textarea value={formData.savol}
            onChange={(e) =>
              setFormData({ ...formData, savol: e.target.value })
            } name="" id="" cols="30" rows="4"></textarea>
          <button onClick={() => sendMsgToBot()}>So‘rov yuborish</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
