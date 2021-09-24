module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        "inner-lg": "inset 0 0 4px 4px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "midvale-red": "#8C203C",
        "midvale-blue": "#13294B",
      },
      backgroundImage: {
        mountains: "url(/src/assets/images/mountains.jpg)", //1920x1271
        paper: "url(/src/assets/images/paper.jpg)", //1920x1440
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
