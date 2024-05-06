import React, { useRef } from "react";
import Button from "./ui/Button";

import { useCurrentWeather } from "../contexts/CurrentWeather";

const SearchForm = () => {
	const { handleSearchLocation } = useCurrentWeather();

	const searchRef = useRef();
	function handleSubmit(e) {
		e.preventDefault();
		if (!searchRef.current) return;
		handleSearchLocation(searchRef.current.value);
		searchRef.current.value = "";
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="relative py-12 bg-primary text-white"
		>
			<div className="container flex flex-col gap-4 md:flex-row md:items-center">
				<label
					htmlFor="searchLocation"
					className="font-bold text-2xl"
				>
					What is the weather of:
				</label>
				<div className="flex md:flex-1">
					<input
						type="search"
						ref={searchRef}
						id="searchLocation"
						name="searchLocation"
						placeholder="Enter a location"
						className="border border-slate-400 rounded-sm flex-1 px-2 py-0.5 text-slate-800"
					/>
					<Button className={`bg-orange-600 text-white`}>Search</Button>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;
