import type { Config } from "tailwindcss";
import { colors } from "./styles/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      },
      boxShadow: {
        "homogeneous": "1px 1px 20px -8px var(--shadowColor)",
        "homogeneous-lg": "1px 1px 20px -6px var(--shadowColor)",
      }
    },
  },
  plugins: [],
} satisfies Config;
