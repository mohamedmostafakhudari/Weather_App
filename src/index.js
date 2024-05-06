import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import App from "./App.jsx";

import { CurrentWeatherProvider } from "./contexts/CurrentWeather.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
	<CurrentWeatherProvider>
		<App />
	</CurrentWeatherProvider>
);
