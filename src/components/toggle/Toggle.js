import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
	const [on, setOn] = useState(false);
	const handleToggle = () => {
		setOn((on) => !on);
	};
	return (
		<div className={`toggle ${on ? "active" : ""} `} onClick={handleToggle}>
			<div className="spinner"></div>
		</div>
	);
};

export default Toggle;
