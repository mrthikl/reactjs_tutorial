import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
	hits: [],
	query: "",
	loading: true,
	errorMessage: "",
	url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewsReducer = (state, action) => {
	switch (action.type) {
		case "SET_DATA": {
			return { ...state, hits: action.payload };
		}
		case "SET_LOADING": {
			return { ...state, loading: action.payload };
		}
		case "SET_ERROR": {
			return { ...state, errorMessage: action.payload };
		}
		case "SET_QUERY": {
			return { ...state, query: action.payload };
		}
		case "SET_URL": {
			return { ...state, url: action.payload };
		}
		default:
			break;
	}
};

const HackerNewsWidthReducer = () => {
	const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
	const hanleFetchData = useRef({});

	hanleFetchData.current = async () => {
		dispatch({
			type: "SET_LOADING",
			payload: true,
		});
		try {
			const res = await axios.get(state.url);
			dispatch({
				type: "SET_DATA",
				payload: res.data?.hits || [],
			});
			dispatch({
				type: "SET_LOADING",
				payload: false,
			});
		} catch (error) {
			dispatch({
				type: "SET_ERROR",
				payload: `The error happend ${error}`,
			});
		}
	};

	useEffect(() => {
		hanleFetchData.current();
	}, [state.url]);
	return (
		<div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
			<div className="flex mb-5 gap-x-5">
				<input
					type="text"
					className="border border-gray-300 p-5 block w-full rounded-md text-black transition-all   focus:border-green-500"
					placeholder="Typing your keyword..."
					defaultValue={state.query}
					onChange={(e) =>
						dispatch({
							type: "SET_QUERY",
							payload: e.target.value,
						})
					}
				/>
				<button
					onClick={() =>
						dispatch({
							type: "SET_URL",
							payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
						})
					}
					disabled={state.loading}
					className="bg-green-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
					style={{ opacity: state.loading ? "0.25" : "1" }}
				>
					Search
				</button>
			</div>

			{state.loading && (
				<div
					className="loading w-8 h-8  rounded-full animate-spin mx-auto my-10"
					style={{
						border: "4px solid rgb(34 197 94 / 1)",
						borderRight: "transparent",
						borderTop: "transparent",
					}}
				></div>
			)}
			{!state.loading && state.errorMessage && (
				<p className="text-red-400 my-5">{state.errorMessage}</p>
			)}
			<div className="flex flex-wrap gap-5">
				{!state.loading &&
					state.hits.length > 0 &&
					state.hits.map((item, index) => {
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

export default HackerNewsWidthReducer;
