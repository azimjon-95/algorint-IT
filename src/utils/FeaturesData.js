import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Web Dasturlash',
		description: "Bizning o'quvchilar nufuzli IT kompaniyalarda ishlashmoqda",
		icon: iconStyle(FaUserGraduate),
		imgClass: 'one',
	},
	{
		name: 'Ingiliz tili',
		description: "Bizning o'quvchilar ELTS-8 olishmoqda",
		icon: iconStyle(FaUserGraduate),
		imgClass: 'two',
	},

];
