import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mbsa: {
          navy: "#07345B",
          blue: "#3987B8",
          yellow: "#F5B914",
          paper: "#F6F8FA",
          ink: "#10283E"
        }
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
