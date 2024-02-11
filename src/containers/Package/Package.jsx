import React from 'react';
import PackageCard from "../../components/PackageCard/PackageCard";

import "./Package.scss";

const Package = () => {

	const packageCardData = [
		{
			id: 0,
			title: "Primary",
			items: [
				"Book of the month",
				"Access to one comment forum and discussion group",
				"Mug for bookmarks and drinks",
				"Beverages x 1 – a can of coffee or tea"
			],
			cost: "$10",
		},

		{
			id: 1,
			title: "Medium",
			items: [
				"Book of the Month and one Personal Choice Book",
				"Access to two forums and discussion groups",
				"Bookmark and book bag",
				"Drinks x 2 – coffee, hot chocolate or tea box"
			],
			cost: "$25",
		},

		{
			id: 2,
			title: "Advanced",
			items: [
				"Book of the Month and three personal choice books",
				"Open access to all forums and discussion groups",
				"Live band entertainment and magician",
				"Drinks x 3 – a box of coffee, hot chocolate or tea"
			],
			cost: "$40",
		}
	]

	return (
		<div className="Package container" id="subscribes">
			<h3 className="Blog-title">Packages</h3>
			
			<div className="Package-packages">
				{
					packageCardData.map((index, el) => (
						<PackageCard
							key={packageCardData[el].id}
							title={packageCardData[el].title}
							items={packageCardData[el].items}
							cost={packageCardData[el].cost}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Package;