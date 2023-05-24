import React, { useState, useEffect } from "react";
import logo from "../../asets/nav/Vector.png";

import './style.css'
import html from "../../asets/section2/html5.svg";
import css from "../../asets/section2/css.svg";
import boot from "../../asets/section2/bootstrap4.svg";
import js from "../../asets/section2/js.svg";
import reactjs from "../../asets/section2/reactjs.svg";
import nodejs from "../../asets/section2/nodejs.svg";
import It from '../../asets/section2/it.png'
import Rus from '../../asets/section2/RUS TILI.png'
import Eng from '../../asets/section2/ingliz tili 1.png'
import Dtm from '../../asets/section2/DTM.png'
import Aos from "aos";
import { PatternFormat } from "react-number-format";
import LoadingSpinnerButton from '../leadingBtn/LoadingSpinnerButton'
const Kurslar = ({ open, setOpen }) => {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);
    // const [open, setOpen] = useState(false);


    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [loading, setLoading] = useState(false)


    const [formData, setFormData] = useState({
        name: "",
        number: "",
        kurs: "",
    });



    const sendMsgToBot = async (e) => {

        e.preventDefault("")
        let aaa = `👤<b> O'quvchi ro'yxatdan o'tdi</b>%0A%0A <b>Ismi</b>: ${formData.name}%0A%0A ☎️ Tel: ${formData.number}%0A ✉️ Kurs: ${formData.kurs}%0A `

        let tokenBot = "6230509348:AAHqIOcv8e6rUeikjKdc27-H1rMw1oLux0k"; // Azimjon
        let chatId = "39464759"; // Azimjon

        // let tokenBot = "6189129353:AAGm-0xifsZE4DGO8XETTxnMP7rvZNWzWHo";  // Diyorbek
        // let chatId = "1986279045"; // Diyorbek

        let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${aaa}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", tempUrl, true);
        api.send();


        setFormData({
            name: "",
            number: "",
            kurs: "",
        })
    }

    const onClear = () => {

    };
    return (
        <>
            <div data-aos="fade-up" className="oquvkurslari">
                <div className="oquv">
                    <p>O`quv kurslar</p>
                </div>
                <div className="kusrlar">
                    <div data-aos="fade-up" className="kusrlar_box-all">
                        <div className="kusrlar_box" >
                            <img src={It} alt="" />
                        </div>
                        <div className="kusrlar_box-btn">
                            <button className="regis"
                                onClick={() => {
                                    setTimeout(() => {
                                        setModal(true);

                                    }, 1)

                                }}
                            >
                                Ma'lumot
                            </button>
                            <button className="regis"
                                onClick={() => {
                                    setOpen(true);

                                }}
                            >
                                Ro'yhatdan o'tish
                            </button>
                        </div>

                    </div>
                    <div data-aos="fade-up" className="kusrlar_box-all">
                        <div className="kusrlar_box img2">
                            <img src={Rus} alt="" />
                        </div>
                        <div className="kusrlar_box-btn">
                            <button className="regis"
                                onClick={() => {

                                    setTimeout(() => {
                                        setModal2(true);

                                    }, 1);
                                }}
                            >
                                Ma'lumot
                            </button>
                            <button className="regis"
                                onClick={() => {
                                    setOpen(true);


                                }}
                            >
                                Ro'yhatdan o'tish
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="kusrlar_box-all">
                        <div className="kusrlar_box img3" >
                            <img src={Eng} alt="" />
                        </div>

                        <div className="kusrlar_box-btn">

                            <button className="regis"
                                onClick={() => {

                                    setTimeout(() => {
                                        setModal3(true);

                                    }, 1);
                                }}
                            >
                                Ma'lumot
                            </button>
                            <button className="regis"
                                onClick={() => {
                                    setOpen(true);

                                }}
                            >
                                Ro'yhatdan o'tish
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="kusrlar_box-all">
                        <div className="kusrlar_box" >
                            <img src={Dtm} alt="" />
                        </div>
                        <div className="kusrlar_box-btn">
                            <button className="regis"
                                onClick={() => {
                                    setTimeout(() => {
                                        setModal4(true);
                                    }, 1);
                                }}
                            >
                                Ma'lumot
                            </button>
                            <button className="regis"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                Ro'yhatdan o'tish
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setModal(false)} className="noneDsp" style={modal ? { display: "block" } : { display: "none" }}></div>
            <div onClick={() => setModal2(false)} className="noneDsp" style={modal2 ? { display: "block" } : { display: "none" }}></div>
            <div onClick={() => setModal3(false)} className="noneDsp" style={modal3 ? { display: "block" } : { display: "none" }}></div>
            <div onClick={() => setModal4(false)} className="noneDsp" style={modal4 ? { display: "block" } : { display: "none" }}></div>
            <div onClick={() => setOpen(false)} className="noneDsp" style={open ? { display: "block" } : { display: "none" }}></div>

            <div className="model_box" style={modal ? { display: "block" } : { display: "none" }}>
                <div className="ModalHeader" >
                    <h2> Web dasturlash</h2>
                    <h1 onClick={() => setModal(false)}>+</h1></div>
                <div id="modal">
                    <div className="webdiv">
                        <img src={html} alt="" />

                        <b>HTML</b>
                    </div>
                    <div className="webdiv">
                        <img src={css} alt="" />
                        <b>CSS</b>
                    </div>
                    <div className="webdiv">
                        <img src={boot} alt="" />

                        <b>BOOSTRAP</b>
                    </div>
                    <div className="webdiv">
                        <img src={js} alt="" />

                        <b>JAVASCRIPT</b>
                    </div>
                    <div className="webdiv">
                        <img src={reactjs} alt="" />

                        <b>REACT JS</b>
                    </div>
                    <div className="webdiv">
                        <img src={nodejs} alt="" />

                        <b>NODE JS</b>
                    </div>
                </div>
            </div>
            <div className="model_box" style={modal2 ? { display: "block" } : { display: "none" }}>
                <div className="ModalHeader" >
                    <h2>Rus-tili</h2>
                    <h1 onClick={() => setModal2(false)}>+</h1>
                </div>
                <div className="Info_box">
                    ALGORITM da rus tilini o'rgatish dasturi 3 bosqichdan iborat: 3+3+17 оу 1-bosqich 3 oу davom etadi va unda dastlabki eng muhim mavzularda so'zlashish, to'g'ri talaffuz qilish va to'g'ri gapirish qoidalari o'rgatiladi. 2-bosqich ham 3 оу davom etadi va bu bosqichda o'quvchilarga markaz binosida o'zbek tilida so'zlashish taqiqlab qo'yiladi. 2-bosqichda o'quvchilar mavzularni rus tilida amaliy tarzda bajarishlari belgilangan. Masalan, kurs uchun to'lov qilish rus tilida amalga oshiriladi   va bankdan kredit olish rus tilida bankga borib gaplashiladi yoki dorixonadan rus tilida dori sotib olish kabi. 3-bosqich 1 oу davom etadi va unda o'quvchining sohasiga oid bo'lgan mavzularda so'zlashish o'rgatiladi. Masalan, quruvchi bo'lsangiz qurilishga oid, shifokor bo'lsangiz bemorlarni qabul qilishga oid, matematika fakulteti talabasi bo'lsangiz, rus tilida matematika darsini o'tishni o'rganasiz.
                </div>
            </div>
            <div className="model_box" style={modal3 ? { display: "block" } : { display: "none" }}>
                <div className="ModalHeader" >
                    <h2>Ingilz-tili</h2>
                    <h1 onClick={() => setModal3(false)}>+</h1>
                </div>
                <div className="Info_box">
                    ALGORITM o'quv markazida INGLIZ TILINI O'RGATISH  dasturi 5 bosqichdan iborat: 3+3+3+3+3 15 oy. 1-bosqich 3 oу davom etadi va unda sodda grammatik mavzular, READING va LiSTENING bo'yicha kitoblar berilib, dastlabki tushunchalar o'rgatiladi. 2-bosqich ham 3 оу, unda mavzular murakkablashadi, o'quvchining nutqi shakllantiriladi, darslarning yarmi o'zbek tilida, yarmi ingliz tilida olib boriladi. 3-bosqich 3 оу, unda o'zbek tilida gapirish taqiqlanadi. Bu bosqichda o'quvchi ingliz tilida erkin muloqot qila oladigan darajaga yetadi. 4-bosqich 3 оу, unda ingliz grammatikasi to'la yakunlanadi. READING va LISTENING qobiliyatlari ADVANCED darajasiga chiqadi. 5-bosqich 5 оу bo'ladi. Unda o'quvchi IELTS imtixoniga Reading, Listening, Writing, Speaking bo'limlariga maxsus xolatda tayyorgarlik ko' radi. Darslar har kuni olib boriladi. O'quvchilar o'qituvchi nazoratida o'quv markazi hududida tayyorgarlik olib borishadi. Har 3 oyda imtixon, unda 80% dan yuqori natija ko'rsatgan , keyingi bosqichda o'qiy oladi.
                </div>
            </div>
            <div className="model_box" style={modal4 ? { display: "block" } : { display: "none" }}>
                <div className="ModalHeader" >
                    <h2>DTM</h2>
                    <h1 onClick={() => setModal4(false)}>+</h1>
                </div>
                <div className="Info_box">
                    Ingliz tili, rus tili, ona tili va adabiyot, tarix, huquq, matematika (uz/rus), fizika (uz/rus), kimyo (uz/rus), biologiya (uz/rus) fanlaridan abituriyentlar uchun kurslar mavjud va o'quv davomiyligi sentabr oyidan iyul oyi oxirigacha davom etadi. Har bir fan doirasida o'quv dasturlar mavjud bo'lib, dastur aynan yuqoridagi 11 oy uchun moslab ishlab chiqilgan. Majburiy hisoblangan: Ona tili, matematika, o'zbekiston tarixi fanlaridan intensiv kurslar tashkil etilgan bo'lib, uch oylik o'quv dasturi ishlab chiqilgan. DTM guruhlariga 9-10-sinf o'quvchilari ham ro'yhatdan o'tishlari va xohishlariga ko'ra 2 yil davomida ustozlarimizdan dars olishlari mumkin!
                </div>
            </div>


            <div className="register" style={open ? { display: "block" } : { display: "none" }}>
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




                    <LoadingSpinnerButton loading={loading} onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                        }, 2000)
                    }} />
                </form>
            </div>
        </>
    )

}

export default Kurslar
