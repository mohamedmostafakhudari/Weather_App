const API_KEY = "b8d32c6ca46998203b9e0f307c0c746d";

const currentWeatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const geocodingEndpoint = "https://api.openweathermap.org/geo/1.0/direct";

export async function fetchCurrentWeather(cityName) {
	try {
		const geocoding = await fetchGeocoding(cityName);
		const { lat, lon, country, name } = geocoding[0];

		const response = await fetch(`${currentWeatherEndpoint}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
		if (!response.ok) {
			throw new Error(response.status);
		}
		const data = await response.json();

		return {
			...data,
			country,
			cityName: name,
		};
	} catch (err) {
		console.log(err);
	}
}

export async function fetchGeocoding(cityName) {
	try {
		const response = await fetch(`${geocodingEndpoint}?q=${cityName}&limit=1&appid=${API_KEY}`);
		if (!response.ok) {
			throw new Error(response.status);
		}
		const data = await response.json();
		console.log(data);

		return data;
	} catch (err) {
		console.log(err);
	}
}
