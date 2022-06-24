import React, { useState } from "react";

const DoubleCounter = () => {
	const [count, setCount] = useState(0);
	const handleDoubleCounter = () => {
		setCount(count + 1);
		setCount(count + 1);
	};
	return (
		<div>
			<button onClick={handleDoubleCounter}>Double Counter</button>
			<span className="count">{count}</span>
		</div>
	);
};

export default DoubleCounter;
