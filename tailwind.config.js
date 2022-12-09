/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			'garamond': ['Garamond Premier Pro']
			
		},
		extend: {
			colors: {
				metal: "#76351A",
				fake: "#B7410E",
				shadow: "#323232",
				porche: "#F6F1DE",
				white: "#FFFFFF",
			},
			fontFamily: {
				rival: ["rival-sans", "sans-serif"],
				premier: ["garamond-premier-pro", "serif"],
				eb: ["eb-garamond", "serif"],
			},
		},
		screens: {
			"2xl": { max: "1535px" },
			// Usch
			"1.5xl": { max: "1345px" },
			xl: { max: "1279px" },
			"2lg": { max: "1118px" },
			lg: { max: "1023px" },
			"2md": { max: "873px" },
			md: { max: "767px" },
			sm: { max: "640px" },
		},
	},
	plugins: [
		require("tailwindcss-scoped-groups"),
		require("@tailwindcss/aspect-ratio"),
		require('@tailwindcss/typography'),
		require("@tailwindcss/forms"),
	],
};
