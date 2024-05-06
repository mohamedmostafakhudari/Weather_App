import clearSky from "../assets/images/icons8-clear-sky-64.png";
import partlyCloudy from "../assets/images/icons8-partly-cloudy-64.png";
import cloudy from "../assets/images/icons8-cloudy-64.png";
import clouds from "../assets/images/icons8-clouds-64.png";
import rain from "../assets/images/icons8-rain-80.png";
import thunderstorm from "../assets/images/icons8-thunderstorm-64.png";
import snow from "../assets/images/icons8-snow-64.png";
import mist from "../assets/images/icons8-mist-96.png";

const iconCodes = {
	"01d": clearSky,
	"02d": partlyCloudy,
	"03d": cloudy,
	"04d": clouds,
	"09d": rain,
	"10d": rain,
	"11d": thunderstorm,
	"13d": snow,
	"50d": mist,
	"01n": clearSky,
	"02n": partlyCloudy,
	"03n": cloudy,
	"04n": clouds,
	"09n": rain,
	"10n": rain,
	"11n": thunderstorm,
	"13n": snow,
	"50n": mist,
};

export function getIconUrl(code) {
	return iconCodes[code];
}
