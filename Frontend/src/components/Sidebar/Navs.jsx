import React from "react";
import Nav from "./Nav";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MoneyIcon from '@mui/icons-material/Money';


export default function Navs({ isOpen }) {
	return (
		<ul className="navs" style={{ listStyleType: 'none' }}>
			<Nav icon={<HomeIcon />} link="Home" isOpen={isOpen} onClick={() => window.location.href = "/main"} />
			<Nav icon={<MoneyIcon />} link="Budget" isOpen={isOpen} />
			<Nav icon={<BarChartIcon />} link="Analytics" isOpen={isOpen} />
			<Nav icon={<LibraryBooksIcon />} link="Lessons" isOpen={isOpen} />
			<Nav icon={<ShowChartIcon />} link="Investment" isOpen={isOpen} />
		</ul>

	);
}
