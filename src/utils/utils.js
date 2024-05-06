export function formatDate(unixTime) {
	const DOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const date = new Date(unixTime * 1000);

	let meridiem, hours;
	if (date.getHours() === 12) {
		meridiem = "PM";
		hours = date.getHours();
	} else if (date.getHours() > 12) {
		meridiem = "PM";
		hours = date.getHours() - 12;
	} else {
		meridiem = "AM";
		hours = date.getHours();
	}

	return {
		weekDay: DOW[date.getDay()],
		time: `${hours} ${meridiem}`,
	};
}

// export function extractDate(dateString) {
// 	const [date, timeInfo] = dateString.split("T");
// 	const [time, tzOffset] = timeInfo.split("+");
// 	const regex = /(\d{2}):(\d{2}):(\d{2})/;
// 	const matches = regex.exec(time);
// 	const hours = matches[1];
// 	const minutes = matches[2];
// 	const seconds = matches[3];
// }
// extractDate("2024-05-06T10:41:24+01:00");
// export function isToday(unixTime) {
// 	console.log(new Date(unixTime * 1000).getUTCHours());
// 	if (new Date(unixTime * 1000).getDate() === new Date(Date.now()).getDate()) {
// 		return true;
// 	}
// 	return false;
// }
