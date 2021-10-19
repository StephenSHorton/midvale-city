module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		extend: {
			boxShadow: {
				bold: "0 0 4px 4px rgba(0, 0, 0, 0.2)",
				"inner-lg": "inset 0 0 4px 4px rgba(0, 0, 0, 0.2)",
			},
			colors: {
				"midvale-red": "#8C203C",
				"midvale-blue": "#13294B",
				"midvale-white": "#FBFCFE",
			},
			backgroundImage: {
				mountains: "url(/src/assets/images/mountains.jpg)", //1920x1271
				paper: "url(/src/assets/images/paper.jpg)", //1920x1440
				strawberries: "url(/src/assets/images/strawberries.jpg)", //1920x706
				"box-papers": "url(/src/assets/images/box_papers.jpg)", //1920x1221
			},
			scale: {
				65: ".65",
				80: ".80",
				85: ".85",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
