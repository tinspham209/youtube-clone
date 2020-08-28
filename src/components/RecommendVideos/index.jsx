import React from "react";
import "./style.css";
import VideoCard from "./VideoCard";
import { uniqueId } from "../../utils";

const getVideos = () => {
	const json = {
		videos: [
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/4ebWdiyaIpU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1M436eNih8-1b6O4CHv5rcLZD5w",
				title:
					"[MV] Sondia - Maybe [이태원 클라쓰 OST Part.7 (ITAEWON CLASS OST Part.7)",
				channel: "VLENDING ",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GgeZ9DVEfR8RmuChhw9B2AeWxTUgQj22-_5rA=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "1.3M views",
				timestamp: "6 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/GLfKZlS3IbQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDj29-Tj5ZP72JvBsiU4bCGkAy7DA",
				title: `
				2 minutes straight of Jang Man Wol (IU) raising her voice in Hotel Del Luna
			`,
				channel: "p r r t y a n a",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GgcevthWgmDJe4ZXwZAHkTsynqxzg0m7nMdHw=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "3.2M views",
				timestamp: "11 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
			{
				id: uniqueId(),
				image:
					"https://i.ytimg.com/vi/Z7W-67Bp-v4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9kbRN497A3ktNuszIhk2620qavw",
				title: `
				[런닝맨]  '지쫄보와 프로 유정의 예능 성장기🐥' / 'RunningMan' Special | SBS NOW
			`,
				channel: "SBS NOW / SBS 공식 채널",
				channelImage:
					"https://yt3.ggpht.com/a-/AOh14GhT4WoX0zmBmv0GUPKN1EtdWIVV--tR2uG7Xg=s68-c-k-c0x00ffffff-no-rj-mo",
				views: "354K views",
				timestamp: "2 months ago",
			},
		],
	};
	return json.videos;
};

const RecommendVideos = () => {
	const videos = getVideos();
	return (
		<div className="recommendVideos">
			<h2>Recommend Videos</h2>
			<div className="recommendVideos__videos">
				{videos.map((video) => {
					return (
						<VideoCard
							key={video.id}
							id={video.id}
							image={video.image}
							title={video.title}
							channel={video.channel}
							channelImage={video.channelImage}
							views={video.views}
							timestamp={video.timestamp}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecommendVideos;
