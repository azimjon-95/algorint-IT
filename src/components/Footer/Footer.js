import React from 'react';
import './FooterStyles.css'
import logo from '../../asets/footer/logo.png'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
// import { footerData, footerSocialData } from '../../data/FooterData';

function Footer() {
	return (
		<div className='F_box'>
			<div className="Footer_cont">
				<div className="first">
					<h1><img width={70} src={logo} alt="" /> Algoritm</h1>
					<div className='call'>
						<b>📞Telefon raqami:</b>
						<a href="tel:+998788889888">+998 (78) 888 9 888</a>
					</div>
					<div className='call'>
						<b>🧭Manzil:</b>
						<p>9.Navoiy; Namangan sh. Shirin dunyo yonida</p>
					</div>
					<b>Tarmoqlar:</b>
					<div className="tarmoqlar">
						<a href="https://youtube.com/@algoritmedu4164"><AiFillYoutube /></a>
						<a href="https://instagram.com/algoritm_edu?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram /></a>
						<a href="https://t.me/algoritm_edu"><FaTelegramPlane /></a>
					</div>
				</div>
				<div className="footer_box">
					<b>Ma'lumotlar</b>
					<a href="">FAQ</a>
					<a href="">Blog</a>
					<a href="">Ommaviy oferta</a>
				</div>
				<div className="footer_box">
					<b>Ommabop Kurslar</b>
					<a href="">Web dasturlash</a>
					<a href="">Ingilz tili</a>
					<a href="">Rus tili</a>
					<a href="">DTM</a>

				</div>
				<div className="footer_box">
					<b>Bizning Loyihalar</b>
					<a href="">Houzing</a>
					<a href="">Olma.uz</a>
					<a href="">Fusafo.uz</a>
				</div>

			</div>
			<div className="footer_links">
				<p>© Algorithm Ta'lim, 2023
					Barcha huquqlar himoyalangan.</p>
			</div>
		</div>
	)
}

export default Footer;
