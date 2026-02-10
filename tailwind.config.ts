import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vettr: {
          navy: "#0D1B2A",
          dark: "#1B2838",
          card: "#1E3348",
          accent: "#00E676",
          green: "#00E676",
          red: "#FF5252",
          yellow: "#FFC107",
          blue: "#448AFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
