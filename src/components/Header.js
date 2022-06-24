import React, { useEffect } from "react";

const Header = () => {
	useEffect(() => {
		const hanleFixedHeader = () => {
			const header = document.querySelector("#header");
			if (window.scrollY > 100) header.classList.add("fixed");
			else header.classList.remove("fixed");
		};
		window.addEventListener("scroll", hanleFixedHeader);
		return () => {
			window.removeEventListener("scroll", hanleFixedHeader);
		};
	}, []);
	return <div id="header" className="p-5 bg-black w-full "></div>;
};

export default Header;
