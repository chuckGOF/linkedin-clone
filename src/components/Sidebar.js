import React from "react";
import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="" alt="" />
				<Avatar className="sidebar__avatar" src="" />
				<h2>Fadeel Gbaiye</h2>
				<h4>gbaiyefadeel@gmail.com</h4>
			</div>

			<div className="siderbar__stats">
				<div className="sidebar_stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,543</p>
					<div className="sidebar__stat">
						<p>Views on post</p>
						<p className="sidebar__statNumber">2,448</p>
					</div>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
			</div>
		</div>
	);
}

export default Sidebar;
