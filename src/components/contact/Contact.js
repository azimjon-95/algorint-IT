import React, { useState } from "react";
import "./style.css";
import dsp from '../../asets/footer/ss.jpg'
import { PatternFormat } from "react-number-format";


export const Contact = () => {
  const [formData, setFormData] = useState({
    number: "",
    savol: ""
  });



  const sendMsgToBot = async (e) => {
    e.preventDefault()
    let aaa = `👤<b> O'quvchi xabar qoldirdi</b>%0A%0A ☎️ Tel: ${formData.number}%0A ✉️ Habar: ${formData.savol}%0A `

    // let tokenBot = "6230509348:AAHqIOcv8e6rUeikjKdc27-H1rMw1oLux0k"; // Azimjon
    // let chatId = "39464759"; // Azimjon

    let tokenBot = "6189129353:AAGm-0xifsZE4DGO8XETTxnMP7rvZNWzWHo";  // Diyorbek
    let chatId = "1986279045"; // Diyorbek

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${aaa}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();
  }
  return (
    <div className="Container_Contact">
      <div className="con_box">
        <img src={dsp} alt="" />
      </div>
      <div className="con_box">
        <h2>Savolingiz bormi?</h2>
        <p>Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz.</p>
        <form onSubmit={sendMsgToBot} className="from">
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
          <textarea value={formData.savol}
            onChange={(e) =>
              setFormData({ ...formData, savol: e.target.value })
            } name="" id="" cols="30" rows="4"></textarea>
          <button type="submit">So‘rov yuborish</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
