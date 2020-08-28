import React from "react";
import { TuneOutlined } from "@material-ui/icons";

import "./style.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = ({ channels, videos }) => {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlined />
				<h2>Filter</h2>
			</div>
			<hr />

			{channels.map((channel) => {
				return (
					<ChannelRow
						key={channel.id}
						id={channel.id}
						image={channel.image}
						channel={channel.channel}
						verified={channel.verified}
						subs={channel.subs}
						noOfVideos={channel.noOfVideos}
						description={channel.description}
					/>
				);
			})}
			<hr />
			{videos.map((video) => {
				return (
					<VideoRow
						key={video.id}
						id={video.id}
						views={video.views}
						description={video.description}
						timestamp={video.timestamp}
						channel={video.channel}
						verified={video.verified}
						title={video.title}
						image={video.image}
					/>
				);
			})}
		</div>
	);
};

export default SearchPage;
