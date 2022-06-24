import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import lodash from "lodash";

const HackerNews = () => {
	const [hits, setHits] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [url, setUrl] = useState(
		`https://hn.algolia.com/api/v1/search?query=${query}`
	);
	const hanleFetchData = useRef({});
	hanleFetchData.current = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setHits(res.data?.hits || []);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setErrorMessage(`The error happend ${error}`);
		}
	};
	// const hanleUpdateValue = lodash.debounce((e) => {
	// 	setQuery(e.target.value);
	// }, 500);
	useEffect(() => {
		hanleFetchData.current();
	}, [url]);
	return (
		<div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
			<div className="flex mb-5 gap-x-5">
				<input
					type="text"
					className="border border-gray-300 p-5 block w-full rounded-md text-black transition-all   focus:border-green-500"
					placeholder="Typing your keyword..."
					defaultValue={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					onClick={() =>
						setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
					}
					className="bg-green-500 text-white font-semibold	p-5 rounded-md flex-shrink-0"
				>
					Search
				</button>
			</div>

			{loading && (
				<div
					className="loading w-8 h-8  rounded-full animate-spin mx-auto my-10"
					style={{
						border: "4px solid rgb(34 197 94 / 1)",
						borderRight: "transparent",
						borderTop: "transparent",
					}}
				></div>
			)}
			{!loading && errorMessage && (
				<p className="text-red-400 my-5">{errorMessage}</p>
			)}
			<div className="flex flex-wrap gap-5">
				{!loading &&
					hits.length > 0 &&
					hits.map((item, index) => {
						if (!item.title || item.title.length <= 0) return null;
						return (
							<h3 key={item.title} className="p-3 bg-gray-100 rounded-sm">
								{item.title}
							</h3>
						);
					})}
			</div>
		</div>
	);
};

export default HackerNews;
