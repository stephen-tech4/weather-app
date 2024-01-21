/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "bg-light": "url('/public/bg-light.png')",
        "bg-dark": "url('/public/bg-dark.png')",
        "bg-cloud": "url('/public/cloud.png')",
        "bg-sun": "url('/public/sun.png')",
      }),
    },
  },
  plugins: [],
};
