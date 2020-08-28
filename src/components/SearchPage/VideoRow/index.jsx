import { CheckCircleOutline } from "@material-ui/icons";
import React from "react";
import "./style.css";

const VideoRow = ({
	views,
	description,
	timestamp,
	channel,
	title,
	image,
	verified,
}) => {
	return (
		<div className="videoRow">
			<img src={image} alt={channel} />
			<div className="videoRow__text">
				<h3>{title}</h3>
				<p className="videoRow__headline">
					{channel}{" "}
					{verified && <CheckCircleOutline className="videoRow__verified" />}
					{"  "}
					{views} views • {timestamp}
				</p>
				<p className="videoRow__headline-description">{description}</p>
			</div>
		</div>
	);
};

export default VideoRow;
