import React from "react";

const CardTailWind = (props) => {
	const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
		props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
	} `;
	return (
		<div className="relative">
			<div className="w-full rouned-lg h-[200px]">
				<img
					src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
					alt=""
					className="block w-full h-full object-cover rounded-lg"
				/>
			</div>
			<div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
				<div className="flex justify-between items-center md-8">
					<div className="flex items-center gap-3">
						<img
							className="w-8 h-8 rounded-full object-cover flex-shink-0"
							src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=1200x900&vertical=top"
							alt=""
						/>
						<span className="font-light text-base text-[#333]">@luanthi</span>
					</div>
					<div className="flex items-center gap-x-3">
						<span>256</span>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="text-lg font-medium">Comic Perpestive</div>
					<span className={amountClasses}>12,000 PSL</span>
				</div>
			</div>
		</div>
	);
};

export default CardTailWind;
