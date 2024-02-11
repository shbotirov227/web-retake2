import React from 'react';

import "./PackageCard.scss";

const PackageCard = ({ title, items, cost }) => {
	return (
		<div className="PackageCard">
			
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<h4 className="PackageCard-title">{title}</h4>
				<span className="PackageCard-cost">{cost}</span>
			</div>

			<ul className="PackageCard-items">

				{
					items.map((index, element) => (
						<div className="PackageCard-services" key={index}>
							<li style={{listStyleType: "initial"}}></li>
							{/* <img className="PackageCard-img" src={CheckIcon} alt="packageCardImg" width={15} height={15} /> */}
							<li className="PackageCard-item">{items[element]}</li>
						</div>
					))
				}
			</ul>
			<button className="PackageCard-btn">Buy now</button>
		</div>
	)
}

export default PackageCard;