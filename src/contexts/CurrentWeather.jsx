import { createContext, useContext, useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/api";

const initialLocation = "London";

const Context = createContext();

function useCurrentWeatherProvider() {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		fetchCurrentWeather(initialLocation).then((data) => {
			setWeather(data);
		});
		return () => {};
	}, []);
	function handleSearchLocation(location) {
		fetchCurrentWeather(location).then((data) => {
			setWeather(data);
		});
	}

	return {
		weather,
		handleSearchLocation,
	};
}
export function CurrentWeatherProvider({ children }) {
	const { weather, ...rest } = useCurrentWeatherProvider();

	return <Context.Provider value={{ weather, ...rest }}>{children}</Context.Provider>;
}

export function useCurrentWeather() {
	return useContext(Context);
}
