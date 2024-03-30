/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        themeBackground: "hsl(var(--themeBackground))",
        primary: "hsl(var(--primary))",
        secondary:"hsl(var(--secondary))",
        themeForeground: "hsl(var(--themeForeground))",
       
      }
    },

  },
  plugins: [],
}

