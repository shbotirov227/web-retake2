import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../assets/images/logo.png";
import HeroSectionImg from "../../assets/images/heroSectionImg.png";

import "./Header.scss";

const Header = () => {

	return (
		<div className="Header">
			
			<div className="container">
				<div className="Header-navigation">
					<Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
					<div>
						<HashLink to="/#events" className="Header-link">Books</HashLink>
						<HashLink to="/#services" className="Header-link">Services</HashLink>
						<HashLink to="/#blog" className="Header-link">Forums</HashLink>
						<HashLink to="/#subscribes" className="Header-link">Packages</HashLink>
						<Link to="/about-us" className="Header-link">About us</Link>
						<Link to="/contact" className="Header-link">Contact us</Link>
						<Link to="/signup" className="btn-primary">Sign up</Link>
					</div>
				</div>

				<div className="Header-heroSection">

					<div className="Header-heroSection-left">
						<img src={HeroSectionImg} alt="" />
					</div>

					<div className="Header-herSection-right">
						<h2 className="Header-heroSection-title2">Find your favourite book !</h2>
						<p className="Header-heroSection-text">The right book in the right hands at the right time can change the world.</p>
					</div>
				</div>

				{/* <div className="placesSection">
					<div className="placesSection-input">
						<label htmlFor="event">Search Event</label>
						<input type="text" placeholder="Event..." />
					</div>

					<div className="placesSection-input">
					<label htmlFor="place">Place</label>
						<input type="text" placeholder="Place..." />
					</div>

					<div className="placesSection-input">
						<label htmlFor="date">Time</label>
						<select name="eventTime" id="eventTime">
							<option value="anyDate">Any date</option>
							<option value="month">Month</option>
							<option value="year">Year</option>
						</select>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Header;