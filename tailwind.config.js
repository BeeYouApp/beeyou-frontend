/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        lgtb: "url('https://as1.ftcdn.net/v2/jpg/03/82/84/80/1000_F_382848035_DJrwRnkhrzyGYQQC1ybzJUMoxiGuKexO.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "blue-gray": {
          900: "#263238",
          800: "#37474F",
          700: "#455A64",
          600: "#546E7A",
          500: "#607D8B",
          400: "#78909C",
          300: "#90A4AE",
          200: "#B0BEC5",
          100: "#CFD8DC",
          50: "#ECEFF1",
        },
        purple: {
          700: "#FF68FF",
          800: "#CA2CE4",
          900: "#9500B1",
        },
        yellow: {
          700: "#EFD16B",
        },
        green: {
          900: "#71D03C",
        },
        madang: {
          50: "#B9FF92",
        },
        "red-gradient": "#FF4C35",
        "orange-gradient": "#FE9B05",
        "yellow-gradient": "#FBC600",
        "green-gradient": "#72C63D",
        "purple-gradient": "#665DFB",
        "pink-gradient": "#C92CE5",
      },
    },
  },
  plugins: [],
};
