import type { Config } from "tailwindcss";
import { colors } from "./styles/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      },
    },
  },
  plugins: [],
} satisfies Config;
