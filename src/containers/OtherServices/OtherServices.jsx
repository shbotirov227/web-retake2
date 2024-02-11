import React from 'react';
import DrinkBox1 from "../../assets/images/servicesCardImg1.jpg";
import DrinkBox2 from "../../assets/images/servicesCardImg2.jpg";
import DrinkBox3 from "../../assets/images/servicesCardImg3.jpg";
import DrinkBox4 from "../../assets/images/servicesCardImg4.jpg";
import DrinkBox5 from "../../assets/images/servicesCardImg5.jpg";
import DrinkBox6 from "../../assets/images/servicesCardImg6.jpg";


import "./OtherServices.scss";

const OtherServices = () => {

	const data = [
		{
			id: 0,
			img: DrinkBox1,
			title: "Drink box"
		},

		{
			id: 1,
			img: DrinkBox2,
			title: "Member's book of the month"
		},

		{
			id: 2,
			img: DrinkBox3,
			title: "Trading"
		},

		{
			id: 3,
			img: DrinkBox4,
			title: "Book donation"
		},
		
		{
			id: 3,
			img: DrinkBox6,
			title: "Discussion groups"
		},

		{
			id: 4,
			img: DrinkBox5,
			title: "And other services..."
		},
	]


	return (
		<div className="OtherServices container" id="services">
			<h2 className="Blog-title">Services</h2>

			<div className="OtherServices-services">
				{
					data.map((index, el) => (
						<div className="OtherServices-item" key={data[el].id}>
							<img className="OtherServices-itemImg" src={data[el].img} alt="otherServicesCardImg" />
							<h4 className="OtherServices-itemTitle">{data[el].title}</h4>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default OtherServices;