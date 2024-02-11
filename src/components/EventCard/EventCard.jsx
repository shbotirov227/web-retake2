import React from 'react';

import "./EventCard.scss";


const EventCard = ({ eventImg, title, text, date, month, eventType, author }) => {
	return (
		<div className="EventCard">
			<img className="EventCard-img" src={eventImg} alt="eventImg" />

			<div className="EventCard-bottom">
				<div className="dates">
					<h4 className="EventCard-author">{author}</h4>
					{/* <h4 className="EventCard-type">{eventType}</h4> */}
				</div>
				<div>
					{/* <h3 className="EventCard-title">{title}</h3> */}
					<p className="EventCard-text">{text}</p>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
						<h4 className="EventCard-date">$ {date}</h4>

					<div style={{ display: "flex" }}>
						{/* <span className="EventCard-month">{month}</span> */}
					</div>
				</div>
			</div>

			<button className="buyBtn">Add to cart</button>
		</div>
	)
}

export default EventCard;