import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '0px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1512px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "c-blue-900": "#001853",
        "c-blue-500": "#2D509E",
        "c-blue-300": "#3D93FF",
        "c-blue-200": "#709DDA",
      },
      boxShadow: {
        "3xl": "4px 4px 22px 0px",
        "4xl": "0px 4px 35px 0px #00000063",
      },
      fontSize: {
        xl: [
          "20px",
          {
            lineHeight: "27.1px",
            letterSpacing: "0.4px",
            fontWeight: "600",
          },
        ],
        "c-tx-1": [
          "16px",
          {
            lineHeight: "21.68px",
            letterSpacing: "0.32px",
            fontWeight: "400",
          },
        ],
        "c-tx-b-1": [
          "16px",
          {
            lineHeight: "21.68px",
            letterSpacing: "0.32px",
            fontWeight: "700",
          },
        ],
        "c-tx-2": [
          "20px",
          {
            lineHeight: "27.1px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        "c-tx-3": [
          "18px",
          {
            lineHeight: "25.65px",
            letterSpacing: "0.4px",
            fontWeight: "300",
          },
        ],
        "c-tx-4": [
          "14px",
          {
            lineHeight: "17.43px",
            fontWeight: "400",
          }
        ],
        "c-hd-xl": [
          "64px",
          {
            lineHeight: "77.45px",
            letterSpacing: "0.8px",
            fontWeight: "800",
          },
        ],
        "c-hd-1": [
          "36px", 
          {
            lineHeight: "44.83px",
            letterSpacing: "0.8px",
            fontWeight: "600",
          }
        ],
        "c-hd-2": [
          "22px", {
            lineHeight: "27.4px",
            fontWeight: "600",
          }
        ],
        "c-hd-3": [
          "20px", {
            lineHeight: "24.9px",
            fontWeight: "700",
          }
        ],
      },
    },
  },
  plugins: [],
};
export default config;
