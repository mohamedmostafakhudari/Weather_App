import React from "react";
import { useCurrentWeather } from "../contexts/CurrentWeather";
import { formatDate } from "../utils/utils";
import { getIconUrl } from "../utils/getIcon";
import { parseTimeZone } from "../utils/timezone";
const CurrentWeather = () => {
	const { weather } = useCurrentWeather();
	console.log(weather);

	if (!weather) {
		return `Loading!`;
	}
	return (
		<div className="container space-y-16 mt-20">
			<div className="container max-w-screen-lg">
				<Header
					countryCode={weather.country}
					cityName={weather.cityName}
					datetime={weather.dt}
				/>
				<Content
					temp={weather.main.temp}
					iconCode={weather.weather[0].icon}
					desc={weather.weather[0].description}
				/>
			</div>
		</div>
	);
};

const Header = ({ countryCode, cityName, datetime }) => {
	console.log(datetime);
	const tzDate = parseTimeZone({ unixTime: datetime, countryCode, cityName });
	const { weekDay, time } = formatDate(new Date(tzDate.split("+")[0]).getTime() / 1000);
	return (
		<div className="flex flex-col text-slate-500 font-medium">
			<h1 className="text-primary font-bold text-6xl">{cityName}</h1>
			<span className="text-2xl">
				{weekDay}, {time}
			</span>
		</div>
	);
};

const Content = ({ temp, iconCode, desc }) => {
	return (
		<div className="flex flex-col items-center text-slate-500">
			<div>
				<img
					src={getIconUrl(iconCode)}
					alt={desc}
					className="min-w-48"
				/>
			</div>
			<div className="flex flex-col gap-6 items-center">
				<div className="relative text-9xl font-bold text-primary">
					{Math.round(temp)}
					<span className="absolute">&deg;</span>
				</div>
				<div className="text-2xl capitalize font-medium tracking-wider">{desc}</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
