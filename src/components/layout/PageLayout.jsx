import React from "react";
import SearchForm from "../SearchForm";

const PageLayout = ({ children }) => {
	return (
		<>
			<header>
				<nav>
					<SearchForm />
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};

export default PageLayout;
