import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getIconUrl } from "./utils/getIcon";
import SearchForm from "./components/SearchForm";
import PageLayout from "./components/layout/PageLayout";
import CurrentWeather from "./components/CurrentWeather";
import Info from "./components/Info";
export default function App() {
	console.log(getIconUrl("10d"));
	return (
		<>
			<PageLayout>
				<CurrentWeather />
				<Info />
			</PageLayout>
		</>
	);
}
