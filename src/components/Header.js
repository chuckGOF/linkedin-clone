import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://abia.net.au/wp-content/uploads/2021/05/LI.png"
					alt=""
				/>
				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>

			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationIcon} title="Notifications" />
				<HeaderOption
					avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"
					title="me"
				/>
			</div>
		</div>
	);
}

export default Header;