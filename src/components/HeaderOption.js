import React from "react";
import "../styles/HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && <Avatar className="headerOption__icon" src={avatar} />}
			<h4 className="headerOption__title">{title}</h4>
		</div>
	);
}

export default HeaderOption;