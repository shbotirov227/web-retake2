import React from 'react';
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogCardImg1 from "../../assets/images/blogCardImg1.jpg";
import BlogCardImg2 from "../../assets/images/blogCardImg2.jpg";
import BlogCardImg3 from "../../assets/images/blogCardImg3.jpg";

import "./Blog.scss";

const Blog = () => {

	const data = [
		{
			id: 0,
			image: BlogCardImg2,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat..",
			// auth: "12 Mar - Jhon Doe",
			address: "Brooklyn, USA",
		},
		
		{
			id: 1,
			image: BlogCardImg3,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat..",
			// auth: "1 June - Mark Green",
			address: "Chicago, USA",
		},
		
		{
			id: 2,
			image: BlogCardImg1,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat..",
			// auth: "15 Sept - Jack Wallman",
			address: "Texas, USA",
		},
	]

	return (
		<div className="Blog container" id="blog">
			<h2 className="Blog-title">Forums</h2>
			{/* <p className="Blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

			<div className="Blog-cards">
				{
					data.map((index, element) => (
						<BlogCard
							key={data[element].id}
							image={data[element].image}
							title={data[element].title}
							text={data[element].text}
							auth={data[element].auth}
							address={data[element].address}
						/>
					))
				}
			</div>

			{/* <button className="btn-linked">Load More</button> */}
		</div>
	)
}

export default Blog;