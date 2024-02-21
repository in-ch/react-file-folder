/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fb9a6a",
      }
    },
  },
  plugins: [],
}

