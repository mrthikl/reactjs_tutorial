import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
	return (
		<div className="youtube-list">
			{props.children}
			{YoutubeData.map((item, index) => (
				<YoutubeItem
					key={item.id}
					image={item.image}
					avatar={item.avatar}
					title={item.title}
					author={item.author}
				/>
			))}
		</div>
	);
};

export default YoutubeList;
