/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#003580",
				primary_light: "rgba(0, 53, 128, 0.2)",
				secondary: "#0071c2;",
				secondary_light: "rgba(0, 113, 194, 0.21)",
				secondary_lighter: "rgba(0, 113, 194, 0.052)",
				background_hover_dark: "#003580",

			},
		},
	},
	plugins: [],
};
