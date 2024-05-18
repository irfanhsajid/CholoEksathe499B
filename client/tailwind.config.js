/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        themeBackground: "hsl(var(--themeBackground))",
        primary: "hsl(var(--primary))",
        secondary:"hsl(var(--secondary))",
        themeForeground: "hsl(var(--themeForeground))",
      },
      fontFamily:{
        dancing:['Dancing Script']
      },
    },

  },
  plugins: [],
}





 


