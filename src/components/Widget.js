import React from "react";
import "../styles/Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
	const newsArticle = (heading, subtitle) => (
		<div className="widget__article">
			<div className="widget__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widget__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widget">
			<div className="widget__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Coronavirus: Ireland", "Top news - 425 readers")}
			{newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
			{newsArticle("Bitcoin Breaks $35k", "Crypto - 8000 readers")}
			{newsArticle("Power of Redux", "Code - 125 readers")}
		</div>
	);
}

export default Widget;
