import React from "react";

const Button = ({ children, className }) => {
	return <button className={`px-6 py-2 rounded-sm text-lg font-bold ${className}`}>{children}</button>;
};

export default Button;
