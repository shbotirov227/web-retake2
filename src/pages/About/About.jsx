import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

import "./About.scss";

const About = () => {
	return (
		<div className="About">
			<Header />
			<div className="About-inner container">

				<div style={{ display: "flex" }}>
					<p className="About-text">
						For more than 30 years, "Read it" has been a trusted source for book reviews, recommendations and author interviews. Our monthly book review and recommendation guide, available in both print and digital editions, reaches a nationwide audience of more than 400,000 avid readers through our 3,500 subscribing public libraries and bookstores.

						"Read it" highlights intriguing new voices as well as anticipated bestsellers, pointing readers to the best new releases across all genres including historical fiction, literary fiction, popular fiction, mysteries & thrillers, nonfiction, biography & memoir, romance, cozies, audiobooks, lifestyles, children’s, young adult and more.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About;