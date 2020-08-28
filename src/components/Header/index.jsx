import React, { useState } from "react";
import {
	Menu,
	Search,
	VideoCall,
	Apps,
	Notifications,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
	const [inputSearch, setInputSearch] = useState("");
	return (
		<div className="header">
			<div className="header__left">
				<Menu />
				<Link to="/">
					<img
						className="header__logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
						alt=""
					/>
				</Link>
			</div>
			<div className="header__input">
				<input
					onChange={(event) => setInputSearch(event.target.value)}
					value={inputSearch}
					placeholder="Search"
					type="text"
				/>
				<Link to={`/search/${inputSearch}`}>
					<Search className="header__inputBtn" />
				</Link>
			</div>
			<div className="header__right">
				<VideoCall className="header__icon" />
				<Apps className="header__icon" />
				<Notifications className="header__icon" />
				<Avatar alt="Tins" src="https://i.imgur.com/V4CMPeW.png" />
			</div>
		</div>
	);
};

export default Header;
