/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
			"2xl": '1760px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
			},
		},
		aspectRatio: {
			auto: "auto",
			square: "1 / 1",
			video: "16 / 9",
		},
		extend: {
			colors: {
				'primary': '#ff49db',
			},
			fontFamily: {
				'sans': ['Helvetica', 'Arial', 'sans-serif'],
			}
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms")({
			strategy: 'class',
		}),
	],
};
