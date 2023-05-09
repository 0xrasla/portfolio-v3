// color pallete : https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundcolor: "#0B132B",
        lightcolor: "#1C2541",
        primarycolor: "#3A506B",
        contrastcolor: "#5BC0BE",
        brightprimary: "#1a3d52",
      },
      textColor: {
        backgroundcolor: "#0B132B",
        lightcolor: "#1C2541",
        primarycolor: "#3A506B",
        contrastcolor: "#5BC0BE",
      },
      borderColor: {
        backgroundcolor: "#0B132B",
        lightcolor: "#1C2541",
        primarycolor: "#3A506B",
        contrastcolor: "#5BC0BE",
      },
      fontFamily: {
        heading: "'Righteous', cursive",
        content: "'Nova Oval', sans-serif",
      },
    },
  },
  plugins: [],
};
