import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        integral: ["Integral CF", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "shopco-black-60": "#00000099",
        "shopco-black-40": "#00000066",
        "shopco-black-10": "#0000001A",
        "shopco-red-100": "#FF3333",
        "shopco-red-10": "#FF33331A",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
