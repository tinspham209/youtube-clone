import React from "react";
import SidebarRow from "./SidebarRow";
import "./style.css";
import {
	Home,
	Whatshot,
	Subscriptions,
	VideoLibrary,
	History,
	OndemandVideo,
	WatchLater,
	ThumbUpAltOutlined,
	ExpandMoreOutlined,
} from "@material-ui/icons";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<SidebarRow selected Icon={Home} title="Home" />
			<SidebarRow Icon={Whatshot} title="Trending" />
			<SidebarRow Icon={Subscriptions} title="Subscription" />
			<hr />
			<SidebarRow Icon={VideoLibrary} title="Library" />
			<SidebarRow Icon={History} title="History" />
			<SidebarRow Icon={OndemandVideo} title="Your videos" />
			<SidebarRow Icon={WatchLater} title="Watch Later" />
			<SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
			<hr />
		</div>
	);
};

export default Sidebar;
