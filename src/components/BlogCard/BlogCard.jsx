import React from 'react';

import "./BlogCard.scss";

const BlogCard = ({ image, title, text, auth, address }) => {
	return (
		<div className="BlogCard">
			<img className="BlogCard-img" src={image} alt="blogCardImg" />

			<div className="BlogCard-content">
				<h4 className="BlogCard-title">{title}</h4>
				<p className="BlogCard-text">{text}</p>
				<div style={{display: "flex", justifyContent: "space-between"}}>
					<span className="BlogCard-auth">{address}</span>
					<span className="BlogCard-auth">{auth}</span>
				</div>
			</div>
		</div>
	)
}

export default BlogCard;