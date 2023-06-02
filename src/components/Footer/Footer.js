import React, { useEffect, useState } from "react";
import './FooterStyles.css'
import logo from '../../asets/footer/logo.png'
import { FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
import Aos from "aos";

function Footer() {
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
			top: 660,
			behavior: "smooth",
		});
	};
	const scrollbottom = () => {
		window.scrollTo({
			top: 1220,
			behavior: "smooth",
		});
	};
	const scrolltop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const scrollFAQ = () => {
		window.scrollTo({
			top: 2100,
			behavior: "smooth",
		});
	}; useEffect(() => {
		Aos.init({ duration: 700 });
	}, []);
	return (
		<div className='F_box'>
			<div className="Footer_cont">
				<div className="first" data-aos="zoom-in-right">
					<h1><img width={70} src={logo} alt="" /> Algoritm</h1>
					<div className='call' >
						<b> <FaPhoneAlt /> Telefon raqami:</b>
						<a href="tel:+998973701818">+998 (97) 370 18 18</a>
					</div>
					<div className='call'>
						<b><TiLocation /> Manzil:</b>
						<p>Namangan sh. 9.Navoiy, Shirin dunyo yonida</p>
					</div>
					<b>Tarmoqlar:</b>
					<div className="tarmoqlar">
						<a href="https://youtube.com/@algoritmedu4164"><AiFillYoutube /></a>
						<a href="https://instagram.com/algoritm_edu?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram /></a>
						<a href="https://t.me/algoritm_edu"><FaTelegramPlane /></a>
					</div>
				</div>
				<div data-aos="zoom-in-right" className="footer_box">
					<b>Ma'lumotlar</b>
					<button onClick={scrollFAQ} >FAQ</button>
					<button onClick={scrollbottom}>Blog</button>
					<button onClick={scrolltop}>Ommaviy oferta</button>
				</div>
				<div data-aos="zoom-in-right" className="footer_box">
					<b>Ommabop Kurslar</b>
					<button onClick={scrollUp}>Web dasturlash</button>
					<button onClick={scrollUp}>Ingilz tili</button>
					<button onClick={scrollUp}>Rus tili</button>
					<button onClick={scrollUp}>DTM</button>

				</div>
				<div data-aos="zoom-in-right" className="footer_box">
					<b>Bizning Loyihalar</b>
					<a href="https://xalqarologistika.uz/" >Xalqarologistika.uz</a>
					<a href="https://houzing-demo.netlify.app/" >Houzing</a>
					<a href="https://www.crm-edu.uz/" >Crm-edu.uz</a>
					<a href="https://www.mustang-shoes.uz/page/1" >Mustang-shoes.uz</a>
					<a href="https://abdullajonovich.vercel.app/" >Azimjon.uz</a>
				</div>

			</div>
			<div className="footer_links">
				<p>© Algoritm Ta'lim, 2023
					Barcha huquqlar himoyalangan.
				</p>
			</div>
		</div>
	)
}

export default Footer;
