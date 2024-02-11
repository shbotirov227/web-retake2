import React from 'react';
import GroupImg1 from "../../assets/images/liveGroupImg1.jpg";
import GroupImg2 from "../../assets/images/liveGroupImg2.jpg";
import GroupImg3 from "../../assets/images/liveGroupImg3.jpg";
import GroupImg4 from "../../assets/images/liveGroupImg4.jpg";

import "./MakeEvent.scss";

const MakeEvent = () => {
	return (
		<div className="MakeEvent">
			<div className="MakeEvent-inner container">

				{/* <div className="MakeEvent-content"> */}
				<h3 className="MakeEvent-title">Live discussion groups</h3>

				<div className="MakeEvent-groups">
					<div className="MakeEvent-group">
						<h4 className="group-title">The Literary Queers</h4>
						<p className="group-text">The Literary Queers is a virtual, monthly gathering of queer folks interested in reading and discuss...</p>
						<p className="group-online">DISCUSSES ONLINE</p>
						<span>593 members</span>

						<h4 className="group-currentlyReading">CURRENTLY READING</h4>
						<img src={GroupImg1} alt="" />
					</div>

					<div className="MakeEvent-group">
						<h4 className="group-title">Books That Bind</h4>
						<p className="group-text">Building Bonds through books and conversation. Our club reads a wide range of authors and genres.</p>
						<p className="group-online">DISCUSSES ONLINE</p>
						<span>567 members</span>

						<h4 className="group-currentlyReading">CURRENTLY READING</h4>
						<img src={GroupImg2} alt="" />
					</div>

					<div className="MakeEvent-group">
						<h4 className="group-title">Finding Our Voices</h4>
						<p className="group-text">An online group that meets on Zoom for an hour once a month. We illuminate the complexity, insidious</p>
						<p className="group-online">MEETS VIRTUALLY</p>
						<span>301 members</span>

						<h4 className="group-currentlyReading">CURRENTLY READING</h4>
						<img src={GroupImg3} alt="" />
					</div>

					<div className="MakeEvent-group">
						<h4 className="group-title">Horror Book Club and Long Furby Appreciation Society</h4>
						<p className="group-text">Horror of all kinds: paranormal, psychological, cosmic, furbies.</p>
						<p className="group-online">DISCUSSES ONLINE</p>
						<span>391 members</span>

						<h4 className="group-currentlyReading">CURRENTLY READING</h4>
						<img src={GroupImg4} alt="" />
					</div>
				</div>

				
			</div>
		</div>
	)
}

export default MakeEvent;