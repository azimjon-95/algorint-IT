import React, { useState, useEffect } from "react";
import './FeaturesStyles.css'
import { FaUserGraduate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Aos from "aos";

const Features = () => {
	useEffect(() => {
		Aos.init({ duration: 700 });
	}, []);
	const [modal2, setModal2] = useState(false);
	const [modal3, setModal3] = useState(false);
	const toggle2 = () => setModal2(!modal2);
	const toggle3 = () => setModal3(!modal3);

	return (

		<div data-aos="flip-left" className='Containers'>

			<h3 className='FeatureTitle'>Natijalar</h3>

			<div className='FeatureWrapper'>

				<div data-aos="flip-left" onClick={toggle2} className='FeatureColumn'>
					<div className='FeatureImageWrapper'>
						<FaUserGraduate />
					</div>
					<h3 className='FeatureName'>Web Dasturlash</h3>
					<p className='FeatureText'>Bizning o'quvchilar nufuzli IT kompaniyalarda ishlashmoqda</p>
				</div>
				<div data-aos="flip-left" onClick={toggle3} className='FeatureColumn'>
					<div className='FeatureImageWrapper'>
						<FaUserGraduate />
					</div>
					<h3 className='FeatureName'>Ingliz tili</h3>
					<p className='FeatureText'>Bizning o'quvchilar yuqori natijalar bilan kurslarni yakunlashdi</p>
				</div>


				<Modal isOpen={modal2} toggle={toggle2}>
					<ModalHeader toggle={toggle2}>IT Web dasturlash darslari raqamlarda: </ModalHeader>
					<ModalBody>
						Web dasturlash (kurslari). O'quv kurslari 2019 yil Mart oyida tashkil etilgan. 2019-2023 yil May oyigacha IT da 1500 dan ortiq o'quvchilar Web dasturlash kurslarini to'liq o'qib sertifikat olib bitirishgan. 2022 yilda 5/4  o'quvchi Web dasturlash kurslarida talim olgan va ulardan 4/6 nafari darslarni muvoffaqiyatli tamomlagan. Ulardan 120 dan ortig'i, yani 30% ishlarga joylashib o'z o'rnilarini topishgan, 250 dan ortig'i maktab o'quvchilari va ularning 80% algoritm IT labaratoriyasida loyihalar bilan amaliyot o'tishmoqda. Masalan eng faol o'quvchilarimizdan Ibrohim Jalolov, Amerikaning "Aveks dizayn" kompaniyasining toshkentdagi filialida senior dasturchi sifatida faoliyat yuritmoqda. 2023 yilda "ALGORITM" 100 nafar yoshlarga IT Web dasturlash ni o'rgatishni maqsad qilgan.
					</ModalBody>
				</Modal>
				<Modal isOpen={modal3} toggle={toggle3}>
					<ModalHeader toggle={toggle3}>Ingilz tili</ModalHeader>
					<ModalBody>
						Algoritim Talim o'quv markazida 2020 yilda tashkil bo'lgandan beri 4000 mingdan ortiq o'quvchi ingliz tili kurslarida  o'qishdi. Ulardan 3000 mingdan ortig'i turli darajadagi IELTS SEFR sertifikatlariga ega bo'lishdi. 2022 yilda 1200 dan  ortiq o'quvchi markazimizdan ingliz tilini o'rganishdi va ulardan 300 dan ortig'i turli darajadagi sertifikatlar olishdi.
						"Algoritim ta'lim" o'quv markazi IDP IELTS bo'yicha "Education" bilin hamkorlik ham qiladi. Oliy maqsadimiz Respublikada IELTS dan eng ko'p " 9" ball olgan markazga aylanish!
					</ModalBody>
				</Modal>
			</div>
		</div>

	);
};

export default Features;
