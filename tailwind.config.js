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
        contrast: "#264653",
        lightcontrast: "#2A9D8F",
        highlight: "#E9C46A",
        lighthighlight: "#F4A261",
        dark: "#E76F51",
      },
      textColor: {
        contrast: "#264653",
        lightcontrast: "#2A9D8F",
        highlight: "#E9C46A",
        lighthighlight: "#F4A261",
        dark: "#E76F51",
      },
      fontFamily: {
        heading: "'Righteous', cursive",
        content: "'Arvo', sans-serif",
      },
    },
  },
  plugins: [],
};
