/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1242px",
      },
      colors: {
        warning: "#FF782C",
        "hover-warning": "#D75C16",
        success: "#D6F379",
        "hover-success": "#A8CE2E",
        dark: "#142038",
        gray: "#8D8D8D",
      },
      boxShadow: {
        "button-warning": "0px 10px 30px rgba(255, 120, 44, 0.3)",
        "button-success": "0px 10px 30px rgba(214, 243, 121, 0.3)",
      },
    },
  },
  plugins: [],
};
