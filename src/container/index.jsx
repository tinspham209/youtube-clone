import React from "react";
import Sidebar from "../components/Sidebar/index";
import RecommendVideos from "../components/RecommendVideos/index";

import "./style.css";

const Container = () => {
	return (
		<div className="app">
			<div className="app__page">
				<Sidebar />
				<RecommendVideos />
			</div>
		</div>
	);
};

export default Container;
