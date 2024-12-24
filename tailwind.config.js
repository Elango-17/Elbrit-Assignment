/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
    },
  },
  plugins: [],
};
