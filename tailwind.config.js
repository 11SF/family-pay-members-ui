/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "emerald",
      "cmyk",
      {
        mytheme: {
          primary: "#edbb95",

          secondary: "#e07511",

          accent: "#59f9e9",

          neutral: "#191F24",

          "base-100": "#ECF0F3",

          info: "#47C0F0",

          success: "#6CE098",

          warning: "#FAB05C",

          error: "#F85A49",
        },
      },
    ],
  },
};
