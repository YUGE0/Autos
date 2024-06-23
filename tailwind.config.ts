import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'Fcolor' : '#2A4064',
        'FFcolor':'#4569a5',
        'FScolor' : '#4b73b4',
        'Scolor': '#93abd2',
        'Tcolor' : '#0f1724',
      },
    },
  },
  plugins: [],
};
export default config;
