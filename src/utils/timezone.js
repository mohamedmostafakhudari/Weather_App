import moment from "moment-timezone";

function getZone({ countryCode, cityName }) {
	const timezones = moment.tz.zonesForCountry(countryCode);
	const timezone = timezones.find((tz) => tz.indexOf(cityName) !== -1);

	return timezone;
}

export function parseTimeZone({ unixTime, countryCode, cityName }) {
	return moment
		.utc(unixTime * 1000)
		.tz(getZone({ countryCode, cityName }))
		.format();
}
