module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        "inner-lg": "inset 0 0 4px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
