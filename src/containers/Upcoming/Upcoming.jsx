import React, { useState } from 'react';
import EventCard from "../../components/EventCard/EventCard";
import bookImg1 from "../../assets/images/bookImg1.jpg";
import bookImg2 from "../../assets/images/bookImg2.jpg";
import bookImg3 from "../../assets/images/bookImg3.jpg";
import bookImg4 from "../../assets/images/bookImg4.jpg";
import bookImg5 from "../../assets/images/bookImg5.jpg";
import bookImg6 from "../../assets/images/bookImg6.jpg";
import bookImg7 from "../../assets/images/bookImg7.jpg";
import bookImg8 from "../../assets/images/bookImg8.jpg";
import bookImg9 from "../../assets/images/bookImg9.jpg";
import bookImg10 from "../../assets/images/bookImg10.jpg";
import bookImg11 from "../../assets/images/bookImg11.jpg";
// import EventCardImg2 from "../../assets/images/eventCardImg2.jpg";
// import EventCardImg3 from "../../assets/images/eventCardImg3.png";
// import EventCardImg4 from "../../assets/images/eventCardImg4.jpg";
// import EventCardImg5 from "../../assets/images/eventCardImg5.jpg";
// import EventCardImg6 from "../../assets/images/eventCardImg6.jpg";

import "./Upcoming.scss";


const Upcoming = () => {

	const data = [
		{
			id: 0,
			eventImg: bookImg4,
			eventType: "Drama",
			author: "Eve Ocotillo",
			date: "10.23",
			month: "USD",
			title: "The Violet and the Tom (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
		
		{
			id: 1,
			eventImg: bookImg6,
			eventType: "Romantic",
			author: "FayJay",
			date: "9.35",
			month: "USD",
			title: "The Student Prince (The Student Prince, #1)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 2,
			eventImg: bookImg3,
			eventType: "Melodrama",
			author: "Cordelia Kingsbridge",
			date: "20.74",
			month: "USD",
			title: "Heart in Hand (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 3,
			eventImg: bookImg1,
			eventType: "Horror",
			author: "RemainNameless",
			date: "8.45",
			month: "USD",
			title: "Control (online fiction)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
		
		{
			id: 4,
			eventImg: bookImg5,
			eventType: "Melodrama",
			author: "Cordelia Kingsbridge",
			date: "12.77",
			month: "USD",
			title: "Just Hit Send (Free online read)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 5,
			eventImg: bookImg2,
			eventType: "Horror",
			author: "Kaje Harper",
			date: "9.37",
			month: "USD",
			title: "Nor Iron Bars a Cage (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},

		{
			id: 6,
			eventImg: bookImg7,
			eventType: "Drama",
			author: "Eve Ocotillo",
			date: "10.23",
			month: "USD",
			title: "The Violet and the Tom (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
		
		{
			id: 7,
			eventImg: bookImg9,
			eventType: "Romantic",
			author: "FayJay",
			date: "9.35",
			month: "USD",
			title: "The Student Prince (The Student Prince, #1)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 8,
			eventImg: bookImg8,
			eventType: "Melodrama",
			author: "Cordelia Kingsbridge",
			date: "20.74",
			month: "USD",
			title: "Heart in Hand (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 9,
			eventImg: bookImg10,
			eventType: "Horror",
			author: "RemainNameless",
			date: "8.45",
			month: "USD",
			title: "Control (online fiction)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		},
		
		{
			id: 10,
			eventImg: bookImg11,
			eventType: "Melodrama",
			author: "Cordelia Kingsbridge",
			date: "12.77",
			month: "USD",
			title: "Just Hit Send (Free online read)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti corrupti aliquid, praesentium possimus"
		},
		
		{
			id: 11,
			eventImg: bookImg1,
			eventType: "Horror",
			author: "Kaje Harper",
			date: "9.37",
			month: "USD",
			title: "Nor Iron Bars a Cage (ebook)",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam placeat, repellendus corrupti aliquid, praesentium"
		}
	];
	
	return (
		<div className="Upcoming container" id="events">
			<div className="Upcoming-selectSection">
				<h2 className="Upcoming-title">Books</h2>

				{/* <div>
					<select name="bookType" id="">
						<option value="bookType">Any Type</option>

						<option value="bookType">Famous</option>
						<option value="bookType">Romans</option>
						<option value="bookType">Historical</option>
						<option value="bookType">Political</option>
					</select>

					<select name="bookCategory" id="">
						<option value="bookCategory">Any Category</option>

						<option value="bookType">Romantic</option>
						<option value="bookType">Drama</option>
						<option value="bookType">Melodrama</option>
						<option value="bookType">Horror</option>
					</select>
				</div> */}
			</div>

			<div className="Upcoming-cards">
				{
					data.map((event) => (
						<EventCard
							value={event}
							key={event.id}
							eventImg={event.eventImg}
							eventType={event.eventType}
							title={event.title}
							text={event.text}
							date={event.date}
							month={event.month}
							author={event.author}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Upcoming;