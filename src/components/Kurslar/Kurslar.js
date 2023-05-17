import React, { useState, useEffect } from "react";

import './style.css'
import html from "../../asets/section2/html5.svg";
import css from "../../asets/section2/css.svg";
import boot from "../../asets/section2/bootstrap4.svg";
import js from "../../asets/section2/js.svg";
import reactjs from "../../asets/section2/reactjs.svg";
import nodejs from "../../asets/section2/nodejs.svg";
import { Register } from "../pages/Register/Register";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Aos from "aos";

const Kurslar = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    const [open, setOpen] = useState(false);
    // navigate

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);
    const toggle4 = () => setModal4(!modal4);
    return (
        <>
            <div data-aos="fade-up" className="oquvkurslari">
                <div className="oquv">
                    <p>O`quv kurslar</p>
                </div>
                <div className="kusrlar">
                    <div data-aos="fade-up" className="kusrlar_box img1" onClick={toggle}>
                        <button className="regis"
                            onClick={() => {
                                setOpen(true);
                                setTimeout(() => {
                                    setModal(false);
                                }, 1);
                            }}
                        >
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                    <div data-aos="fade-up" className="kusrlar_box img2" onClick={toggle2}>

                        <button className="regis"
                            onClick={() => {
                                setOpen(true);
                                setTimeout(() => {
                                    setModal2(false);
                                }, 1);
                            }}
                        >
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                    <div data-aos="fade-up" className="kusrlar_box img3" onClick={toggle3}>


                        <button className="regis"
                            onClick={() => {
                                setOpen(true);
                                setTimeout(() => {
                                    setModal3(false);
                                }, 1);
                            }}
                        >
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                    <div data-aos="fade-up" className="kusrlar_box img4" onClick={toggle4}>

                        <button className="regis"
                            onClick={() => {
                                setOpen(true);
                                setTimeout(() => {
                                    setModal4(false);
                                }, 1);
                            }}
                        >
                            Ro'yxatdan o'tish
                        </button>
                    </div>
                </div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Web dasturlash</ModalHeader>
                    <ModalBody id="modal">
                        <div className="webdiv">
                            <img src={html} alt="" />

                            <p>HTML</p>
                        </div>
                        <div className="webdiv">
                            <img src={css} alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="webdiv">
                            <img src={boot} alt="" />

                            <p>BOOSTRAP</p>
                        </div>
                        <div className="webdiv">
                            <img src={js} alt="" />

                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="webdiv">
                            <img src={reactjs} alt="" />

                            <p>REACT JS</p>
                        </div>
                        <div className="webdiv">
                            <img src={nodejs} alt="" />

                            <p>NODE JS</p>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={modal2} toggle={toggle2}>
                    <ModalHeader toggle={toggle2}>Rus-tili</ModalHeader>
                    <ModalBody>
                        ALGORITM da rus tilini o'rgatish dasturi 3 bosaichdan iborat:
                        3+3+17 оу 1-bosaich 3 oу davom etadi va unda dastlabki eng muhim
                        mavzularda so'zlashish, to 'g'ri talaffuz va to 'g'ri gapirish
                        qoidalari o-rgatiladi. 2-bosqich ham 3 оу davom etadi va bu
                        bosaichda o-quvchilarga markaz binosida o'zbek tilida so "zlashish
                        taqiqlab qo s iladi. 2-bosqichda o “quvchilar mavzularni rus
                        tilida amaliy tarzda bajarishlari belgilangan Masalan . kurs uchun
                        to "ov ailish rus tilida amalga oshiriladi a bankdan kredit olish
                        rus tilida bankka borib gaplashiladi yoki aptekadan rus tilida
                        dori sotib olish kabi. . 3-bosqich 1 oу davom etadi va unda
                        o'quvchining sohasiga oid bo 'Igan mavzularda so'zlashish
                        o:rgatiladi , Masalan quruvchi bo'lsangiz qurilishga oid, vrach bo
                        “lsangiz bemorlarni qabul qilishga oid , matematika fakulteti
                        talabasi bo'lsangiz, rus tilida matematika darsini otishni
                        organasiz. Tо "ovlarimiz: 1 oyga so "mdan
                    </ModalBody>
                </Modal>
                <Modal isOpen={modal3} toggle={toggle3}>
                    <ModalHeader toggle={toggle3}>Ingilz-tili</ModalHeader>
                    <ModalBody>
                        ALGORITM oquv MARKAZIDA INGLZ TIN ALGORITM O'RGATISH DASTURI
                        ALGORITM da ingiiz tiiini orgatish dasturi 5 bosqichdan iborat:
                        3+3+3+351 у 1-bosaich 3 oу davom etadi va unda sodda grammatik
                        mavzular, READING va LSTENING bo 'yicha kitoblar berilib,
                        dastlabki tushunchalar orgatiladi. 2-bosqich ham 3 оу. s Unda
                        mavzular murakkab- Iashadi, , o quvchining nutqi shakllantiriladi
                        , dars- larning yarmi ozbekcha yarmi inglizcha olib boriladi.
                        3-bosqich 3 оу. Unda o'zbek tiida gapirish taqiq- lanadi bu
                        bosqichda oquvchi ingiz tiiida erkin mulogot aiia oladigan
                        darajaga yetadi. 4-bosqich 3 оу. Unda ingiiz grammatikasi toa
                        yakunlanadi READING va LISTENING qobiliyatlari ADVANCED darajasiga
                        chiqadi. 5-bosqich 5 оу boadi. Unda o'quvchi IELTS imti- xoniga
                        Reading, Listening, Writing, Speaking bo Jim- lariga maxsus
                        xolatda tayyorgarlik ko radi. Darslar har kuni olib boriladi
                        Oquvchilar o;qituvch nazoratida o'quv markazi hududida
                        tayyorgarlik olib borishadi. Har 3 oyda imtihon, , unda во % dan
                        yuqori natija korsatgan keyingi bosqichda o'qiy oladi.
                        To'lovlarimiz: 1 oyga 249 00 so tmdan
                    </ModalBody>
                </Modal>
                <Modal isOpen={modal4} toggle={toggle4}>
                    <ModalHeader toggle={toggle4}>DTM</ModalHeader>
                    <ModalBody>
                        Ingliz tili, rus tili, ona tili va adabiyot, tarix, huquq, matematika (uz/rus), fizika (uz/rus), kimyo (uz/rus), biologiya (uz/rus) fanlaridan abituriyentlar uchun kurslar mavjud va o'quv davomiyligi sentabr oyidan iyul oyi oxirigacha davom etadi. Har bir fan doirasida o'quv dasturlar mavjud bo'lib, dastur aynan yuqoridagi 11 oy uchun moslab ishlab chiqilgan. Majburiy hisoblangan: Ona tili, matematika, o'zbekiston tarixi fanlaridan intensiv kurslar tashkil etilgan bo'lib, uch oylik o'quv dasturi ishlab chiqilgan. DTM guruhlariga 9-10-sinf o'quvchilari ham ro'yhatdan o'tishlari va xohishlariga ko'ra 2 yil davomida ustozlarimizdan dars olishlari mumkin!
                    </ModalBody>
                </Modal>

            </div>
            <div className="register_modol" style={open ? { display: "flex" } : {}}>
                <Register setOpen={setOpen} />
            </div>
        </>
    )
}

export default Kurslar
