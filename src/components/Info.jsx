import React from "react";
import { useCurrentWeather } from "../contexts/CurrentWeather";

const Info = () => {
	const { weather } = useCurrentWeather();

	if (!weather) {
		return;
	}
	const highlights = {
		pressure: {
			value: weather.main.pressure,
			unit: "mb",
		},
		visibility: {
			value: weather.visibility / 1000,
			unit: "Km",
		},
		humidity: {
			value: weather.main.humidity,
			unit: "%",
		},
	};

	return (
		<section
			id="info"
			className="bg-primary text-slate-300 rounded-xl py-10 max-w-screen-lg mt-12 lg:mx-auto"
		>
			<div className="container px-10">
				<TodayHighlights highlights={highlights} />
			</div>
		</section>
	);
};

const TodayHighlights = ({ highlights }) => {
	return (
		<article className="">
			<h2 className="text-3xl font-bold text-slate-400">Today</h2>
			<div className="flex items-center justify-between py-8">
				{Object.entries(highlights).map(([key, { value, unit }]) => {
					return (
						<div
							key={key}
							className="flex flex-col items-center gap-2 font-bold"
						>
							<h3 className="capitalize text-slate-400 text-lg">{key}</h3>
							<p className="text-xl">
								{value}
								{unit}
							</p>
						</div>
					);
				})}
			</div>
		</article>
	);
};
export default Info;
