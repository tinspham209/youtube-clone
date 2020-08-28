import React from "react";
import SearchPage from "../../components/SearchPage";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import { uniqueId } from "../../utils";

const getChannelRow = () => {
	const json = {
		channels: [
			{
				id: uniqueId(),
				image:
					"//yt3.ggpht.com/a/AATXAJw5xoYWYwiv8dOD0bHtOWs6WkSda232iG45e1yt=s176-c-k-c0x00ffffff-no-rj-mo",
				channel: "MixiGaming",
				verified: true,
				subs: "3.59M",
				noOfVideos: 382,
				description:
					"Mình là Độ - - Thỉnh thoảng rảnh chó ko có gì làm mình hay edit clip vui, tất cả đều do team mình chơi tự nhiên, trong clip có khá ...",
			},
		],
	};
	return json.channels;
};

const getVideoRow = () => {
	const json = {
		videos: [
			{
				id: uniqueId(),
				views: "558K",
				description:
					"(Ma Sói) Gạ kèo phong cách Hải Phòng và sự đáp trả của Lươn Cao Bằng. ▻Lịch Live: * 22:15-23:59 hàng ngày trên Youtube.",
				timestamp: "1 day ago",
				channel: "MixiGaming",
				verified: true,
				title:
					"(Ma Sói) Gạ kèo phong cách Hải Phòng và sự đáp trả của Lươn Cao Bằng.",
				image:
					"https://i.ytimg.com/vi/_DBVUzt8q6w/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAemlbI5oz8Ij33iPuT-CEgDi3Nww",
			},
			{
				id: uniqueId(),
				views: "1.1M",
				description:
					"(Talkshow) Cuộc đột nhập nhà mới của đám trẻ con hàng xóm và cái kết cười ra nước mắt. ▻Lịch Live: * 22:15-23:59 hàng ngày ...",
				timestamp: "1 day ago",
				channel: "MixiGaming",
				verified: true,
				title:
					"(Talkshow) Cuộc đột nhập nhà mới của đám trẻ con hàng xóm và cái kết cười ra nước mắt.",
				image:
					"https://i.ytimg.com/vi/VRwggEL0lDc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDb41sswsJv5qvzor1khi1_kUSw5g",
			},
			{
				id: uniqueId(),
				views: "1.1M",
				description:
					"Restream hôm qua. ▻Lịch Live: * 22:15-23:59 hàng ngày trên Youtube. * 0:01-03:00 hàng ngày trên: https://www.nimo.tv/",
				timestamp: "1 day ago",
				channel: "MixiGaming",
				verified: true,
				title: "Full Livestream 26/8/2020.",
				image:
					"https://i.ytimg.com/vi/Z7Ls55oZ0IQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCvnx1AHJcc7C97dMT90X78NrynZQ",
			},
		],
	};
	return json.videos;
};

const SearchPageContainer = () => {
	const channels = getChannelRow();
	const videos = getVideoRow();
	return (
		<div className="app_searchPage">
			<Sidebar />
			<SearchPage channels={channels} videos={videos} />
		</div>
	);
};

export default SearchPageContainer;
