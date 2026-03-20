import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#F4EEE6",
        card: "#F5F1EB",
        "card-inner": "#EDEBE6",
        paywall: "#DDE3D5",
        dark: "#2A2725",
        sage: { DEFAULT: "#7B8F6B", dark: "#5A7050", light: "#EDF1E7" },
        border: { light: "#E8DFD4", faint: "#DDD4C8" },
        txt: {
          primary: "#3D3530",
          secondary: "#6B6560",
          muted: "#8B7E72",
          faint: "#B8A99A",
        },
      },
      fontFamily: {
        "serif-display": ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'Source Serif 4'", "Georgia", "serif"],
        ui: ["'Nunito'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        guide: "660px",
      },
    },
  },
  plugins: [],
};

export default config;
